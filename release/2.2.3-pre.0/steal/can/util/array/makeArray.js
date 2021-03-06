/*!
 * CanJS - 2.2.3-pre.0
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Thu, 02 Apr 2015 01:07:57 GMT
 * Licensed MIT
 */

/*can@2.2.3-pre.0#util/array/makeArray*/
steal('./each.js', function (can) {
	can.makeArray = function (arr) {
		var ret = [];
		can.each(arr, function (a, i) {
			ret[i] = a;
		});
		return ret;
	};
	return can;
});
