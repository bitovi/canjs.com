/*!
 * CanJS - 2.1.0-pre
 * http://canjs.us/
 * Copyright (c) 2014 Bitovi
 * Fri, 11 Apr 2014 19:07:11 GMT
 * Licensed MIT
 * Includes: CanJS default build
 * Download from: http://canjs.us/
 */
steal('can/util', 'can/map/bubble.js', function(can) {
	var bubble = can.bubble;

	return can.extend({}, bubble, {
		childrenOf: function (parentMap, eventName) {
			if(parentMap._nestedReference) {
				parentMap._nestedReference.each(function (child, ref) {
					if (child && child.bind) {
						bubble.toParent(child, parentMap, ref(), eventName);
					}
				});
			} else {
				bubble._each.apply(this, arguments);
			}
		}
	});
});
