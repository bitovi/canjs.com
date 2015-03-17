/*map/define/define*/
define('can/map/define', [
    'can/util/library',
    'can/observe'
], function (can) {
    can.Map.helpers.define = function (Map) {
        var define = Map.prototype.define;
        if (Map.define) {
            can.dev.warn('The define property should be on the map\'s prototype properties, ' + 'not the static properies.');
        }
        Map.defaultGenerators = {};
        for (var prop in define) {
            if ('value' in define[prop]) {
                if (typeof define[prop].value === 'function') {
                    Map.defaultGenerators[prop] = define[prop].value;
                } else {
                    Map.defaults[prop] = define[prop].value;
                }
            }
            if (typeof define[prop].Value === 'function') {
                (function (Constructor) {
                    Map.defaultGenerators[prop] = function () {
                        return new Constructor();
                    };
                }(define[prop].Value));
            }
        }
    };
    var oldSetupDefaults = can.Map.prototype._setupDefaults;
    can.Map.prototype._setupDefaults = function (obj) {
        var defaults = oldSetupDefaults.call(this), propsCommittedToAttr = {}, Map = this.constructor, originalGet = this._get;
        this._get = function (originalProp) {
            prop = originalProp.indexOf('.') !== -1 ? originalProp.substr(0, originalProp.indexOf('.')) : prop;
            if (prop in defaults && !(prop in propsCommittedToAttr)) {
                this.attr(prop, defaults[prop]);
                propsCommittedToAttr[prop] = true;
            }
            return originalGet.apply(this, arguments);
        };
        for (var prop in Map.defaultGenerators) {
            if (!obj || !(prop in obj)) {
                defaults[prop] = Map.defaultGenerators[prop].call(this);
            }
        }
        this._get = originalGet;
        return defaults;
    };
    var proto = can.Map.prototype, oldSet = proto.__set;
    proto.__set = function (prop, value, current, success, error) {
        var asyncTimer;
        var errorCallback = function (errors) {
                clearTimeout(asyncTimer);
                var stub = error && error.call(self, errors);
                if (stub !== false) {
                    can.trigger(self, 'error', [
                        prop,
                        errors
                    ], true);
                }
                return false;
            }, self = this, define = this.define && this.define[prop], setter = define && define.set, getter = define && define.get;
        if (setter) {
            can.batch.start();
            var setterCalled = false, setValue = setter.call(this, value, function (value) {
                    oldSet.call(self, prop, value, current, success, errorCallback);
                    setterCalled = true;
                    clearTimeout(asyncTimer);
                }, errorCallback);
            if (getter) {
                can.batch.stop();
                return;
            } else if (setValue === undefined && !setterCalled && setter.length >= 2) {
                asyncTimer = setTimeout(function () {
                    can.dev.warn('can/map/setter.js: Setter "' + prop + '" did not return a value or call the setter callback.');
                }, can.dev.warnTimeout);
                can.batch.stop();
                return;
            } else {
                if (!setterCalled) {
                    oldSet.call(self, prop, setter.length === 0 && setValue === undefined ? value : setValue, current, success, errorCallback);
                }
                can.batch.stop();
                return this;
            }
        } else {
            oldSet.call(self, prop, value, current, success, errorCallback);
        }
        return this;
    };
    var converters = {
            'date': function (str) {
                var type = typeof str;
                if (type === 'string') {
                    str = Date.parse(str);
                    return isNaN(str) ? null : new Date(str);
                } else if (type === 'number') {
                    return new Date(str);
                } else {
                    return str;
                }
            },
            'number': function (val) {
                return +val;
            },
            'boolean': function (val) {
                if (val === 'false' || val === '0' || !val) {
                    return false;
                }
                return true;
            },
            '*': function (val) {
                return val;
            },
            'string': function (val) {
                return '' + val;
            }
        };
    var oldType = proto.__type;
    proto.__type = function (value, prop) {
        var def = this.define && this.define[prop], type = def && def.type, Type = def && def.Type, newValue = value;
        if (typeof type === 'string') {
            type = converters[type];
        }
        if (type || Type) {
            if (type) {
                newValue = type.call(this, newValue, prop);
            }
            if (Type && !(newValue instanceof Type)) {
                newValue = new Type(newValue);
            }
            return newValue;
        }
        return oldType.call(this, newValue, prop);
    };
    var oldRemove = proto._remove;
    proto._remove = function (prop, current) {
        var remove = this.define && this.define[prop] && this.define[prop].remove, res;
        if (remove) {
            can.batch.start();
            res = remove.call(this, current);
            if (res === false) {
                can.batch.stop();
                return;
            } else {
                res = oldRemove.call(this, prop, current);
                can.batch.stop();
                return res;
            }
        }
        return oldRemove.call(this, prop, current);
    };
    var oldSetupComputes = proto._setupComputes;
    proto._setupComputes = function (defaultsValues) {
        oldSetupComputes.apply(this, arguments);
        for (var attr in this.define) {
            var def = this.define[attr], get = def.get;
            if (get) {
                this[attr] = can.compute.async(defaultsValues[attr], get, this);
                this._computedBindings[attr] = { count: 0 };
            }
        }
    };
    var oldSingleSerialize = can.Map.helpers._serialize;
    can.Map.helpers._serialize = function (map, name, val) {
        return serializeProp(map, name, val);
    };
    var serializeProp = function (map, attr, val) {
        var serializer = map.define && map.define[attr] && map.define[attr].serialize;
        if (serializer === undefined) {
            return oldSingleSerialize.apply(this, arguments);
        } else if (serializer !== false) {
            return typeof serializer === 'function' ? serializer.call(map, val, attr) : oldSingleSerialize.apply(this, arguments);
        }
    };
    var oldSerialize = proto.serialize;
    proto.serialize = function (property) {
        var serialized = oldSerialize.apply(this, arguments);
        if (property) {
            return serialized;
        }
        var serializer, val;
        for (var attr in this.define) {
            if (!(attr in serialized)) {
                serializer = this.define && this.define[attr] && this.define[attr].serialize;
                if (serializer) {
                    val = serializeProp(this, attr, this.attr(attr));
                    if (val !== undefined) {
                        serialized[attr] = val;
                    }
                }
            }
        }
        return serialized;
    };
    return can.Map;
});
