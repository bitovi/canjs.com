/*!
 * CanJS - 2.3.4
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Wed, 02 Dec 2015 22:49:52 GMT
 * Licensed MIT
 */

/*can@2.3.4#control/plugin/plugin*/
define([
    'jquery',
    'can/util/library',
    'can/control'
], function ($, can) {
    $ = $ || window.$;
    var i, isAControllerOf = function (instance, controllers) {
            var name = instance.constructor.pluginName || instance.constructor._shortName;
            for (i = 0; i < controllers.length; i++) {
                if (typeof controllers[i] === 'string' ? name === controllers[i] : instance instanceof controllers[i]) {
                    return true;
                }
            }
            return false;
        }, makeArray = can.makeArray, old = can.Control.setup;
    can.Control.setup = function () {
        if (this !== can.Control) {
            var pluginName = this.pluginName || this._fullName;
            if (pluginName !== 'can_control') {
                this.plugin(pluginName);
            }
            old.apply(this, arguments);
        }
    };
    $.fn.extend({
        controls: function () {
            var controllerNames = makeArray(arguments), instances = [], controls, c;
            this.each(function () {
                controls = can.$(this).data('controls');
                if (!controls) {
                    return;
                }
                for (var i = 0; i < controls.length; i++) {
                    c = controls[i];
                    if (!controllerNames.length || isAControllerOf(c, controllerNames)) {
                        instances.push(c);
                    }
                }
            });
            return instances;
        },
        control: function (control) {
            return this.controls.apply(this, arguments)[0];
        }
    });
    can.Control.plugin = function (pluginname) {
        var control = this;
        if (!$.fn[pluginname]) {
            $.fn[pluginname] = function (options) {
                var args = makeArray(arguments), isMethod = typeof options === 'string' && $.isFunction(control.prototype[options]), meth = args[0], returns;
                this.each(function () {
                    var plugin = can.$(this).control(control);
                    if (plugin) {
                        if (isMethod) {
                            returns = plugin[meth].apply(plugin, args.slice(1));
                        } else {
                            plugin.update.apply(plugin, args);
                        }
                    } else {
                        control.newInstance.apply(control, [this].concat(args));
                    }
                });
                return returns !== undefined ? returns : this;
            };
        }
    };
    can.Control.prototype.update = function (options) {
        can.extend(this.options, options);
        this.on();
    };
    return can;
});