/*!
 * CanJS - 2.1.0-pre.1
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Mon, 05 May 2014 20:37:28 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */
// Loads all observable core modules
steal("can/util", "can/map", "can/list", "can/compute", function (can) {
	can.Observe = can.Map;
	can.Observe.startBatch = can.batch.start;
	can.Observe.stopBatch = can.batch.stop;
	can.Observe.triggerBatch = can.batch.trigger;
	return can;
});
