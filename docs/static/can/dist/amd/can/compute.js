/*compute/compute*/
define('can/compute', [
    'can/util/library',
    'can/util/bind',
    'can/util/batch'
], function (can, bind) {
    var stack = [];
    can.__read = function (func, self) {
        stack.push({});
        var value = func.call(self);
        return {
            value: value,
            observed: stack.pop()
        };
    };
    can.__reading = function (obj, event) {
        if (stack.length) {
            stack[stack.length - 1][obj._cid + '|' + event] = {
                obj: obj,
                event: event + ''
            };
        }
    };
    can.__clearReading = function () {
        if (stack.length) {
            var ret = stack[stack.length - 1];
            stack[stack.length - 1] = {};
            return ret;
        }
    };
    can.__setReading = function (o) {
        if (stack.length) {
            stack[stack.length - 1] = o;
        }
    };
    can.__addReading = function (o) {
        if (stack.length) {
            can.simpleExtend(stack[stack.length - 1], o);
        }
    };
    var getValueAndBind = function (func, context, oldObserved, onchanged) {
        var info = can.__read(func, context), newObserveSet = info.observed;
        bindNewSet(oldObserved, newObserveSet, onchanged);
        unbindOldSet(oldObserved, onchanged);
        return info;
    };
    var bindNewSet = function (oldObserved, newObserveSet, onchanged) {
        for (var name in newObserveSet) {
            bindOrPreventUnbinding(oldObserved, newObserveSet, name, onchanged);
        }
    };
    var bindOrPreventUnbinding = function (oldObserved, newObserveSet, name, onchanged) {
        if (oldObserved[name]) {
            delete oldObserved[name];
        } else {
            var obEv = newObserveSet[name];
            obEv.obj.bind(obEv.event, onchanged);
        }
    };
    var unbindOldSet = function (oldObserved, onchanged) {
        for (var name in oldObserved) {
            var obEv = oldObserved[name];
            obEv.obj.unbind(obEv.event, onchanged);
        }
    };
    var updateOnChange = function (compute, newValue, oldValue, batchNum) {
        if (newValue !== oldValue) {
            can.batch.trigger(compute, batchNum ? {
                type: 'change',
                batchNum: batchNum
            } : 'change', [
                newValue,
                oldValue
            ]);
        }
    };
    var setupComputeHandlers = function (compute, func, context, setCachedValue) {
        var readInfo, onchanged, batchNum;
        return {
            on: function (updater) {
                if (!onchanged) {
                    onchanged = function (ev) {
                        if (compute.bound && (ev.batchNum === undefined || ev.batchNum !== batchNum)) {
                            var oldValue = readInfo.value;
                            readInfo = getValueAndBind(func, context, readInfo.observed, onchanged);
                            updater(readInfo.value, oldValue, ev.batchNum);
                            batchNum = batchNum = ev.batchNum;
                        }
                    };
                }
                readInfo = getValueAndBind(func, context, {}, onchanged);
                setCachedValue(readInfo.value);
                compute.hasDependencies = !can.isEmptyObject(readInfo.observed);
            },
            off: function (updater) {
                for (var name in readInfo.observed) {
                    var ob = readInfo.observed[name];
                    ob.obj.unbind(ob.event, onchanged);
                }
            }
        };
    };
    var setupSingleBindComputeHandlers = function (compute, func, context, setCachedValue) {
        var readInfo, oldValue, onchanged, batchNum;
        return {
            on: function (updater) {
                if (!onchanged) {
                    onchanged = function (ev) {
                        if (compute.bound && (ev.batchNum === undefined || ev.batchNum !== batchNum)) {
                            var reads = can.__clearReading();
                            var newValue = func.call(context);
                            can.__setReading(reads);
                            updater(newValue, oldValue, ev.batchNum);
                            oldValue = newValue;
                            batchNum = batchNum = ev.batchNum;
                        }
                    };
                }
                readInfo = getValueAndBind(func, context, {}, onchanged);
                oldValue = readInfo.value;
                setCachedValue(readInfo.value);
                compute.hasDependencies = !can.isEmptyObject(readInfo.observed);
            },
            off: function (updater) {
                for (var name in readInfo.observed) {
                    var ob = readInfo.observed[name];
                    ob.obj.unbind(ob.event, onchanged);
                }
            }
        };
    };
    var isObserve = function (obj) {
            return obj instanceof can.Map || obj && obj.__get;
        }, k = function () {
        };
    can.compute = function (getterSetter, context, eventName, bindOnce) {
        if (getterSetter && getterSetter.isComputed) {
            return getterSetter;
        }
        var computed, on = k, off = k, value, get = function () {
                return value;
            }, set = function (newVal) {
                value = newVal;
            }, setCached = set, args = [], updater = function (newValue, oldValue, batchNum) {
                setCached(newValue);
                updateOnChange(computed, newValue, oldValue, batchNum);
            }, form;
        for (var i = 0, arglen = arguments.length; i < arglen; i++) {
            args[i] = arguments[i];
        }
        computed = function (newVal) {
            if (arguments.length) {
                var old = value;
                var setVal = set.call(context, newVal, old);
                if (computed.hasDependencies) {
                    return get.call(context);
                }
                if (setVal === undefined) {
                    value = get.call(context);
                } else {
                    value = setVal;
                }
                updateOnChange(computed, value, old);
                return value;
            } else {
                if (stack.length && computed.canReadForChangeEvent !== false) {
                    can.__reading(computed, 'change');
                    if (!computed.bound) {
                        can.compute.temporarilyBind(computed);
                    }
                }
                if (computed.bound) {
                    return value;
                } else {
                    return get.call(context);
                }
            }
        };
        if (typeof getterSetter === 'function') {
            set = getterSetter;
            get = getterSetter;
            computed.canReadForChangeEvent = eventName === false ? false : true;
            var handlers = bindOnce ? setupSingleBindComputeHandlers(computed, getterSetter, context || this, setCached) : setupComputeHandlers(computed, getterSetter, context || this, setCached);
            on = handlers.on;
            off = handlers.off;
        } else if (context) {
            if (typeof context === 'string') {
                var propertyName = context, isObserve = getterSetter instanceof can.Map;
                if (isObserve) {
                    computed.hasDependencies = true;
                    var handler;
                    get = function () {
                        return getterSetter.attr(propertyName);
                    };
                    set = function (newValue) {
                        getterSetter.attr(propertyName, newValue);
                    };
                    on = function (update) {
                        handler = function (ev, newVal, oldVal) {
                            update(newVal, oldVal, ev.batchNum);
                        };
                        getterSetter.bind(eventName || propertyName, handler);
                        value = can.__read(get).value;
                    };
                    off = function (update) {
                        getterSetter.unbind(eventName || propertyName, handler);
                    };
                } else {
                    get = function () {
                        return getterSetter[propertyName];
                    };
                    set = function (newValue) {
                        getterSetter[propertyName] = newValue;
                    };
                    on = function (update) {
                        handler = function () {
                            update(get(), value);
                        };
                        can.bind.call(getterSetter, eventName || propertyName, handler);
                        value = can.__read(get).value;
                    };
                    off = function (update) {
                        can.unbind.call(getterSetter, eventName || propertyName, handler);
                    };
                }
            } else {
                if (typeof context === 'function') {
                    value = getterSetter;
                    set = context;
                    context = eventName;
                    form = 'setter';
                } else {
                    value = getterSetter;
                    var options = context, oldUpdater = updater;
                    context = options.context || options;
                    get = options.get || get;
                    set = options.set || function () {
                        return value;
                    };
                    if (options.fn) {
                        var fn = options.fn, data;
                        get = function () {
                            return fn.call(context, value);
                        };
                        if (fn.length === 0) {
                            data = setupComputeHandlers(computed, fn, context, setCached);
                        } else if (fn.length === 1) {
                            data = setupComputeHandlers(computed, function () {
                                return fn.call(context, value);
                            }, context, setCached);
                        } else {
                            updater = function (newVal) {
                                if (newVal !== undefined) {
                                    oldUpdater(newVal, value);
                                }
                            };
                            data = setupComputeHandlers(computed, function () {
                                var res = fn.call(context, value, function (newVal) {
                                        oldUpdater(newVal, value);
                                    });
                                return res !== undefined ? res : value;
                            }, context, setCached);
                        }
                        on = data.on;
                        off = data.off;
                    } else {
                        updater = function () {
                            var newVal = get.call(context);
                            oldUpdater(newVal, value);
                        };
                    }
                    on = options.on || on;
                    off = options.off || off;
                }
            }
        } else {
            value = getterSetter;
        }
        can.cid(computed, 'compute');
        return can.simpleExtend(computed, {
            isComputed: true,
            _bindsetup: function () {
                this.bound = true;
                var oldReading = can.__clearReading();
                on.call(this, updater);
                can.__setReading(oldReading);
            },
            _bindteardown: function () {
                off.call(this, updater);
                this.bound = false;
            },
            bind: can.bindAndSetup,
            unbind: can.unbindAndTeardown,
            clone: function (context) {
                if (context) {
                    if (form === 'setter') {
                        args[2] = context;
                    } else {
                        args[1] = context;
                    }
                }
                return can.compute.apply(can, args);
            }
        });
    };
    var computes, unbindComputes = function () {
            for (var i = 0, len = computes.length; i < len; i++) {
                computes[i].unbind('change', k);
            }
            computes = null;
        };
    can.compute.temporarilyBind = function (compute) {
        compute.bind('change', k);
        if (!computes) {
            computes = [];
            setTimeout(unbindComputes, 10);
        }
        computes.push(compute);
    };
    can.compute.truthy = function (compute) {
        return can.compute(function () {
            var res = compute();
            if (typeof res === 'function') {
                res = res();
            }
            return !!res;
        });
    };
    can.compute.async = function (initialValue, asyncComputer, context) {
        return can.compute(initialValue, {
            fn: asyncComputer,
            context: context
        });
    };
    can.compute.read = function (parent, reads, options) {
        options = options || {};
        var cur = parent, type, prev, foundObs;
        for (var i = 0, readLength = reads.length; i < readLength; i++) {
            prev = cur;
            if (prev && prev.isComputed) {
                if (options.foundObservable) {
                    options.foundObservable(prev, i);
                }
                prev = cur = prev();
            }
            if (isObserve(prev)) {
                if (!foundObs && options.foundObservable) {
                    options.foundObservable(prev, i);
                }
                foundObs = 1;
                if (typeof prev[reads[i]] === 'function' && prev.constructor.prototype[reads[i]] === prev[reads[i]]) {
                    if (options.returnObserveMethods) {
                        cur = cur[reads[i]];
                    } else if (reads[i] === 'constructor' && prev instanceof can.Construct || prev[reads[i]].prototype instanceof can.Construct) {
                        cur = prev[reads[i]];
                    } else {
                        cur = prev[reads[i]].apply(prev, options.args || []);
                    }
                } else {
                    cur = cur.attr(reads[i]);
                }
            } else {
                if (cur == null) {
                    cur = undefined;
                } else {
                    cur = prev[reads[i]];
                }
            }
            type = typeof cur;
            if (cur && cur.isComputed && (!options.isArgument && i < readLength - 1)) {
                if (!foundObs && options.foundObservable) {
                    options.foundObservable(prev, i + 1);
                }
                cur = cur();
            } else if (i < reads.length - 1 && type === 'function' && options.executeAnonymousFunctions && !(can.Construct && cur.prototype instanceof can.Construct)) {
                cur = cur();
            }
            if (i < reads.length - 1 && (cur === null || type !== 'function' && type !== 'object')) {
                if (options.earlyExit) {
                    options.earlyExit(prev, i, cur);
                }
                return {
                    value: undefined,
                    parent: prev
                };
            }
        }
        if (typeof cur === 'function' && !(can.Construct && cur.prototype instanceof can.Construct) && !(can.route && cur === can.route)) {
            if (options.isArgument) {
                if (!cur.isComputed && options.proxyMethods !== false) {
                    cur = can.proxy(cur, prev);
                }
            } else {
                if (cur.isComputed && !foundObs && options.foundObservable) {
                    options.foundObservable(cur, i);
                }
                cur = cur.call(prev);
            }
        }
        if (cur === undefined) {
            if (options.earlyExit) {
                options.earlyExit(prev, i - 1);
            }
        }
        return {
            value: cur,
            parent: prev
        };
    };
    can.compute.set = function (parent, key, value) {
        if (isObserve(parent)) {
            return parent.attr(key, value);
        }
        if (parent[key] && parent[key].isComputed) {
            return parent[key](value);
        }
        if (typeof parent === 'object') {
            parent[key] = value;
        }
    };
    return can.compute;
});
