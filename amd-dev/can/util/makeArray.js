/*!
 * CanJS - 2.2.1
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Fri, 27 Mar 2015 15:59:45 GMT
 * Licensed MIT
 */

/*can@2.2.1#util/array/makeArray*/
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
