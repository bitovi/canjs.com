/*!
 * CanJS - 2.2.5
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Wed, 22 Apr 2015 15:03:29 GMT
 * Licensed MIT
 */

/*can@2.2.5#view/stache/utils*/
define(['can/util/library'], function () {
    return {
        isArrayLike: function (obj) {
            return obj && obj.splice && typeof obj.length === 'number';
        },
        isObserveLike: function (obj) {
            return obj instanceof can.Map || obj && !!obj._get;
        },
        emptyHandler: function () {
        },
        jsonParse: function (str) {
            if (str[0] === '\'') {
                return str.substr(1, str.length - 2);
            } else if (str === 'undefined') {
                return undefined;
            } else if (can.global.JSON) {
                return JSON.parse(str);
            } else {
                return eval('(' + str + ')');
            }
        },
        mixins: {
            last: function () {
                return this.stack[this.stack.length - 1];
            },
            add: function (chars) {
                this.last().add(chars);
            },
            subSectionDepth: function () {
                return this.stack.length - 1;
            }
        }
    };
});
