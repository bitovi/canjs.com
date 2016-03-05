/*!
 * CanJS - 2.3.19
 * http://canjs.com/
 * Copyright (c) 2016 Bitovi
 * Sat, 05 Mar 2016 00:00:37 GMT
 * Licensed MIT
 */

/*can@2.3.19#map/validations/validations*/
steal('can/util', 'can/map', function (can) {
    var validate = function (attrNames, options, proc) {
        if (!proc) {
            proc = options;
            options = {};
        }
        options = options || {};
        attrNames = typeof attrNames === 'string' ? [attrNames] : can.makeArray(attrNames);
        if (options.testIf && !options.testIf.call(this)) {
            return;
        }
        var self = this;
        can.each(attrNames, function (attrName) {
            if (!self.validations[attrName]) {
                self.validations[attrName] = [];
            }
            self.validations[attrName].push(function (newVal) {
                var res = proc.call(this, newVal, attrName);
                return res === undefined ? undefined : options.message || res;
            });
        });
    };
    var old = can.Map.prototype.__set;
    can.Map.prototype.__set = function (prop, value, current, success, error) {
        var self = this, validations = self.constructor.validations, errorCallback = function (errors) {
                var stub = error && error.call(self, errors);
                if (stub !== false) {
                    can.trigger(self, 'error', [
                        prop,
                        errors
                    ], true);
                }
                return false;
            };
        old.call(self, prop, value, current, success, errorCallback);
        if (validations && validations[prop]) {
            var errors = self.errors(prop);
            if (errors) {
                errorCallback(errors);
            }
        }
        return this;
    };
    can.each([
        can.Map,
        can.Model
    ], function (clss) {
        if (clss === undefined) {
            return;
        }
        var oldSetup = clss.setup;
        can.extend(clss, {
            setup: function (superClass) {
                oldSetup.apply(this, arguments);
                if (!this.validations || superClass.validations === this.validations) {
                    this.validations = {};
                }
            },
            validate: validate,
            validationMessages: {
                format: 'is invalid',
                inclusion: 'is not a valid option (perhaps out of range)',
                lengthShort: 'is too short',
                lengthLong: 'is too long',
                presence: 'can\'t be empty',
                range: 'is out of range',
                numericality: 'must be a number'
            },
            validateFormatOf: function (attrNames, regexp, options) {
                validate.call(this, attrNames, options, function (value) {
                    if (typeof value !== 'undefined' && value !== null && value !== '' && String(value).match(regexp) === null) {
                        return this.constructor.validationMessages.format;
                    }
                });
            },
            validateInclusionOf: function (attrNames, inArray, options) {
                validate.call(this, attrNames, options, function (value) {
                    if (typeof value === 'undefined') {
                        return;
                    }
                    for (var i = 0; i < inArray.length; i++) {
                        if (inArray[i] === value) {
                            return;
                        }
                    }
                    return this.constructor.validationMessages.inclusion;
                });
            },
            validateLengthOf: function (attrNames, min, max, options) {
                validate.call(this, attrNames, options, function (value) {
                    if ((typeof value === 'undefined' || value === null) && min > 0 || typeof value !== 'undefined' && value !== null && value.length < min) {
                        return this.constructor.validationMessages.lengthShort + ' (min=' + min + ')';
                    } else if (typeof value !== 'undefined' && value !== null && value.length > max) {
                        return this.constructor.validationMessages.lengthLong + ' (max=' + max + ')';
                    }
                });
            },
            validatePresenceOf: function (attrNames, options) {
                validate.call(this, attrNames, options, function (value) {
                    if (typeof value === 'undefined' || value === '' || value === null) {
                        return this.constructor.validationMessages.presence;
                    }
                });
            },
            validateRangeOf: function (attrNames, low, hi, options) {
                validate.call(this, attrNames, options, function (value) {
                    if ((typeof value === 'undefined' || value === null) && low > 0 || typeof value !== 'undefined' && value !== null && (value < low || value > hi)) {
                        return this.constructor.validationMessages.range + ' [' + low + ',' + hi + ']';
                    }
                });
            },
            validatesNumericalityOf: function (attrNames) {
                validate.call(this, attrNames, function (value) {
                    var res = !isNaN(parseFloat(value)) && isFinite(value);
                    if (!res) {
                        return this.constructor.validationMessages.numericality;
                    }
                });
            }
        });
    });
    can.extend(can.Map.prototype, {
        errors: function (attrs, newVal) {
            if (attrs) {
                attrs = can.isArray(attrs) ? attrs : [attrs];
            }
            var errors = {}, self = this, addErrors = function (attr, funcs) {
                    can.each(funcs, function (func) {
                        var res = func.call(self, isTest ? newVal : self.attr(attr));
                        if (res) {
                            if (!errors[attr]) {
                                errors[attr] = [];
                            }
                            errors[attr].push(res);
                        }
                    });
                }, validations = this.constructor.validations || {}, isTest = attrs && attrs.length === 1 && arguments.length === 2;
            can.each(attrs || validations, function (funcs, attr) {
                if (typeof attr === 'number') {
                    attr = funcs;
                    funcs = validations[attr];
                }
                addErrors(attr, funcs || []);
            });
            return can.isEmptyObject(errors) ? null : isTest ? errors[attrs[0]] : errors;
        }
    });
    return can.Map;
});