/*!
 * CanJS - 2.2.9
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Fri, 11 Sep 2015 23:12:43 GMT
 * Licensed MIT
 */

/*can@2.2.9#view/stache/system*/
"format steal";
steal("can/view/stache", "can/view/stache/intermediate_and_imports.js",function(stache, getIntermediateAndImports){

	function translate(load) {
		var intermediateAndImports = getIntermediateAndImports(load.source);
		
		intermediateAndImports.imports.unshift('can/view/stache/stache');
		
		return "define("+JSON.stringify(intermediateAndImports.imports)+",function(stache){" +
			"return stache(" + JSON.stringify(intermediateAndImports.intermediate) + ")" +
		"})";
	}

	return {
		translate: translate
	};

});

