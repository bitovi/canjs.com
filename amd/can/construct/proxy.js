/*!
 * CanJS - 2.3.11
 * http://canjs.com/
 * Copyright (c) 2016 Bitovi
 * Thu, 21 Jan 2016 23:41:15 GMT
 * Licensed MIT
 */

/*can@2.3.11#construct/proxy/proxy*/
define([
    'can/util/library',
    'can/construct'
], function (can, Construct) {
    var isFunction = can.isFunction, isArray = can.isArray, makeArray = can.makeArray, proxy = function (funcs) {
            var args = makeArray(arguments), self;
            funcs = args.shift();
            if (!isArray(funcs)) {
                funcs = [funcs];
            }
            self = this;
            return function class_cb() {
                var cur = args.concat(makeArray(arguments)), isString, length = funcs.length, f = 0, func;
                for (; f < length; f++) {
                    func = funcs[f];
                    if (!func) {
                        continue;
                    }
                    isString = typeof func === 'string';
                    cur = (isString ? self[func] : func).apply(self, cur || []);
                    if (f < length - 1) {
                        cur = !isArray(cur) || cur._use_call ? [cur] : cur;
                    }
                }
                return cur;
            };
        };
    can.Construct.proxy = can.Construct.prototype.proxy = proxy;
    var correctedClasses = [
            can.Map,
            can.Control,
            can.Model
        ], i = 0;
    for (; i < correctedClasses.length; i++) {
        if (correctedClasses[i]) {
            correctedClasses[i].proxy = proxy;
        }
    }
    return can;
});