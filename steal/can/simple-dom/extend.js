/*!
 * CanJS - 2.3.3
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Mon, 30 Nov 2015 23:22:54 GMT
 * Licensed MIT
 */

/*can-simple-dom@0.2.20#simple-dom/extend*/
steal('', function () {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports['default'] = function (a, b) {
        for (var p in b) {
            a[p] = b[p];
        }
        return a;
    };
    ;
    module.exports = exports['default'];
});