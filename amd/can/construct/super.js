/*!
 * CanJS - 2.3.16
 * http://canjs.com/
 * Copyright (c) 2016 Bitovi
 * Wed, 17 Feb 2016 00:30:11 GMT
 * Licensed MIT
 */

/*can@2.3.16#construct/super/super*/
define([
    'can/util/library',
    'can/construct'
], function (can, Construct) {
    var isFunction = can.isFunction, fnTest = /xyz/.test(function () {
            return this.xyz;
        }) ? /\b_super\b/ : /.*/, getset = [
            'get',
            'set'
        ], getSuper = function (base, name, fn) {
            return function () {
                var tmp = this._super, ret;
                this._super = base[name];
                ret = fn.apply(this, arguments);
                this._super = tmp;
                return ret;
            };
        };
    can.Construct._defineProperty = function (addTo, base, name, descriptor) {
        var _super = Object.getOwnPropertyDescriptor(base, name);
        if (_super) {
            can.each(getset, function (method) {
                if (isFunction(_super[method]) && isFunction(descriptor[method])) {
                    descriptor[method] = getSuper(_super, method, descriptor[method]);
                } else if (!isFunction(descriptor[method])) {
                    descriptor[method] = _super[method];
                }
            });
        }
        Object.defineProperty(addTo, name, descriptor);
    };
    can.Construct._overwrite = function (addTo, base, name, val) {
        addTo[name] = isFunction(val) && isFunction(base[name]) && fnTest.test(val) ? getSuper(base, name, val) : val;
    };
    return can;
});