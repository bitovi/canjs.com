/*!
 * CanJS - 2.3.0-pre.0
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Thu, 30 Apr 2015 21:40:42 GMT
 * Licensed MIT
 */

/*can@2.3.0-pre.0#map/backup/backup*/
var can = require('../../util/util.js');
require('../../compute/compute.js');
require('../map.js');
require('../../util/object/object.js');
var flatProps = function (a, cur) {
    var obj = {};
    for (var prop in a) {
        if (typeof a[prop] !== 'object' || a[prop] === null || a[prop] instanceof Date) {
            obj[prop] = a[prop];
        } else {
            obj[prop] = cur.attr(prop);
        }
    }
    return obj;
};
var oldSetup = can.Map.prototype.setup;
can.extend(can.Map.prototype, {
    setup: function () {
        this._backupStore = can.compute();
        return oldSetup.apply(this, arguments);
    },
    backup: function () {
        this._backupStore(this.attr());
        return this;
    },
    isDirty: function (checkAssociations) {
        return this._backupStore() && !can.Object.same(this.attr(), this._backupStore(), undefined, undefined, undefined, !!checkAssociations);
    },
    restore: function (restoreAssociations) {
        var props = restoreAssociations ? this._backupStore() : flatProps(this._backupStore(), this);
        if (this.isDirty(restoreAssociations)) {
            this.attr(props, true);
        }
        return this;
    }
});
module.exports = can.Map;
