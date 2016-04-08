/*!
 * CanJS - 2.3.23
 * http://canjs.com/
 * Copyright (c) 2016 Bitovi
 * Fri, 08 Apr 2016 17:58:15 GMT
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
/*can@2.3.23#util/function/function*/
define('can/util/function/function', ['can/util/util'], function (can) {
    can.debounce = function (fn, time, context) {
        var timeout;
        return function () {
            var args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(can.proxy(function () {
                fn.apply(this, args);
            }, context || this), time);
        };
    };
    can.throttle = function (fn, time, context) {
        var run;
        return function () {
            var args = arguments;
            var ctx = context || this;
            if (!run) {
                run = true;
                setTimeout(function () {
                    fn.apply(ctx, args);
                    run = false;
                }, time);
            }
        };
    };
    can.defer = function (fn, context) {
        var args = arguments;
        var ctx = context || this;
        setTimeout(function () {
            fn.apply(ctx, args);
        }, 0);
    };
    return can;
});
/*[global-shim-end]*/
(function (){
	window._define = window.define;
	window.define = window.define.orig;
})();