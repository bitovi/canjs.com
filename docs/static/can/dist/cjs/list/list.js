/*list/list*/
var can = require('../util/util.js');
var Map = require('../map/map.js');
var bubble = require('../map/bubble.js');
var splice = [].splice, spliceRemovesProps = function () {
        var obj = {
                0: 'a',
                length: 1
            };
        splice.call(obj, 0, 1);
        return !obj[0];
    }();
var list = Map.extend({ Map: Map }, {
        setup: function (instances, options) {
            this.length = 0;
            can.cid(this, '.map');
            this._init = 1;
            this._computedBindings = {};
            this._setupComputes();
            instances = instances || [];
            var teardownMapping;
            if (can.isDeferred(instances)) {
                this.replace(instances);
            } else {
                teardownMapping = instances.length && can.Map.helpers.addToMap(instances, this);
                this.push.apply(this, can.makeArray(instances || []));
            }
            if (teardownMapping) {
                teardownMapping();
            }
            this.bind('change', can.proxy(this._changes, this));
            can.simpleExtend(this, options);
            delete this._init;
        },
        _triggerChange: function (attr, how, newVal, oldVal) {
            Map.prototype._triggerChange.apply(this, arguments);
            var index = +attr;
            if (!~attr.indexOf('.') && !isNaN(index)) {
                if (how === 'add') {
                    can.batch.trigger(this, how, [
                        newVal,
                        index
                    ]);
                    can.batch.trigger(this, 'length', [this.length]);
                } else if (how === 'remove') {
                    can.batch.trigger(this, how, [
                        oldVal,
                        index
                    ]);
                    can.batch.trigger(this, 'length', [this.length]);
                } else {
                    can.batch.trigger(this, how, [
                        newVal,
                        index
                    ]);
                }
            }
        },
        __get: function (attr) {
            if (attr) {
                if (this[attr] && this[attr].isComputed && can.isFunction(this.constructor.prototype[attr])) {
                    return this[attr]();
                } else {
                    return this[attr];
                }
            } else {
                return this;
            }
        },
        ___set: function (attr, val) {
            this[attr] = val;
            if (+attr >= this.length) {
                this.length = +attr + 1;
            }
        },
        _remove: function (prop, current) {
            if (isNaN(+prop)) {
                delete this[prop];
                this._triggerChange(prop, 'remove', undefined, current);
            } else {
                this.splice(prop, 1);
            }
        },
        _each: function (callback) {
            var data = this.__get();
            for (var i = 0; i < data.length; i++) {
                callback(data[i], i);
            }
        },
        serialize: function () {
            return Map.helpers.serialize(this, 'serialize', []);
        },
        splice: function (index, howMany) {
            var args = can.makeArray(arguments), added = [], i, len;
            for (i = 2, len = args.length; i < len; i++) {
                args[i] = this.__type(args[i], i);
                added.push(args[i]);
            }
            if (howMany === undefined) {
                howMany = args[1] = this.length - index;
            }
            var removed = splice.apply(this, args);
            if (!spliceRemovesProps) {
                for (i = this.length; i < removed.length + this.length; i++) {
                    delete this[i];
                }
            }
            can.batch.start();
            if (howMany > 0) {
                bubble.removeMany(this, removed);
                this._triggerChange('' + index, 'remove', undefined, removed);
            }
            if (args.length > 2) {
                for (i = 0, len = added.length; i < len; i++) {
                    bubble.set(this, i, added[i]);
                }
                this._triggerChange('' + index, 'add', added, removed);
            }
            can.batch.stop();
            return removed;
        },
        _attrs: function (items, remove) {
            if (items === undefined) {
                return Map.helpers.serialize(this, 'attr', []);
            }
            items = can.makeArray(items);
            can.batch.start();
            this._updateAttrs(items, remove);
            can.batch.stop();
        },
        _updateAttrs: function (items, remove) {
            var len = Math.min(items.length, this.length);
            for (var prop = 0; prop < len; prop++) {
                var curVal = this[prop], newVal = items[prop];
                if (Map.helpers.isObservable(curVal) && Map.helpers.canMakeObserve(newVal)) {
                    curVal.attr(newVal, remove);
                } else if (curVal !== newVal) {
                    this._set(prop, newVal);
                } else {
                }
            }
            if (items.length > this.length) {
                this.push.apply(this, items.slice(this.length));
            } else if (items.length < this.length && remove) {
                this.splice(items.length);
            }
        }
    }), getArgs = function (args) {
        return args[0] && can.isArray(args[0]) ? args[0] : can.makeArray(args);
    };
can.each({
    push: 'length',
    unshift: 0
}, function (where, name) {
    var orig = [][name];
    list.prototype[name] = function () {
        var args = [], len = where ? this.length : 0, i = arguments.length, res, val;
        while (i--) {
            val = arguments[i];
            args[i] = bubble.set(this, i, this.__type(val, i));
        }
        res = orig.apply(this, args);
        if (!this.comparator || args.length) {
            this._triggerChange('' + len, 'add', args, undefined);
        }
        return res;
    };
});
can.each({
    pop: 'length',
    shift: 0
}, function (where, name) {
    list.prototype[name] = function () {
        var args = getArgs(arguments), len = where && this.length ? this.length - 1 : 0;
        var res = [][name].apply(this, args);
        this._triggerChange('' + len, 'remove', undefined, [res]);
        if (res && res.unbind) {
            bubble.remove(this, res);
        }
        return res;
    };
});
can.extend(list.prototype, {
    indexOf: function (item, fromIndex) {
        this.attr('length');
        return can.inArray(item, this, fromIndex);
    },
    join: function () {
        return [].join.apply(this.attr(), arguments);
    },
    reverse: function () {
        var list = can.makeArray([].reverse.call(this));
        this.replace(list);
    },
    slice: function () {
        var temp = Array.prototype.slice.apply(this, arguments);
        return new this.constructor(temp);
    },
    concat: function () {
        var args = [];
        can.each(can.makeArray(arguments), function (arg, i) {
            args[i] = arg instanceof can.List ? arg.serialize() : arg;
        });
        return new this.constructor(Array.prototype.concat.apply(this.serialize(), args));
    },
    forEach: function (cb, thisarg) {
        return can.each(this, cb, thisarg || this);
    },
    replace: function (newList) {
        if (can.isDeferred(newList)) {
            newList.then(can.proxy(this.replace, this));
        } else {
            this.splice.apply(this, [
                0,
                this.length
            ].concat(can.makeArray(newList || [])));
        }
        return this;
    },
    filter: function (callback, thisArg) {
        var filteredList = new can.List(), self = this, filtered;
        this.each(function (item, index, list) {
            filtered = callback.call(thisArg | self, item, index, self);
            if (filtered) {
                filteredList.push(item);
            }
        });
        return filteredList;
    }
});
can.List = Map.List = list;
module.exports = can.List;
