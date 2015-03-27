/*!
 * CanJS - 2.2.1
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Fri, 27 Mar 2015 15:59:45 GMT
 * Licensed MIT
 */

/*can@2.2.1#util/bind/bind*/
var can = require('../util.js');
can.bindAndSetup = function () {
    can.addEvent.apply(this, arguments);
    if (!this._init) {
        if (!this._bindings) {
            this._bindings = 1;
            if (this._bindsetup) {
                this._bindsetup();
            }
        } else {
            this._bindings++;
        }
    }
    return this;
};
can.unbindAndTeardown = function (event, handler) {
    var handlers = this.__bindEvents[event] || [];
    var handlerCount = handlers.length;
    can.removeEvent.apply(this, arguments);
    if (this._bindings === null) {
        this._bindings = 0;
    } else {
        this._bindings = this._bindings - (handlerCount - handlers.length);
    }
    if (!this._bindings && this._bindteardown) {
        this._bindteardown();
    }
    return this;
};
module.exports = can;
