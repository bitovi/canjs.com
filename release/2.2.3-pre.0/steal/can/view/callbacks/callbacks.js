/*!
 * CanJS - 2.2.3-pre.0
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Thu, 02 Apr 2015 01:07:57 GMT
 * Licensed MIT
 */

/*can@2.2.3-pre.0#view/callbacks/callbacks*/
steal("can/util", "can/view",function(can){


	var attr = can.view.attr = function (attributeName, attrHandler) {
		if(attrHandler) {
			if (typeof attributeName === "string") {
				attributes[attributeName] = attrHandler;
			} else {
				regExpAttributes.push({
					match: attributeName,
					handler: attrHandler
				});
			}
		} else {
			var cb = attributes[attributeName];
			if( !cb ) {
				
				for( var i = 0, len = regExpAttributes.length; i < len; i++) {
					var attrMatcher = regExpAttributes[i];
					if(attrMatcher.match.test(attributeName)) {
						cb = attrMatcher.handler;
						break;
					}
				}
			}
			return cb;
		}
	};

	var attributes = {},
		regExpAttributes = [],
		automaticCustomElementCharacters = /[-\:]/;

	var tag = can.view.tag = function (tagName, tagHandler) {
		if(tagHandler) {
			//!steal-remove-start
			if (typeof tags[tagName.toLowerCase()] !== 'undefined') {
				can.dev.warn("Custom tag: " + tagName.toLowerCase() + "is already defined");
			}
			//!steal-remove-end
			// if we have html5shive ... re-generate
			if (can.global.html5) {
				can.global.html5.elements += " " + tagName;
				can.global.html5.shivDocument();
			}
	
			tags[tagName.toLowerCase()] = tagHandler;
		} else {
			var cb = tags[tagName.toLowerCase()];
			if(!cb && automaticCustomElementCharacters.test(tagName)) {
				// empty callback for things that look like special tags
				cb = function(){};
			}
			return cb;
		}
		
	};
	var tags = {};
	
	can.view.callbacks = {
		_tags: tags,
		_attributes: attributes,
		_regExpAttributes: regExpAttributes,
		tag: tag,
		attr: attr,
		// handles calling back a tag callback
		tagHandler: function(el, tagName, tagData){
			var helperTagCallback = tagData.options.attr('tags.' + tagName),
				tagCallback = helperTagCallback || tags[tagName];
	
			// If this was an element like <foo-bar> that doesn't have a component, just render its content
			var scope = tagData.scope,
				res;
				
			if(tagCallback) {
				var reads = can.__clearReading();
				res = tagCallback(el, tagData);
				can.__setReading(reads);
			} else {
				res = scope;
			}
	
			//!steal-remove-start
			if (!tagCallback) {
				can.dev.warn('can/view/scanner.js: No custom element found for ' + tagName);
			}
			//!steal-remove-end
	
			// If the tagCallback gave us something to render with, and there is content within that element
			// render it!
			if (res && tagData.subtemplate) {
	
				if (scope !== res) {
					scope = scope.add(res);
				}
				var result = tagData.subtemplate(scope, tagData.options);
				var frag = typeof result === "string" ? can.view.frag(result) : result;
				can.appendChild(el, frag);
			}
		}
	};
	return can.view.callbacks;
});
