/*!
 * CanJS - 2.3.16
 * http://canjs.com/
 * Copyright (c) 2016 Bitovi
 * Wed, 17 Feb 2016 00:30:11 GMT
 * Licensed MIT
 */

/*can-simple-dom@0.3.0-pre.3#simple-dom*/
steal('can-simple-dom@0.3.0-pre.3#simple-dom/dom', function (__can_simple_dom_0_3_0_pre_3_simple_dom_dom) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    function _defaults(obj, defaults) {
        var keys = Object.getOwnPropertyNames(defaults);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = Object.getOwnPropertyDescriptor(defaults, key);
            if (value && value.configurable && obj[key] === undefined) {
                Object.defineProperty(obj, key, value);
            }
        }
        return obj;
    }
    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
            return obj;
        } else {
            var newObj = {};
            if (obj != null) {
                for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key))
                        newObj[key] = obj[key];
                }
            }
            newObj['default'] = obj;
            return newObj;
        }
    }
    var _simpleDomDom = __can_simple_dom_0_3_0_pre_3_simple_dom_dom;
    var SimpleDOM = _interopRequireWildcard(_simpleDomDom);
    if (typeof window !== 'undefined') {
        window.SimpleDOM = SimpleDOM;
    }
    _defaults(exports, _interopRequireWildcard(_simpleDomDom));
});