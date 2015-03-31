/*!
 * CanJS - 2.2.2
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Tue, 31 Mar 2015 17:29:12 GMT
 * Licensed MIT
 */

/*can@2.2.2#util/can*/
/* global global: false */
steal(function () {
	/* global GLOBALCAN */
	var glbl = typeof window !== "undefined" ? window : global;
	
	var can = {};
	if (typeof GLOBALCAN === 'undefined' || GLOBALCAN !== false) {
		glbl.can = can;
	}
	can.global = glbl;

	// An empty function useful for where you need a dummy callback.
	can.k = function(){};

	can.isDeferred = can.isPromise = function (obj) {
		// Returns `true` if something looks like a deferred.
		return obj && typeof obj.then === "function" && typeof obj.pipe === "function";
	};
	can.isMapLike = function(obj){
		return can.Map && (obj instanceof can.Map || obj && obj.__get);
	};

	var cid = 0;
	can.cid = function (object, name) {
		if (!object._cid) {
			cid++;
			object._cid = (name || '') + cid;
		}
		return object._cid;
	};
	can.VERSION = '2.2.2';

	can.simpleExtend = function (d, s) {
		for (var prop in s) {
			d[prop] = s[prop];
		}
		return d;
	};


	can.frag = function(item){
		var frag;
		if(!item || typeof item === "string"){
			frag = can.buildFragment(item == null ? "" : ""+item, document.body);
			// If we have an empty frag...
			if (!frag.childNodes.length) {
				frag.appendChild(document.createTextNode(''));
			}
			return frag;
		} else if(item.nodeType === 11) {
			return item;
		} else if(typeof item.nodeType === "number") {
			frag = document.createDocumentFragment();
			frag.appendChild(item);
			return frag;
		} else if(typeof item.length === "number") {
			frag = document.createDocumentFragment();
			can.each(item, function(item){
				frag.appendChild( can.frag(item) );
			});
			return frag;
		} else {
			frag = can.buildFragment( ""+item, document.body);
			// If we have an empty frag...
			if (!frag.childNodes.length) {
				frag.appendChild(document.createTextNode(''));
			}
			return frag;
		}
	};
	
	// Define the `can.scope` function that can be used to retrieve the `scope` from the element
	can.scope = can.viewModel = function (el, attr, val) {
		el = can.$(el);
		var scope = can.data(el, "scope") || can.data(el, "viewModel");
		if(!scope) {
			scope = new can.Map();
			can.data(el, "scope", scope);
			can.data(el, "viewModel", scope);
		}
		switch (arguments.length) {
			case 0:
			case 1:
				return scope;
			case 2:
				return scope.attr(attr);
			default:
				scope.attr(attr, val);
				return el;
		}
	};
	
	can["import"] = function(moduleName) {
		var deferred = new can.Deferred();
		
		if(typeof window.System === "object") {
			window.System["import"](moduleName).then(can.proxy(deferred.resolve, deferred),
				can.proxy(deferred.reject, deferred));
		} else if(window.define && window.define.amd){
			
			window.require([moduleName], function(value){
				deferred.resolve(value);
			});
			
		} else if(window.steal) {
			
			steal.steal(moduleName, function(value){
				deferred.resolve(value);
			});
			
		} else if(window.require){
			deferred.resolve(window.require(moduleName));
		} else {
			// ideally this will use can.getObject
			deferred.resolve();
		}
		
		return deferred.promise();
	};
	
	// this is here in case can.compute hasn't loaded
	can.__reading = function () {};



	return can;
});

