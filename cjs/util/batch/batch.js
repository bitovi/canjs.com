/*!
 * CanJS - 2.2.1
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Tue, 24 Mar 2015 22:13:03 GMT
 * Licensed MIT
 */

/*can@2.2.1#util/batch/batch*/
var can = require('../can.js');
var batchNum = 1, transactions = 0, batchEvents = [], stopCallbacks = [], currentBatchEvents = null;
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
            if (currentBatchEvents !== null) {
                return;
            }
            currentBatchEvents = batchEvents.slice(0);
            var callbacks = stopCallbacks.slice(0), i, len;
            batchEvents = [];
            stopCallbacks = [];
            can.batch.batchNum = batchNum;
            batchNum++;
            if (callStart) {
                can.batch.start();
            }
            for (i = 0; i < currentBatchEvents.length; i++) {
                can.dispatch.apply(currentBatchEvents[i][0], currentBatchEvents[i][1]);
            }
            currentBatchEvents = null;
            for (i = 0, len = callbacks.length; i < callbacks.length; i++) {
                callbacks[i]();
            }
            can.batch.batchNum = undefined;
        }
    },
    trigger: function (item, event, args) {
        if (!item._init) {
            event = typeof event === 'string' ? { type: event } : event;
            if (currentBatchEvents) {
                currentBatchEvents.push([
                    item,
                    [
                        event,
                        args
                    ]
                ]);
            } else if (transactions === 0) {
                return can.dispatch.call(item, event, args);
            } else {
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
