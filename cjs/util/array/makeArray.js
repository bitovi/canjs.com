/*!
 * CanJS - 2.3.11
 * http://canjs.com/
 * Copyright (c) 2016 Bitovi
 * Thu, 21 Jan 2016 23:41:15 GMT
 * Licensed MIT
 */

/*can@2.3.11#util/array/makeArray*/
var can = require('./each.js');
can.makeArray = function (arr) {
    var ret = [];
    can.each(arr, function (a, i) {
        ret[i] = a;
    });
    return ret;
};
module.exports = can;