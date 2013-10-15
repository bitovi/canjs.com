/*!
 * CanJS - 2.0.0-pre
 * http://canjs.us/
 * Copyright (c) 2013 Bitovi
 * Tue, 15 Oct 2013 15:04:39 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */
steal('can/util/can.js', function(can){
	
		// Which batch of events this is for -- might not want to send multiple
		// messages on the same batch.  This is mostly for event delegation.
	var	batchNum = 1,
		// how many times has start been called without a stop
		transactions = 0,
		// an array of events within a transaction
		batchEvents = [],
		stopCallbacks = [];
	
	
	can.batch = {
		/**
		 * @function can.batch.start startBatch
		 * @parent can.Map.static
		 * @description Begin an event batch.
		 * 
		 * @signature `can.batch.start([batchStopHandler])`
		 * 
		 * @param {Function} [batchStopHandler] a callback that gets called after all batched events have been called
		 *
		 * @body
		 * `startBatch` causes can.Map to begin an event batch. Until `[can.batch.stop]` is called, any
		 * events that would result from calls to `[can.Map::attr attr]` are held back from firing. If you have
		 * lots of changes to make to can.Maps, batching them together can help performance &emdash; especially if
		 * those can.Maps are live-bound to the DOM.
		 *
		 * In this example, you can see how the _first_ and _change_ events are not fired (and their handlers
		 * are not called) until `stopBatch` is called.
		 *
		 * @codestart
		 * var person = new can.Map({
		 *     first: 'Alexis',
		 *     last: 'Abril'
		 * });
		 *
		 * person.bind('first', function() {
		 *     console.log("First name changed."");
		 * }).bind('change', function() {
		 *     console.log("Something changed.");
		 * });
		 * 
		 * can.batch.start();
		 * person.attr('first', 'Alex');
		 * console.log('Still in the batch.');
		 * can.batch.stop();
		 * 
		 * // the log has:
		 * // Still in the batch.
		 * // First name changed.
		 * // Something changed.
		 * @codeend
		 *
		 * You can also pass a callback to `startBatch` which will be called after all the events have
		 * been fired:
		 * @codestart
		 * can.batch.start(function() {
		 *     console.log('The batch is over.');
		 * });
		 * person.attr('first', 'Izzy');
		 * console.log('Still in the batch.');
		 * can.batch.stop();
		 * 
		 * // The console has:
		 * // Still in the batch.
		 * // First name changed.
		 * // Something changed.
		 * // The batch is over.
		 * @codeend
		 *
		 * ## Calling `startBatch` multiple times
		 * 
		 * If you call `startBatch` more than once, `stopBatch` needs to be called
		 * the same number of times before any batched events will fire. For ways
		 * to circumvent this process, see [can.batch.stop].
		 *
		 * Here is an example that demonstrates how events are affected by calling
		 * `startBatch` multiple times.
		 * 
		 * @codestart
		 * var addPeople = function(observable) {
		 *     can.batch.start();
		 *     observable.attr('a', 'Alice');
		 *     observable.attr('b', 'Bob');
		 *     observable.attr('e', 'Eve');
		 *     can.batch.stop();
		 * };
		 *
		 * // In a completely different place:
		 * var list = new can.Map();
		 * list.bind('change', function() {
		 *     console.log('The list changed.');
		 * });
		 *
		 * can.batch.start();
		 * addPeople(list);
		 * console.log('Still in the batch.');
		 *
		 * // Here, the console has:
		 * // Still in the batch.
		 * 
		 * can.batch.stop();
		 * 
		 * // Here, the console has:
		 * // Still in the batch.
		 * // The list changed.
		 * // The list changed.
		 * // The list changed.
		 * @codeend
		 */
		start: function( batchStopHandler ) {
			transactions++;
			batchStopHandler && stopCallbacks.push(batchStopHandler);
		},
		/**
		 * @function can.batch.stop stopBatch
		 * @parent can.Map.static
		 * @description End an event batch.
		 * @signature `can.batch.stop([force[, callStart]])`
		 * @param {bool} [force=false] whether to stop batching events immediately
		 * @param {bool} [callStart=false] whether to call `[can.batch.start startBatch]` after firing batched events
		 * 
		 * @body
		 * `stopBatch` matches an earlier `[can.batch.start]` call. If `stopBatch` has been
		 * called as many times as `startBatch` (or if _force_ is true), all batched events will be
		 * fired and any callbacks passed to `startBatch` since the beginning of the batch will be
		 * called. If _force and _callStart_ are both true, a new batch will be started when all
		 * the events and callbacks have been fired.
		 *
		 * See `[can.batch.start]` for examples of `startBatch` and `stopBatch` in normal use.
		 * 
		 * In this example, the batch is forceably ended in the `addPeople` function.
		 * @codestart
		 * var addPeople = function(observable) {
		 *     can.batch.start();
		 *     observable.attr('a', 'Alice');
		 *     observable.attr('b', 'Bob');
		 *     observable.attr('e', 'Eve');
		 *     can.batch.stop(true);
		 * };
		 *
		 * // In a completely different place:
		 * var list = new can.Map();
		 * list.bind('change', function() {
		 *     console.log('The list changed.');
		 * });
		 *
		 * can.batch.start();
		 * addPeople(list);
		 * console.log('Still in the batch.');
		 *
		 * // Here, the console has:
		 * // Still in the batch.
		 * 
		 * can.batch.stop();
		 * 
		 * // Here, the console has:
		 * // The list changed.
		 * // The list changed.
		 * // The list changed.
		 * // Still in the batch.
		 * @codeend
		 */
		stop: function(force, callStart){
			if(force){
				transactions = 0;
			} else {
				transactions--;
			}
			
			if(transactions == 0){
				var items = batchEvents.slice(0),
					callbacks = stopCallbacks.slice(0);
				batchEvents= [];
				stopCallbacks = [];
				batchNum++;
				callStart && this.startBatch();
				can.each(items, function( args ) {
					can.trigger.apply(can, args);
				});
				can.each(callbacks, function( cb ) {
					cb();
				});
			}
		},
		/**
		 * @function can.batch.trigger triggerBatch
		 * @parent can.Map.static
		 * @description Trigger an event to be added to the current batch.
		 * @signature `can.batch.trigger(item, event [, args])`
		 * @param {can.Map} item the target of the event
		 * @param {String|{type: String}} event the type of event, or an event object with a type given
		 * @param {Array} [args] the parameters to trigger the event with.
		 * 
		 * @body
		 * If events are currently being batched, calling `triggerBatch` adds an event
		 * to the batch. If events are not currently being batched, the event is triggered
		 * immediately.
		 */
		trigger: function( item, event, args ) {
			// Don't send events if initalizing.
			if ( ! item._init) {
				if (transactions == 0 ) {
					return can.trigger(item, event, args);
				} else {
					event = typeof event === "string" ?
						{ type: event } : 
						event;
					event.batchNum = batchNum;
					batchEvents.push([
					item,
					event, 
					args ] );
				}
			}
		}
	}
	
	
})
