/*[global-shim]*/
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
	var modules = global.define && global.define.modules || {};
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

		global.define = origDefine;
		var result = callback ? callback.apply(null, args) : undefined;
		global.define = ourDefine;

		// Favor CJS module.exports over the return value
		modules[moduleName] = module && module.exports ? module.exports : result;
	};
	global.define.modules = modules;
	global.define.amd = true;
	global.System = {
		define: function(__name, __code){
			global.define = origDefine;
			eval("(function() { " + __code + " \n }).call(global);");
			global.define = ourDefine;
		}
	};
})({},window)
/*map/sort/sort*/
define('can/map/sort/sort', [
    'can/util/util',
    'can/list/list'
], function (can) {
    var oldBubbleRule = can.List._bubbleRule;
    can.List._bubbleRule = function (eventName, list) {
        if (list.comparator) {
            return 'change';
        }
        return oldBubbleRule.apply(this, arguments);
    };
    if (can.Model) {
        var oldModelListBubble = can.Model.List._bubbleRule;
        can.Model.List._bubbleRule = function (eventName, list) {
            if (list.comparator) {
                return 'change';
            }
            return oldModelListBubble.apply(this, arguments);
        };
    }
    var proto = can.List.prototype, _changes = proto._changes, setup = proto.setup;
    can.extend(proto, {
        comparator: undefined,
        sortIndexes: [],
        sortedIndex: function (item) {
            var itemCompare = item.attr(this.comparator), equaled = 0;
            for (var i = 0, length = this.length; i < length; i++) {
                if (item === this[i]) {
                    equaled = -1;
                    continue;
                }
                if (itemCompare <= this[i].attr(this.comparator)) {
                    return i + equaled;
                }
            }
            return i + equaled;
        },
        sort: function (method, silent) {
            var comparator = this.comparator, args = comparator ? [function (a, b) {
                        a = typeof a[comparator] === 'function' ? a[comparator]() : a[comparator];
                        b = typeof b[comparator] === 'function' ? b[comparator]() : b[comparator];
                        return a === b ? 0 : a < b ? -1 : 1;
                    }] : [method];
            if (!silent) {
                can.trigger(this, 'reset');
            }
            return Array.prototype.sort.apply(this, args);
        }
    });
    var getArgs = function (args) {
        return args[0] && can.isArray(args[0]) ? args[0] : can.makeArray(args);
    };
    can.each({
        push: 'length',
        unshift: 0
    }, function (where, name) {
        var proto = can.List.prototype, old = proto[name];
        proto[name] = function () {
            var args = getArgs(arguments), len = where ? this.length : 0;
            var res = old.apply(this, arguments);
            if (this.comparator && args.length) {
                this.sort(null, true);
                can.batch.trigger(this, 'reset', [args]);
                this._triggerChange('' + len, 'add', args, undefined);
            }
            return res;
        };
    });
    proto._changes = function (ev, attr, how, newVal, oldVal) {
        if (this.comparator && /^\d+./.test(attr)) {
            var index = +/^\d+/.exec(attr)[0], item = this[index];
            if (typeof item !== 'undefined') {
                var newIndex = this.sortedIndex(item);
                if (newIndex !== index) {
                    [].splice.call(this, index, 1);
                    [].splice.call(this, newIndex, 0, item);
                    can.trigger(this, 'move', [
                        item,
                        newIndex,
                        index
                    ]);
                    can.trigger(this, 'change', [
                        attr.replace(/^\d+/, newIndex),
                        how,
                        newVal,
                        oldVal
                    ]);
                    return;
                }
            }
        }
        _changes.apply(this, arguments);
    };
    proto.setup = function (instances, options) {
        setup.apply(this, arguments);
        if (this.comparator) {
            this.sort();
        }
    };
    return can.Map;
});
