/*!
 * CanJS - 2.2.1
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Tue, 24 Mar 2015 22:13:03 GMT
 * Licensed MIT
 */

/*can@2.2.1#view/stache/intermediate_and_imports*/
define([
    'can/view/mustache_core',
    'can/view/parser'
], function (mustacheCore, parser) {
    return function (source) {
        var template = mustacheCore.cleanLineEndings(source);
        var imports = [], inImport = false, inFrom = false;
        var keepToken = function () {
            return inImport ? false : true;
        };
        var intermediate = parser(template, {
                start: function (tagName, unary) {
                    if (tagName === 'can-import') {
                        inImport = true;
                    }
                    return keepToken();
                },
                end: function (tagName, unary) {
                    if (tagName === 'can-import') {
                        inImport = false;
                        return false;
                    }
                    return keepToken();
                },
                attrStart: function (attrName) {
                    if (attrName === 'from') {
                        inFrom = true;
                    }
                    return keepToken();
                },
                attrEnd: function (attrName) {
                    if (attrName === 'from') {
                        inFrom = false;
                    }
                    return keepToken();
                },
                attrValue: function (value) {
                    if (inFrom && inImport) {
                        imports.push(value);
                    }
                    return keepToken();
                },
                chars: keepToken,
                comment: keepToken,
                special: keepToken,
                done: keepToken
            }, true);
        return {
            intermediate: intermediate,
            imports: imports
        };
    };
});
