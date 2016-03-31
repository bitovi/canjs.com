/*!
 * CanJS - 2.3.22
 * http://canjs.com/
 * Copyright (c) 2016 Bitovi
 * Thu, 31 Mar 2016 17:02:19 GMT
 * Licensed MIT
 */

/*can@2.3.22#map/setter/setter*/
steal('can/util', 'can/map', function (can) {
    can.dev.warn('can/map/setter is a deprecated plugin and will be removed in a future release. ' + 'can/map/define provides the same functionality in a more complete API.');
    can.classize = function (s, join) {
        var parts = s.split(can.undHash), i = 0;
        for (; i < parts.length; i++) {
            parts[i] = can.capitalize(parts[i]);
        }
        return parts.join(join || '');
    };
    var classize = can.classize, proto = can.Map.prototype, old = proto.__set;
    proto.__set = function (prop, value, current, success, error) {
        var asyncTimer;
        var cap = classize(prop), setName = 'set' + cap, errorCallback = function (errors) {
                clearTimeout(asyncTimer);
                var stub = error && error.call(self, errors);
                if (stub !== false) {
                    can.trigger(self, 'error', [
                        prop,
                        errors
                    ], true);
                }
                return false;
            }, self = this;
        if (this[setName]) {
            can.batch.start();
            value = this[setName](value, function (value) {
                old.call(self, prop, value, current, success, errorCallback);
                clearTimeout(asyncTimer);
            }, errorCallback);
            if (value === undefined) {
                asyncTimer = setTimeout(function () {
                    can.dev.warn('can/map/setter.js: Setter ' + setName + ' did not return a value or call the setter callback.');
                }, can.dev.warnTimeout);
                can.batch.stop();
                return;
            } else {
                old.call(self, prop, value, current, success, errorCallback);
                can.batch.stop();
                return this;
            }
        } else {
            old.call(self, prop, value, current, success, errorCallback);
        }
        return this;
    };
    return can.Map;
});