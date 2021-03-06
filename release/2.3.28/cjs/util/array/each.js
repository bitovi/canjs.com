/*!
 * CanJS - 2.3.28
 * http://canjs.com/
 * Copyright (c) 2016 Bitovi
 * Thu, 08 Dec 2016 20:53:50 GMT
 * Licensed MIT
 */

/*can@2.3.28#util/array/each*/
var can = require('../can.js');
require('./isArrayLike.js');
can.each = function (elements, callback, context) {
    var i = 0, key, len, item;
    if (elements) {
        if (can.isArrayLike(elements)) {
            if (can.List && elements instanceof can.List) {
                for (len = elements.attr('length'); i < len; i++) {
                    item = elements.attr(i);
                    if (callback.call(context || item, item, i, elements) === false) {
                        break;
                    }
                }
            } else {
                for (len = elements.length; i < len; i++) {
                    item = elements[i];
                    if (callback.call(context || item, item, i, elements) === false) {
                        break;
                    }
                }
            }
        } else if (typeof elements === 'object') {
            if (can.Map && elements instanceof can.Map || elements === can.route) {
                var keys = can.Map.keys(elements);
                for (i = 0, len = keys.length; i < len; i++) {
                    key = keys[i];
                    item = elements.attr(key);
                    if (callback.call(context || item, item, key, elements) === false) {
                        break;
                    }
                }
            } else {
                for (key in elements) {
                    if (Object.prototype.hasOwnProperty.call(elements, key) && callback.call(context || elements[key], elements[key], key, elements) === false) {
                        break;
                    }
                }
            }
        }
    }
    return elements;
};
module.exports = can;