/*util/batch/batch*/
define('can/util/batch', ['can/can'], function (can) {
    var batchNum = 1, transactions = 0, batchEvents = [], stopCallbacks = [];
    can.batch = {
        start: function (batchStopHandler) {
            transactions++;
            if (batchStopHandler) {
                stopCallbacks.push(batchStopHandler);
            }
        },
        stop: function (force, callStart) {
            if (force) {
                transactions = 0;
            } else {
                transactions--;
            }
            if (transactions === 0) {
                var items = batchEvents.slice(0), callbacks = stopCallbacks.slice(0), i, len;
                batchEvents = [];
                stopCallbacks = [];
                batchNum++;
                if (callStart) {
                    can.batch.start();
                }
                for (i = 0, len = items.length; i < len; i++) {
                    can.dispatch.apply(items[i][0], items[i][1]);
                }
                for (i = 0, len = callbacks.length; i < callbacks.length; i++) {
                    callbacks[i]();
                }
            }
        },
        trigger: function (item, event, args) {
            if (!item._init) {
                if (transactions === 0) {
                    return can.dispatch.call(item, event, args);
                } else {
                    event = typeof event === 'string' ? { type: event } : event;
                    event.batchNum = batchNum;
                    batchEvents.push([
                        item,
                        [
                            event,
                            args
                        ]
                    ]);
                }
            }
        }
    };
});
