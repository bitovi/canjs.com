/*!
 * CanJS - 2.2.3-pre.0
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Thu, 02 Apr 2015 20:20:11 GMT
 * Licensed MIT
 */

/*can@2.2.3-pre.0#component/component*/
define([
    'can/util/library',
    'can/view/callbacks',
    'can/control',
    'can/observe',
    'can/view/mustache',
    'can/view/bindings'
], function (can, viewCallbacks) {
    var ignoreAttributesRegExp = /^(dataViewId|class|id)$/i, paramReplacer = /\{([^\}]+)\}/g;
    var Component = can.Component = can.Construct.extend({
            setup: function () {
                can.Construct.setup.apply(this, arguments);
                if (can.Component) {
                    var self = this, scope = this.prototype.scope || this.prototype.viewModel;
                    this.Control = ComponentControl.extend(this.prototype.events);
                    if (!scope || typeof scope === 'object' && !(scope instanceof can.Map)) {
                        this.Map = can.Map.extend(scope || {});
                    } else if (scope.prototype instanceof can.Map) {
                        this.Map = scope;
                    }
                    this.attributeScopeMappings = {};
                    can.each(this.Map ? this.Map.defaults : {}, function (val, prop) {
                        if (val === '@') {
                            self.attributeScopeMappings[prop] = prop;
                        }
                    });
                    if (this.prototype.template) {
                        if (typeof this.prototype.template === 'function') {
                            var temp = this.prototype.template;
                            this.renderer = function () {
                                return can.view.frag(temp.apply(null, arguments));
                            };
                        } else {
                            this.renderer = can.view.mustache(this.prototype.template);
                        }
                    }
                    can.view.tag(this.prototype.tag, function (el, options) {
                        new self(el, options);
                    });
                }
            }
        }, {
            setup: function (el, hookupOptions) {
                var initialScopeData = {}, component = this, lexicalContent = (typeof this.leakScope === 'undefined' ? false : !this.leakScope) && this.template, twoWayBindings = {}, scope = this.scope || this.viewModel, viewModelPropertyUpdates = {}, componentScope, frag;
                can.each(this.constructor.attributeScopeMappings, function (val, prop) {
                    initialScopeData[prop] = el.getAttribute(can.hyphenate(val));
                });
                can.each(can.makeArray(el.attributes), function (node, index) {
                    var name = can.camelize(node.nodeName.toLowerCase()), value = node.value;
                    if (ignoreAttributesRegExp.test(name) && value[0] === '{' && value[value.length - 1] === '}') {
                        can.dev.warn('can/component: looks like you\'re trying to pass ' + name + ' as an attribute into a component, ' + 'but it is not a supported attribute');
                    }
                    if (component.constructor.attributeScopeMappings[name] || ignoreAttributesRegExp.test(name) || viewCallbacks.attr(node.nodeName)) {
                        return;
                    }
                    if (value[0] === '{' && value[value.length - 1] === '}') {
                        value = value.substr(1, value.length - 2);
                    } else {
                        if (hookupOptions.templateType !== 'legacy') {
                            initialScopeData[name] = value;
                            return;
                        }
                    }
                    var computeData = hookupOptions.scope.computeData(value, { args: [] }), compute = computeData.compute;
                    var handler = function (ev, newVal) {
                        viewModelPropertyUpdates[name] = (viewModelPropertyUpdates[name] || 0) + 1;
                        var handler = function () {
                            --viewModelPropertyUpdates[name];
                            can.unbind.call(viewModelPropertyUpdates, 'ready', handler);
                        };
                        can.bind.call(viewModelPropertyUpdates, 'ready', handler);
                        componentScope.attr(name, newVal);
                        can.batch.trigger(viewModelPropertyUpdates, 'ready');
                    };
                    compute.bind('change', handler);
                    initialScopeData[name] = compute();
                    if (!compute.computeInstance.hasDependencies) {
                        compute.unbind('change', handler);
                    } else {
                        can.bind.call(el, 'removed', function () {
                            compute.unbind('change', handler);
                        });
                        twoWayBindings[name] = computeData;
                    }
                });
                if (this.constructor.Map) {
                    componentScope = new this.constructor.Map(initialScopeData);
                } else if (scope instanceof can.Map) {
                    componentScope = scope;
                } else if (can.isFunction(scope)) {
                    var scopeResult = scope.call(this, initialScopeData, hookupOptions.scope, el);
                    if (scopeResult instanceof can.Map) {
                        componentScope = scopeResult;
                    } else if (scopeResult.prototype instanceof can.Map) {
                        componentScope = new scopeResult(initialScopeData);
                    } else {
                        componentScope = new (can.Map.extend(scopeResult))(initialScopeData);
                    }
                }
                var handlers = {};
                can.each(twoWayBindings, function (computeData, prop) {
                    handlers[prop] = function (ev, newVal) {
                        if (!viewModelPropertyUpdates[prop]) {
                            computeData.compute(newVal);
                        }
                    };
                    componentScope.bind(prop, handlers[prop]);
                });
                if (!can.isEmptyObject(this.constructor.attributeScopeMappings) || hookupOptions.templateType !== 'legacy') {
                    can.bind.call(el, 'attributes', function (ev) {
                        var camelized = can.camelize(ev.attributeName);
                        if (!twoWayBindings[camelized] && !ignoreAttributesRegExp.test(camelized)) {
                            componentScope.attr(camelized, el.getAttribute(ev.attributeName));
                        }
                    });
                }
                this.scope = this.viewModel = componentScope;
                can.data(can.$(el), 'scope', this.scope);
                can.data(can.$(el), 'viewModel', this.scope);
                var renderedScope = lexicalContent ? this.scope : hookupOptions.scope.add(this.scope), options = { helpers: {} };
                can.each(this.helpers || {}, function (val, prop) {
                    if (can.isFunction(val)) {
                        options.helpers[prop] = function () {
                            return val.apply(componentScope, arguments);
                        };
                    }
                });
                var tearDownBindings = function () {
                    can.each(handlers, function (handler, prop) {
                        componentScope.unbind(prop, handlers[prop]);
                    });
                };
                this._control = new this.constructor.Control(el, {
                    scope: this.scope,
                    viewModel: this.scope
                });
                if (this._control && this._control.destroy) {
                    var oldDestroy = this._control.destroy;
                    this._control.destroy = function () {
                        oldDestroy.apply(this, arguments);
                        tearDownBindings();
                    };
                    this._control.on();
                } else {
                    can.bind.call(el, 'removed', function () {
                        tearDownBindings();
                    });
                }
                if (this.constructor.renderer) {
                    if (!options.tags) {
                        options.tags = {};
                    }
                    options.tags.content = function contentHookup(el, rendererOptions) {
                        var subtemplate = hookupOptions.subtemplate || rendererOptions.subtemplate;
                        if (subtemplate) {
                            delete options.tags.content;
                            var opts = !lexicalContent || subtemplate !== hookupOptions.subtemplate ? rendererOptions : hookupOptions;
                            can.view.live.replace([el], subtemplate(opts.scope, opts.options));
                            options.tags.content = contentHookup;
                        }
                    };
                    frag = this.constructor.renderer(renderedScope, hookupOptions.options.add(options));
                } else {
                    if (hookupOptions.templateType === 'legacy') {
                        frag = can.view.frag(hookupOptions.subtemplate ? hookupOptions.subtemplate(renderedScope, hookupOptions.options.add(options)) : '');
                    } else {
                        frag = hookupOptions.subtemplate ? hookupOptions.subtemplate(renderedScope, hookupOptions.options.add(options)) : document.createDocumentFragment();
                    }
                }
                can.appendChild(el, frag);
            }
        });
    var ComponentControl = can.Control.extend({
            _lookup: function (options) {
                return [
                    options.scope,
                    options,
                    window
                ];
            },
            _action: function (methodName, options, controlInstance) {
                var hasObjectLookup, readyCompute;
                paramReplacer.lastIndex = 0;
                hasObjectLookup = paramReplacer.test(methodName);
                if (!controlInstance && hasObjectLookup) {
                    return;
                } else if (!hasObjectLookup) {
                    return can.Control._action.apply(this, arguments);
                } else {
                    readyCompute = can.compute(function () {
                        var delegate;
                        var name = methodName.replace(paramReplacer, function (matched, key) {
                                var value;
                                if (key === 'scope' || key === 'viewModel') {
                                    delegate = options.scope;
                                    return '';
                                }
                                key = key.replace(/^(scope|^viewModel)\./, '');
                                value = can.compute.read(options.scope, key.split('.'), { isArgument: true }).value;
                                if (value === undefined) {
                                    value = can.getObject(key);
                                }
                                if (typeof value === 'string') {
                                    return value;
                                } else {
                                    delegate = value;
                                    return '';
                                }
                            });
                        var parts = name.split(/\s+/g), event = parts.pop();
                        return {
                            processor: this.processors[event] || this.processors.click,
                            parts: [
                                name,
                                parts.join(' '),
                                event
                            ],
                            delegate: delegate || undefined
                        };
                    }, this);
                    var handler = function (ev, ready) {
                        controlInstance._bindings.control[methodName](controlInstance.element);
                        controlInstance._bindings.control[methodName] = ready.processor(ready.delegate || controlInstance.element, ready.parts[2], ready.parts[1], methodName, controlInstance);
                    };
                    readyCompute.bind('change', handler);
                    controlInstance._bindings.readyComputes[methodName] = {
                        compute: readyCompute,
                        handler: handler
                    };
                    return readyCompute();
                }
            }
        }, {
            setup: function (el, options) {
                this.scope = options.scope;
                this.viewModel = options.viewModel;
                return can.Control.prototype.setup.call(this, el, options);
            },
            off: function () {
                if (this._bindings) {
                    can.each(this._bindings.readyComputes || {}, function (value) {
                        value.compute.unbind('change', value.handler);
                    });
                }
                can.Control.prototype.off.apply(this, arguments);
                this._bindings.readyComputes = {};
            }
        });
    var $ = can.$;
    if ($.fn) {
        $.fn.scope = $.fn.viewModel = function () {
            return can.viewModel.apply(can, [this].concat(can.makeArray(arguments)));
        };
    }
    return Component;
});
