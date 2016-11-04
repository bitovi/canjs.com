/*!
 * CanJS - 2.2.7
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Fri, 24 Jul 2015 20:57:32 GMT
 * Licensed MIT
 */

/*can@2.2.7#compute/get_value_and_bind*/
steal('can/util', function (can) {
    function observe(func, context, oldInfo, onchanged) {
        var info = getValueAndObserved(func, context), newObserveSet = info.observed, oldObserved = oldInfo.observed;
        if (info.names !== oldInfo.names) {
            bindNewSet(oldObserved, newObserveSet, onchanged);
            unbindOldSet(oldObserved, onchanged);
        }
        can.batch.afterPreviousEvents(function () {
            info.ready = true;
        });
        return info;
    }
    var observedStack = [];
    can.__isRecordingObserves = function () {
        return observedStack.length;
    };
    can.__observe = can.__reading = function (obj, event) {
        if (observedStack.length) {
            var name = obj._cid + '|' + event, top = observedStack[observedStack.length - 1];
            top.names += name;
            top.observed[name] = {
                obj: obj,
                event: event + ''
            };
        }
    };
    can.__notObserve = function (fn) {
        return function () {
            var previousReads = can.__clearObserved();
            var res = fn.apply(this, arguments);
            can.__setObserved(previousReads);
            return res;
        };
    };
    can.__clearObserved = can.__clearReading = function () {
        if (observedStack.length) {
            var ret = observedStack[observedStack.length - 1];
            observedStack[observedStack.length - 1] = {
                names: '',
                observed: {}
            };
            return ret;
        }
    };
    can.__setObserved = can.__setReading = function (o) {
        if (observedStack.length) {
            observedStack[observedStack.length - 1] = o;
        }
    };
    can.__addObserved = can.__addReading = function (o) {
        if (observedStack.length) {
            var last = observedStack[observedStack.length - 1];
            can.simpleExtend(last.observed, o.observed);
            last.names += o.names;
        }
    };
    var getValueAndObserved = function (func, self) {
        observedStack.push({
            names: '',
            observed: {}
        });
        var value = func.call(self);
        var stackItem = observedStack.pop();
        stackItem.value = value;
        return stackItem;
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
    return observe;
});