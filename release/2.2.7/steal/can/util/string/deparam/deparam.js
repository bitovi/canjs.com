/*!
 * CanJS - 2.2.7
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Fri, 24 Jul 2015 20:57:32 GMT
 * Licensed MIT
 */

/*can@2.2.7#util/string/deparam/deparam*/
steal('can/util', 'can/util/string', function (can) {
    var digitTest = /^\d+$/, keyBreaker = /([^\[\]]+)|(\[\])/g, paramTest = /([^?#]*)(#.*)?$/, prep = function (str) {
            return decodeURIComponent(str.replace(/\+/g, ' '));
        };
    can.extend(can, {
        deparam: function (params) {
            var data = {}, pairs, lastPart;
            if (params && paramTest.test(params)) {
                pairs = params.split('&');
                can.each(pairs, function (pair) {
                    var parts = pair.split('='), key = prep(parts.shift()), value = prep(parts.join('=')), current = data;
                    if (key) {
                        parts = key.match(keyBreaker);
                        for (var j = 0, l = parts.length - 1; j < l; j++) {
                            if (!current[parts[j]]) {
                                current[parts[j]] = digitTest.test(parts[j + 1]) || parts[j + 1] === '[]' ? [] : {};
                            }
                            current = current[parts[j]];
                        }
                        lastPart = parts.pop();
                        if (lastPart === '[]') {
                            current.push(value);
                        } else {
                            current[lastPart] = value;
                        }
                    }
                });
            }
            return data;
        }
    });
    return can;
});