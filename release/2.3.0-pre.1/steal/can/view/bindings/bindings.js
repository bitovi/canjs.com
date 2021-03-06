/*!
 * CanJS - 2.3.0-pre.1
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Fri, 29 May 2015 22:07:38 GMT
 * Licensed MIT
 */

/*can@2.3.0-pre.1#view/bindings/bindings*/
steal('can/util', 'can/view/stache/mustache_core.js', 'can/view/callbacks', 'can/control', 'can/view/scope', function (can, mustacheCore) {
    var isContentEditable = function () {
            var values = {
                    '': true,
                    'true': true,
                    'false': false
                };
            var editable = function (el) {
                if (!el || !el.getAttribute) {
                    return;
                }
                var attr = el.getAttribute('contenteditable');
                return values[attr];
            };
            return function (el) {
                var val = editable(el);
                if (typeof val === 'boolean') {
                    return val;
                } else {
                    return !!editable(el.parentNode);
                }
            };
        }(), removeBrackets = function (value, open, close) {
            open = open || '{';
            close = close || '}';
            if (value[0] === open && value[value.length - 1] === close) {
                return value.substr(1, value.length - 2);
            }
            return value;
        };
    can.view.attr('can-value', function (el, data) {
        var attr = can.trim(removeBrackets(el.getAttribute('can-value'))), value = data.scope.computeData(attr, { args: [] }).compute, trueValue, falseValue;
        if (el.nodeName.toLowerCase() === 'input') {
            if (el.type === 'checkbox') {
                if (can.attr.has(el, 'can-true-value')) {
                    trueValue = el.getAttribute('can-true-value');
                } else {
                    trueValue = true;
                }
                if (can.attr.has(el, 'can-false-value')) {
                    falseValue = el.getAttribute('can-false-value');
                } else {
                    falseValue = false;
                }
            }
            if (el.type === 'checkbox' || el.type === 'radio') {
                new Checked(el, {
                    value: value,
                    trueValue: trueValue,
                    falseValue: falseValue
                });
                return;
            }
        }
        if (el.nodeName.toLowerCase() === 'select' && el.multiple) {
            new Multiselect(el, { value: value });
            return;
        }
        if (isContentEditable(el)) {
            new Content(el, { value: value });
            return;
        }
        new Value(el, { value: value });
    });
    var special = {
            enter: function (data, el, original) {
                return {
                    event: 'keyup',
                    handler: function (ev) {
                        if (ev.keyCode === 13) {
                            return original.call(this, ev);
                        }
                    }
                };
            }
        };
    var handleEvent = function (el, data) {
        var attributeName = data.attributeName, event = attributeName.indexOf('can-') === 0 ? attributeName.substr('can-'.length) : removeBrackets(attributeName, '(', ')'), handler = function (ev) {
                var attrVal = el.getAttribute(attributeName);
                if (!attrVal) {
                    return;
                }
                var attrInfo = mustacheCore.expressionData(removeBrackets(attrVal));
                var scopeData = data.scope.read(attrInfo.name.get, {
                        returnObserveMethods: true,
                        isArgument: true,
                        executeAnonymousFunctions: true
                    });
                if (!scopeData.value) {
                    can.dev.warn('can/view/bindings: ' + attributeName + ' couldn\'t find method named ' + attrInfo.name.get, {
                        element: el,
                        scope: data.scope
                    });
                    return null;
                }
                var args = [];
                var $el = can.$(this);
                var viewModel = can.viewModel($el[0]);
                var localScope = data.scope.add({
                        '@element': $el,
                        '@event': ev,
                        '@viewModel': viewModel,
                        '@scope': data.scope,
                        '@context': data.scope._context
                    });
                if (!can.isEmptyObject(attrInfo.hash)) {
                    var hash = {};
                    can.each(attrInfo.hash, function (val, key) {
                        if (val && val.hasOwnProperty('get')) {
                            var s = !val.get.indexOf('@') ? localScope : data.scope;
                            hash[key] = s.read(val.get, {}).value;
                        } else {
                            hash[key] = val;
                        }
                    });
                    args.unshift(hash);
                }
                if (attrInfo.args.length) {
                    var arg;
                    for (var i = attrInfo.args.length - 1; i >= 0; i--) {
                        arg = attrInfo.args[i];
                        if (arg && arg.hasOwnProperty('get')) {
                            var s = !arg.get.indexOf('@') ? localScope : data.scope;
                            args.unshift(s.read(arg.get, {}).value);
                        } else {
                            args.unshift(arg);
                        }
                    }
                }
                if (!args.length) {
                    args = [
                        data.scope._context,
                        $el
                    ].concat(can.makeArray(arguments));
                }
                return scopeData.value.apply(scopeData.parent, args);
            };
        if (special[event]) {
            var specialData = special[event](data, el, handler);
            handler = specialData.handler;
            event = specialData.event;
        }
        can.bind.call(el, event, handler);
    };
    can.view.attr(/can-[\w\.]+/, handleEvent);
    can.view.attr(/\([\w\.]+\)/, handleEvent);
    var Value = can.Control.extend({
            init: function () {
                if (this.element[0].nodeName.toUpperCase() === 'SELECT') {
                    setTimeout(can.proxy(this.set, this), 1);
                } else {
                    this.set();
                }
            },
            '{value} change': 'set',
            set: function () {
                if (!this.element) {
                    return;
                }
                var val = this.options.value();
                this.element[0].value = val == null ? '' : val;
            },
            'change': function () {
                if (!this.element) {
                    return;
                }
                var el = this.element[0];
                this.options.value(el.value);
                var newVal = this.options.value();
                if (el.value !== newVal) {
                    el.value = newVal;
                }
            }
        }), Checked = can.Control.extend({
            init: function () {
                this.isCheckbox = this.element[0].type.toLowerCase() === 'checkbox';
                this.check();
            },
            '{value} change': 'check',
            check: function () {
                if (this.isCheckbox) {
                    var value = this.options.value(), trueValue = this.options.trueValue || true;
                    this.element[0].checked = value == trueValue;
                } else {
                    var setOrRemove = this.options.value() == this.element[0].value ? 'set' : 'remove';
                    can.attr[setOrRemove](this.element[0], 'checked', true);
                }
            },
            'change': function () {
                if (this.isCheckbox) {
                    this.options.value(this.element[0].checked ? this.options.trueValue : this.options.falseValue);
                } else {
                    if (this.element[0].checked) {
                        this.options.value(this.element[0].value);
                    }
                }
            }
        }), Multiselect = Value.extend({
            init: function () {
                this.delimiter = ';';
                setTimeout(can.proxy(this.set, this), 1);
            },
            set: function () {
                var newVal = this.options.value();
                if (typeof newVal === 'string') {
                    newVal = newVal.split(this.delimiter);
                    this.isString = true;
                } else if (newVal) {
                    newVal = can.makeArray(newVal);
                }
                var isSelected = {};
                can.each(newVal, function (val) {
                    isSelected[val] = true;
                });
                can.each(this.element[0].childNodes, function (option) {
                    if (option.value) {
                        option.selected = !!isSelected[option.value];
                    }
                });
            },
            get: function () {
                var values = [], children = this.element[0].childNodes;
                can.each(children, function (child) {
                    if (child.selected && child.value) {
                        values.push(child.value);
                    }
                });
                return values;
            },
            'change': function () {
                var value = this.get(), currentValue = this.options.value();
                if (this.isString || typeof currentValue === 'string') {
                    this.isString = true;
                    this.options.value(value.join(this.delimiter));
                } else if (currentValue instanceof can.List) {
                    currentValue.attr(value, true);
                } else {
                    this.options.value(value);
                }
            }
        }), Content = can.Control.extend({
            init: function () {
                this.set();
                this.on('blur', 'setValue');
            },
            '{value} change': 'set',
            set: function () {
                var val = this.options.value();
                this.element[0].innerHTML = typeof val === 'undefined' ? '' : val;
            },
            setValue: function () {
                this.options.value(this.element[0].innerHTML);
            }
        });
    can.view.attr(/\[[\w\.\-_]+\]/, function (el, attrData) {
        var prop = removeBrackets(el.getAttribute(attrData.attributeName));
        var name = can.camelize(removeBrackets(attrData.attributeName, '[', ']'));
        var viewModel = can.viewModel(el);
        var scope = new can.view.Scope(viewModel);
        var computeData = scope.computeData(prop, { args: [] }), compute = computeData.compute;
        var handler = function (ev, newVal) {
            attrData.scope.attr(name, newVal);
        };
        compute.bind('change', handler);
        attrData.scope.attr(name, compute());
        can.one.call(el, 'removed', function () {
            compute.unbind('change', handler);
        });
    });
    can.view.attr(/#[\w\.\-_]+/, function (el, attrData) {
        var prop = removeBrackets(el.getAttribute(attrData.attributeName)) || '.';
        var name = can.camelize(attrData.attributeName.substr(1).toLowerCase());
        var viewModel = can.viewModel(el);
        var scope = new can.view.Scope(viewModel);
        var refs = attrData.scope.getRefs();
        var computeData = scope.computeData(prop, {
                args: [],
                isArgument: true
            }), compute = computeData.compute;
        var handler = function (ev, newVal) {
            refs.attr(name, newVal);
        };
        compute.bind('change', handler);
        var initialValue = compute();
        refs.attr(name, initialValue === undefined ? null : initialValue);
        can.one.call(el, 'removed', function () {
            compute.unbind('change', handler);
        });
    });
});