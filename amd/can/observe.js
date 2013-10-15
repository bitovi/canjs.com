/*!
 * CanJS - 2.0.0-pre
 * http://canjs.us/
 * Copyright (c) 2013 Bitovi
 * Tue, 15 Oct 2013 15:04:39 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */
define(["can/util/library", "can/map", "can/list", "can/compute"], function(can){
	can.Observe = can.Map;
	can.Observe.startBatch = can.batch.start;
	can.Observe.stopBatch = can.batch.stop;

	return can;
});