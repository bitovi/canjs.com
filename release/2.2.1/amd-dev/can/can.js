/*!
 * CanJS - 2.2.1
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Tue, 24 Mar 2015 22:13:03 GMT
 * Licensed MIT
 */

/*can@2.2.1#util/can*/
define([], function () {
    var glbl = typeof window !== 'undefined' ? window : global;
    var can = {};
    if (typeof GLOBALCAN === 'undefined' || GLOBALCAN !== false) {
        glbl.can = can;
    }
    can.global = glbl;
    can.k = function () {
    };
    can.isDeferred = can.isPromise = function (obj) {
        return obj && typeof obj.then === 'function' && typeof obj.pipe === 'function';
    };
    can.isMapLike = function (obj) {
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
    can.VERSION = '2.2.1';
    can.simpleExtend = function (d, s) {
        for (var prop in s) {
            d[prop] = s[prop];
        }
        return d;
    };
    can.frag = function (item) {
        var frag;
        if (!item || typeof item === 'string') {
            frag = can.buildFragment(item == null ? '' : '' + item, document.body);
            if (!frag.childNodes.length) {
                frag.appendChild(document.createTextNode(''));
            }
            return frag;
        } else if (item.nodeType === 11) {
            return item;
        } else if (typeof item.nodeType === 'number') {
            frag = document.createDocumentFragment();
            frag.appendChild(item);
            return frag;
        } else if (typeof item.length === 'number') {
            frag = document.createDocumentFragment();
            can.each(item, function (item) {
                frag.appendChild(can.frag(item));
            });
            return frag;
        } else {
            frag = can.buildFragment('' + item, document.body);
            if (!frag.childNodes.length) {
                frag.appendChild(document.createTextNode(''));
            }
            return frag;
        }
    };
    can.scope = function (el, attr) {
        el = can.$(el);
        var scope = can.data(el, 'scope');
        if (!scope) {
            scope = can.Map ? new can.Map() : {};
            can.data(el, 'scope', scope);
        }
        if (attr) {
            return scope.attr(attr);
        } else {
            return scope;
        }
    };
    can['import'] = function (moduleName) {
        var deferred = new can.Deferred();
        if (typeof window.System === 'object') {
            window.System['import'](moduleName).then(can.proxy(deferred.resolve, deferred), can.proxy(deferred.reject, deferred));
        } else if (window.define && window.define.amd) {
            window.require([moduleName], function (value) {
                deferred.resolve(value);
            });
        } else if (window.steal) {
            steal.steal(moduleName, function (value) {
                deferred.resolve(value);
            });
        } else if (window.require) {
            deferred.resolve(window.require(moduleName));
        } else {
            deferred.resolve();
        }
        return deferred.promise();
    };
    can.__reading = function () {
    };
    can.dev = {
        warnTimeout: 5000,
        logLevel: 0,
        warn: function (out) {
            var ll = this.logLevel;
            if (ll < 2) {
                Array.prototype.unshift.call(arguments, 'WARN:');
                if (typeof window !== undefined && window.console && console.warn) {
                    this._logger('warn', Array.prototype.slice.call(arguments));
                } else if (window.console && console.log) {
                    this._logger('log', Array.prototype.slice.call(arguments));
                } else if (window.opera && window.opera.postError) {
                    window.opera.postError('steal.js WARNING: ' + out);
                }
            }
        },
        log: function (out) {
            var ll = this.logLevel;
            if (ll < 1) {
                if (window.console && console.log) {
                    Array.prototype.unshift.call(arguments, 'Info:');
                    this._logger('log', Array.prototype.slice.call(arguments));
                } else if (window.opera && window.opera.postError) {
                    window.opera.postError('steal.js INFO: ' + out);
                }
            }
        },
        _logger: function (type, arr) {
            if (console.log.apply) {
                console[type].apply(console, arr);
            } else {
                console[type](arr);
            }
        }
    };
    return can;
});
