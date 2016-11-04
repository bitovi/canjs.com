/*!
 * CanJS - 2.3.27
 * http://canjs.com/
 * Copyright (c) 2016 Bitovi
 * Thu, 15 Sep 2016 21:14:18 GMT
 * Licensed MIT
 */

/*can@2.3.27#map/list/list*/
steal('can/util', 'can/map', 'can/list', 'can/compute', function (can) {
    can.extend(can.List.prototype, {
        filter: function (callback) {
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
                    return callback(element, self.indexOf(element), self);
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
        map: function (callback) {
            var mapped = new can.List();
            var self = this;
            var generator = function (element, index) {
                var compute = can.compute(function () {
                    return callback(element, index, self);
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