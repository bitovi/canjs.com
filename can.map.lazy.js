/*!
 * CanJS - 2.3.8
 * http://canjs.com/
 * Copyright (c) 2016 Bitovi
 * Mon, 04 Jan 2016 19:08:12 GMT
 * Licensed MIT
 */

/*[global-shim-start]*/
(function (exports, global){
	var origDefine = global.define;

	var get = function(name){
		var parts = name.split("."),
			cur = global,
			i;
		for(i = 0 ; i < parts.length; i++){
			if(!cur) {
				break;
			}
			cur = cur[parts[i]];
		}
		return cur;
	};
	var modules = (global.define && global.define.modules) ||
		(global._define && global._define.modules) || {};
	var ourDefine = global.define = function(moduleName, deps, callback){
		var module;
		if(typeof deps === "function") {
			callback = deps;
			deps = [];
		}
		var args = [],
			i;
		for(i =0; i < deps.length; i++) {
			args.push( exports[deps[i]] ? get(exports[deps[i]]) : ( modules[deps[i]] || get(deps[i]) )  );
		}
		// CJS has no dependencies but 3 callback arguments
		if(!deps.length && callback.length) {
			module = { exports: {} };
			var require = function(name) {
				return exports[name] ? get(exports[name]) : modules[name];
			};
			args.push(require, module.exports, module);
		}
		// Babel uses the exports and module object.
		else if(!args[0] && deps[0] === "exports") {
			module = { exports: {} };
			args[0] = module.exports;
			if(deps[1] === "module") {
				args[1] = module;
			}
		} else if(!args[0] && deps[0] === "module") {
			args[0] = { id: moduleName };
		}

		global.define = origDefine;
		var result = callback ? callback.apply(null, args) : undefined;
		global.define = ourDefine;

		// Favor CJS module.exports over the return value
		modules[moduleName] = module && module.exports ? module.exports : result;
	};
	global.define.orig = origDefine;
	global.define.modules = modules;
	global.define.amd = true;
	ourDefine("@loader", [], function(){
		// shim for @@global-helpers
		var noop = function(){};
		return {
			get: function(){
				return { prepareGlobal: noop, retrieveGlobal: noop };
			},
			global: global,
			__exec: function(__load){
				eval("(function() { " + __load.source + " \n }).call(global);");
			}
		};
	});
})({},window)
/*can@2.3.8#map/lazy/bubble*/
define('can/map/lazy/bubble', [
    'can/util/util',
    'can/map/bubble'
], function (can) {
    var bubble = can.bubble;
    return can.extend({}, bubble, {
        childrenOf: function (parentMap, eventName) {
            if (parentMap._nestedReference) {
                parentMap._nestedReference.each(function (child, ref) {
                    if (child && child.bind) {
                        bubble.toParent(child, parentMap, ref(), eventName);
                    }
                });
            } else {
                bubble._each.apply(this, arguments);
            }
        }
    });
});
/*can@2.3.8#map/lazy/nested_reference*/
define('can/map/lazy/nested_reference', ['can/util/util'], function (can) {
    var pathIterator = function (root, propPath, callback) {
        var props = propPath.split('.'), cur = root, part;
        while (part = props.shift()) {
            cur = cur[part];
            if (callback) {
                callback(cur, part);
            }
        }
        return cur;
    };
    var ArrIndex = function (array) {
        this.array = array;
    };
    ArrIndex.prototype.toString = function () {
        return '' + can.inArray(this.item, this.array);
    };
    var NestedReference = function (root) {
        this.root = root;
        this.references = [];
    };
    NestedReference.ArrIndex = ArrIndex;
    can.extend(NestedReference.prototype, {
        make: function (propPath) {
            var path = [], arrIndex;
            if (can.isArray(this.root) || this.root instanceof can.LazyList) {
                arrIndex = new ArrIndex(this.root);
            }
            pathIterator(this.root, propPath, function (item, prop) {
                if (arrIndex) {
                    arrIndex.item = item;
                    path.push(arrIndex);
                    arrIndex = undefined;
                } else {
                    path.push(prop);
                    if (can.isArray(item)) {
                        arrIndex = new ArrIndex(item);
                    }
                }
            });
            var pathFunc = function () {
                return path.join('.');
            };
            this.references.push(pathFunc);
            return pathFunc;
        },
        removeChildren: function (path, callback) {
            var i = 0;
            while (i < this.references.length) {
                var reference = this.references[i]();
                if (reference.indexOf(path) === 0) {
                    callback(this.get(reference), reference);
                    this.references.splice(i, 1);
                } else {
                    i++;
                }
            }
        },
        get: function (path) {
            return pathIterator(this.root, path);
        },
        each: function (callback) {
            var self = this;
            can.each(this.references, function (ref) {
                var path = ref();
                callback(self.get(path), ref, path);
            });
        }
    });
    can.NestedReference = NestedReference;
});
/*can@2.3.8#map/lazy/lazy*/
define('can/map/lazy/lazy', [
    'can/util/util',
    'can/map/lazy/bubble',
    'can/map/map_helpers',
    'can/map/map',
    'can/list/list',
    'can/map/lazy/nested_reference'
], function (can, bubble, mapHelpers) {
    can.LazyMap = can.Map.extend({ _bubble: bubble }, {
        setup: function (obj) {
            this.constructor.Map = this.constructor;
            this.constructor.List = can.LazyList;
            this._data = can.extend(can.extend(true, {}, this._setupDefaults() || {}), obj);
            can.cid(this, '.lazyMap');
            this._setupComputedProperties();
            var teardownMapping = obj && mapHelpers.addToMap(obj, this);
            this._nestedReference = new can.NestedReference(this._data);
            if (teardownMapping) {
                teardownMapping();
            }
            can.each(this._data, can.proxy(function (value, prop) {
                this.___set(prop, value);
            }, this));
            this.bind('change', can.proxy(this._changes, this));
        },
        _changes: function (ev, attr, how, newVal, oldVal) {
        },
        _addChild: function (path, newChild, setNewChild) {
            var self = this;
            this._nestedReference.removeChildren(path, function (oldChild, oldChildPath) {
                bubble.remove(self, oldChild);
                if (newChild) {
                    var newChildPath = oldChildPath.replace(path + '.', '');
                    if (path === newChildPath) {
                        oldChild._nestedReference.each(function (obj, path) {
                            newChild._nestedReference.make(path());
                            if (self._bindings) {
                                bubble.add(this, newChild, path());
                            }
                        });
                    } else {
                        var reference = newChild._nestedReference.make(newChildPath);
                        if (self._bindings) {
                            bubble.add(oldChild, newChild, reference());
                        }
                    }
                }
            });
            if (setNewChild) {
                setNewChild();
            }
            if (newChild) {
                var reference = this._nestedReference.make(path);
                if (this._bindings) {
                    bubble.add(this, newChild, reference());
                }
            }
            return newChild;
        },
        removeAttr: function (attr) {
            var data = this._goto(attr);
            if (data.parts.length) {
                return data.value.removeAttr(data.parts.join('.'));
            } else {
                if (can.isArray(data.parent)) {
                    data.parent.splice(data.prop, 1);
                    this._triggerChange(attr, 'remove', undefined, [this.__type(data.value, data.prop)]);
                } else {
                    if (data.parent[data.prop]) {
                        delete data.parent[data.prop];
                        can.batch.trigger(this, data.path.length ? data.path.join('.') + '.__keys' : '__keys');
                        this._triggerChange(attr, 'remove', undefined, this.__type(data.value, data.prop));
                    }
                }
                this._nestedReference.removeChildren();
                return data.value;
            }
        },
        __type: function (value, prop) {
            if (!(value instanceof can.LazyMap) && mapHelpers.canMakeObserve(value)) {
                if (can.isArray(value)) {
                    var List = can.LazyList;
                    return new List(value);
                } else {
                    var Map = this.constructor.Map || can.LazyMap;
                    return new Map(value);
                }
            }
            return value;
        },
        _goto: function (attr, keepKey) {
            var parts = mapHelpers.attrParts(attr, keepKey).slice(0), prev, path = [], part;
            var cur = this instanceof can.List ? this[parts.shift()] : this.___get();
            while (cur && !can.isMapLike(cur) && parts.length) {
                if (part !== undefined) {
                    path.push(part);
                }
                prev = cur;
                cur = cur[part = parts.shift()];
            }
            return {
                parts: parts,
                prop: part,
                value: cur,
                parent: prev,
                path: path
            };
        },
        _get: function (attr) {
            can.__observe(this, attr);
            var data = this._goto(attr);
            if (can.isMapLike(data.value)) {
                if (data.parts.length) {
                    return data.value._get(data.parts);
                } else {
                    return data.value;
                }
            } else if (data.value && mapHelpers.canMakeObserve(data.value)) {
                var converted = this.__type(data.value, data.prop);
                this._addChild(attr, converted, function () {
                    data.parent[data.prop] = converted;
                });
                return converted;
            } else if (data.value !== undefined) {
                return data.value;
            } else {
                return this.__get(attr);
            }
        },
        _set: function (attr, value, keepKey) {
            var data = this._goto(attr, keepKey);
            if (can.isMapLike(data.value) && data.parts.length) {
                return data.value._set(data.parts, value);
            } else if (!data.parts.length) {
                this.__set(attr, value, data.value, data);
            } else {
                throw new Error('can.LazyMap: object does not exist');
            }
        },
        __set: function (prop, value, current, data, convert) {
            convert = convert || true;
            if (value !== current) {
                var changeType = data.parent.hasOwnProperty(data.prop) ? 'set' : 'add';
                if (convert && mapHelpers.canMakeObserve(value)) {
                    value = this.__type(value, prop);
                    var self = this;
                    this._addChild(prop, value, function () {
                        self.___set(prop, value, data);
                    });
                } else {
                    this.___set(prop, value, data);
                }
                if (changeType === 'add') {
                    can.batch.trigger(this, data.path.length ? data.path.join('.') + '.__keys' : '__keys', undefined);
                }
                this._triggerChange(prop, changeType, value, current);
            }
        },
        ___set: function (prop, val, data) {
            var computedAttr = this._computedAttrs[prop];
            if (computedAttr) {
                computedAttr.compute(val);
            } else if (data) {
                data.parent[data.prop] = val;
            } else {
                this._data[prop] = val;
            }
            if (!can.isFunction(this.constructor.prototype[prop])) {
                this[prop] = val;
            }
        },
        _getAttrs: function () {
            return mapHelpers.serialize(this, 'attr', {});
        },
        _setAttrs: function (props, remove) {
            props = can.extend({}, props);
            var self = this, prop, data, newVal;
            can.batch.start();
            this.each(function (curVal, prop) {
                newVal = props[prop];
                data = self._goto(prop, true);
                if (newVal === undefined) {
                    if (remove) {
                        self.removeAttr(prop);
                    }
                    return;
                } else if (!can.isMapLike(curVal) && mapHelpers.canMakeObserve(curVal)) {
                    curVal = self.attr(prop);
                }
                if (newVal instanceof can.Map) {
                    self.__set(prop, newVal, curVal, data);
                } else if (can.isMapLike(curVal) && mapHelpers.canMakeObserve(newVal) && curVal.attr) {
                    curVal.attr(newVal, remove);
                } else if (curVal !== newVal) {
                    self.__set(prop, newVal, curVal, data);
                }
                delete props[prop];
            });
            for (prop in props) {
                newVal = props[prop];
                this._set(prop, newVal, true);
            }
            can.batch.stop();
            return this;
        }
    });
    can.LazyList = can.List.extend({ Map: can.LazyMap }, {
        setup: function () {
            can.List.prototype.setup.apply(this, arguments);
            this._nestedReference = new can.NestedReference(this);
        }
    });
    return can.LazyMap;
});
/*[global-shim-end]*/
(function (){
	window._define = window.define;
	window.define = window.define.orig;
})();