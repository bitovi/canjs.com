/*!
 * CanJS - 2.3.0
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Fri, 23 Oct 2015 20:30:08 GMT
 * Licensed MIT
 */

/*can@2.3.0#util/array/makeArray*/
var can = require('./each.js');
can.makeArray = function (arr) {
    var ret = [];
    can.each(arr, function (a, i) {
        ret[i] = a;
    });
    return ret;
};
module.exports = can;