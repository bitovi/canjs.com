/*!
 * CanJS - 2.3.4
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Wed, 02 Dec 2015 22:49:52 GMT
 * Licensed MIT
 */

/*can@2.3.4#list/promise/promise*/
define([
    'can/util/can',
    'can/list'
], function (can) {
    var oldReplace = can.List.prototype.replace;
    can.List.prototype.replace = function (data) {
        var result = oldReplace.apply(this, arguments);
        if (can.isDeferred(data)) {
            can.batch.start();
            this.attr('state', data.state());
            this.removeAttr('reason');
            can.batch.stop();
            var self = this;
            var deferred = this._deferred = new can.Deferred();
            data.then(function () {
                self.attr('state', data.state());
                deferred.resolve(self);
            }, function (reason) {
                can.batch.start();
                self.attr('state', data.state());
                self.attr('reason', reason);
                can.batch.stop();
                deferred.reject(reason);
            });
        }
        return result;
    };
    can.each({
        isResolved: 'resolved',
        isPending: 'pending',
        isRejected: 'rejected'
    }, function (value, method) {
        can.List.prototype[method] = function () {
            return this.attr('state') === value;
        };
    });
    can.each([
        'then',
        'done',
        'fail',
        'always',
        'promise'
    ], function (name) {
        can.List.prototype[name] = function () {
            if (!this._deferred) {
                this._deferred = new can.Deferred();
                this._deferred.resolve(this);
            }
            return this._deferred[name].apply(this._deferred, arguments);
        };
    });
});