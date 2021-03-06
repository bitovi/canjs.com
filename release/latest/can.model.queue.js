/*!
 * CanJS - 2.3.34
 * http://canjs.com/
 * Copyright (c) 2018 Bitovi
 * Mon, 30 Apr 2018 20:56:51 GMT
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
/*can@2.3.34#util/object/object*/
define('can/util/object/object', ['can/util/util'], function (can) {
    var isArray = can.isArray;
    can.Object = {};
    var same = can.Object.same = function (a, b, compares, aParent, bParent, deep) {
        var aType = typeof a, aArray = isArray(a), comparesType = typeof compares, compare;
        if (comparesType === 'string' || compares === null) {
            compares = compareMethods[compares];
            comparesType = 'function';
        }
        if (comparesType === 'function') {
            return compares(a, b, aParent, bParent);
        }
        compares = compares || {};
        if (a === null || b === null) {
            return a === b;
        }
        if (a instanceof Date || b instanceof Date) {
            return a === b;
        }
        if (deep === -1) {
            return aType === 'object' || a === b;
        }
        if (aType !== typeof b || aArray !== isArray(b)) {
            return false;
        }
        if (a === b) {
            return true;
        }
        if (aArray) {
            if (a.length !== b.length) {
                return false;
            }
            for (var i = 0; i < a.length; i++) {
                compare = compares[i] === undefined ? compares['*'] : compares[i];
                if (!same(a[i], b[i], a, b, compare)) {
                    return false;
                }
            }
            return true;
        } else if (aType === 'object' || aType === 'function') {
            var bCopy = can.extend({}, b);
            for (var prop in a) {
                compare = compares[prop] === undefined ? compares['*'] : compares[prop];
                if (!same(a[prop], b[prop], compare, a, b, deep === false ? -1 : undefined)) {
                    return false;
                }
                delete bCopy[prop];
            }
            for (prop in bCopy) {
                if (compares[prop] === undefined || !same(undefined, b[prop], compares[prop], a, b, deep === false ? -1 : undefined)) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };
    can.Object.subsets = function (checkSet, sets, compares) {
        var len = sets.length, subsets = [];
        for (var i = 0; i < len; i++) {
            var set = sets[i];
            if (can.Object.subset(checkSet, set, compares)) {
                subsets.push(set);
            }
        }
        return subsets;
    };
    can.Object.subset = function (subset, set, compares) {
        compares = compares || {};
        for (var prop in set) {
            if (!same(subset[prop], set[prop], compares[prop], subset, set)) {
                return false;
            }
        }
        return true;
    };
    var compareMethods = {
        'null': function () {
            return true;
        },
        i: function (a, b) {
            return ('' + a).toLowerCase() === ('' + b).toLowerCase();
        },
        eq: function (a, b) {
            return a === b;
        },
        similar: function (a, b) {
            return a == b;
        }
    };
    compareMethods.eqeq = compareMethods.similar;
    return can.Object;
});
/*can@2.3.34#map/backup/backup*/
define('can/map/backup/backup', [
    'can/util/util',
    'can/compute/compute',
    'can/map/map',
    'can/util/object/object'
], function (can) {
    var flatProps = function (a, cur) {
        var obj = {};
        for (var prop in a) {
            if (typeof a[prop] !== 'object' || a[prop] === null || a[prop] instanceof Date) {
                obj[prop] = a[prop];
            } else {
                obj[prop] = cur.attr(prop);
            }
        }
        return obj;
    };
    var oldSetup = can.Map.prototype.setup;
    can.extend(can.Map.prototype, {
        setup: function () {
            this._backupStore = can.compute();
            return oldSetup.apply(this, arguments);
        },
        backup: function () {
            this._backupStore(this.attr());
            return this;
        },
        isDirty: function (checkAssociations) {
            return this._backupStore() && !can.Object.same(this.attr(), this._backupStore(), undefined, undefined, undefined, !!checkAssociations);
        },
        restore: function (restoreAssociations) {
            var props = restoreAssociations ? this._backupStore() : flatProps(this._backupStore(), this);
            if (this.isDirty(restoreAssociations)) {
                this.attr(props, true);
            }
            return this;
        }
    });
    return can.Map;
});
/*can@2.3.34#model/queue/queue*/
define('can/model/queue/queue', [
    'can/util/util',
    'can/model/model',
    'can/map/backup/backup'
], function (can) {
    var cleanAttrs = function (changedAttrs, attrs) {
            var newAttrs = can.extend(true, {}, attrs), current, path;
            if (changedAttrs) {
                for (var i = 0; i < changedAttrs.length; i++) {
                    current = newAttrs;
                    path = changedAttrs[i].split('.');
                    while (path.length > 1) {
                        current = current && current[path.shift()];
                    }
                    if (current) {
                        delete current[path.shift()];
                    }
                }
            }
            return newAttrs;
        }, queueRequests = function (success, error, method, callback) {
            this._changedAttrs = this._changedAttrs || [];
            var def = new can.Deferred(), self = this, attrs = this.serialize(), queue = this._requestQueue, changedAttrs = this._changedAttrs, reqFn, index;
            reqFn = function (self, type, success, error) {
                return function () {
                    return self.constructor._makeRequest([
                        self,
                        attrs
                    ], type || (self.isNew() ? 'create' : 'update'), success, error, callback);
                };
            }(this, method, function () {
                def.resolveWith(self, arguments);
                queue.splice(0, 1);
                if (queue.length > 0) {
                    queue[0] = queue[0]();
                } else {
                    changedAttrs.splice(0);
                }
            }, function () {
                def.rejectWith(self, arguments);
                queue.splice(0);
                changedAttrs.splice(0);
            });
            index = queue.push(reqFn) - 1;
            if (queue.length === 1) {
                queue[0] = queue[0]();
            }
            def.abort = function () {
                var abort;
                abort = queue[index].abort && queue[index].abort();
                queue.splice(index);
                if (queue.length === 0) {
                    changedAttrs.splice(0);
                }
                return abort;
            };
            def.then(success, error);
            return def;
        }, _triggerChange = can.Model.prototype._triggerChange, destroyFn = can.Model.prototype.destroy, setupFn = can.Model.prototype.setup;
    can.each([
        'created',
        'updated',
        'destroyed'
    ], function (fn) {
        var prototypeFn = can.Model.prototype[fn];
        can.Model.prototype[fn] = function (attrs) {
            if (attrs && typeof attrs === 'object') {
                attrs = attrs.attr ? attrs.attr() : attrs;
                this._backupStore(attrs);
                attrs = cleanAttrs(this._changedAttrs || [], attrs);
            }
            prototypeFn.call(this, attrs);
        };
    });
    can.extend(can.Model.prototype, {
        setup: function () {
            setupFn.apply(this, arguments);
            this._requestQueue = new can.List();
        },
        _triggerChange: function (attr, how, newVal, oldVal) {
            if (this._changedAttrs) {
                this._changedAttrs.push(attr);
            }
            _triggerChange.apply(this, arguments);
        },
        hasQueuedRequests: function () {
            return this._requestQueue.attr('length') > 1;
        },
        save: function () {
            return queueRequests.apply(this, arguments);
        },
        destroy: function (success, error) {
            if (this.isNew()) {
                return destroyFn.call(this, success, error);
            }
            return queueRequests.call(this, success, error, 'destroy', 'destroyed');
        }
    });
    return can;
});
/*[global-shim-end]*/
(function (){
	window._define = window.define;
	window.define = window.define.orig;
})();