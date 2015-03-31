/*!
 * CanJS - 2.2.2
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Tue, 31 Mar 2015 17:29:12 GMT
 * Licensed MIT
 */

/*can@2.2.2#view/stache/intermediate_and_imports*/
steal("can/view/stache/mustache_core.js", "can/view/parser",function(mustacheCore, parser){
	
	return function(source){
		
		var template = mustacheCore.cleanLineEndings(source);
		var imports = [],
			inImport = false,
			inFrom = false;
		
		var keepToken = function(){
			return inImport ? false : true;
		};
		
		var intermediate = parser(template, {
			start: function( tagName, unary ){
				if(tagName === "can-import") {
					inImport = true;
				}
				return keepToken();
			},
			end: function( tagName, unary ){
				if(tagName === "can-import") {
					inImport = false;
					return false;
				}
				return keepToken();
			},
			attrStart: function( attrName ){
				if(attrName === "from") {
					inFrom = true;
				}
				return keepToken();
			},
			attrEnd:   function( attrName ){
				if(attrName === "from") {
					inFrom = false;
				}
				return keepToken();
			},
			attrValue: function( value ){
				if(inFrom && inImport) {
					imports.push(value);
				}
				return keepToken();
			},
			chars: keepToken,
			comment: keepToken,
			special: keepToken,
			done: keepToken
		}, true);
	    
		return {intermediate: intermediate, imports: imports};
	};

});



