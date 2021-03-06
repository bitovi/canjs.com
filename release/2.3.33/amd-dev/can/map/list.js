/*!
 * CanJS - 2.3.32
 * http://canjs.com/
 * Copyright (c) 2017 Bitovi
 * Mon, 02 Oct 2017 16:48:35 GMT
 * Licensed MIT
 */

/*can@2.3.32#map/list/list*/
define([
    'can/util/library',
    'can/map',
    'can/list',
    'can/compute'
], function (can) {
    can.extend(can.List.prototype, {
        filter: function (callback, thisArg) {
            var filtered = new this.constructor();
            var self = this;
            var generator = function (element, index) {
                var binder = function (ev, val) {
                    var index = filtered.indexOf(element);
                    if (!val && index !== -1) {
                        filtered.splice(index, 1);
                    }
                    if (val && index === -1) {
                        filtered.push(element);
                    }
                };
                var compute = can.compute(function () {
                    return callback.call(thisArg || self, element, self.indexOf(element), self);
                });
                compute.bind('change', binder);
                binder(null, compute());
            };
            this.bind('add', function (ev, data, index) {
                can.each(data, function (element, i) {
                    generator(element, index + i);
                });
            });
            this.bind('remove', function (ev, data, index) {
                can.each(data, function (element, i) {
                    var index = filtered.indexOf(element);
                    if (index !== -1) {
                        filtered.splice(index, 1);
                    }
                });
            });
            this.forEach(generator);
            return filtered;
        },
        map: function (callback, thisArg) {
            var mapped = new can.List();
            var self = this;
            var generator = function (element, index) {
                var compute = can.compute(function () {
                    return callback.call(thisArg || self, element, index, self);
                });
                compute.bind('change', function (ev, val) {
                    mapped.splice(index, 1, val);
                });
                mapped.splice(index, 0, compute());
            };
            this.forEach(generator);
            this.bind('add', function (ev, data, index) {
                can.each(data, function (element, i) {
                    generator(element, index + i);
                });
            });
            this.bind('remove', function (ev, data, index) {
                mapped.splice(index, data.length);
            });
            return mapped;
        }
    });
    return can.List;
});