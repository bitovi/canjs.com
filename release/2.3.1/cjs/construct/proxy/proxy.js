/*!
 * CanJS - 2.3.1
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Thu, 29 Oct 2015 18:42:07 GMT
 * Licensed MIT
 */

/*can@2.3.1#construct/proxy/proxy*/
var can = require('../../util/util.js');
var Construct = require('../construct.js');
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
module.exports = can;