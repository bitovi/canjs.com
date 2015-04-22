/*!
 * CanJS - 2.2.5
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Wed, 22 Apr 2015 15:03:29 GMT
 * Licensed MIT
 */

/*can@2.2.5#util/array/makeArray*/
define(['can/util/each'], function (can) {
    can.makeArray = function (arr) {
        var ret = [];
        can.each(arr, function (a, i) {
            ret[i] = a;
        });
        return ret;
    };
    return can;
});
