/*!
 * CanJS - 2.2.3-pre.0
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Thu, 02 Apr 2015 20:20:11 GMT
 * Licensed MIT
 */

/*can@2.2.3-pre.0#map/lazy/bubble*/
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

