steal.packages({});
steal.has('stealconfig.js','documentjs/site/static/build/static.js','documentjs/site/static/build/content_list.js','can/control/control.js','can/util/jquery/jquery.js','jquery','can/util/can.js','can/util/array/each.js','can/construct/construct.js','can/util/string/string.js','documentjs/site/static/build/content_list.mustache','can/view/mustache/mustache.js','can/view/view.js','can/view/scanner.js','can/view/elements.js','can/observe/compute/compute.js','can/util/bind/bind.js','can/view/render.js','can/view/live.js','can/view/node_lists.js','can/observe/observe.js','documentjs/site/static/build/frame_helper.js','documentjs/site/static/build/demo_frame.js','documentjs/site/static/build/demo_frame.mustache','documentjs/site/static/build/prettify.js','steal/less/less.js','documentjs/site/static/build/app.js','can/can.js','can/control/route/route.js','can/route/route.js','can/util/string/deparam/deparam.js','can/model/model.js','can/view/ejs/ejs.js','can/construct/super/super.js','documentjs/site/static/build/lib/lib.js','documentjs/site/static/build/lib/grayscale.js','documentjs/site/static/build/lib/moment.js','documentjs/site/static/build/models/models.js','documentjs/site/static/build/models/activitySummary.js','documentjs/site/static/build/models/chatLine.js','documentjs/site/static/build/models/configuration.js','documentjs/site/static/build/models/forumPost.js','documentjs/site/static/build/models/githubEvent.js','documentjs/site/static/build/models/githubIssue.js','documentjs/site/static/build/models/plugin.js','documentjs/site/static/build/models/tweet.js','documentjs/site/static/build/controls/controls.js','documentjs/site/static/build/controls/downloadCustomizer.js','documentjs/site/static/build/controls/apiSignature.js','documentjs/site/static/build/controls/benefitTabs.js','documentjs/site/static/build/controls/cdnChooser.js','documentjs/site/static/build/controls/communityTab.js','documentjs/site/static/build/controls/communityTabs.js','documentjs/site/static/build/controls/contentsList.js','documentjs/site/static/build/controls/forumsTab.js','documentjs/site/static/build/controls/githubTab.js','documentjs/site/static/build/controls/heroDownloadCustomizer.js','documentjs/site/static/build/controls/ircTab.js','documentjs/site/static/build/controls/issuesTab.js','documentjs/site/static/build/controls/liveExample.js','documentjs/site/static/build/controls/menu.js','documentjs/site/static/build/controls/pluginsTab.js','documentjs/site/static/build/controls/socialStats.js','documentjs/site/static/build/controls/twitterTab.js');;
steal({id: 'documentjs/site/static/build/production.css', waits: true, has: ['documentjs/site/static/build/styles/styles.less']});
steal('stealconfig.js','documentjs/site/static/build/static.js','documentjs/site/static/build/content_list.js','can/control/control.js','can/util/jquery/jquery.js','jquery','can/util/can.js','can/util/array/each.js','can/construct/construct.js','can/util/string/string.js','documentjs/site/static/build/content_list.mustache','can/view/mustache/mustache.js','can/view/view.js','can/view/scanner.js','can/view/elements.js','can/observe/compute/compute.js','can/util/bind/bind.js','can/view/render.js','can/view/live.js','can/view/node_lists.js','can/observe/observe.js','documentjs/site/static/build/frame_helper.js','documentjs/site/static/build/demo_frame.js','documentjs/site/static/build/demo_frame.mustache','documentjs/site/static/build/prettify.js','steal/less/less.js','documentjs/site/static/build/app.js','can/can.js','can/control/route/route.js','can/route/route.js','can/util/string/deparam/deparam.js','can/model/model.js','can/view/ejs/ejs.js','can/construct/super/super.js','documentjs/site/static/build/lib/lib.js','documentjs/site/static/build/lib/grayscale.js','documentjs/site/static/build/lib/moment.js','documentjs/site/static/build/models/models.js','documentjs/site/static/build/models/activitySummary.js','documentjs/site/static/build/models/chatLine.js','documentjs/site/static/build/models/configuration.js','documentjs/site/static/build/models/forumPost.js','documentjs/site/static/build/models/githubEvent.js','documentjs/site/static/build/models/githubIssue.js','documentjs/site/static/build/models/plugin.js','documentjs/site/static/build/models/tweet.js','documentjs/site/static/build/controls/controls.js','documentjs/site/static/build/controls/downloadCustomizer.js','documentjs/site/static/build/controls/apiSignature.js','documentjs/site/static/build/controls/benefitTabs.js','documentjs/site/static/build/controls/cdnChooser.js','documentjs/site/static/build/controls/communityTab.js','documentjs/site/static/build/controls/communityTabs.js','documentjs/site/static/build/controls/contentsList.js','documentjs/site/static/build/controls/forumsTab.js','documentjs/site/static/build/controls/githubTab.js','documentjs/site/static/build/controls/heroDownloadCustomizer.js','documentjs/site/static/build/controls/ircTab.js','documentjs/site/static/build/controls/issuesTab.js','documentjs/site/static/build/controls/liveExample.js','documentjs/site/static/build/controls/menu.js','documentjs/site/static/build/controls/pluginsTab.js','documentjs/site/static/build/controls/socialStats.js','documentjs/site/static/build/controls/twitterTab.js');
steal.pushPending();
steal.config({
	map: {
		"*": {
			"jquery/jquery.js" : "jquery",
			"can/util/util.js": "can/util/jquery/jquery.js",
			"jquery/": "jquerypp/"
		}
	},
	paths: {
		"jquery/": "jquerypp/",
		"jquery": "can/lib/jquery.1.9.1.js",
		"mootools/mootools.js" : "can/lib/mootools-core-1.4.5.js",
		"dojo/dojo.js" : "can/util/dojo/dojo-1.8.1.js",
		"yui/yui.js" : "can/lib/yui-3.7.3.js",
		"zepto/zepto.js" : "can/lib/zepto.1.0rc1.js"
	},
	shim : {
		jquery: {
			exports: "jQuery"
		}
	},
	ext: {
		js: "js",
		css: "css",
		less: "steal/less/less.js",
		coffee: "steal/coffee/coffee.js",
		ejs: "can/view/ejs/ejs.js",
		mustache: "can/view/mustache/mustache.js"
	}
})
;
steal.executed('stealconfig.js');
if(!window.Bitovi){
	window.Bitovi = {
			URL: {
				BUILDER: 'http://bitbuilder.herokuapp.com/can.custom.js',
				BUILDER_DATA: 'http://bitbuilder.herokuapp.com/canjs',
				BITHUB: 'http://api.bithub.com/api/events/',
				CDN: '//canjs.com/release/'
			}
		}
}
steal(
	// documentjs's dependencies
	"./content_list.js",
	"./frame_helper.js",
	"./styles/styles.less",
	"./prettify",
	
	// canjs.com's stuff
	"./app.js",
	
	function(ContentList, FrameHelper){
	var codes = document.getElementsByTagName("code");
	for(var i = 0; i < codes.length; i ++){
		var code = codes[i];
		if(code.parentNode.nodeName.toUpperCase() === "PRE"){
			code.className = code.className +" prettyprint"
		}
	}
	prettyPrint();
	
	new ContentList(".contents");
	new FrameHelper(".docs")
});
steal.executed('documentjs/site/static/build/static.js');
steal("can/control","./content_list.mustache","jquery","can/observe",function(Control, contentList, $){

	return can.Control({
		init: function() {
			var sections = [];
	
			this.collectSignatures().each(function(ix) {
				var h2 = $('h2', this);
				this.id = 'sig_' + h2.text().replace(/\s/g,"").replace(/[^\w]/g,"_");
				//this.id = encodeURIComponent(h2.text());
				sections.push({id: this.id, text: h2.text()});
			});
	
			this.collectHeadings().each(function(ix) {
				var el = $(this);
				this.id = 'section_' + el.text().replace(/\s/g,"").replace(/[^\w]/g,"_");
				//this.id = encodeURIComponent(el.text());
				sections.push({id: this.id, text: el.text()});
			});
	
			this.element.html(contentList(
				{sections: sections},
				{encode: function() { return encodeURIComponent(this); }}
			));
	
			if(window.location.hash.length) {
				var anchor = $(window.location.hash);
				if(anchor.length) {
					anchor[0].scrollIntoView(true);
				}
			}
		},
		collectSignatures: function() {
			return $('.content .signature');
		},
		collectHeadings: function() {
			return $('.content .comment h2');
		}
	});

});
steal.executed('documentjs/site/static/build/content_list.js');
steal('can/util','can/construct', function( can ) {
	// ## control.js
	// `can.Control`  
	// _Controller_
	
	// Binds an element, returns a function that unbinds.
	var bind = function( el, ev, callback ) {

			can.bind.call( el, ev, callback );

			return function() {
				can.unbind.call(el, ev, callback);
			};
		},
		isFunction = can.isFunction,
		extend = can.extend,
		each = can.each,
		slice = [].slice,
		paramReplacer = /\{([^\}]+)\}/g,
		special = can.getObject("$.event.special", [can]) || {},

		// Binds an element, returns a function that unbinds.
		delegate = function( el, selector, ev, callback ) {
			can.delegate.call(el, selector, ev, callback);
			return function() {
				can.undelegate.call(el, selector, ev, callback);
			};
		},
		
		// Calls bind or unbind depending if there is a selector.
		binder = function( el, ev, callback, selector ) {
			return selector ?
				delegate( el, can.trim( selector ), ev, callback ) : 
				bind( el, ev, callback );
		},
		
		basicProcessor;

	var Control = can.Control = can.Construct(
	/**
	 * @add can.Control
	 */
	//
	/** 
	 * @static
	 */
	{
		// Setup pre-processes which methods are event listeners.
		/**
		 * @hide
		 * 
		 * Setup pre-process which methods are event listeners.
		 * 
		 */
		setup: function() {

			// Allow contollers to inherit "defaults" from super-classes as it 
			// done in `can.Construct`
			can.Construct.setup.apply( this, arguments );

			// If you didn't provide a name, or are `control`, don't do anything.
			if ( can.Control ) {

				// Cache the underscored names.
				var control = this,
					funcName;

				// Calculate and cache actions.
				control.actions = {};
				for ( funcName in control.prototype ) {
					if ( control._isAction(funcName) ) {
						control.actions[funcName] = control._action(funcName);
					}
				}
			}
		},
		// Moves `this` to the first argument, wraps it with `jQuery` if it's an element
		_shifter : function( context, name ) {

			var method = typeof name == "string" ? context[name] : name;

			if ( ! isFunction( method )) {
				method = context[ method ];
			}
			
			return function() {
				context.called = name;
				return method.apply(context, [this.nodeName ? can.$(this) : this].concat( slice.call(arguments, 0)));
			};
		},

		// Return `true` if is an action.
		/**
		 * @hide
		 * @param {String} methodName a prototype function
		 * @return {Boolean} truthy if an action or not
		 */
		_isAction: function( methodName ) {
			
			var val = this.prototype[methodName],
				type = typeof val;
			// if not the constructor
			return (methodName !== 'constructor') &&
				// and is a function or links to a function
				( type == "function" || (type == "string" &&  isFunction(this.prototype[val] ) ) ) &&
				// and is in special, a processor, or has a funny character
				!! ( special[methodName] || processors[methodName] || /[^\w]/.test(methodName) );
		},
		// Takes a method name and the options passed to a control
		// and tries to return the data necessary to pass to a processor
		// (something that binds things).
		/**
		 * @hide
		 * Takes a method name and the options passed to a control
		 * and tries to return the data necessary to pass to a processor
		 * (something that binds things).
		 * 
		 * For performance reasons, this called twice.  First, it is called when 
		 * the Control class is created.  If the methodName is templated
		 * like: "{window} foo", it returns null.  If it is not templated
		 * it returns event binding data.
		 * 
		 * The resulting data is added to this.actions.
		 * 
		 * When a control instance is created, _action is called again, but only
		 * on templated actions.  
		 * 
		 * @param {Object} methodName the method that will be bound
		 * @param {Object} [options] first param merged with class default options
		 * @return {Object} null or the processor and pre-split parts.  
		 * The processor is what does the binding/subscribing.
		 */
		_action: function( methodName, options ) {
			
			// If we don't have options (a `control` instance), we'll run this 
			// later.  
			paramReplacer.lastIndex = 0;
			if ( options || ! paramReplacer.test( methodName )) {
				// If we have options, run sub to replace templates `{}` with a
				// value from the options or the window
				var convertedName = options ? can.sub(methodName, [options, window]) : methodName;
				if(!convertedName) {
					return null;
				}
				// If a `{}` template resolves to an object, `convertedName` will be
				// an array
				var arr = can.isArray(convertedName),

					// Get the name
					name = arr ? convertedName[1] : convertedName,

					// Grab the event off the end
					parts = name.split(/\s+/g),
					event = parts.pop();

				return {
					processor: processors[event] || basicProcessor,
					parts: [name, parts.join(" "), event],
					delegate : arr ? convertedName[0] : undefined
				};
			}
		},
		// An object of `{eventName : function}` pairs that Control uses to 
		// hook up events auto-magically.
		/**
		 * @property {Object.<can.Control.processor>} can.Control.processors processors
		 * @parent can.Control.static
		 * 
		 * @description A collection of hookups for custom events on Controls.
		 *
		 * @body
		 * `processors` is an object that allows you to add new events to bind
		 * to on a control, or to change how existent events are bound. Each
		 * key-value pair of `processors` is a specification that pertains to
		 * an event where the key is the name of the event, and the value is
		 * a function that processes calls to bind to the event.
		 *
		 * The processor function takes five arguments:
		 * 
		 * - _el_: The Control's element.
		 * - _event_: The event type.
		 * - _selector_: The selector preceding the event in the binding used on the Control.
		 * - _callback_: The callback function being bound.
		 * - _control_: The Control the event is bound on.
		 *
		 * Inside your processor function, you should bind _callback_ to the event, and
		 * return a function for can.Control to call when _callback_ needs to be unbound.
		 * (If _selector_ is defined, you will likely want to use some form of delegation
		 * to bind the event.)
		 *
		 * Here is a Control with a custom event processor set and two callbacks bound
		 * to that event:
		 *
		 * @codestart
		 * can.Control.processors.birthday = function(el, ev, selector, callback, control) {
		 *   if(selector) {
		 *     myFramework.delegate(ev, el, selector, callback);
		 *     return function() { myFramework.undelegate(ev, el, selector, callback); };
		 *   } else {
	     *     myFramework.bind(ev, el, callback);
		 *     return function() { myFramework.unbind(ev, el, callback); };  
		 *   }
		 * };
		 *
		 * can.Control("EventTarget", { }, {
		 *   'birthday': function(el, ev) {
		 *     // do something appropriate for the occasion
		 *   },
		 *   '.grandchild birthday': function(el, ev) {
		 *     // do something appropriate for the occasion
		 *   }
		 * });
		 *
		 * var target = new EventTarget('#person');
		 * @codeend
		 *
		 * When `target` is initialized, can.Control will call `can.Control.processors.birthday`
		 * twice (because there are two event hookups for the _birthday_ event). The first
		 * time it's called, the arguments will be:
		 * 
		 * - _el_: A NodeList that wraps the element with id 'person'.
		 * - _ev_: `'birthday'`
		 * - _selector_: `''`
		 * - _callback_: The function assigned to `' birthday'` in the prototype section of `EventTarget`'s
		 * definition.
		 * - _control_: `target` itself.
		 * 
		 * The second time, the arguments are slightly different:
		 * 
		 * - _el_: A NodeList that wraps the element with id 'person'.
		 * - _ev_: `'birthday'`
		 * - _selector_: `'.grandchild'`
		 * - _callback_: The function assigned to `'.grandchild birthday'` in the prototype section of `EventTarget`'s
		 * definition.
		 * - _control_: `target` itself.
		 *
		 * can.Control already has processors for these events:
		 * 
		 *   - change 
		 *   - click 
		 *   - contextmenu 
		 *   - dblclick 
		 *   - focusin
		 *   - focusout
		 *   - keydown 
		 *   - keyup 
		 *   - keypress 
		 *   - mousedown 
		 *   - mouseenter
		 *   - mouseleave
		 *   - mousemove 
		 *   - mouseout 
		 *   - mouseover 
		 *   - mouseup 
		 *   - reset 
		 *   - resize 
		 *   - scroll 
		 *   - select 
		 *   - submit  
		 */
		processors: {},
		// A object of name-value pairs that act as default values for a 
		// control instance
		defaults: {}
		/**
		 * @property {Object} can.Control.defaults defaults
		 * @parent can.Control.static
		 * @description Default values for the Control's options.
		 *
		 * @body
		 * `defaults` provides default values for a Control's options.
		 * Options passed into the constructor function will be shallowly merged
		 * into the values from defaults in [can.Control::setup], and
		 * the result will be stored in [can.Control::options this.options].
		 * 
		 *     Message = can.Control.extend({
		 *       defaults: {
		 *         message: "Hello World"
		 *       }
		 *     }, {
		 *       init: function(){
		 *         this.element.text( this.options.message );
		 *       }
		 *     });
		 *
		 *     new Message( "#el1" ); //writes "Hello World"
		 *     new Message( "#el12", { message: "hi" } ); //writes hi
		 */
	},
	{
		/**
		 * @prototype
		 */
		// Sets `this.element`, saves the control in `data, binds event
		// handlers.
		/**
		 * @property {NodeList} can.Control.prototype.element element
		 * @parent can.Control.prototype
		 * @description The element associated with this control.
		 * 
		 * @body
		 * The library-wrapped element this control is associated with,
		 * as passed into the constructor. If you want to change the element
		 * that a Control will attach to, you should do it in [can.Control::setup setup].
		 * If you change the element later, make sure to call [can.Control::on on]
		 * to rebind all the bindings.
		 *
		 * If `element` is removed from the DOM, [can.Control::destroy] will
		 * be called and the Control will be destroyed.
		 */
		//
		/**
		 * @function can.Control.prototype.setup setup
		 * @parent can.Control.prototype
		 * @description Perform pre-initialization logic.
		 * @signature `control.setup(element, options)`
		 * @param {HTMLElement|NodeList|String} element The element as passed to the constructor.
		 * @param {Object} [options] option values for the control.  These get added to
		 * this.options and merged with [can.Control.static.defaults defaults].
		 * @return {undefined|Array} return an array if you want to change what init is called with. By
		 * default it is called with the element and options passed to the control.
		 * 
		 * @body
		 * Setup is where most of control's magic happens.  It does the following:
		 * 
		 * ### Sets this.element
		 * 
		 * The first parameter passed to new Control( el, options ) is expected to be 
		 * an element.  This gets converted to a Wrapped NodeList element and set as
		 * [can.Control.prototype.element this.element].
		 * 
		 * ### Adds the control's name to the element's className
		 * 
		 * Control adds it's plugin name to the element's className for easier 
		 * debugging.  For example, if your Control is named "Foo.Bar", it adds
		 * "foo_bar" to the className.
		 * 
		 * ### Saves the control in $.data
		 * 
		 * A reference to the control instance is saved in $.data.  You can find 
		 * instances of "Foo.Bar" like: 
		 * 
		 *     $( '#el' ).data( 'controls' )[ 'foo_bar' ]
		 *
		 * ### Merges Options
		 * Merges the default options with optional user-supplied ones.
		 * Additionally, default values are exposed in the static [can.Control.static.defaults defaults] 
		 * so that users can change them.
		 * 
		 * ### Binds event handlers
		 * 
		 * Setup does the event binding described in [can.Control].
		 */
		setup: function( element, options ) {

			var cls = this.constructor,
				pluginname = cls.pluginName || cls._fullName,
				arr;

			// Want the raw element here.
			this.element = can.$(element)

			if ( pluginname && pluginname !== 'can_control') {
				// Set element and `className` on element.
				this.element.addClass(pluginname);
			}
			
			(arr = can.data(this.element,"controls")) || can.data(this.element,"controls",arr = []);
			arr.push(this);
			
			// Option merging.
			/**
			 * @property {Object} can.Control.prototype.options options
			 * @parent can.Control.prototype
			 * 
			 * @description
			 * 
			 * Options used to configure a control.
			 * 
			 * @body
			 * 
			 * The `this.options` property is an Object that contains
			 * configuration data passed to a control when it is
			 * created (`new can.Control(element, options)`). 
			 * 
			 * In the following example, an options object with
			 * a message is passed to a `Greeting` control. The 
			 * `Greeting` control changes the text of its [can.Control::element element] 
			 * to the options' message value.
			 * 
			 *     var Greeting = can.Control.extend({
			 *       init: function(){
			 *         this.element.text( this.options.message )  
			 *       }  
			 *     })
			 *     
			 *     new Greeting("#greeting",{messgae: "I understand this.options"})
			 * 
			 * The options argument passed when creating the control
			 * is merged with [can.Control.defaults defaults] in
			 * [can.Control.prototype.setup setup].
			 * 
			 * In the following example, if no message property is provided,
			 * the defaults' messgae property is used.
			 * 
			 *     var Greeting = can.Control.extend({
			 *       defaults: {
			 *         message: "Defaults merged into this.options"
			 *       }
			 *     },{
			 *       init: function(){
			 *         this.element.text( this.options.message )  
			 *       }  
			 *     })
			 *     
			 *     new Greeting("#greeting")
			 * 
			 */
			this.options = extend({}, cls.defaults, options);

			// Bind all event handlers.
			this.on();

			// Gets passed into `init`.
			/**
			 * @property {can.NodeList} can.Control.prototype.element element
			 * 
			 * @description The element the Control is associated with.
			 * 
			 * @parent can.Control.prototype
			 * 
			 * @body
			 * 
			 * The control instance's HTMLElement (or window) wrapped by the 
			 * util library for ease of use. It is set by the first
			 * parameter to `new can.Construct( element, options )` 
			 * in [can.Control::setup].  By default, a control listens to events on `this.element`.
			 * 
			 * ### Quick Example
			 * 
			 * The following `HelloWorld` control sets the control`s text to "Hello World":
			 * 
			 *     HelloWorld = can.Control({
			 *       init: function(){
			 * 	       this.element.text( 'Hello World' );
			 *       }
			 *     });
			 *     
			 *     // create the controller on the element
			 *     new HelloWorld( document.getElementById( '#helloworld' ) );
			 * 
			 * ## Wrapped NodeList
			 * 
			 * `this.element` is a wrapped NodeList of one HTMLELement (or window).  This
			 * is for convience in libraries like jQuery where all methods operate only on a
			 * NodeList.  To get the raw HTMLElement, write:
			 * 
			 *     this.element[0] //-> HTMLElement
			 * 
			 * The following details the NodeList used by each library with 
			 * an example of updating its text:
			 * 
			 * __jQuery__ `jQuery( HTMLElement )`
			 * 
			 *     this.element.text("Hello World")
			 * 
			 * __Zepto__ `Zepto( HTMLElement )`
			 * 
			 *     this.element.text("Hello World")
			 * 
			 * __Dojo__ `new dojo.NodeList( HTMLElement )`
			 * 
			 *     this.element.text("Hello World")
			 * 
			 * __Mootools__ `$$( HTMLElement )`
			 * 
			 *     this.element.empty().appendText("Hello World")
			 * 
			 * __YUI__ 
			 * 
			 *     this.element.set("text", "Hello World")
			 * 
			 * 
			 * ## Changing `this.element`
			 * 
			 * Sometimes you don't want what's passed to `new can.Control`
			 * to be this.element.  You can change this by overwriting
			 * setup or by unbinding, setting this.element, and rebinding.
			 * 
			 * ### Overwriting Setup
			 * 
			 * The following Combobox overwrites setup to wrap a
			 * select element with a div.  That div is used 
			 * as `this.element`. Notice how `destroy` sets back the
			 * original element.
			 * 
			 *     Combobox = can.Control({
			 *       setup: function( el, options ) {
			 *          this.oldElement = $( el );
			 *          var newEl = $( '<div/>' );
			 *          this.oldElement.wrap( newEl );
			 *          can.Control.prototype.setup.call( this, newEl, options );
			 *       },
			 *       init: function() {
			 *          this.element //-> the div
			 *       },
			 *       ".option click": function() {
			 *         // event handler bound on the div
			 *       },
			 *       destroy: function() {
			 *          var div = this.element; //save reference
			 *          can.Control.prototype.destroy.call( this );
			 *          div.replaceWith( this.oldElement );
			 *       }
			 *     });
			 * 
			 * ### unbinding, setting, and rebinding.
			 * 
			 * You could also change this.element by calling
			 * [can.Control::off], setting this.element, and 
			 * then calling [can.Control::on] like:
			 * 
			 *     move: function( newElement ) {
			 *        this.off();
			 *        this.element = $( newElement );
			 *        this.on();
			 *     }
			 */
			return [this.element, this.options];
		},
		/**
		 * @function can.Control.prototype.on on
		 * @parent can.Control.prototype
		 * 
		 * @description Bind an event handler to a Control, or rebind all event handlers on a Control.
		 * 
		 * @signature `control.on([el,] selector, eventName, func)`
		 * @param {HTMLElement|jQuery collection|Object} [el=this.element]
		 * The element to be bound.  If no element is provided, the control's element is used instead.
		 * @param {CSSSelectorString} selector A css selector for event delegation.
		 * @param {String} eventName The event to listen for.
		 * @param {Function|String} func A callback function or the String name of a control function.  If a control
		 * function name is given, the control function is called back with the bound element and event as the first
		 * and second parameter.  Otherwise the function is called back like a normal bind.
		 * @return {Number} The id of the binding in this._bindings
		 * 
		 * @body
		 * `on(el, selector, eventName, func)` binds an event handler for an event to a selector under the scope of the given element.
		 *
		 * @signature `control.on()`
		 * 
		 * Rebind all of a control's event handlers.
		 * 
		 * @return {Number} The number of handlers bound to this Control.
		 *
		 * @body
		 * `this.on()` is used to rebind 
		 * all event handlers when [can.Control::options this.options] has changed.  It
		 * can also be used to bind or delegate from other elements or objects.
		 * 
		 * ## Rebinding
		 * 
		 * By using templated event handlers, a control can listen to objects outside
		 * `this.element`.  This is extremely common in MVC programming.  For example,
		 * the following control might listen to a task model's `completed` property and
		 * toggle a strike className like:
		 * 
		 *     TaskStriker = can.Control({
		 *       "{task} completed": function(){
		 * 	       this.update();
		 *       },
		 *       update: function(){
		 *         if ( this.options.task.completed ) {
		 * 	         this.element.addClass( 'strike' );
		 * 	       } else {
		 *           this.element.removeClass( 'strike' );
		 *         }
		 *       }
		 *     });
		 * 
		 *     var taskstriker = new TaskStriker({ 
		 *       task: new Task({ completed: 'true' }) 
		 *     });
		 * 
		 * To update the taskstriker's task, add a task method that updates
		 * this.options and rebinds the event handlers for the new task like:
		 * 
		 *     TaskStriker = can.Control({
		 *       "{task} completed": function(){
		 * 	       this.update();
		 *       },
		 *       update: function() {
		 *         if ( this.options.task.completed ) {
		 * 	         this.element.addClass( 'strike' );
		 * 	       } else {
		 *           this.element.removeClass( 'strike' );
		 *         }
		 *       },
		 *       task: function( newTask ) {
		 *         this.options.task = newTask;
		 *         this.on();
		 *         this.update();
		 *       }
		 *     });
		 * 
		 *     var taskstriker = new TaskStriker({ 
		 *       task: new Task({ completed: true }) 
		 *     });
		 *     taskstriker.task( new TaskStriker({ 
		 *       task: new Task({ completed: false }) 
		 *     }));
		 * 
		 * ## Adding new events
		 * 
		 * If events need to be bound to outside of the control and templated event handlers
		 * are not sufficent, you can call this.on to bind or delegate programatically:
		 * 
		 *     init: function() {
		 *        // calls somethingClicked( el, ev )
		 *        this.on( 'click', 'somethingClicked' ); 
		 *     
		 *        // calls function when the window is clicked
		 *        this.on( window, 'click', function( ev ) {
		 *          //do something
		 *        });
		 *     },
		 *     somethingClicked: function( el, ev ) {
		 *       
		 *     }
		 */
		on: function( el, selector, eventName, func ) {
			if ( ! el ) {

				// Adds bindings.
				this.off();

				// Go through the cached list of actions and use the processor 
				// to bind
				var cls = this.constructor,
					bindings = this._bindings,
					actions = cls.actions,
					element = this.element,
					destroyCB = can.Control._shifter(this,"destroy"),
					funcName, ready;
					
				for ( funcName in actions ) {
					// Only push if we have the action and no option is `undefined`
					if ( actions.hasOwnProperty( funcName ) &&
						(ready = actions[funcName] || cls._action(funcName, this.options))) {
						bindings.push(ready.processor(ready.delegate || element,
							ready.parts[2], ready.parts[1], funcName, this));
					}
				}
	
	
				// Setup to be destroyed...  
				// don't bind because we don't want to remove it.
				can.bind.call(element,"destroyed", destroyCB);
				bindings.push(function( el ) {
					can.unbind.call(el,"destroyed", destroyCB);
				});
				return bindings.length;
			}

			if ( typeof el == 'string' ) {
				func = eventName;
				eventName = selector;
				selector = el;
				el = this.element;
			}

			if(func === undefined) {
				func = eventName;
				eventName = selector;
				selector = null;
			}

			if ( typeof func == 'string' ) {
				func = can.Control._shifter(this,func);
			}

			this._bindings.push( binder( el, eventName, func, selector ));

			return this._bindings.length;
		},
		// Unbinds all event handlers on the controller.
		/**
		 * @hide
		 * Unbinds all event handlers on the controller. You should never
		 * be calling this unless in use with [can.Control::on].
		 */
		off : function(){
			var el = this.element[0]
			each(this._bindings || [], function( value ) {
				value(el);
			});
			// Adds bindings.
			this._bindings = [];
		},
		// Prepares a `control` for garbage collection
		/**
		 * @description Remove a Control from an element and clean up the Control.
		 * @signature `control.destroy()`
		 * 
		 * Prepares a control for garbage collection and is a place to
		 * reset any changes the control has made.  
		 * 
		 * @function can.Control.prototype.destroy destroy
		 * @parent can.Control.prototype
		 * 
		 * @body
		 * 
		 * 
		 * ## Allowing Garbage Collection
		 * 
		 * Destroy is called whenever a control's element is removed from the page using 
		 * the library's standard HTML modifier methods.  This means that you
		 * don't have to call destroy yourself and it 
		 * will be called automatically when appropriate.  
		 * 
		 * The following `Clicker` widget listens on the window for clicks and updates
		 * its element's innerHTML.  If we remove the element, the window's event handler
		 * is removed auto-magically:
		 *  
		 * 
		 *      Clickr = can.Control({
		 *       "{window} click": function() {
		 * 	       this.element.html( this.count ? 
		 * 	                          this.count++ : this.count = 0 );
		 *       }  
		 *     });
		 *     
		 *     // create a clicker on an element
		 *     new Clicker( "#clickme" );
		 * 
		 *     // remove the element
		 *     $( '#clickme' ).remove();
		 * 
		 * 
		 * The methods you can use that will destroy controls automatically by library:
		 * 
		 * __jQuery and Zepto__
		 * 
		 *   - $.fn.remove
		 *   - $.fn.html
		 *   - $.fn.replaceWith
		 *   - $.fn.empty
		 * 
		 * __Dojo__
		 * 
		 *   - dojo.destroy
		 *   - dojo.empty
		 *   - dojo.place (with the replace option)
		 * 
		 * __Mootools__
		 * 
		 *   - Element.prototype.destroy
		 * 
		 * __YUI__
		 * 
		 *   - Y.Node.prototype.remove
		 *   - Y.Node.prototype.destroy
		 * 
		 * 
		 * ## Teardown in Destroy
		 * 
		 * Sometimes, you want to reset a controlled element back to its
		 * original state when the control is destroyed.  Overwriting destroy
		 * lets you write teardown code of this manner.  __When overwriting
		 * destroy, make sure you call Control's base functionality__.
		 * 
		 * The following example changes an element's text when the control is
		 * created and sets it back when the control is removed:
		 * 
		 *     Changer = can.Control.extend({
		 *       init: function() {
		 *         this.oldText = this.element.text();
		 *         this.element.text( "Changed!!!" );
		 *       },
		 *       destroy: function() {
		 *         this.element.text( this.oldText );
		 *         can.Control.prototype.destroy.call( this );
		 *       }
		 *     });
		 *     
		 *     // create a changer which changes #myel's text
		 *     var changer = new Changer( '#myel' );
		 * 
		 *     // destroy changer which will reset it
		 *     changer.destroy();
		 * 
		 * ## Base Functionality
		 * 
		 * Control prepares the control for garbage collection by:
		 * 
		 *   - unbinding all event handlers
		 *   - clearing references to this.element and this.options
		 *   - clearing the element's reference to the control
		 *   - removing it's [can.Control.pluginName] from the element's className
		 * 
		 */
		destroy: function() {
			//Control already destroyed
			if(this.element === null) {
				
				return;
			}
			var Class = this.constructor,
				pluginName = Class.pluginName || Class._fullName,
				controls;
			
			// Unbind bindings.
			this.off();
			
			if(pluginName && pluginName !== 'can_control'){
				// Remove the `className`.
				this.element.removeClass(pluginName);
			}
			
			// Remove from `data`.
			controls = can.data(this.element,"controls");
			controls.splice(can.inArray(this, controls),1);
			
			can.trigger( this, "destroyed"); // In case we want to know if the `control` is removed.
			
			this.element = null;
		}
	});

	var processors = can.Control.processors,
	// Processors do the binding.
	// They return a function that unbinds when called.  
	//
	// The basic processor that binds events.
	basicProcessor = function( el, event, selector, methodName, control ) {
		return binder( el, event, can.Control._shifter(control, methodName), selector);
	};




	// Set common events to be processed as a `basicProcessor`
	each(["change", "click", "contextmenu", "dblclick", "keydown", "keyup",
		"keypress", "mousedown", "mousemove", "mouseout", "mouseover",
		"mouseup", "reset", "resize", "scroll", "select", "submit", "focusin",
		"focusout", "mouseenter", "mouseleave",
		// #104 - Add touch events as default processors
		// TOOD feature detect?
		"touchstart", "touchmove", "touchcancel", "touchend", "touchleave"
	], function( v ) {
		processors[v] = basicProcessor;
	});

	return Control;
});
;
steal.executed('can/control/control.js');
steal('jquery', 'can/util/can.js', 'can/util/array/each.js', function($, can) {
	// _jQuery node list._
	$.extend( can, $, {
		trigger: function( obj, event, args ) {
			if ( obj.trigger ) {
				obj.trigger( event, args );
			} else {
				$.event.trigger( event, args, obj, true );
			}
		},
		addEvent: function(ev, cb){
			$([this]).bind(ev, cb);
			return this;
		},
		removeEvent: function(ev, cb){
			$([this]).unbind(ev, cb);
			return this;
		},
		// jquery caches fragments, we always needs a new one
		buildFragment : function(elems, context){
			var oldFragment = $.buildFragment,
				ret;

			elems = [elems];
			// Set context per 1.8 logic
			context = context || document;
			context = !context.nodeType && context[0] || context;
			context = context.ownerDocument || context;

			ret = oldFragment.call( jQuery, elems, context);

			return ret.cacheable ? $.clone(ret.fragment) : ret.fragment || ret;
		},
		$: $,
		each: can.each
	});

	// Wrap binding functions.
	$.each(['bind','unbind','undelegate','delegate'],function(i,func){
		can[func] = function(){
			var t = this[func] ? this : $([this]);
			t[func].apply(t, arguments);
			return this;
		};
	});

	// Wrap modifier functions.
	$.each(["append","filter","addClass","remove","data","get"], function(i,name){
		can[name] = function(wrapped){
			return wrapped[name].apply(wrapped, can.makeArray(arguments).slice(1));
		};
	});

	// Memory safe destruction.
	var oldClean = $.cleanData;

	$.cleanData = function( elems ) {
		$.each( elems, function( i, elem ) {
			if ( elem ) {
				can.trigger(elem,"destroyed",[],false);
			}
		});
		oldClean(elems);
	};

	return can;
});
;
steal.executed('can/util/jquery/jquery.js');
/**
 * @documentjs-ignore
 */
/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */
(function( window, undefined ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//"use strict";
var
	// The deferred used on DOM ready
	readyList,

	// A central reference to the root jQuery(document)
	rootjQuery,

	// Support: IE<9
	// For `typeof node.method` instead of `node.method !== undefined`
	core_strundefined = typeof undefined,

	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,
	location = window.location,

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$,

	// [[Class]] -> type pairs
	class2type = {},

	// List of deleted data cache ids, so we can reuse them
	core_deletedIds = [],

	core_version = "1.9.1",

	// Save a reference to some core methods
	core_concat = core_deletedIds.concat,
	core_push = core_deletedIds.push,
	core_slice = core_deletedIds.slice,
	core_indexOf = core_deletedIds.indexOf,
	core_toString = class2type.toString,
	core_hasOwn = class2type.hasOwnProperty,
	core_trim = core_version.trim,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	},

	// Used for matching numbers
	core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,

	// Used for splitting on whitespace
	core_rnotwhite = /\S+/g,

	// Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	// Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

	// JSON RegExp
	rvalidchars = /^[\],:{}\s]*$/,
	rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
	rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
	rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	},

	// The ready event handler
	completed = function( event ) {

		// readyState === "complete" is good enough for us to call the dom ready in oldIE
		if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
			detach();
			jQuery.ready();
		}
	},
	// Clean-up method for dom ready events
	detach = function() {
		if ( document.addEventListener ) {
			document.removeEventListener( "DOMContentLoaded", completed, false );
			window.removeEventListener( "load", completed, false );

		} else {
			document.detachEvent( "onreadystatechange", completed );
			window.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return rootjQuery.ready( selector );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	},

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	// The number of elements contained in the matched element set
	size: function() {
		return this.length;
	},

	toArray: function() {
		return core_slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num == null ?

			// Return a 'clean' array
			this.toArray() :

			// Return just the object
			( num < 0 ? this[ this.length + num ] : this[ num ] );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	ready: function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	},

	slice: function() {
		return this.pushStack( core_slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: core_push,
	sort: [].sort,
	splice: [].splice
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( length === i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	noConflict: function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	},

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( !document.body ) {
			return setTimeout( jQuery.ready );
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.trigger ) {
			jQuery( document ).trigger("ready").off("ready");
		}
	},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type(obj) === "array";
	},

	isWindow: function( obj ) {
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {
		return !isNaN( parseFloat(obj) ) && isFinite( obj );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return String( obj );
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ core_toString.call(obj) ] || "object" :
			typeof obj;
	},

	isPlainObject: function( obj ) {
		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {
			// Not own constructor property must be Object
			if ( obj.constructor &&
				!core_hasOwn.call(obj, "constructor") &&
				!core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
				return false;
			}
		} catch ( e ) {
			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.

		var key;
		for ( key in obj ) {}

		return key === undefined || core_hasOwn.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	error: function( msg ) {
		throw new Error( msg );
	},

	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	parseHTML: function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}

		parsed = jQuery.buildFragment( [ data ], context, scripts );
		if ( scripts ) {
			jQuery( scripts ).remove();
		}
		return jQuery.merge( [], parsed.childNodes );
	},

	parseJSON: function( data ) {
		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {
			return window.JSON.parse( data );
		}

		if ( data === null ) {
			return data;
		}

		if ( typeof data === "string" ) {

			// Make sure leading/trailing whitespace is removed (IE can't handle it)
			data = jQuery.trim( data );

			if ( data ) {
				// Make sure the incoming data is actual JSON
				// Logic borrowed from http://json.org/json2.js
				if ( rvalidchars.test( data.replace( rvalidescape, "@" )
					.replace( rvalidtokens, "]" )
					.replace( rvalidbraces, "")) ) {

					return ( new Function( "return " + data ) )();
				}
			}
		}

		jQuery.error( "Invalid JSON: " + data );
	},

	// Cross-browser xml parsing
	parseXML: function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new DOMParser();
				xml = tmp.parseFromString( data , "text/xml" );
			} else { // IE
				xml = new ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	},

	noop: function() {},

	// Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {
			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data );
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Use native String.trim function wherever possible
	trim: core_trim && !core_trim.call("\uFEFF\xA0") ?
		function( text ) {
			return text == null ?
				"" :
				core_trim.call( text );
		} :

		// Otherwise use our own trimming functionality
		function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				core_push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( core_indexOf ) {
				return core_indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {
				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var l = second.length,
			i = first.length,
			j = 0;

		if ( typeof l === "number" ) {
			for ( ; j < l; j++ ) {
				first[ i++ ] = second[ j ];
			}
		} else {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, inv ) {
		var retVal,
			ret = [],
			i = 0,
			length = elems.length;
		inv = !!inv;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			retVal = !!callback( elems[ i ], i );
			if ( inv !== retVal ) {
				ret.push( elems[ i ] );
			}
		}

		return ret;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}
		}

		// Flatten any nested arrays
		return core_concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = core_slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( core_slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	access: function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			length = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < length; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				length ? fn( elems[0], key ) : emptyGet;
	},

	now: function() {
		return ( new Date() ).getTime();
	}
});

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// we once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );

		// If IE event model is used
		} else {
			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch(e) {}

			if ( top && top.doScroll ) {
				(function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {
							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll("left");
						} catch(e) {
							return setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				})();
			}
		}
	}
	return readyList.promise( obj );
};

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );

	if ( jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || type !== "function" &&
		( length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj );
}

// All jQuery objects should point back to these
rootjQuery = jQuery(document);
// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( core_rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,
		// Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				args = args || [];
				args = [ context, args.slice ? args.slice() : args ];
				if ( list && ( !fired || stack ) ) {
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};
jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var action = tuple[ 0 ],
								fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ action + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = core_slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? core_slice.call( arguments ) : value;
					if( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});
jQuery.support = (function() {

	var support, all, a,
		input, select, fragment,
		opt, eventName, isSupported, i,
		div = document.createElement("div");

	// Setup
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// Support tests won't run in some limited or non-browser environments
	all = div.getElementsByTagName("*");
	a = div.getElementsByTagName("a")[ 0 ];
	if ( !all || !a || !all.length ) {
		return {};
	}

	// First batch of tests
	select = document.createElement("select");
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName("input")[ 0 ];

	a.style.cssText = "top:1px;float:left;opacity:.5";
	support = {
		// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		getSetAttribute: div.className !== "t",

		// IE strips leading whitespace when .innerHTML is used
		leadingWhitespace: div.firstChild.nodeType === 3,

		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		tbody: !div.getElementsByTagName("tbody").length,

		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		htmlSerialize: !!div.getElementsByTagName("link").length,

		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		style: /top/.test( a.getAttribute("style") ),

		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		hrefNormalized: a.getAttribute("href") === "/a",

		// Make sure that element opacity exists
		// (IE uses filter instead)
		// Use a regex to work around a WebKit issue. See #5145
		opacity: /^0.5/.test( a.style.opacity ),

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		cssFloat: !!a.style.cssFloat,

		// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
		checkOn: !!input.value,

		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		optSelected: opt.selected,

		// Tests for enctype support on a form (#6743)
		enctype: !!document.createElement("form").enctype,

		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		html5Clone: document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>",

		// jQuery.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode
		boxModel: document.compatMode === "CSS1Compat",

		// Will be defined later
		deleteExpando: true,
		noCloneEvent: true,
		inlineBlockNeedsLayout: false,
		shrinkWrapBlocks: false,
		reliableMarginRight: true,
		boxSizingReliable: true,
		pixelPosition: false
	};

	// Make sure checked status is properly cloned
	input.checked = true;
	support.noCloneChecked = input.cloneNode( true ).checked;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<9
	try {
		delete div.test;
	} catch( e ) {
		support.deleteExpando = false;
	}

	// Check if we can trust getAttribute("value")
	input = document.createElement("input");
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";

	// #11217 - WebKit loses check when the name is after the checked attribute
	input.setAttribute( "checked", "t" );
	input.setAttribute( "name", "t" );

	fragment = document.createDocumentFragment();
	fragment.appendChild( input );

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	support.appendChecked = input.checked;

	// WebKit doesn't clone checked state correctly in fragments
	support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Opera does not clone events (and typeof div.attachEvent === undefined).
	// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
	if ( div.attachEvent ) {
		div.attachEvent( "onclick", function() {
			support.noCloneEvent = false;
		});

		div.cloneNode( true ).click();
	}

	// Support: IE<9 (lack submit/change bubble), Firefox 17+ (lack focusin event)
	// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP), test/csp.php
	for ( i in { submit: true, change: true, focusin: true }) {
		div.setAttribute( eventName = "on" + i, "t" );

		support[ i + "Bubbles" ] = eventName in window || div.attributes[ eventName ].expando === false;
	}

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	// Run tests that need a body at doc ready
	jQuery(function() {
		var container, marginDiv, tds,
			divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
			body = document.getElementsByTagName("body")[0];

		if ( !body ) {
			// Return for frameset docs that don't have a body
			return;
		}

		container = document.createElement("div");
		container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";

		body.appendChild( container ).appendChild( div );

		// Support: IE8
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
		tds = div.getElementsByTagName("td");
		tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";
		isSupported = ( tds[ 0 ].offsetHeight === 0 );

		tds[ 0 ].style.display = "";
		tds[ 1 ].style.display = "none";

		// Support: IE8
		// Check if empty table cells still have offsetWidth/Height
		support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );

		// Check box-sizing and margin behavior
		div.innerHTML = "";
		div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
		support.boxSizing = ( div.offsetWidth === 4 );
		support.doesNotIncludeMarginInBodyOffset = ( body.offsetTop !== 1 );

		// Use window.getComputedStyle because jsdom on node.js will break without it.
		if ( window.getComputedStyle ) {
			support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
			support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

			// Check if div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container. (#3333)
			// Fails in WebKit before Feb 2011 nightlies
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			marginDiv = div.appendChild( document.createElement("div") );
			marginDiv.style.cssText = div.style.cssText = divReset;
			marginDiv.style.marginRight = marginDiv.style.width = "0";
			div.style.width = "1px";

			support.reliableMarginRight =
				!parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
		}

		if ( typeof div.style.zoom !== core_strundefined ) {
			// Support: IE<8
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			div.innerHTML = "";
			div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
			support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 );

			// Support: IE6
			// Check if elements with layout shrink-wrap their children
			div.style.display = "block";
			div.innerHTML = "<div></div>";
			div.firstChild.style.width = "5px";
			support.shrinkWrapBlocks = ( div.offsetWidth !== 3 );

			if ( support.inlineBlockNeedsLayout ) {
				// Prevent IE 6 from affecting layout for positioned elements #11048
				// Prevent IE from shrinking the body in IE 7 mode #12869
				// Support: IE<8
				body.style.zoom = 1;
			}
		}

		body.removeChild( container );

		// Null elements to avoid leaks in IE
		container = div = tds = marginDiv = null;
	});

	// Null elements to avoid leaks in IE
	all = select = fragment = opt = a = input = null;

	return support;
})();

var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	rmultiDash = /([A-Z])/g;

function internalData( elem, name, data, pvt /* Internal Use Only */ ){
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var thisCache, ret,
		internalKey = jQuery.expando,
		getByName = typeof name === "string",

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && getByName && data === undefined ) {
		return;
	}

	if ( !id ) {
		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			elem[ internalKey ] = id = core_deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {
		cache[ id ] = {};

		// Avoids exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		if ( !isNode ) {
			cache[ id ].toJSON = jQuery.noop;
		}
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( getByName ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var i, l, thisCache,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split(" ");
					}
				}
			} else {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			for ( i = 0, l = name.length; i < l; i++ ) {
				delete thisCache[ name[i] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( !( pvt ? isEmptyDataObject : jQuery.isEmptyObject )( thisCache ) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	} else if ( jQuery.support.deleteExpando || cache != cache.window ) {
		delete cache[ id ];

	// When all else fails, null
	} else {
		cache[ id ] = null;
	}
}

jQuery.extend({
	cache: {},

	// Unique for each copy of jQuery on the page
	// Non-digits removed to match rinlinejQuery
	expando: "jQuery" + ( core_version + Math.random() ).replace( /\D/g, "" ),

	// The following elements throw uncatchable exceptions if you
	// attempt to add expando properties to them.
	noData: {
		"embed": true,
		// Ban all objects except for Flash (which handle expandos)
		"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
		"applet": true
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	},

	// A method for determining if a DOM node can handle the data expando
	acceptData: function( elem ) {
		// Do not set data on non-element because it will not be cleared (#8335).
		if ( elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9 ) {
			return false;
		}

		var noData = elem.nodeName && jQuery.noData[ elem.nodeName.toLowerCase() ];

		// nodes accept data unless otherwise specified; rejection can be conditional
		return !noData || noData !== true && elem.getAttribute("classid") === noData;
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var attrs, name,
			elem = this[0],
			i = 0,
			data = null;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					attrs = elem.attributes;
					for ( ; i < attrs.length; i++ ) {
						name = attrs[i].name;

						if ( !name.indexOf( "data-" ) ) {
							name = jQuery.camelCase( name.slice(5) );

							dataAttr( elem, name, data[ name ] );
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}

		return jQuery.access( this, function( value ) {

			if ( value === undefined ) {
				// Try to fetch any internally stored data first
				return elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : null;
			}

			this.each(function() {
				jQuery.data( this, key, value );
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});

function dataAttr( elem, key, data ) {
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}
jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray(data) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		hooks.cur = fn;
		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	delay: function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var nodeHook, boolHook,
	rclass = /[\t\r\n]/g,
	rreturn = /\r/g,
	rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i,
	rboolean = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = jQuery.support.getSetAttribute,
	getSetInput = jQuery.support.input;

jQuery.fn.extend({
	attr: function( name, value ) {
		return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	},

	prop: function( name, value ) {
		return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each(function() {
			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch( e ) {}
		});
	},

	addClass: function( value ) {
		var classes, elem, cur, clazz, j,
			i = 0,
			len = this.length,
			proceed = typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( core_rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}
					elem.className = jQuery.trim( cur );

				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j,
			i = 0,
			len = this.length,
			proceed = arguments.length === 0 || typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( core_rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}
					elem.className = value ? jQuery.trim( cur ) : "";
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isBool = typeof stateVal === "boolean";

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					state = stateVal,
					classNames = value.match( core_rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					state = isBool ? state : !self.hasClass( className );
					self[ state ? "addClass" : "removeClass" ]( className );
				}

			// Toggle whole class name
			} else if ( type === core_strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	},

	val: function( value ) {
		var ret, hooks, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val,
				self = jQuery(this);

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, self.val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map(val, function ( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				// attributes.value is undefined in Blackberry 4.7 but
				// uses .value. See #6932
				var val = elem.attributes.value;
				return !val || val.specified ? elem.value : elem.text;
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var values = jQuery.makeArray( value );

				jQuery(elem).find("option").each(function() {
					this.selected = jQuery.inArray( jQuery(this).val(), values ) >= 0;
				});

				if ( !values.length ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	},

	attr: function( elem, name, value ) {
		var hooks, notxml, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === core_strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( notxml ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] || ( rboolean.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && notxml && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && notxml && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {

			// In IE9+, Flash objects don't have .getAttribute (#12945)
			// Support: IE9+
			if ( typeof elem.getAttribute !== core_strundefined ) {
				ret =  elem.getAttribute( name );
			}

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( core_rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( rboolean.test( name ) ) {
					// Set corresponding property to false for boolean attributes
					// Also clear defaultChecked/defaultSelected (if appropriate) for IE<8
					if ( !getSetAttribute && ruseDefault.test( name ) ) {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					} else {
						elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	propFix: {
		tabindex: "tabIndex",
		readonly: "readOnly",
		"for": "htmlFor",
		"class": "className",
		maxlength: "maxLength",
		cellspacing: "cellSpacing",
		cellpadding: "cellPadding",
		rowspan: "rowSpan",
		colspan: "colSpan",
		usemap: "useMap",
		frameborder: "frameBorder",
		contenteditable: "contentEditable"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				return ( elem[ name ] = value );
			}

		} else {
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				return elem[ name ];
			}
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				var attributeNode = elem.getAttributeNode("tabindex");

				return attributeNode && attributeNode.specified ?
					parseInt( attributeNode.value, 10 ) :
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
						0 :
						undefined;
			}
		}
	}
});

// Hook for boolean attributes
boolHook = {
	get: function( elem, name ) {
		var
			// Use .prop to determine if this attribute is understood as boolean
			prop = jQuery.prop( elem, name ),

			// Fetch it accordingly
			attr = typeof prop === "boolean" && elem.getAttribute( name ),
			detail = typeof prop === "boolean" ?

				getSetInput && getSetAttribute ?
					attr != null :
					// oldIE fabricates an empty string for missing boolean attributes
					// and conflates checked/selected into attroperties
					ruseDefault.test( name ) ?
						elem[ jQuery.camelCase( "default-" + name ) ] :
						!!attr :

				// fetch an attribute node for properties not recognized as boolean
				elem.getAttributeNode( name );

		return detail && detail.value !== false ?
			name.toLowerCase() :
			undefined;
	},
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		// Use defaultChecked and defaultSelected for oldIE
		} else {
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}

		return name;
	}
};

// fix oldIE value attroperty
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			return jQuery.nodeName( elem, "input" ) ?

				// Ignore the value *property* by using defaultValue
				elem.defaultValue :

				ret && ret.specified ? ret.value : undefined;
		},
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {
				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {
				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			return ret && ( name === "id" || name === "name" || name === "coords" ? ret.value !== "" : ret.specified ) ?
				ret.value :
				undefined;
		},
		set: function( elem, value, name ) {
			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					(ret = elem.ownerDocument.createAttribute( name ))
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			return name === "value" || value === elem.getAttribute( name ) ?
				value :
				undefined;
		}
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		get: nodeHook.get,
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		});
	});
}


// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !jQuery.support.hrefNormalized ) {
	jQuery.each([ "href", "src", "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			get: function( elem ) {
				var ret = elem.getAttribute( name, 2 );
				return ret == null ? undefined : ret;
			}
		});
	});

	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each([ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	});
}

if ( !jQuery.support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {
			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case senstitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}

// Safari mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !jQuery.support.optSelected ) {
	jQuery.propHooks.selected = jQuery.extend( jQuery.propHooks.selected, {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	});
}

// IE6/7 call enctype encoding
if ( !jQuery.support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}

// Radios and checkboxes getter/setter
if ( !jQuery.support.checkOn ) {
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			get: function( elem ) {
				// Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
				return elem.getAttribute("value") === null ? "on" : elem.value;
			}
		};
	});
}
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = jQuery.extend( jQuery.valHooks[ this ], {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	});
});
var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		// jQuery(...).bind("mouseover mouseout", fn);
		types = ( types || "" ).match( core_rnotwhite ) || [""];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( core_rnotwhite ) || [""];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = core_hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = core_hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		event.isTrigger = true;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {
				event.preventDefault();
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( elem.ownerDocument, data ) === false) &&
				!(type === "click" && jQuery.nodeName( elem, "a" )) && jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {
						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, ret, handleObj, matched, j,
			handlerQueue = [],
			args = core_slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var sel, handleObj, matches, i,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur != this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Chrome 23+, Safari?
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			}
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== document.activeElement && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {
						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === document.activeElement && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Even when returnValue equals to undefined Firefox will still show alert
				if ( event.result !== undefined ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{ type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event, to properly expose it to GC
			if ( typeof elem[ name ] === core_strundefined ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
			src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;
		if ( !e ) {
			return;
		}
		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// IE submit delegation
if ( !jQuery.support.submitBubbles ) {

	jQuery.event.special.submit = {
		setup: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
				if ( form && !jQuery._data( form, "submitBubbles" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submit_bubble = true;
					});
					jQuery._data( form, "submitBubbles", true );
				}
			});
			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {
			// If form was submitted by the user, bubble the event up the tree
			if ( event._submit_bubble ) {
				delete event._submit_bubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event, true );
				}
			}
		},

		teardown: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !jQuery.support.changeBubbles ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {
				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._just_changed = true;
						}
					});
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._just_changed && !event.isTrigger ) {
							this._just_changed = false;
						}
						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event, true );
					});
				}
				return false;
			}
			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event, true );
						}
					});
					jQuery._data( elem, "changeBubbles", true );
				}
			});
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Create "bubbling" focus and blur events
if ( !jQuery.support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler while someone wants focusin/focusout
		var attaches = 0,
			handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				if ( attaches++ === 0 ) {
					document.addEventListener( orig, handler, true );
				}
			},
			teardown: function() {
				if ( --attaches === 0 ) {
					document.removeEventListener( orig, handler, true );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var type, origFn;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});
/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
(function( window, undefined ) {

var i,
	cachedruns,
	Expr,
	getText,
	isXML,
	compile,
	hasDuplicate,
	outermostContext,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsXML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,
	sortOrder,

	// Instance-specific data
	expando = "sizzle" + -(new Date()),
	preferredDoc = window.document,
	support = {},
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),

	// General-purpose constants
	strundefined = typeof undefined,
	MAX_NEGATIVE = 1 << 31,

	// Array methods
	arr = [],
	pop = arr.pop,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf if we can't use a native one
	indexOf = arr.indexOf || function( elem ) {
		var i = 0,
			len = this.length;
		for ( ; i < len; i++ ) {
			if ( this[i] === elem ) {
				return i;
			}
		}
		return -1;
	},


	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
	operators = "([*^$|!~]?=)",
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
		"*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

	// Prefer arguments quoted,
	//   then not containing pseudos/brackets,
	//   then attribute selectors/non-parenthetical expressions,
	//   then anything else
	// These preferences are here to reduce the number of selectors
	//   needing tokenize in the PSEUDO preFilter
	pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*" ),
	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"NAME": new RegExp( "^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rsibling = /[\x20\t\r\n\f]*[+~]/,

	rnative = /^[^{]+\{\s*\[native code/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rescape = /'|\\/g,
	rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
	funescape = function( _, escaped ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		return high !== high ?
			escaped :
			// BMP codepoint
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	};

// Use a stripped-down slice if we can't use a native one
try {
	slice.call( preferredDoc.documentElement.childNodes, 0 )[0].nodeType;
} catch ( e ) {
	slice = function( i ) {
		var elem,
			results = [];
		while ( (elem = this[i++]) ) {
			results.push( elem );
		}
		return results;
	};
}

/**
 * For feature detection
 * @param {Function} fn The function to test for native support
 */
function isNative( fn ) {
	return rnative.test( fn + "" );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var cache,
		keys = [];

	return (cache = function( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key += " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key ] = value);
	});
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return fn( div );
	} catch (e) {
		return false;
	} finally {
		// release memory in IE
		div = null;
	}
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
		return [];
	}

	if ( !documentIsXML && !seed ) {

		// Shortcuts
		if ( (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, slice.call(context.getElementsByTagName( selector ), 0) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getByClassName && context.getElementsByClassName ) {
				push.apply( results, slice.call(context.getElementsByClassName( m ), 0) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && !rbuggyQSA.test(selector) ) {
			old = true;
			nid = expando;
			newContext = context;
			newSelector = nodeType === 9 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && context.parentNode || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results, slice.call( newContext.querySelectorAll(
						newSelector
					), 0 ) );
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Detect xml
 * @param {Element|Object} elem An element or a document
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var doc = node ? node.ownerDocument || node : preferredDoc;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;

	// Support tests
	documentIsXML = isXML( doc );

	// Check if getElementsByTagName("*") returns only elements
	support.tagNameNoComments = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Check if attributes should be retrieved by attribute nodes
	support.attributes = assert(function( div ) {
		div.innerHTML = "<select></select>";
		var type = typeof div.lastChild.getAttribute("multiple");
		// IE8 returns a string for some attributes even when not present
		return type !== "boolean" && type !== "string";
	});

	// Check if getElementsByClassName can be trusted
	support.getByClassName = assert(function( div ) {
		// Opera can't find a second classname (in 9.6)
		div.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
		if ( !div.getElementsByClassName || !div.getElementsByClassName("e").length ) {
			return false;
		}

		// Safari 3.2 caches class attributes and doesn't catch changes
		div.lastChild.className = "e";
		return div.getElementsByClassName("e").length === 2;
	});

	// Check if getElementById returns elements by name
	// Check if getElementsByName privileges form controls or returns elements by ID
	support.getByName = assert(function( div ) {
		// Inject content
		div.id = expando + 0;
		div.innerHTML = "<a name='" + expando + "'></a><div name='" + expando + "'></div>";
		docElem.insertBefore( div, docElem.firstChild );

		// Test
		var pass = doc.getElementsByName &&
			// buggy browsers will return fewer than the correct 2
			doc.getElementsByName( expando ).length === 2 +
			// buggy browsers will return more than the correct 0
			doc.getElementsByName( expando + 0 ).length;
		support.getIdNotName = !doc.getElementById( expando );

		// Cleanup
		docElem.removeChild( div );

		return pass;
	});

	// IE6/7 return modified attributes
	Expr.attrHandle = assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild && typeof div.firstChild.getAttribute !== strundefined &&
			div.firstChild.getAttribute("href") === "#";
	}) ?
		{} :
		{
			"href": function( elem ) {
				return elem.getAttribute( "href", 2 );
			},
			"type": function( elem ) {
				return elem.getAttribute("type");
			}
		};

	// ID find and filter
	if ( support.getIdNotName ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== strundefined && !documentIsXML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [m] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== strundefined && !documentIsXML ) {
				var m = context.getElementById( id );

				return m ?
					m.id === id || typeof m.getAttributeNode !== strundefined && m.getAttributeNode("id").value === id ?
						[m] :
						undefined :
					[];
			}
		};
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.tagNameNoComments ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== strundefined ) {
				return context.getElementsByTagName( tag );
			}
		} :
		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Name
	Expr.find["NAME"] = support.getByName && function( tag, context ) {
		if ( typeof context.getElementsByName !== strundefined ) {
			return context.getElementsByName( name );
		}
	};

	// Class
	Expr.find["CLASS"] = support.getByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== strundefined && !documentIsXML ) {
			return context.getElementsByClassName( className );
		}
	};

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21),
	// no need to also add to buggyMatches since matches checks buggyQSA
	// A support test would require too much code (would include document ready)
	rbuggyQSA = [ ":focus" ];

	if ( (support.qsa = isNative(doc.querySelectorAll)) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explictly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			div.innerHTML = "<select><option selected=''></option></select>";

			// IE8 - Some boolean attributes are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}
		});

		assert(function( div ) {

			// Opera 10-12/IE8 - ^= $= *= and empty values
			// Should not select anything
			div.innerHTML = "<input type='hidden' i=''/>";
			if ( div.querySelectorAll("[i^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:\"\"|'')" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = isNative( (matches = docElem.matchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.webkitMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = new RegExp( rbuggyMatches.join("|") );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = isNative(docElem.contains) || docElem.compareDocumentPosition ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	// Document order sorting
	sortOrder = docElem.compareDocumentPosition ?
	function( a, b ) {
		var compare;

		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		if ( (compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition( b )) ) {
			if ( compare & 1 || a.parentNode && a.parentNode.nodeType === 11 ) {
				if ( a === doc || contains( preferredDoc, a ) ) {
					return -1;
				}
				if ( b === doc || contains( preferredDoc, b ) ) {
					return 1;
				}
				return 0;
			}
			return compare & 4 ? -1 : 1;
		}

		return a.compareDocumentPosition ? -1 : 1;
	} :
	function( a, b ) {
		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;

		// Parentless nodes are either documents or disconnected
		} else if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	// Always assume the presence of duplicates if sort doesn't
	// pass them to our comparison function (as in Google Chrome).
	hasDuplicate = false;
	[0, 0].sort( sortOrder );
	support.detectDuplicates = hasDuplicate;

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	// rbuggyQSA always contains :focus, so no need for an existence check
	if ( support.matchesSelector && !documentIsXML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && !rbuggyQSA.test(expr) ) {
		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch(e) {}
	}

	return Sizzle( expr, document, null, [elem] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	var val;

	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( !documentIsXML ) {
		name = name.toLowerCase();
	}
	if ( (val = Expr.attrHandle[ name ]) ) {
		return val( elem );
	}
	if ( documentIsXML || support.attributes ) {
		return elem.getAttribute( name );
	}
	return ( (val = elem.getAttributeNode( name )) || elem.getAttribute( name ) ) && elem[ name ] === true ?
		name :
		val && val.specified ? val.value : null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

// Document sorting and removing duplicates
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		i = 1,
		j = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		for ( ; (elem = results[i]); i++ ) {
			if ( elem === results[ i - 1 ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	return results;
};

function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && ( ~b.sourceIndex || MAX_NEGATIVE ) - ( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

// Returns a function to use in pseudos for input types
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

// Returns a function to use in pseudos for buttons
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

// Returns a function to use in pseudos for positionals
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		for ( ; (node = elem[i]); i++ ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (see #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[5] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[4] ) {
				match[2] = match[4];

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeName ) {
			if ( nodeName === "*" ) {
				return function() { return true; };
			}

			nodeName = nodeName.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
			};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( elem.className || (typeof elem.getAttribute !== strundefined && elem.getAttribute("class")) || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifider
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsXML ?
						elem.getAttribute("xml:lang") || elem.getAttribute("lang") :
						elem.lang) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
			//   not comment, processing instructions, or others
			// Thanks to Diego Perini for the nodeName shortcut
			//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
			// use getAttribute instead to test this case
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

function tokenize( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( tokens = [] );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
}

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var data, cache, outerCache,
				dirkey = dirruns + " " + doneName;

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (cache = outerCache[ dir ]) && cache[0] === dirkey ) {
							if ( (data = cache[1]) === true || data === cachedruns ) {
								return data === true;
							}
						} else {
							cache = outerCache[ dir ] = [ dirkey ];
							cache[1] = matcher( elem, context, xml ) || cachedruns;
							if ( cache[1] === true ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector( tokens.slice( 0, i - 1 ) ).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	// A counter to specify which element is currently being matched
	var matcherCachedRuns = 0,
		bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, expandContext ) {
			var elem, j, matcher,
				setMatched = [],
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				outermost = expandContext != null,
				contextBackup = outermostContext,
				// We must always have either seed elements or context
				elems = seed || byElement && Expr.find["TAG"]( "*", expandContext && context.parentNode || context ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1);

			if ( outermost ) {
				outermostContext = context !== document && context;
				cachedruns = matcherCachedRuns;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
						cachedruns = ++matcherCachedRuns;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !group ) {
			group = tokenize( selector );
		}
		i = group.length;
		while ( i-- ) {
			cached = matcherFromTokens( group[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	}
	return cached;
};

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function select( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		match = tokenize( selector );

	if ( !seed ) {
		// Try to minimize operations if there is only one group
		if ( match.length === 1 ) {

			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && !documentIsXML &&
					Expr.relative[ tokens[1].type ] ) {

				context = Expr.find["ID"]( token.matches[0].replace( runescape, funescape ), context )[0];
				if ( !context ) {
					return results;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && context.parentNode || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, slice.call( seed, 0 ) );
							return results;
						}

						break;
					}
				}
			}
		}
	}

	// Compile and execute a filtering function
	// Provide `match` to avoid retokenization if we modified the selector above
	compile( selector, match )(
		seed,
		context,
		documentIsXML,
		results,
		rsibling.test( selector )
	);
	return results;
}

// Deprecated
Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Easy API for creating new setFilters
function setFilters() {}
Expr.filters = setFilters.prototype = Expr.pseudos;
Expr.setFilters = new setFilters();

// Initialize with the default document
setDocument();

// Override sizzle attribute retrieval
Sizzle.attr = jQuery.attr;
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;


})( window );
var runtil = /Until$/,
	rparentsprev = /^(?:parents|prev(?:Until|All))/,
	isSimple = /^.[^:#\[\.,]*$/,
	rneedsContext = jQuery.expr.match.needsContext,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend({
	find: function( selector ) {
		var i, ret, self,
			len = this.length;

		if ( typeof selector !== "string" ) {
			self = this;
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		ret = [];
		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, this[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = ( this.selector ? this.selector + " " : "" ) + selector;
		return ret;
	},

	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter(function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	not: function( selector ) {
		return this.pushStack( winnow(this, selector, false) );
	},

	filter: function( selector ) {
		return this.pushStack( winnow(this, selector, true) );
	},

	is: function( selector ) {
		return !!selector && (
			typeof selector === "string" ?
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				rneedsContext.test( selector ) ?
					jQuery( selector, this.context ).index( this[0] ) >= 0 :
					jQuery.filter( selector, this ).length > 0 :
				this.filter( selector ).length > 0 );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			ret = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			cur = this[i];

			while ( cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11 ) {
				if ( pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors) ) {
					ret.push( cur );
					break;
				}
				cur = cur.parentNode;
			}
		}

		return this.pushStack( ret.length > 1 ? jQuery.unique( ret ) : ret );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[0], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this );
	},

	add: function( selector, context ) {
		var set = typeof selector === "string" ?
				jQuery( selector, context ) :
				jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
			all = jQuery.merge( this.get(), set );

		return this.pushStack( jQuery.unique(all) );
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

jQuery.fn.andSelf = jQuery.fn.addBack;

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( !runtil.test( name ) ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		ret = this.length > 1 && !guaranteedUnique[ name ] ? jQuery.unique( ret ) : ret;

		if ( this.length > 1 && rparentsprev.test( name ) ) {
			ret = ret.reverse();
		}

		return this.pushStack( ret );
	};
});

jQuery.extend({
	filter: function( expr, elems, not ) {
		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 ?
			jQuery.find.matchesSelector(elems[0], expr) ? [ elems[0] ] : [] :
			jQuery.find.matches(expr, elems);
	},

	dir: function( elem, dir, until ) {
		var matched = [],
			cur = elem[ dir ];

		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
			if ( cur.nodeType === 1 ) {
				matched.push( cur );
			}
			cur = cur[dir];
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var r = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}

		return r;
	}
});

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, keep ) {

	// Can't pass null or undefined to indexOf in Firefox 4
	// Set to 0 to skip string check
	qualifier = qualifier || 0;

	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep(elements, function( elem, i ) {
			var retVal = !!qualifier.call( elem, i, elem );
			return retVal === keep;
		});

	} else if ( qualifier.nodeType ) {
		return jQuery.grep(elements, function( elem ) {
			return ( elem === qualifier ) === keep;
		});

	} else if ( typeof qualifier === "string" ) {
		var filtered = jQuery.grep(elements, function( elem ) {
			return elem.nodeType === 1;
		});

		if ( isSimple.test( qualifier ) ) {
			return jQuery.filter(qualifier, filtered, !keep);
		} else {
			qualifier = jQuery.filter( qualifier, filtered );
		}
	}

	return jQuery.grep(elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) >= 0 ) === keep;
	});
}
function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
		"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		area: [ 1, "<map>", "</map>" ],
		param: [ 1, "<object>", "</object>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: jQuery.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
	},
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement("div") );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

jQuery.fn.extend({
	text: function( value ) {
		return jQuery.access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
		}, null, value, arguments.length );
	},

	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}

		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function(i) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	},

	append: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				this.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				this.insertBefore( elem, this.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, false, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, false, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	// keepData is for internal use only--do not document
	remove: function( selector, keepData ) {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( !selector || jQuery.filter( selector, [ elem ] ).length > 0 ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem ) );
				}

				if ( elem.parentNode ) {
					if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
						setGlobalEval( getAll( elem, "script" ) );
					}
					elem.parentNode.removeChild( elem );
				}
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function () {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return jQuery.access( this, function( value ) {
			var elem = this[0] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( jQuery.support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ ( rtagName.exec( value ) || ["", ""] )[1].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for (; i < l; i++ ) {
						// Remove element nodes and prevent memory leaks
						elem = this[i] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch(e) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function( value ) {
		var isFunc = jQuery.isFunction( value );

		// Make sure that the elements are removed from the DOM before they are inserted
		// this can help fix replacing a parent with child elements
		if ( !isFunc && typeof value !== "string" ) {
			value = jQuery( value ).not( this ).detach();
		}

		return this.domManip( [ value ], true, function( elem ) {
			var next = this.nextSibling,
				parent = this.parentNode;

			if ( parent ) {
				jQuery( this ).remove();
				parent.insertBefore( elem, next );
			}
		});
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, table, callback ) {

		// Flatten any nested arrays
		args = core_concat.apply( [], args );

		var first, node, hasScripts,
			scripts, doc, fragment,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[0],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction || !( l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[0] = value.call( this, index, table ? self.html() : undefined );
				}
				self.domManip( args, table, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				table = table && jQuery.nodeName( first, "tr" );
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call(
						table && jQuery.nodeName( this[i], "table" ) ?
							findOrAppend( this[i], "tbody" ) :
							this[i],
						node,
						i
					);
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Hope ajax is available...
								jQuery.ajax({
									url: node.src,
									type: "GET",
									dataType: "script",
									async: false,
									global: false,
									"throws": true
								});
							} else {
								jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
							}
						}
					}
				}

				// Fix #11809: Avoid leaking memory
				fragment = first = null;
			}
		}

		return this;
	}
});

function findOrAppend( elem, tag ) {
	return elem.getElementsByTagName( tag )[0] || elem.appendChild( elem.ownerDocument.createElement( tag ) );
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	var attr = elem.getAttributeNode("type");
	elem.type = ( attr && attr.specified ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[1];
	} else {
		elem.removeAttribute("type");
	}
	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; (elem = elems[i]) != null; i++ ) {
		jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
	}
}

function cloneCopyEvent( src, dest ) {

	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !jQuery.support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( jQuery.support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && manipulation_rcheckableType.test( src.type ) ) {
		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone(true);
			jQuery( insert[i] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			core_push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});

function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll( tag || "*" ) :
			undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}

// Used in buildFragment, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
	if ( manipulation_rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; (node = srcElements[i]) != null; ++i ) {
				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[i] ) {
					fixCloneNodeIssues( node, destElements[i] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; (node = srcElements[i]) != null; i++ ) {
					cloneCopyEvent( node, destElements[i] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var j, elem, contains,
			tmp, tag, tbody, wrap,
			l = elems.length,

			// Ensure a safe fragment
			safe = createSafeFragment( context ),

			nodes = [],
			i = 0;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || safe.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;

					tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Manually add leading whitespace removed by IE
					if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !jQuery.support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						elem = tag === "table" && !rtbody.test( elem ) ?
							tmp.firstChild :

							// String was a bare <thead> or <tfoot>
							wrap[1] === "<table>" && !rtbody.test( elem ) ?
								tmp :
								0;

						j = elem && elem.childNodes.length;
						while ( j-- ) {
							if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
								elem.removeChild( tbody );
							}
						}
					}

					jQuery.merge( nodes, tmp.childNodes );

					// Fix #12392 for WebKit and IE > 9
					tmp.textContent = "";

					// Fix #12392 for oldIE
					while ( tmp.firstChild ) {
						tmp.removeChild( tmp.firstChild );
					}

					// Remember the top-level container for proper cleanup
					tmp = safe.lastChild;
				}
			}
		}

		// Fix #11356: Clear elements from fragment
		if ( tmp ) {
			safe.removeChild( tmp );
		}

		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if ( !jQuery.support.appendChecked ) {
			jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
		}

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( safe.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		tmp = null;

		return safe;
	},

	cleanData: function( elems, /* internal */ acceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			deleteExpando = jQuery.support.deleteExpando,
			special = jQuery.event.special;

		for ( ; (elem = elems[i]) != null; i++ ) {

			if ( acceptData || jQuery.acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// IE does not allow us to delete expando properties from nodes,
						// nor does it have a removeAttribute function on Document nodes;
						// we must handle all of these cases
						if ( deleteExpando ) {
							delete elem[ internalKey ];

						} else if ( typeof elem.removeAttribute !== core_strundefined ) {
							elem.removeAttribute( internalKey );

						} else {
							elem[ internalKey ] = null;
						}

						core_deletedIds.push( id );
					}
				}
			}
		}
	}
});
var iframe, getStyles, curCSS,
	ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/,
	rposition = /^(top|right|bottom|left)$/,
	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rmargin = /^margin/,
	rnumsplit = new RegExp( "^(" + core_pnum + ")(.*)$", "i" ),
	rnumnonpx = new RegExp( "^(" + core_pnum + ")(?!px)[a-z%]+$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + core_pnum + ")", "i" ),
	elemdisplay = { BODY: "block" },

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: 0,
		fontWeight: 400
	},

	cssExpand = [ "Top", "Right", "Bottom", "Left" ],
	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt(0).toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function isHidden( elem, el ) {
	// isHidden might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem = el || elem;
	return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = jQuery._data( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );
			}
		} else {

			if ( !values[ index ] ) {
				hidden = isHidden( elem );

				if ( display && display !== "none" || !hidden ) {
					jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
				}
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.fn.extend({
	css: function( name, value ) {
		return jQuery.access( this, function( elem, name, value ) {
			var len, styles,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		var bool = typeof state === "boolean";

		return this.each(function() {
			if ( bool ? state : isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Exclude the following css properties to add px
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that NaN and null values aren't set. See: #7116
			if ( value == null || type === "number" && isNaN( value ) ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight (for every problematic property) identical functions
			if ( !jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {

				// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
				// Fixes bug #5509
				try {
					style[ name ] = value;
				} catch(e) {}
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	},

	// A method for quickly swapping in/out CSS properties to get correct calculations
	swap: function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	}
});

// NOTE: we've included the "window" in window.getComputedStyle
// because jsdom on node.js will break without it.
if ( window.getComputedStyle ) {
	getStyles = function( elem ) {
		return window.getComputedStyle( elem, null );
	};

	curCSS = function( elem, name, _computed ) {
		var width, minWidth, maxWidth,
			computed = _computed || getStyles( elem ),

			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined,
			style = elem.style;

		if ( computed ) {

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret;
	};
} else if ( document.documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, _computed ) {
		var left, rs, rsLeft,
			computed = _computed || getStyles( elem ),
			ret = computed ? computed[ name ] : undefined,
			style = elem.style;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are proportional to the parent element instead
		// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		return ret === "" ? "auto" : ret;
	};
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox && ( jQuery.support.boxSizingReliable || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

// Try to determine the default display value of an element
function css_defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {
			// Use the already-created iframe if possible
			iframe = ( iframe ||
				jQuery("<iframe frameborder='0' width='0' height='0'/>")
				.css( "cssText", "display:block !important" )
			).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[0].contentWindow || iframe[0].contentDocument ).document;
			doc.write("<!doctype html><html><body>");
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}

// Called ONLY from within css_defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
		display = jQuery.css( elem[0], "display" );
	elem.remove();
	return display;
}

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return elem.offsetWidth === 0 && rdisplayswap.test( jQuery.css( elem, "display" ) ) ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

if ( !jQuery.support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {
			// IE uses filters for opacity
			return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
				( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
				computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

// These hooks cannot be added until DOM ready because the support test
// for it is not run until after DOM ready
jQuery(function() {
	if ( !jQuery.support.reliableMarginRight ) {
		jQuery.cssHooks.marginRight = {
			get: function( elem, computed ) {
				if ( computed ) {
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// Work around by temporarily setting element display to inline-block
					return jQuery.swap( elem, { "display": "inline-block" },
						curCSS, [ elem, "marginRight" ] );
				}
			}
		};
	}

	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {
		jQuery.each( [ "top", "left" ], function( i, prop ) {
			jQuery.cssHooks[ prop ] = {
				get: function( elem, computed ) {
					if ( computed ) {
						computed = curCSS( elem, prop );
						// if curCSS returns percentage, fallback to offset
						return rnumnonpx.test( computed ) ?
							jQuery( elem ).position()[ prop ] + "px" :
							computed;
					}
				}
			};
		});
	}

});

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
			(!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
}

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});
var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function(){
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function(){
			var type = this.type;
			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !manipulation_rcheckableType.test( type ) );
		})
		.map(function( i, elem ){
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ){
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});

//Serialize an array of form elements or a set of
//key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}
jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.hover = function( fnOver, fnOut ) {
	return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
};
var
	// Document location
	ajaxLocParts,
	ajaxLocation,
	ajax_nonce = jQuery.now(),

	ajax_rquery = /\?/,
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,

	// Keep a copy of the old load method
	_load = jQuery.fn.load,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( core_rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, response, type,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = url.slice( off, url.length );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ){
	jQuery.fn[ type ] = function( fn ){
		return this.on( type, fn );
	};
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": window.String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var // Cross-domain detection vars
			parts,
			// Loop variable
			i,
			// URL without anti-cache param
			cacheURL,
			// Response headers as string
			responseHeadersString,
			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,
			// Response headers
			responseHeaders,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( core_rnotwhite ) || [""];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? 80 : 443 ) ) !=
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? 80 : 443 ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + ajax_nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ajax_nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// If successful, handle type chaining
			if ( status >= 200 && status < 300 || status === 304 ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 ) {
					isSuccess = true;
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					isSuccess = true;
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					isSuccess = ajaxConvert( s, response );
					statusText = isSuccess.state;
					success = isSuccess.data;
					error = isSuccess.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	}
});

/* Handles responses to an ajax request:
 * - sets all responseXXX fields accordingly
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes,
		responseFields = s.responseFields;

	// Fill responseXXX fields
	for ( type in responseFields ) {
		if ( type in responses ) {
			jqXHR[ responseFields[type] ] = responses[ type ];
		}
	}

	// Remove auto dataType and get content-type in the process
	while( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

// Chain conversions given the request and the original response
function ajaxConvert( s, response ) {
	var conv2, current, conv, tmp,
		converters = {},
		i = 0,
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice(),
		prev = dataTypes[ 0 ];

	// Apply the dataFilter if provided
	if ( s.dataFilter ) {
		response = s.dataFilter( response, s.dataType );
	}

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	// Convert to each sequential dataType, tolerating list modification
	for ( ; (current = dataTypes[++i]); ) {

		// There's only work to do if current dataType is non-auto
		if ( current !== "*" ) {

			// Convert response if prev dataType is non-auto and differs from current
			if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split(" ");
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.splice( i--, 0, current );
								}

								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s["throws"] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}

			// Update prev for next iteration
			prev = current;
		}
	}

	return { state: "success", data: response };
}
// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery("head")[0] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement("script");

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
});
var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( ajax_nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( ajax_rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});
var xhrCallbacks, xhrSupported,
	xhrId = 0,
	// #5280: Internet Explorer will keep connections alive if we don't abort on unload
	xhrOnUnloadAbort = window.ActiveXObject && function() {
		// Abort all pending requests
		var key;
		for ( key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	};

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject("Microsoft.XMLHTTP");
	} catch( e ) {}
}

// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject ?
	/* Microsoft failed to properly
	 * implement the XMLHttpRequest in IE7 (can't request local files),
	 * so we use the ActiveXObject when it is available
	 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
	 * we need a fallback.
	 */
	function() {
		return !this.isLocal && createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

// Determine support properties
xhrSupported = jQuery.ajaxSettings.xhr();
jQuery.support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = jQuery.support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport(function( s ) {
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !s.crossDomain || jQuery.support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {

					// Get a new xhr
					var handle, i,
						xhr = s.xhr();

					// Open the socket
					// Passing null username, generates a login popup on Opera (#2865)
					if ( s.username ) {
						xhr.open( s.type, s.url, s.async, s.username, s.password );
					} else {
						xhr.open( s.type, s.url, s.async );
					}

					// Apply custom fields if provided
					if ( s.xhrFields ) {
						for ( i in s.xhrFields ) {
							xhr[ i ] = s.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( s.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( s.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !s.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Need an extra try/catch for cross domain requests in Firefox 3
					try {
						for ( i in headers ) {
							xhr.setRequestHeader( i, headers[ i ] );
						}
					} catch( err ) {}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( s.hasContent && s.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, responseHeaders, statusText, responses;

						// Firefox throws exceptions when accessing properties
						// of an xhr when a network error occurred
						// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
						try {

							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

								// Only called once
								callback = undefined;

								// Do not keep as active anymore
								if ( handle ) {
									xhr.onreadystatechange = jQuery.noop;
									if ( xhrOnUnloadAbort ) {
										delete xhrCallbacks[ handle ];
									}
								}

								// If it's an abort
								if ( isAbort ) {
									// Abort it manually if needed
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									responses = {};
									status = xhr.status;
									responseHeaders = xhr.getAllResponseHeaders();

									// When requesting binary data, IE6-9 will throw an exception
									// on any attempt to access responseText (#11426)
									if ( typeof xhr.responseText === "string" ) {
										responses.text = xhr.responseText;
									}

									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch( e ) {
										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}

									// Filter status for non standard behaviors

									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && s.isLocal && !s.crossDomain ) {
										status = responses.text ? 200 : 404;
									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}
						} catch( firefoxAccessException ) {
							if ( !isAbort ) {
								complete( -1, firefoxAccessException );
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, responseHeaders );
						}
					};

					if ( !s.async ) {
						// if we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {
						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						setTimeout( callback );
					} else {
						handle = ++xhrId;
						if ( xhrOnUnloadAbort ) {
							// Create the active xhrs callbacks list if needed
							// and attach the unload handler
							if ( !xhrCallbacks ) {
								xhrCallbacks = {};
								jQuery( window ).unload( xhrOnUnloadAbort );
							}
							// Add to list of active xhrs callbacks
							xhrCallbacks[ handle ] = callback;
						}
						xhr.onreadystatechange = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	});
}
var fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [function( prop, value ) {
			var end, unit,
				tween = this.createTween( prop, value ),
				parts = rfxnum.exec( value ),
				target = tween.cur(),
				start = +target || 0,
				scale = 1,
				maxIterations = 20;

			if ( parts ) {
				end = +parts[2];
				unit = parts[3] || ( jQuery.cssNumber[ prop ] ? "" : "px" );

				// We need to compute starting value
				if ( unit !== "px" && start ) {
					// Iteratively approximate from a nonzero starting point
					// Prefer the current property, because this process will be trivial if it uses the same units
					// Fallback to end or a simple constant
					start = jQuery.css( tween.elem, prop, true ) || end || 1;

					do {
						// If previous iteration zeroed out, double until we get *something*
						// Use a string for doubling factor so we don't accidentally see scale as unchanged below
						scale = scale || ".5";

						// Adjust and apply
						start = start / scale;
						jQuery.style( tween.elem, prop, start + unit );

					// Update scale, tolerating zero or NaN from tween.cur()
					// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
					} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
				}

				tween.unit = unit;
				tween.start = start;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[1] ? start + ( parts[1] + 1 ) * end : end;
			}
			return tween;
		}]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

function createTweens( animation, props ) {
	jQuery.each( props, function( prop, value ) {
		var collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( collection[ index ].call( animation, prop, value ) ) {

				// we're done with this property
				return;
			}
		}
	});
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	createTweens( animation, props );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

function propFilter( props, specialEasing ) {
	var value, name, index, easing, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

function defaultPrefilter( elem, props, opts ) {
	/*jshint validthis:true */
	var prop, index, length,
		value, dataShow, toggle,
		tween, hooks, oldfire,
		anim = this,
		style = elem.style,
		orig = {},
		handled = [],
		hidden = elem.nodeType && isHidden( elem );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		if ( jQuery.css( elem, "display" ) === "inline" &&
				jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";

			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !jQuery.support.shrinkWrapBlocks ) {
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}
	}


	// show/hide pass
	for ( index in props ) {
		value = props[ index ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ index ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {
				continue;
			}
			handled.push( index );
		}
	}

	length = handled.length;
	if ( length ) {
		dataShow = jQuery._data( elem, "fxshow" ) || jQuery._data( elem, "fxshow", {} );
		if ( "hidden" in dataShow ) {
			hidden = dataShow.hidden;
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( index = 0 ; index < length ; index++ ) {
			prop = handled[ index ];
			tween = anim.createTween( prop, hidden ? dataShow[ prop ] : 0 );
			orig[ prop ] = dataShow[ prop ] || jQuery.style( elem, prop );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}
	}
}

function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Remove in 2.0 - this supports IE8's panic based approach
// to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );
				doAnimation.finish = function() {
					anim.stop( true );
				};
				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.cur && hooks.cur.finish ) {
				hooks.cur.finish.call( this );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		});
	}
});

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth? 1 : 0;
	for( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p*Math.PI ) / 2;
	}
};

jQuery.timers = [];
jQuery.fx = Tween.prototype.init;
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	if ( timer() && jQuery.timers.push( timer ) ) {
		jQuery.fx.start();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};

// Back Compat <1.8 extension point
jQuery.fx.step = {};

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
}
jQuery.fn.offset = function( options ) {
	if ( arguments.length ) {
		return options === undefined ?
			this :
			this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
	}

	var docElem, win,
		box = { top: 0, left: 0 },
		elem = this[ 0 ],
		doc = elem && elem.ownerDocument;

	if ( !doc ) {
		return;
	}

	docElem = doc.documentElement;

	// Make sure it's not a disconnected DOM node
	if ( !jQuery.contains( docElem, elem ) ) {
		return box;
	}

	// If we don't have gBCR, just use 0,0 rather than error
	// BlackBerry 5, iOS 3 (original iPhone)
	if ( typeof elem.getBoundingClientRect !== core_strundefined ) {
		box = elem.getBoundingClientRect();
	}
	win = getWindow( doc );
	return {
		top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
		left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
	};
};

jQuery.offset = {

	setOffset: function( elem, options, i ) {
		var position = jQuery.css( elem, "position" );

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		var curElem = jQuery( elem ),
			curOffset = curElem.offset(),
			curCSSTop = jQuery.css( elem, "top" ),
			curCSSLeft = jQuery.css( elem, "left" ),
			calculatePosition = ( position === "absolute" || position === "fixed" ) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
			props = {}, curPosition = {}, curTop, curLeft;

		// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};


jQuery.fn.extend({

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || document.documentElement;
			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position") === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || document.documentElement;
		});
	}
});


// Create scrollLeft and scrollTop methods
jQuery.each( {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return jQuery.access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? (prop in win) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return jQuery.access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});
// Limit scope pollution from any deprecated API
// (function() {

// })();
// Expose jQuery to the global object
window.jQuery = window.$ = jQuery;

// Expose jQuery as an AMD module, but only for AMD loaders that
// understand the issues with loading multiple versions of jQuery
// in a page that all might call define(). The loader will indicate
// they have special allowances for multiple jQuery versions by
// specifying define.amd.jQuery = true. Register as a named module,
// since jQuery can be concatenated with other files that may use define,
// but not use a proper concatenation script that understands anonymous
// AMD modules. A named AMD is safest and most robust way to register.
// Lowercase jquery is used because AMD module names are derived from
// file names, and jQuery is normally delivered in a lowercase file name.
// Do this after creating the global so that if an AMD module wants to call
// noConflict to hide this version of jQuery, it will work.
if ( typeof define === "function" && define.amd && define.amd.jQuery ) {
	define( "jquery", [], function () { return jQuery; } );
}

})( window );;
steal.executed('jquery');
steal(function(){
	var can = window.can || {};
	if(typeof GLOBALCAN === 'undefined' || GLOBALCAN !== false) {
		window.can = can;
	}

	can.isDeferred = function( obj ) {
		var isFunction = this.isFunction;
		// Returns `true` if something looks like a deferred.
		return obj && isFunction(obj.then) && isFunction(obj.pipe);
	};
	
	var cid = 0;
	can.cid = function(object, name){
		if(object._cid){
			return object._cid
		} else{
			return object._cid = (name ||"" ) + (++cid)
		}
	}
	can.VERSION = '@EDGE';
	return can;
});
;
steal.executed('can/util/can.js');
steal('can/util/can.js',function (can) {
	can.each = function (elements, callback, context) {
		var i = 0, key;
		if (elements) {
			if (typeof elements.length === 'number' && elements.pop) {
				if ( elements.attr ) {
					elements.attr('length');
				}
				for (key = elements.length; i < key; i++) {
					if (callback.call(context || elements[i], elements[i], i, elements) === false) {
						break;
					}
				}
			} else if(elements.hasOwnProperty) {
				for (key in elements) {
					if(elements.hasOwnProperty(key)) {
						if (callback.call(context || elements[key], elements[key], key, elements) === false) {
							break;
						}
					}
				}
			}
		}
		return elements;
	};

	return can;
});
;
steal.executed('can/util/array/each.js');
// steal-clean
steal("can/util/string", function(can) {

	// ## construct.js
	// `can.Construct`  
	// _This is a modified version of
	// [John Resig's class](http://ejohn.org/blog/simple-javascript-inheritance/).  
	// It provides class level inheritance and callbacks._
	
	// A private flag used to initialize a new class instance without
	// initializing it's bindings.
	var initializing = 0;

	/** 
	 * @add can.Construct
	 */
	can.Construct = function() {
		if (arguments.length) {
			return can.Construct.extend.apply(can.Construct, arguments);
		}
	};

	/**
	 * @static
	 */
	can.extend(can.Construct, {
		/**
		 * @property {Boolean} can.Construct.constructorExtends constructorExtends
		 * @parent can.Construct.static
		 * 
		 * @description
		 * 
		 * Toggles the behavior of a constructor function called
		 * without `new` to extend the constructor function or
		 * create a new instance.
		 * 
		 * @body
		 * 
		 * If `constructorExtends` is:
		 * 
		 *  - `true` - the constructor extends
		 *  - `false` - a new instance of the constructor is created
		 * 
		 * For 1.1, `constructorExtends` defaults to true. For
		 * 1.2, `constructorExtends` will default to false.
		 */
		constructorExtends: true,
		/**
		 * @function can.Construct.newInstance newInstance
		 * @parent can.Construct.static
		 * 
		 * @description Returns an instance of `can.Construct`. This method
		 * can be overridden to return a cached instance.
		 * 
		 * @signature `can.Construct.newInstance([...args])`
		 * 
		 * @param {*} [args] arguments that get passed to [can.Construct::setup] and [can.Construct::init]. Note
		 * that if [can.Construct::setup] returns an array, those arguments will be passed to [can.Construct::init]
		 * instead.
		 * @return {class} instance of the class
		 *
		 * @body
		 * Creates a new instance of the constructor function. This method is useful for creating new instances
		 * with arbitrary parameters. Typically, however, you will simply want to call the constructor with the
		 * __new__ operator.
		 * 
		 * ## Example
		 * 
		 * The following creates a `Person` Construct and then creates a new instance of Person,
		 * using `apply` on newInstance to pass arbitrary parameters.
		 * 
		 * @codestart
		 * var Person = can.Construct({
		 *   init : function(first, middle, last) {
		 *     this.first = first;
		 *     this.middle = middle;
		 *     this.last = last;
		 *   }
		 * });
		 * 
		 * var args = ["Justin","Barry","Meyer"],
		 *     justin = new Person.newInstance.apply(null, args);
		 * @codeend
		 */
		newInstance: function() {
			// Get a raw instance object (`init` is not called).
			var inst = this.instance(),
				arg = arguments,
				args;
				
			// Call `setup` if there is a `setup`
			if ( inst.setup ) {
				args = inst.setup.apply(inst, arguments);
			}

			// Call `init` if there is an `init`  
			// If `setup` returned `args`, use those as the arguments
			if ( inst.init ) {
				inst.init.apply(inst, args || arguments);
			}

			return inst;
		},
		// Overwrites an object with methods. Used in the `super` plugin.
		// `newProps` - New properties to add.  
		// `oldProps` - Where the old properties might be (used with `super`).  
		// `addTo` - What we are adding to.
		_inherit: function( newProps, oldProps, addTo ) {
			can.extend(addTo || newProps, newProps || {})
		},
		// used for overwriting a single property.
		// this should be used for patching other objects
		// the super plugin overwrites this
		_overwrite : function(what, oldProps, propName, val){
			what[propName] = val;
		},
		// Set `defaults` as the merger of the parent `defaults` and this 
		// object's `defaults`. If you overwrite this method, make sure to
		// include option merging logic.
		/**
		 * @function can.Construct.setup setup
		 * @parent can.Construct.static
		 * 
		 * @description Perform initialization logic for a constructor function.
		 * 
		 * @signature `can.Construct.setup(base, fullName, staticProps, protoProps)`
		 * 
		 * A static `setup` method provides inheritable setup functionality
		 * for a Constructor function. The following example
		 * creates a Group constructor function.  Any constructor
		 * functions that inherit from Group will be added to 
		 * `Group.childGroups`.
		 * 
		 * 
		 *     Group = can.Construct.extend({
		 *       setup: function(Construct, fullName, staticProps, protoProps){
		 *         this.childGroups = [];
		 *         if(Construct !== can.Construct){
		 *           this.childGroups(Construct)
		 *         }
		 *         Construct.setup.apply(this, arguments)
		 *       }   
		 *     },{})
		 *     var Flock = Group.extend(...)
		 *     Group.childGroups[0] //-> Flock
		 * 
		 * @param {constructor} base The base constructor that is being inherited from.
		 * @param {String} fullName The name of the new constructor.
		 * @param {Object} staticProps The static properties of the new constructor.
		 * @param {Object} protoProps The prototype properties of the new constructor.
		 *
		 * @body
		 * The static `setup` method is called immediately after a constructor 
		 * function is created and 
		 * set to inherit from its base constructor. It is useful for setting up 
		 * additional inheritance work.
		 * Do not confuse this with the prototype `[can.Construct::setup]` method.
		 * 
		 * ## Setup Extends Defaults
		 * 
		 * Setup deeply extends the static `defaults` property of the base constructor with 
		 * properties of the inheriting constructor.  For example:
		 * 
		 * @codestart
		 * Parent = can.Construct({
		 *   defaults : {
		 *     parentProp: 'foo'
		 *   }
		 * },{})
		 * 
		 * Child = Parent({
		 *   defaults : {
		 *     childProp : 'bar'
		 *   }
		 * },{}
		 *     
		 * Child.defaults // {parentProp: 'foo', 'childProp': 'bar'}
		 * @codeend
		 * 
		 * ## Example
		 * 
		 * This `Parent` class adds a reference to its base class to itself, and
		 * so do all the classes that inherit from it.
		 * 
		 * @codestart
		 * Parent = can.Construct({
		 *   setup : function(base, fullName, staticProps, protoProps){
		 *     this.base = base;
		 * 
		 *     // call base functionality
		 *     can.Construct.setup.apply(this, arguments)
		 *   }
		 * },{});
		 * 
		 * Parent.base; // can.Construct
		 *     
		 * Child = Parent({});
		 * 
		 * Child.base; // Parent
		 * @codeend
		 */
		setup: function( base, fullName ) {
			this.defaults = can.extend(true,{}, base.defaults, this.defaults);
		},
		// Create's a new `class` instance without initializing by setting the
		// `initializing` flag.
		instance: function() {

			// Prevents running `init`.
			initializing = 1;

			var inst = new this();

			// Allow running `init`.
			initializing = 0;

			return inst;
		},
		// Extends classes.
		/**
		 * @function can.Construct.extend extend
		 * @parent can.Construct.static
		 * 
		 * @signature `can.Construct.extend([name,] [staticProperties,] instanceProperties)`
		 * 
		 * Extends `can.Construct`, or constructor functions derived from `can.Construct`, 
		 * to create a new constructor function. Example:
		 * 
		 *     Animal = can.Construct.extend({
		 *       sayHi: function(){
		 *         console.log("hi")
		 *       }
		 *     })
		 *     var animal = new Animal()
		 *     animal.sayHi();
		 * 
		 * @param {String} [name] Creates the necessary properties and 
		 * objects that point from the `window` to the created constructor function. The following:
		 * 
		 *     can.Construct.extend("company.project.Constructor",{})
		 *     
		 * creates a `company` object on window if it does not find one, a 
		 * `project` object on `company` if it does not find one, and it will set the
		 * `Constructor` property on the `project` object to point to the constructor function.
		 * 
		 * Finally, it sets "company.project.Constructor" as [can.Construct.fullName fullName]
		 * and "Constructor" as [can.Construct.shortName shortName].
		 * 
		 * @param {Object} [staticProperties] Properties that are added the constructor 
		 * function directly. For example:
		 * 
		 *     Animal = can.Construct.extend({
		 *       findAll: function(){
		 *         return can.ajax({url: "/animals"})
		 *       }
		 *     },{});
		 *     
		 *     Animal.findAll().then(function(json){ ... })
		 * 
		 * The [can.Construct.setup static setup] method can be used to 
		 * specify inheritable behavior when a Constructor function is created.
		 * 
		 * @param {Object} instanceProperties Properties that belong to 
		 * instances made with the constructor. These properties are added to the
		 * constructor's `prototype` object. Example:
		 * 
		 *     Animal = can.Construct.extend({
		 *       init: function(name){
		 *         this.name = name;
		 *       },
		 *       sayHi: function(){
		 *         console.log(this.name,"says hi")
		 *       }
		 *     })
		 *     var animal = new Animal()
		 *     animal.sayHi();
		 * 
		 * The [can.Construct::init init] and [can.Construct::setup setup] properties
		 * are used for initialization.
		 * 
		 * @return {function} The constructor function.
		 * 
		 */
		extend: function( fullName, klass, proto ) {
			// Figure out what was passed and normalize it.
			if ( typeof fullName != 'string' ) {
				proto = klass;
				klass = fullName;
				fullName = null;
			}

			if ( ! proto ) {
				proto = klass;
				klass = null;
			}
			proto = proto || {};

			var _super_class = this,
				_super = this.prototype,
				name, shortName, namespace, prototype;

			// Instantiate a base class (but only create the instance,
			// don't run the init constructor).
			prototype = this.instance();
			
			// Copy the properties over onto the new prototype.
			can.Construct._inherit(proto, _super, prototype);

			// The dummy class constructor.
			function Constructor() {
				// All construction is actually done in the init method.
				if ( ! initializing ) {
					return this.constructor !== Constructor && arguments.length && Constructor.constructorExtends?
						// We are being called without `new` or we are extending.
						arguments.callee.extend.apply(arguments.callee, arguments) :
						// We are being called with `new`.
						Constructor.newInstance.apply(Constructor, arguments);
				}
			}

			// Copy old stuff onto class (can probably be merged w/ inherit)
			for ( name in _super_class ) {
				if ( _super_class.hasOwnProperty(name) ) {
					Constructor[name] = _super_class[name];
				}
			}

			// Copy new static properties on class.
			can.Construct._inherit(klass, _super_class, Constructor);

			// Setup namespaces.
			if ( fullName ) {

				var parts = fullName.split('.'),
					shortName = parts.pop(),
					current = can.getObject(parts.join('.'), window, true),
					namespace = current,
					_fullName = can.underscore(fullName.replace(/\./g, "_")),
					_shortName = can.underscore(shortName);

				
				
				current[shortName] = Constructor;
			}

			// Set things that shouldn't be overwritten.
			can.extend(Constructor, {
				constructor: Constructor,
				prototype: prototype,
				/**
				 * @property {String} can.Construct.namespace namespace
				 * @parent can.Construct.static
				 *
				 * The `namespace` property returns the namespace your constructor is in.
				 * This provides a way organize code and ensure globally unique types. The
				 * `namespace` is the [can.Construct.fullName fullName] you passed without the [can.Construct.shortName shortName].
				 * 
				 * @codestart
				 * can.Construct("MyApplication.MyConstructor",{},{});
				 * MyApplication.MyConstructor.namespace // "MyApplication"
				 * MyApplication.MyConstructor.shortName // "MyConstructor"
				 * MyApplication.MyConstructor.fullName  // "MyApplication.MyConstructor"
				 * @codeend
				 */
				namespace: namespace,
				/**
				 * @property {String} can.Construct.shortName shortName
				 * @parent can.Construct.static
				 *
				 * If you pass a name when creating a Construct, the `shortName` property will be set to the
				 * name you passed without the [can.Construct.namespace namespace].
				 * 
				 * @codestart
				 * can.Construct("MyApplication.MyConstructor",{},{});
				 * MyApplication.MyConstructor.namespace // "MyApplication"
				 * MyApplication.MyConstructor.shortName // "MyConstructor"
				 * MyApplication.MyConstructor.fullName  // "MyApplication.MyConstructor"
				 * @codeend
				 */
				_shortName : _shortName,
				/**
				 * @property {String} can.Construct.fullName fullName
				 * @parent can.Construct.static
				 *
				 * If you pass a name when creating a Construct, the `fullName` property will be set to
				 * the name you passed. The `fullName` consists of the [can.Construct.namespace namespace] and 
				 * the [can.Construct.shortName shortName].
				 * 
				 * @codestart
				 * can.Construct("MyApplication.MyConstructor",{},{});
				 * MyApplication.MyConstructor.namespace // "MyApplication"
				 * MyApplication.MyConstructor.shortName // "MyConstructor"
				 * MyApplication.MyConstructor.fullName  // "MyApplication.MyConstructor"
				 * @codeend
				 */
				fullName: fullName,
				_fullName: _fullName
			});

			// Dojo and YUI extend undefined
			if(shortName !== undefined) {
				Constructor.shortName = shortName;
			}

			// Make sure our prototype looks nice.
			Constructor.prototype.constructor = Constructor;

			
			// Call the class `setup` and `init`
			var t = [_super_class].concat(can.makeArray(arguments)),
				args = Constructor.setup.apply(Constructor, t );
			
			if ( Constructor.init ) {
				Constructor.init.apply(Constructor, args || t );
			}

			/**
			 * @prototype
			 */
			return Constructor;

			
			
			//  
			/**
			 * @property {Function} can.Construct.prototype.constructor constructor
			 * @parent can.Construct.prototype
			 *
			 * A reference to the constructor function that created the instance. This allows you to access
			 * the constructor's static properties from an instance.
			 * 
			 * ## Example
			 * 
			 * This class has a static counter that counts how mane instances have been created:
			 *
			 * @codestart
			 * can.Construct("Counter", {
			 *     count: 0
			 * }, {
			 *     init: function() {
			 *         this.constructor.count++;
			 *     }
			 * });
			 * 
			 * new Counter();
			 * Counter.count; // 1
			 * @codeend 
			 */
		}

	});
	/** 
	 * @function can.Construct.prototype.setup setup
	 * @parent can.Construct.prototype
	 * 
	 * @signature `construct.setup(...args)`
	 * 
	 * A setup function for the instantiation of a constructor function.
	 * 
	 * @param {*} args The arguments passed to the constructor.
	 * 
	 * @return {Array|undefined} If an array is returned, the array's items are passed as
	 * arguments to [can.Construct::init init]. The following example always makes 
	 * sure that init is called with a jQuery wrapped element:
	 * 
	 *     WidgetFactory = can.Construct.extend({
	 *         setup: function(element){
	 *             return [$(element)]
	 *         }
	 *     })
	 *     
	 *     MyWidget = WidgetFactory.extend({
	 *         init: function($el){
	 *             $el.html("My Widget!!")
	 *         }
	 *     })
	 * 
	 * Otherwise, the arguments to the
	 * constructor are passed to [can.Construct::init] and the return value of `setup` is discarded.
	 * 
	 * @body
	 * 
	 * ## Deciding between `setup` and `init`
	 * 
	 * 
	 * Usually, you should use [can.Construct::init init] to do your constructor function's initialization.
	 * Use `setup` instead for:
	 * 
	 *   - initialization code that you want to run before the inheriting constructor's 
	 *     `init` method is called.
	 *   - initialization code that should run whether or not inheriting constructors
	 *     call their base's `init` methods.
	 *   - modifying the arguments that will get passed to `init`.
	 * 
	 * ## Example
	 * 
	 * This code is a simplified version of the code in [can.Control]'s setup
	 * method. It converts the first argument to a jQuery collection and
	 * extends the controller's defaults with the options that were passed.
	 * 
	 * 
	 *     can.Control = can.Construct.extend({
	 *         setup: function(domElement, rawOptions) {
	 *             // set up this.element
	 *             this.element = $(domElement);
	 *         
	 *             // set up this.options
	 *             this.options = can.extend({},
	 *                                   this.constructor.defaults,
	 *                                   rawOptions
	 *                                  );
	 * 
	 *             // pass this.element and this.options to init.
	 *             return [this.element, this.options];        
	 *         }
	 *     });
	 * 
	 */
	can.Construct.prototype.setup = function(){};
	/** 
	 * @function can.Construct.prototype.init init
	 * @parent can.Construct.prototype
	 * 
	 * @description Called when a new instance of a can.Construct is created.
	 * 
	 * @signature `construct.init(...args)`
	 * @param {*} args the arguments passed to the constructor (or the elements of the array returned from [can.Construct::setup])
	 * 
	 * @body
	 * If a prototype `init` method is provided, it is called when a new Construct is created,
	 * after [can.Construct::setup]. The `init` method is where the bulk of your initialization code
	 * should go, and a common thing to do in `init` is to save the arguments passed into the constructor.
	 * 
	 * ## Examples
	 * 
	 * First, we'll make a Person constructor that has a first and last name:
	 *
	 * @codestart
	 * can.Construct("Person", {
	 *     init: function(first, last) {
	 *         this.first = first;
	 *         this.last  = last;
	 *     }
	 * });
	 * 
	 * var justin = new Person("Justin", "Meyer");
	 * justin.first; // "Justin"
	 * justin.last; // "Meyer"
	 * @codeend
	 * 
	 * Then we'll extend Person into Programmer and add a favorite language:
	 * 
	 * @codestart
	 * Person("Programmer", {
	 *     init: function(first, last, language) {
	 *         // call base's init
	 *         Person.prototype.init.apply(this, arguments);
	 *
	 *         // other initialization code
	 *         this.language = language;
	 *     },
	 *     bio: function() {
	 *         return 'Hi! I'm ' + this.first + ' ' + this.last +
	 *             ' and I write ' + this.language + '.';
	 *     }
	 * });
	 * 
	 * var brian = new Programmer("Brian", "Moschel", 'ECMAScript');
	 * brian.bio(); // "Hi! I'm Brian Moschel and I write ECMAScript.";
	 * @codeend
	 * 
	 * ## Be Aware
	 * 
	 * [can.Construct::setup] is able to modify the arguments passed to `init`.
	 * If you aren't receiving the right arguments to `init`, check to make sure
	 * that they aren't being changed by `setup` somewhere along the inheritance chain.
	 */
	can.Construct.prototype.init = function(){};

	
	return can.Construct;
})
;
steal.executed('can/construct/construct.js');
steal('can/util', function (can) {
	// ##string.js
	// _Miscellaneous string utility functions._  

	// Several of the methods in this plugin use code adapated from Prototype
	// Prototype JavaScript framework, version 1.6.0.1.
	// © 2005-2007 Sam Stephenson
	var strUndHash = /_|-/,
		strColons = /\=\=/,
		strWords = /([A-Z]+)([A-Z][a-z])/g,
		strLowUp = /([a-z\d])([A-Z])/g,
		strDash = /([a-z\d])([A-Z])/g,
		strReplacer = /\{([^\}]+)\}/g,
		strQuote = /"/g,
		strSingleQuote = /'/g,

	// Returns the `prop` property from `obj`.
	// If `add` is true and `prop` doesn't exist in `obj`, create it as an
	// empty object.
		getNext = function (obj, prop, add) {
			var result = obj[prop];

			if (result === undefined && add === true) { result = obj[prop] = {} }
			return result
		},

	// Returns `true` if the object can have properties (no `null`s).
		isContainer = function (current) {
			return (/^f|^o/).test(typeof current);
		};

	can.extend(can, {
		// Escapes strings for HTML.
		/**
		 * @function can.esc
		 * @parent can.util
		 *
		 * `can.esc(string)` escapes a string for insertion into html.
		 *
		 *     can.esc( "<foo>&<bar>" ) //-> "&lt;foo&lt;&amp;&lt;bar&lt;"
		 */
		esc: function (content) {
			// Convert bad values into empty strings
			var isInvalid = content === null || content === undefined || (isNaN(content) && ("" + content === 'NaN'));
			return ( "" + ( isInvalid ? '' : content ) )
				.replace(/&/g, '&amp;')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				.replace(strQuote, '&#34;')
				.replace(strSingleQuote, "&#39;");
		},

		/**
		 * @function can.getObject
		 * @parent can.util
		 * Gets an object from a string.  It can also modify objects on the
		 * 'object path' by removing or adding properties.
		 *
		 *     Foo = {Bar: {Zar: {"Ted"}}}
		 *     can.getObject("Foo.Bar.Zar") //-> "Ted"
		 *
		 * @param {String} name the name of the object to look for
		 * @param {Array} [roots] an array of root objects to look for the
		 *   name.  If roots is not provided, the window is used.
		 * @param {Boolean} [add] true to add missing objects to
		 *  the path. false to remove found properties. undefined to
		 *  not modify the root object
		 * @return {Object} The object.
		 */
		getObject: function (name, roots, add) {

			// The parts of the name we are looking up
			// `['App','Models','Recipe']`
			var parts = name ? name.split('.') : [],
				length = parts.length,
				current,
				r = 0,
				i, container, rootsLength;

			// Make sure roots is an `array`.
			roots = can.isArray(roots) ? roots : [roots || window];

			rootsLength = roots.length

			if (!length) {
				return roots[0];
			}

			// For each root, mark it as current.
			for (r; r < rootsLength; r++) {
				current = roots[r];
				container = undefined;

				// Walk current to the 2nd to last object or until there
				// is not a container.
				for (i = 0; i < length && isContainer(current); i++) {
					container = current;
					current = getNext(container, parts[i]);
				}

				// If we found property break cycle
				if (container !== undefined && current !== undefined) {
					break
				}
			}

			// Remove property from found container
			if (add === false && current !== undefined) {
				delete container[parts[i - 1]]
			}

			// When adding property add it to the first root
			if (add === true && current === undefined) {
				current = roots[0]

				for (i = 0; i < length && isContainer(current); i++) {
					current = getNext(current, parts[i], true);
				}
			}

			return current;
		},
		// Capitalizes a string.
		/**
		 * @function can.capitalize
		 * @parent can.util.
		 * @description Capitalize the first letter of a string.
		 * @signature `can.capitalize(str)`
		 * @param {String} str The string to capitalize.
		 * @return {String} The string with the first letter capitalized.
		 *
		 *        can.capitalize('candy is fun!'); //-> Returns: 'Candy is fun!'
		 *
		 */
		capitalize: function (s, cache) {
			// Used to make newId.
			return s.charAt(0).toUpperCase() + s.slice(1);
		},

		// Underscores a string.
		/**
		 * @function can.underscore
		 * @parent can.util
		 *
		 * Underscores a string.
		 *
		 *     can.underscore("OneTwo") //-> "one_two"
		 *
		 * @param {String} s
		 * @return {String} the underscored string
		 */
		underscore: function (s) {
			return s
				.replace(strColons, '/')
				.replace(strWords, '$1_$2')
				.replace(strLowUp, '$1_$2')
				.replace(strDash, '_')
				.toLowerCase();
		},
		// Micro-templating.
		/**
		 * @function can.sub
		 * @parent can.util
		 *
		 * Returns a string with {param} replaced values from data.
		 *
		 *     can.sub("foo {bar}",{bar: "far"})
		 *     //-> "foo far"
		 *
		 * @param {String} s The string to replace
		 * @param {Object} data The data to be used to look for properties.  If it's an array, multiple
		 * objects can be used.
		 * @param {Boolean} [remove] if a match is found, remove the property from the object
		 * @return {String} The converted string or `null` if any data to render are `undefined` or `null`
		 */
		sub: function (str, data, remove) {
			var obs = [];

			str = str || '';

			obs.push(str.replace(strReplacer, function (whole, inside) {

				// Convert inside to type.
				var ob = can.getObject(inside, data, remove === true ? false : undefined);

				if (ob === undefined || ob === null) {
					obs = null;
					return "";
				}

				// If a container, push into objs (which will return objects found).
				if (isContainer(ob) && obs) {
					obs.push(ob);
					return "";
				}

				return "" + ob;
			}));

			return obs === null ? obs : (obs.length <= 1 ? obs[0] : obs);
		},

		// These regex's are used throughout the rest of can, so let's make
		// them available.
		replacer: strReplacer,
		undHash: strUndHash
	});
	return can;
});
;
steal.executed('can/util/string/string.js');
steal('can/view/mustache',function(can){return can.view.preload('documentjs_site_static_build_content_list_mustache',can.Mustache(function(_CONTEXT,_VIEW) { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];var ___c0nt3xt = this && this.___st4ck3d ? this : [];___c0nt3xt.___st4ck3d = true;var ___st4ck = function(context, self) {var s;if (arguments.length == 1 && context) {s = !context.___st4ck3d ? [context] : context;} else if (!context.___st4ck3d) {s = [self, context];} else if (context && context === self && context.___st4ck3d) {s = context.slice(0);} else {s = context && context.___st4ck3d ? context.concat([self]) : ___st4ck(context).concat([self]);}return (s.___st4ck3d = true) && s;};___v1ew.push("<ul>");___v1ew.push("\n");___v1ew.push(can.view.txt(0,'ul',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},"#",can.Mustache.get("sections",{context:___st4ck(___c0nt3xt,this),options:options},false,false),[{_:function(){return ___v1ew.join("");}},{fn:function(___c0nt3xt){var ___v1ew = [];___v1ew.push("\t<li><a href=\"#");___v1ew.push(can.view.txt(1,'a','href',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("id",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),">");___v1ew.push(can.view.txt(1,'a',0,this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("text",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("</a></li>");___v1ew.push("\n");return ___v1ew.join("");}}])}));___v1ew.push("</ul>");; return ___v1ew.join('')}} }));
});
steal.executed('documentjs/site/static/build/content_list.mustache');
steal('can/util',
	  'can/view',
	  'can/view/scanner.js',
	  'can/observe/compute',
	  'can/view/render.js',
function( can ){
	
	// # mustache.js
	// `can.Mustache`: The Mustache templating engine.
	// 
	// See the [Transformation](#section-29) section within *Scanning Helpers* for a detailed explanation 
	// of the runtime render code design. The majority of the Mustache engine implementation 
	// occurs within the *Transformation* scanning helper.

	// ## Initialization
	//
	// Define the view extension.
	can.view.ext = ".mustache";

	// ### Setup internal helper variables and functions.
	//
	// An alias for the context variable used for tracking a stack of contexts.
	// This is also used for passing to helper functions to maintain proper context.
	var CONTEXT = '___c0nt3xt',
		// An alias for the variable used for the hash object that can be passed
		// to helpers via `options.hash`.
		HASH = '___h4sh',
		// An alias for the function that adds a new context to the context stack.
		STACK = '___st4ck',
		STACKED = '___st4ck3d',
		// An alias for the most used context stacking call.
		CONTEXT_STACK = STACK + '(' + CONTEXT + ',this)',
		CONTEXT_OBJ = '{context:' + CONTEXT_STACK + ',options:options}',
		
		/**
		 * Checks whether an object is a can.Observe.
		 * @param  {[can.Observe]}  observable
		 * @return {Boolean} returns if the object is an observable.
		 */
		isObserve = function(obj) {
			return obj !== null && can.isFunction(obj.attr) && obj.constructor && !!obj.constructor.canMakeObserve;
		},
		
		/**
		 * Tries to determine if the object passed is an array.
		 * @param  {Array}  obj The object to check.
		 * @return {Boolean} returns if the object is an array.
		 */
		isArrayLike = function(obj) {
			return obj && obj.splice && typeof obj.length == 'number';
		},
		
		// ## Mustache
		/**
		 * @hide
		 * The Mustache templating engine.
		 * @param {Object} options	Configuration options
		 */
		Mustache = function(options, helpers) {
			// Support calling Mustache without the constructor.
			// This returns a function that renders the template.
			if ( this.constructor != Mustache ) {
				var mustache = new Mustache(options);
				return function(data,options) {
					 return mustache.render(data,options);
				};
			}

			// If we get a `function` directly, it probably is coming from
			// a `steal`-packaged view.
			if ( typeof options == "function" ) {
				this.template = {
					fn: options
				};
				return;
			}

			// Set options on self.
			can.extend(this, options);
			this.template = this.scanner.scan(this.text, this.name);
		};

	/**
	 * @add can.Mustache
	 */
	// Put Mustache on the `can` object.
	can.Mustache = window.Mustache = Mustache;

	/** 
	 * @prototype
	 */
	Mustache.prototype.
	/**
	 * @function can.Mustache.prototype.render render
	 * @parent can.Mustache.prototype
	 * @signature `mustache.render( data [, helpers] )`
	 * @param {Object} data Data to interpolate into the template.
	 * @return {String} The template with interpolated data, in string form.
	 * 
	 * @body
	 * Renders an object with view helpers attached to the view.
	 * 
	 *		 new Mustache({text: "<%= message %>"}).render({
	 *			 message: "foo"
	 *		 })
	 */
	render = function( object, options ) {
		object = object || {};
		options = options || {};
		if(!options.helpers && !options.partials){
			options.helpers = options;
		}
		return this.template.fn.call(object, object, {
			_data: object,
			options: options
		});
	};

	can.extend(Mustache.prototype, {
		// Share a singleton scanner for parsing templates.
		scanner: new can.view.Scanner({
			// A hash of strings for the scanner to inject at certain points.
			text: {
				// This is the logic to inject at the beginning of a rendered template. 
				// This includes initializing the `context` stack.
				start: 'var ' + CONTEXT + ' = this && this.' + STACKED + ' ? this : [];' + CONTEXT + '.' + STACKED + ' = true;' +
					'var ' + STACK + ' = function(context, self) {' +
						'var s;' +
						'if (arguments.length == 1 && context) {' +
							's = !context.' + STACKED + ' ? [context] : context;' +
						// Handle helpers with custom contexts (#228)
						'} else if (!context.' + STACKED + ') {' +
							's = [self, context];' +
						'} else if (context && context === self && context.' + STACKED + ') {' +
							's = context.slice(0);' +
						'} else {' +
							's = context && context.' + STACKED + ' ? context.concat([self]) : ' + STACK + '(context).concat([self]);' +
						'}' +
						'return (s.' + STACKED + ' = true) && s;' +
					'};'
			},
			
			// An ordered token registry for the scanner.
			// This needs to be ordered by priority to prevent token parsing errors.
			// Each token follows the following structure:
			//
			//		[
			//			// Which key in the token map to match.
			//			"tokenMapName",
			//
			//			// A simple token to match, like "{{".
			//			"token",
			//
			//			// Optional. A complex (regexp) token to match that 
			//			// overrides the simple token.
			//			"[\\s\\t]*{{",
			//
			//			// Optional. A function that executes advanced 
			//			// manipulation of the matched content. This is 
			//			// rarely used.
			//			function(content){   
			//				return content;
			//			}
			//		]
			tokens: [
				/**
				 * @function can.Mustache.tags.escaped {{key}}
				 * 
				 * @description Insert the value of the [can.Mustache.key key] into the 
				 * output of the template.
				 * 
				 * @parent can.Mustache.tags 0
				 * 
				 * @signature `{{key}}`
				 * 
				 * @param {can.Mustache.key} key A key that references one of the following:
				 * 
				 *  - A [can.Mustache.registerHelper registered helper].
				 *  - A value within the current or parent 
				 *    [can.Mustache.context context]. If the value is a function or [can.compute], the 
				 *    function's return value is used.
				 * 
				 * @return {String|Function|*} 
				 * 
				 * After the key's value is found (and set to any function's return value), 
				 * it is passed to [can.view.txt] as the result of a call to its `func` 
				 * argument. There, if the value is a:
				 * 
				 *  - `null` or `undefined` - an empty string is inserted into the rendered template result.
				 *  - `String` or `Number` - the value is inserted into the rendered template result.
				 *  - `Function` - A [can.view.hook hookup] attribute or element is inserted so this function
				 *    will be called back with the DOM element after it is created.
				 * 
				 * @body
				 * 
				 * ## Use
				 * 
				 * `{{key}}` insert data into the template. It most commonly references 
				 * values within the current [can.Mustache.context context]. For example:
				 * 
				 * Rendering:
				 * 
				 *     <h1>{{name}}</h1>
				 * 
				 * With:
				 * 
				 *     {name: "Austin"}
				 * 
				 * Results in:
				 * 
				 *     <h1>Austin</h1>
				 * 
				 * If the key value is a String or Number, it is inserted into the template.  
				 * If it is `null` or `undefined`, nothing is added to the template.
				 * 
				 * 
				 * ## Nested Properties
				 * 
				 * Mustache supports nested paths, making it possible to 
				 * look up properties nested deep inside the current context. For example:
				 * 
				 * Rendering:
				 * 
				 *     <h1>{{book.author}}</h1>
				 * 
				 * With:
				 * 
				 *     {
				 *       book: {
				 *         author: "Ernest Hemingway"
				 *       }
				 *     }
				 * 
				 * Results in:
				 * 
				 *     <h1>Ernest Hemingway</h1>
				 * 
				 * ## Looking up values in parent contexts
				 * 
				 * Sections and block helpers can create their own contexts. If a key's value
				 * is not found in the current context, it will look up the key's value
				 * in parent contexts. For example:
				 * 
				 * Rendering:
				 * 
				 *     {{#chapters}}
				 *        <li>{{title}} - {{name}}</li>
				 *     {{chapters}}
				 * 
				 * With:
				 * 
				 *     {
				 *       title: "The Book of Bitovi"	
				 *       chapters: [{name: "Breakdown"}]
				 *     }
				 *   
				 * Results in:
				 * 
				 *     <li>The Book of Bitovi - Breakdown</li>
				 * 
				 * 
				 */
				// Return unescaped
				["returnLeft", "{{{", "{{[{&]"],
				// Full line comments
				["commentFull", "{{!}}", "^[\\s\\t]*{{!.+?}}\\n"],
				// Inline comments
				["commentLeft", "{{!", "(\\n[\\s\\t]*{{!|{{!)"],
				/**
				 * @function can.Mustache.tags.unescaped {{{key}}}
				 * 
				 * @parent can.Mustache.tags 1
				 * 
				 * @description Insert the unescaped value of the [can.Mustache.key key] into the 
				 * output of the template.
				 * 
				 * @signature `{{{key}}}`
				 * 
				 * Behaves just like [can.Mustache.tags.escaped {{key}}] and [can.Mustache.helpers.helper {{helper}}] but does not
				 * escape the result. 
				 * 
				 * @param {can.Mustache.key} key A key that references a value within the current or parent 
				 * context. If the value is a function or can.compute, the function's return value is used.
				 * @return {String|Function|*} 
				 * 
				 * 
				 */
				// Full line escapes
				// This is used for detecting lines with only whitespace and an escaped tag
				["escapeFull", "{{}}", "(^[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}$)", function(content) {
					return {
						before: /^\n.+?\n$/.test(content) ? '\n' : '',
						content: content.match(/\{\{(.+?)\}\}/)[1] || ''
					};
				}],
				// Return escaped
				["escapeLeft", "{{"],
				// Close return unescaped
				["returnRight", "}}}"],
				// Close tag
				["right", "}}"]
			],
			
			// ## Scanning Helpers
			//
			// This is an array of helpers that transform content that is within escaped tags like `{{token}}`. These helpers are solely for the scanning phase; they are unrelated to Mustache/Handlebars helpers which execute at render time. Each helper has a definition like the following:
			//
			//		{
			//			// The content pattern to match in order to execute.
			//			// Only the first matching helper is executed.
			//			name: /pattern to match/,
			//
			//			// The function to transform the content with.
			//			// @param {String} content   The content to transform.
			//			// @param {Object} cmd       Scanner helper data.
			//			//                           {
			//			//                             insert: "insert command",
			//			//                             tagName: "div",
			//			//                             status: 0
			//			//                           }
			//			fn: function(content, cmd) {
			//				return 'for text injection' || 
			//					{ raw: 'to bypass text injection' };
			//			}
			//		}
			helpers: [
				// ### Partials
				//
				// Partials begin with a greater than sign, like {{> box}}.
				// 
				// Partials are rendered at runtime (as opposed to compile time), 
				// so recursive partials are possible. Just avoid infinite loops.
				// 
				// For example, this template and partial:
				// 
				// 		base.mustache:
				// 			<h2>Names</h2>
				// 			{{#names}}
				// 				{{> user}}
				// 			{{/names}}
				// 			
				// 		user.mustache:
				// 			<strong>{{name}}</strong>
				{
					name: /^>[\s]*\w*/,
					fn:function(content, cmd){
						// Get the template name and call back into the render method,
						// passing the name and the current context.
						var templateName = can.trim(content.replace(/^>\s?/, '')).replace(/["|']/g, "");
						return "options.partials && options.partials['"+templateName+"'] ? can.Mustache.renderPartial(options.partials['"+templateName+"']," + 
							CONTEXT_STACK + ",options) : can.Mustache.render('" + templateName + "', " + CONTEXT_STACK + ")";
					}
				},

				// ### Data Hookup
				// 
				// This will attach the data property of `this` to the element
				// its found on using the first argument as the data attribute
				// key.
				// 
				// For example:
				// 	
				//		<li id="nameli" {{ data 'name' }}></li>
				// 
				// then later you can access it like:
				// 
				//		can.$('#nameli').data('name');
				/**
				 * @function can.Mustache.helpers.data {{data name}}
				 * @parent can.Mustache.tags
				 * @signature `{{data name}}`
				 * 
				 * Adds the current [can.Mustache.context context] to the
				 * element's [can.data].
				 * 
				 * @param {String} name The name of the data attribute to use for the
				 * context.
				 * 
				 * @body
				 * 
				 * ## Use 
				 * 
				 * Its common you want some data in the template to be available 
				 * on an element.  `{{data name}}` allows you to save the 
				 * context so it can later be retrieved by [can.data] or 
				 * `$.fn.data`. For example,
				 * 
				 * The template:
				 * 
				 *     <ul>
				 *       <li id="person" {{data 'person'}}>{{name}}</li>
				 *     </ul>
				 * 
				 * Rendered with:
				 * 
				 *     document.body.appendChild(
				 *       can.view.mustache(template,{ person: { name: 'Austin' } });
				 * 
				 * Retrieve the person data back with:
				 * 
				 *     $("#person").data("person")
				 * 
				 */
				{
					name: /^\s*data\s/,
					fn: function(content, cmd){
						var attr = content.match(/["|'](.*)["|']/)[1];
						// return a function which calls `can.data` on the element
						// with the attribute name with the current context.
						return "can.proxy(function(__){" +
							// "var context = this[this.length-1];" +
							// "context = context." + STACKED + " ? context[context.length-2] : context;" +
							"can.data(can.$(__),'" + attr + "', this.pop()); }, " + CONTEXT_STACK + ")";
					}
				},
				
				// ### Transformation (default)
				//
				// This transforms all content to its interpolated equivalent,
				// including calls to the corresponding helpers as applicable. 
				// This outputs the render code for almost all cases.
				//
				// #### Definitions
				// 
				// * `context` - This is the object that the current rendering context operates within. 
				//		Each nested template adds a new `context` to the context stack.
				// * `stack` - Mustache supports nested sections, 
				//		each of which add their own context to a stack of contexts.
				//		Whenever a token gets interpolated, it will check for a match against the 
				//		last context in the stack, then iterate through the rest of the stack checking for matches.
				//		The first match is the one that gets returned.
				// * `Mustache.txt` - This serializes a collection of logic, optionally contained within a section.
				//		If this is a simple interpolation, only the interpolation lookup will be passed.
				//		If this is a section, then an `options` object populated by the truthy (`options.fn`) and 
				//		falsey (`options.inverse`) encapsulated functions will also be passed. This section handling 
				//		exists to support the runtime context nesting that Mustache supports.
				// * `Mustache.get` - This resolves an interpolation reference given a stack of contexts.
				// * `options` - An object containing methods for executing the inner contents of sections or helpers.  
				//		`options.fn` - Contains the inner template logic for a truthy section.  
				//		`options.inverse` - Contains the inner template logic for a falsey section.  
				//		`options.hash` - Contains the merged hash object argument for custom helpers.
				//
				// #### Design
				//
				// This covers the design of the render code that the transformation helper generates.
				//
				// ##### Pseudocode
				// 
				// A detailed explanation is provided in the following sections, but here is some brief pseudocode
				// that gives a high level overview of what the generated render code does (with a template similar to  
				// `"{{#a}}{{b.c.d.e.name}}{{/a}}" == "Phil"`).
				//
				// *Initialize the render code.*
				// 
				// 		view = []
				// 		context = []
				// 		stack = fn { context.concat([this]) }
				// 		
				// *Render the root section.*
				//
				// 		view.push( "string" )
				// 		view.push( can.view.txt(
				//
				// *Render the nested section with `can.Mustache.txt`.*
				//
				// 			txt( 
				//
				// *Add the current context to the stack.*
				//
				// 				stack(), 
				//
				// *Flag this for truthy section mode.*
				//
				// 				"#",
				//
				// *Interpolate and check the `a` variable for truthyness using the stack with `can.Mustache.get`.*
				// 
				// 				get( "a", stack() ),
				//
				// *Include the nested section's inner logic.
				// The stack argument is usually the parent section's copy of the stack, 
				// but it can be an override context that was passed by a custom helper.
				// Sections can nest `0..n` times -- **NESTCEPTION**.*
				//
				// 				{ fn: fn(stack) {
				//
				// *Render the nested section (everything between the `{{#a}}` and `{{/a}}` tokens).*
				//
				// 					view = []
				// 					view.push( "string" )
				// 					view.push(
				//
				// *Add the current context to the stack.*
				//
				// 						stack(),
				//
				// *Flag this as interpolation-only mode.*
				//
				// 						null,
				//
				// *Interpolate the `b.c.d.e.name` variable using the stack.*
				//
				// 						get( "b.c.d.e.name", stack() ),
				// 					)
				// 					view.push( "string" )
				//
				// *Return the result for the nested section.*
				//
				// 					return view.join()
				// 				}}
				// 			)
				// 		))
				// 		view.push( "string" )
				//
				// *Return the result for the root section, which includes all nested sections.*
				//
				// 		return view.join()
				//
				// ##### Initialization
				//
				// Each rendered template is started with the following initialization code:
				//
				// 		var ___v1ew = [];
				// 		var ___c0nt3xt = [];
				// 		___c0nt3xt.___st4ck = true;
				// 		var ___st4ck = function(context, self) {
				// 			var s;
				// 			if (arguments.length == 1 && context) {
				// 				s = !context.___st4ck ? [context] : context;
				// 			} else {
				// 				s = context && context.___st4ck 
				//					? context.concat([self]) 
				//					: ___st4ck(context).concat([self]);
				// 			}
				// 			return (s.___st4ck = true) && s;
				// 		};
				//
				// The `___v1ew` is the the array used to serialize the view.
				// The `___c0nt3xt` is a stacking array of contexts that slices and expands with each nested section.
				// The `___st4ck` function is used to more easily update the context stack in certain situations.
				// Usually, the stack function simply adds a new context (`self`/`this`) to a context stack. 
				// However, custom helpers will occasionally pass override contexts that need their own context stack.
				//
				// ##### Sections
				//
				// Each section, `{{#section}} content {{/section}}`, within a Mustache template generates a section 
				// context in the resulting render code. The template itself is treated like a root section, with the 
				// same execution logic as any others. Each section can have `0..n` nested sections within it.
				//
				// Here's an example of a template without any descendent sections.  
				// Given the template: `"{{a.b.c.d.e.name}}" == "Phil"`  
				// Would output the following render code:
				//
				//		___v1ew.push("\"");
				//		___v1ew.push(can.view.txt(1, '', 0, this, function() {
				// 			return can.Mustache.txt(___st4ck(___c0nt3xt, this), null, 
				//				can.Mustache.get("a.b.c.d.e.name", 
				//					___st4ck(___c0nt3xt, this))
				//			);
				//		}));
				//		___v1ew.push("\" == \"Phil\"");
				//
				// The simple strings will get appended to the view. Any interpolated references (like `{{a.b.c.d.e.name}}`) 
				// will be pushed onto the view via `can.view.txt` in order to support live binding.
				// The function passed to `can.view.txt` will call `can.Mustache.txt`, which serializes the object data by doing 
				// a context lookup with `can.Mustache.get`.
				//
				// `can.Mustache.txt`'s first argument is a copy of the context stack with the local context `this` added to it.
				// This stack will grow larger as sections nest.
				//
				// The second argument is for the section type. This will be `"#"` for truthy sections, `"^"` for falsey, 
				// or `null` if it is an interpolation instead of a section.
				//
				// The third argument is the interpolated value retrieved with `can.Mustache.get`, which will perform the 
				// context lookup and return the approriate string or object.
				//
				// Any additional arguments, if they exist, are used for passing arguments to custom helpers.
				//
				// For nested sections, the last argument is an `options` object that contains the nested section's logic.
				//
				// Here's an example of a template with a single nested section.  
				// Given the template: `"{{#a}}{{b.c.d.e.name}}{{/a}}" == "Phil"`  
				// Would output the following render code:
				//
				//		___v1ew.push("\"");
				// 		___v1ew.push(can.view.txt(0, '', 0, this, function() {
				// 			return can.Mustache.txt(___st4ck(___c0nt3xt, this), "#", 
				//				can.Mustache.get("a", ___st4ck(___c0nt3xt, this)), 
				//					[{
				// 					_: function() {
				// 						return ___v1ew.join("");
				// 					}
				// 				}, {
				// 					fn: function(___c0nt3xt) {
				// 						var ___v1ew = [];
				// 						___v1ew.push(can.view.txt(1, '', 0, this, 
				//								function() {
				//  								return can.Mustache.txt(
				// 									___st4ck(___c0nt3xt, this), 
				// 									null, 
				// 									can.Mustache.get("b.c.d.e.name", 
				// 										___st4ck(___c0nt3xt, this))
				// 								);
				// 							}
				// 						));
				// 						return ___v1ew.join("");
				// 					}
				// 				}]
				//			)
				// 		}));
				//		___v1ew.push("\" == \"Phil\"");
				//
				// This is specified as a truthy section via the `"#"` argument. The last argument includes an array of helper methods used with `options`.
				// These act similarly to custom helpers: `options.fn` will be called for truthy sections, `options.inverse` will be called for falsey sections.
				// The `options._` function only exists as a dummy function to make generating the section nesting easier (a section may have a `fn`, `inverse`,
				// or both, but there isn't any way to determine that at compilation time).
				// 
				// Within the `fn` function is the section's render context, which in this case will render anything between the `{{#a}}` and `{{/a}}` tokens.
				// This function has `___c0nt3xt` as an argument because custom helpers can pass their own override contexts. For any case where custom helpers
				// aren't used, `___c0nt3xt` will be equivalent to the `___st4ck(___c0nt3xt, this)` stack created by its parent section. The `inverse` function
				// works similarly, except that it is added when `{{^a}}` and `{{else}}` are used. `var ___v1ew = []` is specified in `fn` and `inverse` to 
				// ensure that live binding in nested sections works properly.
				//
				// All of these nested sections will combine to return a compiled string that functions similar to EJS in its uses of `can.view.txt`.
				//
				// #### Implementation
				{
					name: /^.*$/,
					fn: function(content, cmd) {
						var mode = false,
							result = [];

						// Trim the content so we don't have any trailing whitespace.
						content = can.trim(content);

						// Determine what the active mode is.
						// 
						// * `#` - Truthy section
						// * `^` - Falsey section
						// * `/` - Close the prior section
						// * `else` - Inverted section (only exists within a truthy/falsey section)
						if (content.length && (mode = content.match(/^([#^/]|else$)/))) {
							mode = mode[0];
							switch (mode) {
								/**
								 * @function can.Mustache.helpers.section {{#key}}
								 * @parent can.Mustache.tags 2
								 * 
								 * @signature `{{#key}}BLOCK{{/key}}`
								 * 
								 * Render blocks of text one or more times, depending 
								 * on the value of the key in the current context.
								 * 
								 * @param {can.Mustache.key} key A key that references a value within the current or parent 
								 * [can.Mustache.context context]. If the value is a function or [can.compute], the 
								 * function's return value is used.
								 * 
								 * 
								 * @return {String} 
								 * 
								 * Depending on the value's type, the following actions happen:
								 * 
								 * - `Array` or [can.Observe.List] - the block is rendered for 
								 *   each item in the array. The [can.Mustache.context context] is set to 
								 *   the item within each block rendering.
								 * - A `truthy` value - the block is rendered with the [can.Mustache.context context]
								 *   set to the value.
								 * - A `falsey` value - the block is not rendered.
								 * 
								 * The rendered result of the blocks, block or an empty string is returned.
								 * 
								 * @body
								 * 
								 * Sections contain text blocks and evaluate whether to render it or not.  If
								 * the object evaluates to an array it will iterate over it and render the block
								 * for each item in the array.  There are four different types of sections.
								 * 
								 * ## Falseys or Empty Arrays
								 * 
								 * If the value returns a `false`, `undefined`, `null`, `""` or `[]` we consider
								 * that a *falsey* value.
								 * 
								 * If the value is falsey, the section will **NOT** render the block.
								 * 
								 * 	{ 
								 * 		friends: false
								 * 	}
								 * 
								 * 	{{#friends}}
								 * 		Never shown!
								 * 	{{/friends}}
								 * 
								 * 
								 * ## Arrays
								 * 
								 * If the value is a non-empty array, sections will iterate over the 
								 * array of items, rendering the items in the block.
								 * 
								 * For example, a list of friends will iterate
								 * over each of those items within a section.
								 * 
								 *     { 
								 *         friends: [ 
								 *             { name: "Austin" }, 
								 *             { name: "Justin" } 
								 *         ] 
								 *     }
								 * 
								 *     <ul>
								 *         {{#friends}}
								 *             <li>{{name}}</li>
								 *         {{/friends}}
								 *     </ul>
								 * 
								 * would render:
								 * 
								 *     <ul>
								 *         <li>Austin</li>
								 *         <li>Justin</li>
								 *     </ul>
								 * 
								 * Reminder: Sections will reset the current context to the value for which its iterating.
								 * See the [basics of contexts](#Basics) for more information.
								 * 
								 * ## Truthys
								 * 
								 * When the value is a non-falsey object but not a list, it is considered truthy and will be used 
								 * as the context for a single rendering of the block.
								 * 
								 *     {
								 *         friends: { name: "Jon" }
								 *     }
								 * 
								 *     {{#friends}}
								 *         Hi {{name}}
								 *     {{/friends}}
								 * 
								 * would render:
								 * 
								 *     Hi Jon!
								 */
								// 
								/**
								 * @function can.Mustache.helpers.helper {{helper args hashes}}
								 * @parent can.Mustache.tags 5
								 * 
								 * @description Calls a mustache helper function and inserts its return value into
								 * the rendered template.
								 * 
								 * @signature `{{helper [args...] [hashProperty=hashValue...]}}`
								 * 
								 * Calls a mustache helper function or a function. For example:
								 * 
								 * The template:
								 * 
								 *     <p>{{madLib "Lebron James" verb 4 foo="bar"}}</p>
								 * 
								 * Rendered with:
								 * 
								 *     {verb: "swept"}
								 * 
								 * Will call a `madLib` helper with the following arguements:
								 * 
								 *     can.Mustache.registerHelper('madLib', 
								 *       function(subject, verb, number, options){
								 *         // subject -> "Lebron James"
								 *         // verb -> "swept"
								 *         // number -> 4
								 *         // options.hash.foo -> "bar"
								 *     });
								 * 
								 * @param {can.Mustache.key} helper A key that finds a [can.Mustache.helper helper function]
								 * that is either [can.Mustache.registerHelper registered] or found within the
								 * current or parent [can.Mustache.context context].
								 * 
								 * @param {...can.Mustache.key|String|Number} [args] Space seperated arguments
								 * that get passed to the helper function as arguments. If the key's value is a:
								 * 
								 *  - [can.Observe] - A getter/setter [can.compute] is passed.
								 *  - [can.compute] - The can.compute is passed.
								 *  - `function` - The function's return value is passed.
								 * 
								 * @param {String} hashProperty
								 * 
								 * A property name that gets added to a [can.Mustache.helperOptions helper options]'s 
								 * hash object.
								 * 
								 * @param {...can.Mustache.key|String|Number} hashValue A value that gets 
								 * set as a property value of the [can.Mustache.helperOptions helper option argument]'s 
								 * hash object.
								 * 
								 * @body
								 * 
								 * ## Use
								 * 
								 * The `{{helper}}` syntax is used to call out to Mustache [can.Mustache.helper helper functions] that may do
								 * more complex functionality. `helper` is a [can.Mustache.key key] that must match either:
								 * 
								 *  - a [can.Mustache.registerHelper registered helper function], or
								 *  - a function in the current or parent [can.Mustache.context contexts]
								 * 
								 * The following example shows both cases.
								 * 
								 * The Template:
								 * 
								 *     <p>{{greeting}} {{user}}</p>
								 * 
								 * Rendered with data:
								 * 
								 *     {
								 *       user: function(){ return "Justin" }
								 *     }
								 * 
								 * And a with a registered helper like:
								 * 
								 *     can.Mustache.registerHelper('greeting', function(){
								 *       return "Hello"
								 *     });
								 * 
								 * Results in:
								 * 
								 *     <p>Hello Justin</p>
								 * 
								 * ## Arguments
								 * 
								 * Arguments can be passed from the template to helper function by
								 * listing space seperated strings, numbers or other [can.Mustache.key keys] after the
								 * `helper` name.  For example:
								 * 
								 * The template:
								 * 
								 *     <p>{{madLib "Lebron James" verb 4}}</p>
								 * 
								 * Rendered with:
								 * 
								 *     {verb: "swept"}
								 * 
								 * Will call a `madLib` helper with the following arguements:
								 * 
								 *     can.Mustache.registerHelper('madLib', 
								 *       function(subject, verb, number, options){
								 *         // subject -> "Lebron James"
								 *         // verb -> "swept"
								 *         // number -> 4
								 *     });
								 * 
								 * If an argument `key` value is a [can.Observe] property, the Observe's 
								 * property is converted to a getter/setter [can.compute]. For example:
								 * 
								 * The template:
								 * 
								 *     <p>What! My name is: {{mr user.name}}</p>
								 * 
								 * Rendered with:
								 * 
								 *     {user: new can.Observe({name: "Slim Shady"})}
								 * 
								 * Needs the helper to check if name is a function or not:
								 * 
								 *     can.Mustache.registerHelper('mr',function(name){
								 *       return "Mr. "+ (typeof name === "function" ?
								 *                       name():
								 *                       name)
								 *     })
								 * 
								 * This behavior enables two way binding helpers and is explained in more detail 
								 * on the [can.Mustache.helper helper functions] docs.
								 * 
								 * ## Hash
								 * 
								 * If enumerated arguments isn't an appropriate way to configure the behavior
								 * of a helper, it's possible to pass a hash of key-value pairs to the
								 * [can.Mustache.helperOptions helper option argument]'s 
								 * hash object.  Properties and values are specified 
								 * as `hashProperty=hashValue`.  For example:
								 * 
								 * The template:
								 * 
								 *     <p>My {{excuse who=pet how="shreded"}}</p>
								 * `
								 * And the helper:
								 * 
								 *     can.Mustache.registerHelper("excuse",function(options){
								 *       return ["My",
								 *         options.hash.who || "dog".
								 *         options.hash.how || "ate",
								 *         "my",
								 *         options.hash.what || "homework"].join(" ")
								 *     })
								 * 
								 * Render with:
								 * 
								 *     {pet: "cat"}
								 * 
								 * Results in:
								 * 
								 *     <p>My cat shareded my homework</p>
								 * 
								 * ## Returning an element callback function
								 * 
								 * If a helper returns a function, that function is called back after
								 * the template has been rendered into DOM elements. This can 
								 * be used to create mustache tags that have rich behavior. Read about it
								 * on the [can.Mustache.helper helper function] page.
								 * 
								 */
								// 
								/**
								 * @function can.Mustache.helpers.sectionHelper {{#helper args hashes}}
								 * @parent can.Mustache.tags 6
								 * 
								 * Calls a mustache helper function with a block, and optional inverse 
								 * block.
								 * 
								 * @signature `{{#helper [args...] [hashName=hashValue...]}}BLOCK{{/helper}}`
								 * 
								 * Calls a mustache helper function or a function with a block to 
								 * render.
								 * 
								 * The template:
								 * 
								 *     <p>{{countTo number}}{{num}}{{/countTo}}</p>
								 * 
								 * Rendered with:
								 * 
								 *     {number: 5}
								 * 
								 * Will call the `countTo` helper:
								 * 
								 *     can.Mustache.registerHelper('madLib', 
								 *       function(number, options){
								 * 	       var out = []
								 *         for(var i =0; i < number; i++){
								 *           out.push( options.fn({num: i+1}) )
								 *         }
								 *         return out.join(" ")
								 *     });
								 * 
								 * Results in:
								 * 
								 *     <p>1 2 3 4 5</p>
								 * 
								 * @param {can.Mustache.key} helper A key that finds a [can.Mustache.helper helper function]
								 * that is either [can.Mustache.registerHelper registered] or found within the
								 * current or parent [can.Mustache.context context].
								 * 
								 * @param {...can.Mustache.key|String|Number} [args] Space seperated arguments
								 * that get passed to the helper function as arguments. If the key's value is a:
								 * 
								 *  - [can.Observe] - A getter/setter [can.compute] is passed.
								 *  - [can.compute] - The can.compute is passed.
								 *  - `function` - The function's return value is passed.
								 * 
								 * @param {String} hashProperty
								 * 
								 * A property name that gets added to a [can.Mustache.helperOptions helper options]'s 
								 * hash object.
								 * 
								 * @param {...can.Mustache.key|String|Number} hashValue A value that gets 
								 * set as a property value of the [can.Mustache.helperOptions helper option argument]'s 
								 * hash object.
								 * 
								 * @param {mustache} BLOCK A mustache template that gets compiled and
								 * passed to the helper function as the [can.Mustache.helperOptions options argument's] `fn`
								 * property.
								 * 
								 * 
								 * @signature `{{#helper [args...] [hashName=hashValue...]}}BLOCK{{else}}INVERSE{{/helper}}`
								 * 
								 * Calls a mustache helper function or a function with a `fn` and `inverse` block to
								 * render.
								 * 
								 * The template:
								 * 
								 *     <p>The bed is 
								 *        {{isJustRight firmness}}
								 *           pefect!
								 *        {{else}}
								 *           uncomfortable.
								 *        {{/justRight}}</p>
								 * 
								 * Rendered with:
								 * 
								 *     {firmness: 45}
								 * 
								 * Will call the `isJustRight` helper:
								 * 
								 *     can.Mustache.registerHelper('isJustRight', 
								 *       function(number, options){
								 * 	       if(number > 50){
								 *           return options.fn(this)  
								 *         } else {
								 *           return options.inverse(this)  
								 *         }
								 *         return out.join(" ")
								 *     });
								 * 
								 * Results in:
								 * 
								 *     <p>The bed is uncomfortable.</p>
								 * 
								 * @param {can.Mustache.key} helper A key that finds a [can.Mustache.helper helper function]
								 * that is either [can.Mustache.registerHelper registered] or found within the
								 * current or parent [can.Mustache.context context].
								 * 
								 * @param {...can.Mustache.key|String|Number} [args] Space seperated arguments
								 * that get passed to the helper function as arguments. If the key's value is a:
								 * 
								 *  - [can.Observe] - A getter/setter [can.compute] is passed.
								 *  - [can.compute] - The can.compute is passed.
								 *  - `function` - The function's return value is passed.
								 * 
								 * @param {String} hashProperty
								 * 
								 * A property name that gets added to a [can.Mustache.helperOptions helper options]'s 
								 * hash object.
								 * 
								 * @param {...can.Mustache.key|String|Number} hashValue A value that gets 
								 * set as a property value of the [can.Mustache.helperOptions helper option argument]'s 
								 * hash object.
								 * 
								 * @param {mustache} BLOCK A mustache template that gets compiled and
								 * passed to the helper function as the [can.Mustache.helperOptions options argument's] `fn`
								 * property.
								 * 
								 * @param {mustache} INVERSE A mustache template that gets compiled and
								 * passed to the helper function as the [can.Mustache.helperOptions options argument's] `inverse`
								 * property.
								 * 
								 * 
								 * @body
								 * 
								 * ## Use
								 * 
								 * Read the [use section of {{helper}}](can.Mustache.helpers.helper.html#section_Use) to better understand how:
								 * 
								 *  - [Helper functions are found](can.Mustache.helpers.helper.html#section_Arguments)
								 *  - [Arguments are passed to the helper](can.Mustache.helpers.helper.html#section_Arguments)
								 *  - [Hash values are passed to the helper](can.Mustache.helpers.helper.html#section_Hash)
								 * 
								 * Read how [helpers that return functions](can.Mustache.helper.html#section_Returninganelementcallbackfunction) can
								 * be used for rich behavior like 2-way binding.
								 * 
								 */
								// Open a new section.
								case '#':
								/**
								 * @function can.Mustache.helpers.inverse {{^key}}
								 * @parent can.Mustache.tags 4
								 * 
								 * @signature `{{^key}}BLOCK{{/key}}`
								 * 
								 * Render blocks of text if the value of the key
								 * is falsey.  An inverted section syntax is similar to regular 
								 * sections except it begins with a caret rather than a 
								 * pound. If the value referenced is falsey, the section will render.
								 * 
								 * @param {can.Mustache.key} key A key that references a value within the current or parent 
								 * [can.Mustache.context context]. If the value is a function or [can.compute], the 
								 * function's return value is used.
								 * 
								 * @return {String} 
								 * 
								 * Depending on the value's type, the following actions happen:
								 * 
								 * - A `truthy` value - the block is not rendered.
								 * - A `falsey` value - the block is rendered.
								 * 
								 * The rendered result of the block or an empty string is returned.
								 * 
								 * @body
								 * 
								 * ## Use
								 * 
								 * Inverted sections match falsey values. An inverted section 
								 * syntax is similar to regular sections except it begins with a caret 
								 * rather than a pound. If the value referenced is falsey, the section 
								 * will render. For example:
								 * 
								 * 
								 * The template:
								 * 
								 *     <ul>
								 *         {{#friends}}
								 *             </li>{{name}}</li>
								 *         {{/friends}}
								 *         {{^friends}}
								 *             <li>No friends.</li>
								 *         {{/friends}}
								 *     </ul>
								 * 
								 * And data:
								 * 
								 *     {
								 *         friends: []
								 *     }
								 * 
								 * Results in:
								 * 
								 * 
								 *     <ul>
								 *         <li>No friends.</li>
								 *     </ul>
								 */
								case '^':
									result.push(cmd.insert + 'can.view.txt(0,\'' + cmd.tagName + '\',' + cmd.status + ',this,function(){ return ');
									break;
								// Close the prior section.
								/**
								 * @function can.Mustache.helpers.close {{/key}}
								 * @parent can.Mustache.tags 3
								 * 
								 * @signature `{{/key}}`
								 * 
								 * Ends a [can.Mustache.helpers.section {{#key}}] or [can.Mustache.helpers.sectionHelper {{#helper}}]
								 * block.
								 * 
								 * @param {can.Mustache.key} [key] A key that matches the opening key or helper name. It's also
								 * possible to simply write `{{/}}` to end a block.
								 */
								case '/':
									return { raw: 'return ___v1ew.join("");}}])}));' };
									break;
							}
							
							// Trim the mode off of the content.
							content = content.substring(1);
						}
						
						// `else` helpers are special and should be skipped since they don't 
						// have any logic aside from kicking off an `inverse` function.
						if (mode != 'else') {
							var args = [],
								i = 0,
								hashing = false,
								arg, split, m;
							
							// Parse the helper arguments.
							// This needs uses this method instead of a split(/\s/) so that 
							// strings with spaces can be correctly parsed.
							(can.trim(content)+' ').replace(/((([^\s]+?=)?('.*?'|".*?"))|.*?)\s/g, function(whole, part) {
								args.push(part);
							});

							// Start the content render block.
							result.push('can.Mustache.txt('+CONTEXT_OBJ+',' + (mode ? '"'+mode+'"' : 'null') + ',');
						
							// Iterate through the helper arguments, if there are any.
							for (; arg = args[i]; i++) {
								i && result.push(',');
								
								// Check for special helper arguments (string/number/boolean/hashes).
								if (i && (m = arg.match(/^(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false)|((.+?)=(('.*?'|".*?"|[0-9]+\.?[0-9]*|true|false)|(.+))))$/))) {
									// Found a native type like string/number/boolean.
									if (m[2]) {
										result.push(m[0]);
									}
									// Found a hash object.
									else {
										// Open the hash object.
										if (!hashing) {
											hashing = true;
											result.push('{' + HASH + ':{');
										}
										
										// Add the key/value.
										result.push(m[4], ':', m[6] ? m[6] : 'can.Mustache.get("' + m[5].replace(/"/g,'\\"') + '",' + CONTEXT_OBJ + ')');
										
										// Close the hash if this was the last argument.
										if (i == args.length - 1) {
											result.push('}}');
										}
									}
								}
								// Otherwise output a normal interpolation reference.
								else {
									result.push('can.Mustache.get("' + 
										// Include the reference name.
										arg.replace(/"/g,'\\"') + '",' +
										// Then the stack of context.
										CONTEXT_OBJ +
										// Flag as a helper method to aid performance, 
										// if it is a known helper (anything with > 0 arguments).
										(i == 0 && args.length > 1 ? ',true' : ',false') +
										(i > 0 ? ',true' : ',false') +
										')');
								}
							}
						}
						
						// Create an option object for sections of code.
						mode && mode != 'else' && result.push(',[{_:function(){');
						switch (mode) {
							// Truthy section
							case '#':
								result.push('return ___v1ew.join("");}},{fn:function(' + CONTEXT + '){var ___v1ew = [];');
								break;
							// If/else section
							// Falsey section
							/**
							 * @function can.Mustache.helpers.else {{else}}
							 * @parent can.Mustache.tags 8
							 *
							 * @signature `{{#helper}}BLOCK{{else}}INVERSE{{/helper}}`
							 * 
							 * Creates an `inverse` block for a [can.Mustache.helper helper function]'s 
							 * [can.Mustache.helperOptions options argument]'s `inverse` property.
							 * 
							 * @param {can.Mustache} INVERSE a mustache template coverted to a
							 * function and set as the [can.Mustache.helper helper function]'s 
							 * [can.Mustache.helperOptions options argument]'s `inverse` property.
							 * 
							 * @body
							 * 
							 * ## Use
							 * 
							 * For more information on how `{{else}}` is used checkout:
							 * 
							 *  - [can.Mustache.helpers.if {{if key}}]
							 *  - [can.Mustache.helpers.sectionHelper {{#helper}}]
							 * 
							 */
							case 'else':
							case '^':
								result.push('return ___v1ew.join("");}},{inverse:function(' + CONTEXT + '){var ___v1ew = [];');
								break;
							// Not a section
							default:
								result.push(');');
								break;
						}
						
						// Return a raw result if there was a section, otherwise return the default string.
						result = result.join('');
						return mode ? { raw: result } : result;
					}
				}
			]
		})
	});

	// Add in default scanner helpers first.
	// We could probably do this differently if we didn't 'break' on every match.
	var helpers = can.view.Scanner.prototype.helpers;
	for (var i = 0; i < helpers.length; i++) {
		Mustache.prototype.scanner.helpers.unshift(helpers[i]);
	};

	/**
	 * @function can.Mustache.txt
	 * @hide
	 * 
	 * Evaluates the resulting string based on the context/name.
	 *
	 * @param {Object|Array} context	The context stack to be used with evaluation.
	 * @param {String} mode		The mode to evaluate the section with: # for truthy, ^ for falsey
	 * @param {String|Object} name	The string (or sometimes object) to pass to the given helper method.
	 */
	Mustache.txt = function(context, mode, name) {
		// Grab the extra arguments to pass to helpers.
		var args = Array.prototype.slice.call(arguments, 3),
			// Create a default `options` object to pass to the helper.
			options = can.extend.apply(can, [{
					fn: function() {},
					inverse: function() {}
			}].concat(mode ? args.pop() : []));
			
			
		var extra = {};
		if(context.context) {
			extra = context.options;
			context = context.context;
		}

		// Check for a registered helper or a helper-like function.
		if (helper = (Mustache.getHelper(name,extra) || (can.isFunction(name) && !name.isComputed && { fn: name }))) {
			// Use the most recent context as `this` for the helper.
			var stack = context[STACKED] && context,
				context = (stack && context[context.length - 1]) || context,
				// Update the options with a function/inverse (the inner templates of a section).
				opts = {
					fn: can.proxy(options.fn, context),
					inverse: can.proxy(options.inverse, context)
				}, 
				lastArg = args[args.length-1];
			
			// Store the context stack in the options if one exists
			if (stack) {
				opts.contexts = stack;
			}
			// Add the hash to `options` if one exists
			if (lastArg && lastArg[HASH]) {
				opts.hash = args.pop()[HASH];
			}
			args.push(opts);

			// Call the helper.
			return helper.fn.apply(context, args) || '';
		}

		// if a compute, get the value
		if( can.isFunction(name) && name.isComputed ){
			name = name();
		}

		// An array of arguments to check for truthyness when evaluating sections.
		var validArgs = args.length ? args : [name],
			// Whether the arguments meet the condition of the section.
			valid = true,
			result = [],
			i, helper, argIsObserve, arg;
		// Validate the arguments based on the section mode.
		if (mode) {
			for (i = 0; i < validArgs.length; i++) {
				arg          = validArgs[i];
				argIsObserve = typeof arg !== 'undefined' && isObserve(arg);
				// Array-like objects are falsey if their length = 0.
				if (isArrayLike(arg)) {
					// Use .attr to trigger binding on empty lists returned from function
					if(mode == '#'){
						valid = valid && !!(argIsObserve ? arg.attr('length') : arg.length);
					} else if(mode == '^'){
						valid = valid && !(argIsObserve ? arg.attr('length') : arg.length);
					}
				}
				// Otherwise just check if it is truthy or not.
				else {
					valid = mode == '#' ? valid && !!arg
						: mode == '^' ? valid && !arg
						: valid;
				}
			}
		}
		
		// Otherwise interpolate like normal.
		if (valid) {
			switch (mode) {
				// Truthy section.
				case '#':
					// Iterate over arrays
					if (isArrayLike(name)) {
						var isObserveList = isObserve(name);
						
						// Add the reference to the list in the contexts.
						for (i = 0; i < name.length; i++) {
							result.push(options.fn.call(name[i], context) || '');
							
							// Ensure that live update works on observable lists
							isObserveList && name.attr(''+i);
						}
						return result.join('');
					}
					// Normal case.
					else {
						return options.fn.call(name || {}, context) || '';
					}
					break;
				// Falsey section.
				case '^':
					return options.inverse.call(name || {}, context) || '';
					break;
				default:
					// Add + '' to convert things like numbers to strings.
					// This can cause issues if you are trying to
					// eval on the length but this is the more
					// common case.
					return '' + (name !== undefined ? name : '');
					break;
			}
		}
		
		return '';
	};
	
	/**
	 * @function can.Mustache.get
	 * @hide
	 *
	 * Resolves a reference for a given object (and then a context if that fails).
	 *	obj = this
	 *	context = { a: true }
	 *	ref = 'a.b.c'
	 *		=> obj.a.b.c || context.a.b.c || ''
	 *
	 * This implements the following Mustache specs:
	 * 	Deeply Nested Contexts
	 *	All elements on the context stack should be accessible.
	 *		{{#bool}}B {{#bool}}C{{/bool}} D{{/bool}}
	 *		{ bool: true }
	 *		=> "B C D"
	 * 	Basic Context Miss Interpolation
	 * 	Failed context lookups should default to empty strings.
	 *  	{{cannot}}
	 *		=> ""
	 * 	Dotted Names - Broken Chains
	 * 	Any falsey value prior to the last part of the name should yield ''.
	 *		{{a.b.c}}
	 *		{ a: { d: 1 } }
	 *		=> ""
	 *
	 * @param {String} ref      The reference to check for on the obj/context.
	 * @param {Object} obj  		The object to use for checking for a reference.
	 * @param {Object} context  The context to use for checking for a reference if it doesn't exist in the object.
	 * @param {Boolean} [isHelper]  Whether the reference is a helper.
	 */
	Mustache.get = function(ref, contexts, isHelper, isArgument) {
		var options = contexts.options || {};
		contexts = contexts.context || contexts;
		// Assume the local object is the last context in the stack.
		var obj = contexts[contexts.length - 1],
			// Assume the parent context is the second to last context in the stack.
			context = contexts[contexts.length - 2],
			// Split the reference (like `a.b.c`) into an array of key names.
			names = ref.indexOf('\\.') == -1 
				// Reference doesn't contain escaped periods
				? ref.split('.')
				// Reference contains escaped periods (`a.b\c.foo` == `a["b.c"].foo)
				: (function() {
						var names = [], last = 0;
						ref.replace(/(\\)?\./g, function($0, $1, index) {
							if (!$1) {
								names.push(ref.slice(last, index).replace(/\\\./g,'.'));
								last = index + $0.length;
							}
						});
						names.push(ref.slice(last).replace(/\\\./g,'.'));
						return names;
					})(),
			namesLength = names.length,
			value, lastValue, name, i, j,
			// if we walk up and don't find a property, we default
			// to listening on an undefined property of the first
			// context that is an observe
			defaultObserve,
			defaultObserveName;

		// Handle `this` references for list iteration: {{.}} or {{this}}
		if (/^\.|this$/.test(ref)) {
			// If context isn't an object, then it was a value passed by a helper so use it as an override.
			if (!/^object|undefined$/.test(typeof context)) {
				return context || '';
			}
			// Otherwise just return the closest object.
			else {
				while (value = contexts.pop()) {
					if (typeof value !== 'undefined') {
						return value;
					} 
				}
				return '';
			}
		} 
		// Handle object resolution (like `a.b.c`).
		else if (!isHelper) {
			// Reverse iterate through the contexts (last in, first out).
			for (i = contexts.length - 1; i >= 0; i--) {
				// Check the context for the reference
				value = contexts[i];
			
				// Is the value a compute?
				if(can.isFunction(value) && value.isComputed) {
					value = value();
				}
			
				// Make sure the context isn't a failed object before diving into it.
				if (typeof value !== 'undefined' && value !== null) {
					var isHelper = Mustache.getHelper(ref, options);
					for (j = 0; j < namesLength; j++) {
						// Keep running up the tree while there are matches.
						if (typeof value[names[j]] !== 'undefined' && value[names[j]] !== null) {
							lastValue = value;
							value = value[name = names[j]];
						}
						// if there's a name conflict between property and helper
						// property wins
						else if(isHelper) {
							return ref;
						}
						// If it's undefined, still match if the parent is an Observe.
						else if ( isObserve(value) ) {
							defaultObserve = value;
							defaultObserveName = names[j];
							lastValue = value = undefined;
							break;
						}
						else {
							lastValue = value = undefined;
							break;
						}
					}
				}
			
				// Found a matched reference.
				if (value !== undefined ) {
					return Mustache.resolve(value, lastValue, name, isArgument);
				}
			}
		}

		if( defaultObserve && 
			// if there's not a helper by this name and no attribute with this name
			!(Mustache.getHelper(ref) &&
				can.inArray(defaultObserveName, can.Observe.keys(defaultObserve)) === -1) ) {
			return defaultObserve.compute(defaultObserveName);
		}
		// Support helpers without arguments, but only if there wasn't a matching data reference.
		// Helpers have priority over local function, see https://github.com/bitovi/canjs/issues/258
		if (value = Mustache.getHelper(ref,options)) {
			return ref;
		} else if (typeof obj !== 'undefined' && obj !== null && can.isFunction(obj[ref])) {
			// Support helper-like functions as anonymous helpers
			return obj[ref];
		}

		return '';
	};
	
	/**
	 * @hide
	 *
	 * Resolves an object to its truthy equivalent.
	 *
	 * @param {Object} value    The object to resolve.
	 * @param {Object} [lastValue]  	Only used with Mustache.get.
	 * @param {Object} [name]  				Only used with Mustache.get.
	 * @param {Boolean} [isArgument]  Only used with Mustache.get.
	 * @return {Object} The resolved object.
	 */
	Mustache.resolve = function(value, lastValue, name, isArgument) {
		if(lastValue && can.isFunction(lastValue[name]) && isArgument) {
			if(lastValue[name].isComputed){
				return lastValue[name];
			}
			// Don't execute functions if they are parameters for a helper and are not a can.compute
			// Need to bind it to the original context so that that information doesn't get lost by the helper
			return function() { 
				return lastValue[name].apply(lastValue, arguments); 
			};
		}
		// Support attributes on compute objects
		else if(lastValue && can.isFunction(lastValue) && lastValue.isComputed) {
			return lastValue()[name];
		}
		// Support functions stored in objects.
		else if (lastValue && can.isFunction(lastValue[name])) {
			return lastValue[name]();
		} 
		// Invoke the length to ensure that Observe.List events fire.
		else if (isObserve(value) && isArrayLike(value) && value.attr('length')){
			return value;
		}
		// Add support for observes
		else if (lastValue && isObserve(lastValue)) {
			return lastValue.compute(name);
		} 
		else if (can.isFunction(value)) {
			return value();
		}
		else {
			return value;
		}
	};
	
	/**
	 * @static
	 */
	// ## Helpers
	//
	// Helpers are functions that can be called from within a template.
	// These helpers differ from the scanner helpers in that they execute
	// at runtime instead of during compilation.
	//
	// Custom helpers can be added via `can.Mustache.registerHelper`,
	// but there are also some built-in helpers included by default.
	// Most of the built-in helpers are little more than aliases to actions 
	// that the base version of Mustache simply implies based on the 
	// passed in object.
	// 
	// Built-in helpers:
	// 
	// * `data` - `data` is a special helper that is implemented via scanning helpers. 
	//		It hooks up the active element to the active data object: `<div {{data "key"}} />`
	// * `if` - Renders a truthy section: `{{#if var}} render {{/if}}`
	// * `unless` - Renders a falsey section: `{{#unless var}} render {{/unless}}`
	// * `each` - Renders an array: `{{#each array}} render {{this}} {{/each}}`
	// * `with` - Opens a context section: `{{#with var}} render {{/with}}`
	Mustache._helpers = {};
	/**
	 * @description Register a helper.
	 * @function can.Mustache.registerHelper registerHelper
	 * @signature `Mustache.registerHelper(name, helper)`
	 * @param {String} name The name of the helper.
	 * @param {can.Mustache.helper} helper The helper function.
	 * 
	 * @body
	 * Registers a helper with the Mustache system.
	 * Pass the name of the helper followed by the
	 * function to which Mustache should invoke.
	 * These are run at runtime.
	 */
	Mustache.registerHelper = function(name, fn){
		this._helpers[name]={ name: name, fn: fn };
	};
	
	/**
	 * @hide
	 * @function can.Mustache.getHelper getHelper
	 * @description Retrieve a helper.
	 * @signature `Mustache.getHelper(name)`
	 * @param {String} name The name of the helper.
	 * @return {Function|null} The helper, or `null` if
	 * no helper by that name is found.
	 *
	 * @body 
	 * Returns a helper given the name.
	 */
	Mustache.getHelper = function(name,options) {
		return options && options.helpers && options.helpers[name] && {
			fn: options.helpers[name]
		} || this._helpers[name]
		for (var i = 0, helper; helper = [i]; i++) {
			// Find the correct helper
			if (helper.name == name) {
				return helper;
			}
		}
		return null;
	};

	/**
	 * @function can.Mustache.static.render render
	 * @hide
	 * @parent can.Mustache.static
	 * @signature `Mustache.render(partial, context)`
	 * @param {Object} partial
	 * @param {Object} context
	 *
	 * @body
	 * `Mustache.render` is a helper method that calls
	 * into `can.view.render` passing the partial 
	 * and the context object.  
	 * 
	 * Its purpose is to determine if the partial object 
	 * being passed represents a template like:
	 *
	 * 		partial === "movember.mustache"
	 *
	 * or if the partial is a variable name that represents
	 * a partial on the context object such as:
	 *
	 * 		context[partial] === "movember.mustache"
	 */
	Mustache.render = function(partial, context){
		// Make sure the partial being passed in
		// isn't a variable like { partial: "foo.mustache" }
		if(!can.view.cached[partial] && context[partial]){
			partial = context[partial];
		}

		// Call into `can.view.render` passing the
		// partial and context.
		return can.view.render(partial, context);
	};

	Mustache.renderPartial = function(partial,context,options) {
		return partial.render ? partial.render(context,options) :
			partial(context,options);
	};

	// The built-in Mustache helpers.
	can.each({
		// Implements the `if` built-in helper.
		/**
		 * @function can.Mustache.helpers.if {{#if key}}
		 * @parent can.Mustache.tags 7
		 * @signature `{{#if key}}BLOCK{{/if}}`
	 	 * 
	 	 * Renders the `BLOCK` template within the current template.
	 	 * 
	 	 * @param {can.Mustache.key} key A key that references a value within the current or parent 
	 	 * context. If the value is a function or can.compute, the function's return value is used.
	 	 * 
	 	 * @param {can.Mustache} BLOCK A mustache template.
	 	 * 
	 	 * @return {String} If the key's value is truthy, the `BLOCK` is rendered with the
	 	 * current context and its value is returned; otherwise, an empty string.
	 	 * 
	 	 * @body
	 	 * 
	 	 * ## Use
	 	 * 
		 * `{{#if key}}` provides explicit conditional truthy tests. For example,
		 * 
		 * The template:
		 * 
		 *     {{#if user.isFemale}}
		 *       {{#if user.isMarried}}
		 *         Mrs 
		 *       {{/if}}
		 *       {{#if user.isSingle}}
		 *         Miss 
		 *       {{/if}}
		 *     {{/if}}
		 * 
		 * Rendered with:
		 * 
		 *     {user: {isFemale: true, isMarried: true}}
		 *     
		 * Results in:
		 * 
		 *     Mrs
		 * 
		 * If can be used with [can.Mustache.helpers.else {{else}}] too. For example,
		 * 
		 *     {{#if user.isFemale}}
		 *       {{#if user.isMarried}}
		 *         Mrs 
		 *       {{else}}
		 *         Miss 
		 *       {{/if}}
		 *     {{/if}}
		 * 
		 * Rendered with:
		 * 
		 *     {user: {isFemale: true, isMarried: false}}
		 *     
		 * Results in:
		 * 
		 *     Miss
		 */
		'if': function(expr, options){
			if (!!Mustache.resolve(expr)) {
				return options.fn(options.contexts || this);
			}
			else {
				return options.inverse(options.contexts || this);
			}
		},
		// Implements the `unless` built-in helper.
		/**
		 * @function can.Mustache.helpers.unless {{#unless key}}
		 * @parent can.Mustache.tags 10
		 * 
	 	 * @signature `{{#unless key}}BLOCK{{/unless}}`
	 	 * 
	 	 * Render the block of text if the key's value is falsey.
	 	 * 
	 	 * @param {can.Mustache.key} key A key that references a value within the current or parent 
		 * context. If the value is a function or can.compute, the function's 
		 * return value is used.
		 * 
	 	 * @param {can.Mustache} BLOCK A template that is rendered 
	 	 * if the `key`'s value is falsey.
	 	 * 
	 	 * @body
	 	 * 
		 * The `unless` helper evaluates the inverse of the value
		 * of the key and renders the block between the helper and the slash.
		 * 
		 *     {{#unless expr}}
		 *       // unless
		 *     {{/unless}}
		 */
		'unless': function(expr, options){
			if (!Mustache.resolve(expr)) {
				return options.fn(options.contexts || this);
			}
		},
		
		// Implements the `each` built-in helper.
		/**
		 * @function can.Mustache.helpers.each {{#each key}}
	 	 * @parent can.Mustache.tags 9
	 	 * 
	 	 * @signature `{{#each key}}BLOCK{{/each}}`
	 	 * 
	 	 * Render the block of text for each item in key's value.
	 	 * 
	 	 * @param {can.Mustache.key} key A key that references a value within the current or parent 
		 * context. If the value is a function or can.compute, the function's 
		 * return value is used.
		 * 
		 * If the value of the key is a [can.Observe.List], the resulting HTML is updated when the
		 * list changes. When a change in the list happens, only the minimum amount of DOM
		 * element changes occur.
	 	 * 
	 	 * @param {can.Mustache} BLOCK A template that is rendered for each item in 
	 	 * the `key`'s value. The `BLOCK` is rendered with the context set to the item being rendered.
	 	 * 
	 	 * @body
	 	 * 
	 	 * ## Use
	 	 * 
	 	 * Use the `each` helper to itterate over a array 
		 * of items and render the block between the helper and the slash. For example,
		 * 
		 * The template:
		 * 
		 *     <ul>
		 *       {{#each friends}}
		 *         <li>{{name}}</li>
		 *       {{/each}}
		 *     </ul>
		 * 
		 * Rendered with:
		 * 
		 *     {friends: [{name: "Austin"},{name: "Justin"}]}
		 * 
		 * Renders:
		 * 
		 *     <ul>
		 *       <li>Austin</li>
		 *       <li>Justin</li>
		 *     </ul>
		 * 
		 */
		'each': function(expr, options) {
      		expr = Mustache.resolve(expr);
			if (!!expr && isArrayLike(expr)) {
				if (isObserve(expr) && typeof expr.attr('length') !== 'undefined') {
					return can.view.lists && can.view.lists(expr, function(item) {
						return options.fn(item);
					});
				}
				else {
					var result = [];
					for (var i = 0; i < expr.length; i++) {
						result.push(options.fn(expr[i]));
					}
					return result.join('');
				}
			}
		},
		// Implements the `with` built-in helper.
		/**
		 * @function can.Mustache.helpers.with {{#with key}}
		 * @parent can.Mustache.tags 11
		 * 
		 * @signature `{{#with key}}BLOCK{{/with}}`
		 * 
		 * Changes the context within a block.
		 * 
		 * @param {can.Mustache.key} key A key that references a value within the current or parent 
		 * context. If the value is a function or can.compute, the function's 
		 * return value is used.
		 * 
	 	 * @param {can.Mustache} BLOCK A template that is rendered 
	 	 * with the context of the `key`'s value.
		 * 
		 * @body
	 	 * 
		 * Mustache typically applies the context passed in the section 
		 * at compiled time.  However, if you want to override this 
		 * context you can use the `with` helper.
		 * 
		 *     {{#with arr}}
		 *       // with
		 *     {{/with}}
		 */
		'with': function(expr, options){
			var ctx = expr;
			expr = Mustache.resolve(expr);
			if (!!expr) {
				return options.fn(ctx);
			}
		}
		
		/**
		 * @function can.Mustache.helpers.elementCallback {{(el)->CODE}}
		 * @parent can.Mustache.tags
		 * @hide
		 * @signature `{{(el) -> CODE}}`
		 * 
		 * Runs a callback on the element.
		 * 
		 * 
		 */
		//
	}, function(fn, name){
		Mustache.registerHelper(name, fn);
	});
	
	// ## Registration
	//
	// Registers Mustache with can.view.
	can.view.register({
		suffix: "mustache",

		contentType: "x-mustache-template",

		// Returns a `function` that renders the view.
		script: function( id, src ) {
			return "can.Mustache(function(_CONTEXT,_VIEW) { " + new Mustache({
				text: src,
				name: id
			}).template.out + " })";
		},

		renderer: function( id, text ) {
			return Mustache({
				text: text,
				name: id
			});
		}
	});

	return can;
});;
steal.executed('can/view/mustache/mustache.js');
steal("can/util", function( can ) {
	// ## view.js
	// `can.view`  
	// _Templating abstraction._

	var isFunction = can.isFunction,
		makeArray = can.makeArray,
		// Used for hookup `id`s.
		hookupId = 1,
	/**
	 * @add can.view
	 */
	$view = can.view = can.template = function(view, data, helpers, callback){
		// If helpers is a `function`, it is actually a callback.
		if ( isFunction( helpers )) {
			callback = helpers;
			helpers = undefined;
		}

		var pipe = function(result){
				return $view.frag(result);
			},
			// In case we got a callback, we need to convert the can.view.render
			// result to a document fragment
			wrapCallback = isFunction(callback) ? function(frag) {
				callback(pipe(frag));
			} : null,
			// Get the result.
			result = $view.render(view, data, helpers, wrapCallback),
			deferred = can.Deferred();

		if(isFunction(result))  {
			return result;
		}

		if(can.isDeferred(result)){
			result.then(function(result, data) {
				deferred.resolve.call(deferred, pipe(result), data);
			}, function() {
				deferred.fail.apply(deferred, arguments);
			});
			return deferred;
		}
		
		// Convert it into a dom frag.
		return pipe(result);
	};

	can.extend( $view, {
		// creates a frag and hooks it up all at once
		/**
		 * @function can.view.frag frag
		 * @parent can.view.static
		 */
		frag: function(result, parentNode ){
			return $view.hookup( $view.fragment(result), parentNode );
		},

		// simply creates a frag
		// this is used internally to create a frag
		// insert it
		// then hook it up
		fragment: function(result){
			var frag = can.buildFragment(result,document.body);
			// If we have an empty frag...
			if(!frag.childNodes.length) { 
				frag.appendChild(document.createTextNode(''));
			}
			return frag;
		},

		// Convert a path like string into something that's ok for an `element` ID.
		toId : function( src ) {
			return can.map(src.toString().split(/\/|\./g), function( part ) {
				// Dont include empty strings in toId functions
				if ( part ) {
					return part;
				}
			}).join("_");
		},
		
		hookup: function(fragment, parentNode ){
			var hookupEls = [],
				id, 
				func;
			
			// Get all `childNodes`.
			can.each(fragment.childNodes ? can.makeArray(fragment.childNodes) : fragment, function(node){
				if(node.nodeType === 1){
					hookupEls.push(node);
					hookupEls.push.apply(hookupEls, can.makeArray( node.getElementsByTagName('*')));
				}
			});


			// Filter by `data-view-id` attribute.
			can.each( hookupEls, function( el ) {
				if ( el.getAttribute && (id = el.getAttribute('data-view-id')) && (func = $view.hookups[id]) ) {
					func(el, parentNode, id);
					delete $view.hookups[id];
					el.removeAttribute('data-view-id');
				}
			});

			return fragment;
		},

		/**
		 * @function can.view.ejs ejs
		 * @parent can.view.static
		 *
		 * @signature `can.view.ejs( [id,] template )`
		 * 
		 * Register an EJS template string and create a renderer function.
		 * 
		 *     var renderer = can.view.ejs("<h1><%= message %></h1>");
		 *     renderer({message: "Hello"}) //-> docFrag[ <h1>Hello</h1> ]
		 * 
		 * @param {String} [id] An optional ID to register the template.
		 * 
		 *     can.view.ejs("greet","<h1><%= message %></h1>");
		 *     can.view("greet",{message: "Hello"}) //-> docFrag[<h1>Hello</h1>]
		 * 
		 * @param {String} template An EJS template in string form.
		 * @return {can.view.renderer} A renderer function that takes data and helpers.
		 * 
		 *
		 * @body
		 * `can.view.ejs([id,] template)` registers an EJS template string
		 * for a given id programatically. The following
		 * registers `myViewEJS` and renders it into a documentFragment.
		 *
		 *      can.view.ejs('myViewEJS', '<h2><%= message %></h2>');
		 *
		 *      var frag = can.view('myViewEJS', {
		 *          message : 'Hello there!'
		 *      });
		 *
		 *      frag // -> <h2>Hello there!</h2>
		 *
		 * To convert the template into a render function, just pass
		 * the template. Call the render function with the data
		 * you want to pass to the template and it returns the
		 * documentFragment.
		 *
		 *      var renderer = can.view.ejs('<div><%= message %></div>');
		 *      renderer({
		 *          message : 'EJS'
		 *      }); // -> <div>EJS</div>
		 */
		// auj
		/**
		 * @function can.view.mustache mustache
		 * @parent can.view.static
		 * 
		 * @signature `can.view.mustache( [id,] template )`
		 * 
		 * Register a Mustache template string and create a renderer function.
		 * 
		 *     var renderer = can.view.mustache("<h1>{{message}}</h1>");
		 *     renderer({message: "Hello"}) //-> docFrag[ <h1>Hello</h1> ]
		 * 
		 * @param {String} [id] An optional ID for the template.
		 * 
		 *     can.view.ejs("greet","<h1>{{message}}</h1>");
		 *     can.view("greet",{message: "Hello"}) //-> docFrag[<h1>Hello</h1>]
		 * 
		 * @param {String} template A Mustache template in string form.
		 *
		 * @return {can.view.renderer} A renderer function that takes data and helpers.
		 *
		 * @body
		 * 
		 * `can.view.mustache([id,] template)` registers an Mustache template string 
		 * for a given id programatically. The following
		 * registers `myStache` and renders it into a documentFragment.
		 *
		 *      can.viewmustache('myStache', '<h2>{{message}}</h2>');
		 * 
		 *      var frag = can.view('myStache', {
		 *          message : 'Hello there!'
		 *      });
		 * 
		 *      frag // -> <h2>Hello there!</h2>
		 *
		 * To convert the template into a render function, just pass 
		 * the template. Call the render function with the data
		 * you want to pass to the template and it returns the 
		 * documentFragment.
		 *
		 *      var renderer = can.view.mustache('<div>{{message}}</div>');
		 *      renderer({
		 *          message : 'Mustache'
		 *      }); // -> <div>Mustache</div>
		 */
		// heir
		/**
		 * @property hookups
		 * @hide
		 * A list of pending 'hookups'
		 */
		hookups: {},

		/**
		 * @description Create a hookup to insert into templates.
		 * @function can.view.hook hook
		 * @parent can.view.static
		 * @signature `can.view.hook(callback)`
		 * @param {Function} callback A callback function to be called with the element.
		 *
		 * @body
		 * Registers a hookup function that can be called back after the html is 
		 * put on the page.  Typically this is handled by the template engine.  Currently
		 * only EJS supports this functionality.
		 * 
		 *     var id = can.view.hook(function(el){
		 *            //do something with el
		 *         }),
		 *         html = "<div data-view-id='"+id+"'>"
		 *     $('.foo').html(html);
		 */
		hook: function( cb ) {
			$view.hookups[++hookupId] = cb;
			return " data-view-id='"+hookupId+"'";
		},

		/**
		 * @hide
		 * @property {Object} can.view.cached view
		 * @parent can.view
		 * Cached are put in this object
		 */
		cached: {},

		cachedRenderers: {},

		/**
		 * @property {Boolean} can.view.cache cache
		 * @parent can.view.static
		 * By default, views are cached on the client.  If you'd like the
		 * the views to reload from the server, you can set the `cache` attribute to `false`.
		 *
		 * 		//- Forces loads from server
		 * 		can.view.cache = false; 
		 *
		 */
		cache: true,

		/**
		 * @function can.view.register register
		 * @parent can.view.static
		 * @description Register a templating language.
		 * @signature `can.view.register(info)`
		 * @param {{}} info Information about the templating language.
		 * @option {String} plugin The location of the templating language's plugin.
		 * @option {String} suffix Files with this suffix will use this templating language's plugin by default.
		 * @option {function} renderer A function that returns a function that, given data, will render the template with that data.
		 * The __renderer__ function receives the id of the template and the text of the template.
		 * @option {function} script A function that returns the string form of the processed template.
		 *
		 * @body
		 * Registers a template engine to be used with 
		 * view helpers and compression.  
		 * 
		 * ## Example
		 * 
		 * @codestart
		 * can.View.register({
		 * 	suffix : "tmpl",
		 *  plugin : "jquery/view/tmpl",
		 * 	renderer: function( id, text ) {
		 * 		return function(data){
		 * 			return jQuery.render( text, data );
		 * 		}
		 * 	},
		 * 	script: function( id, text ) {
		 * 		var tmpl = can.tmpl(text).toString();
		 * 		return "function(data){return ("+
		 * 		  	tmpl+
		 * 			").call(jQuery, jQuery, data); }";
		 * 	}
		 * })
		 * @codeend
		 */
		register: function( info ) {
			this.types["." + info.suffix] = info;
		},

		types: {},

		/**
		 * @property {String} can.view.ext ext
		 * @parent can.view.static
		 * The default suffix to use if none is provided in the view's url.  
		 * This is set to `.ejs` by default.
		 *
		 * 		// Changes view ext to 'txt'
		 * 		can.view.ext = 'txt';
		 *
		 */
		ext: ".ejs",

		/**
		 * Returns the text that 
		 * @hide 
		 * @param {Object} type
		 * @param {Object} id
		 * @param {Object} src
		 */
		registerScript: function() {},

		/**
		 * @hide
		 * Called by a production script to pre-load a renderer function
		 * into the view cache.
		 * @param {String} id
		 * @param {Function} renderer
		 */
		preload: function( ) {},

		/**
		 * @function can.view.render render
		 * @parent can.view.static
		 * @description Render a template.
		 * @signature `can.view.render(template[, callback])`
		 * @param {String|Object} view The path of the view template or a view object.
		 * @param {Function} [callback] A function executed after the template has been processed.
		 * @return {Function|can.Deferred} A renderer function to be called with data and helpers
		 * or a Deferred that resolves to a renderer function.
		 *
		 * @signature `can.view.render(template, data[, [helpers,] callback])`
		 * @param {String|Object} view The path of the view template or a view object.
		 * @param {Object} [data] The data to populate the template with.
		 * @param {Object.<String, function>} [helpers] Helper methods referenced in the template.
		 * @param {Function} [callback] A function executed after the template has been processed.
		 * @return {String|can.Deferred} The template with interpolated data in string form
		 * or a Deferred that resolves to the template with interpolated data.
		 *
		 * @body
		 * `can.view.render(view, [data], [helpers], callback)` returns the rendered markup produced by the corresponding template
		 * engine as String. If you pass a deferred object in as data, render returns
		 * a deferred resolving to the rendered markup.
		 * 
		 * `can.view.render` is commonly used for sub-templates.
		 * 
		 * ## Example
		 * 
		 * _welcome.ejs_ looks like:
		 * 
		 *     <h1>Hello <%= hello %></h1>
		 * 
		 * Render it to a string like:
		 * 
		 *     can.view.render("welcome.ejs",{hello: "world"})
		 *       //-> <h1>Hello world</h1>
		 * 
		 * ## Use as a Subtemplate
		 * 
		 * If you have a template like:
		 * 
		 *     <ul>
		 *       <% list(items, function(item){ %>
		 *         <%== can.view.render("item.ejs",item) %>
		 *       <% }) %>
		 *     </ul>
		 *
		 * ## Using renderer functions
		 *
		 * If you only pass the view path, `can.view will return a renderer function that can be called with
		 * the data to render:
		 *
		 *     var renderer = can.view.render("welcome.ejs");
		 *     // Do some more things
		 *     renderer({hello: "world"}) // -> Document Fragment
		 * 
		 */
		render: function( view, data, helpers, callback ) {
			// If helpers is a `function`, it is actually a callback.
			if ( isFunction( helpers )) {
				callback = helpers;
				helpers = undefined;
			}

			// See if we got passed any deferreds.
			var deferreds = getDeferreds(data);

			if ( deferreds.length ) { // Does data contain any deferreds?
				// The deferred that resolves into the rendered content...
				var deferred = new can.Deferred(),
					dataCopy = can.extend({}, data);
	
				// Add the view request to the list of deferreds.
				deferreds.push(get(view, true))
	
				// Wait for the view and all deferreds to finish...
				can.when.apply(can, deferreds).then(function( resolved ) {
					// Get all the resolved deferreds.
					var objs = makeArray(arguments),
						// Renderer is the last index of the data.
						renderer = objs.pop(),
						// The result of the template rendering with data.
						result; 
	
					// Make data look like the resolved deferreds.
					if ( can.isDeferred(data) ) {
						dataCopy = usefulPart(resolved);
					}
					else {
						// Go through each prop in data again and
						// replace the defferreds with what they resolved to.
						for ( var prop in data ) {
							if ( can.isDeferred(data[prop]) ) {
								dataCopy[prop] = usefulPart(objs.shift());
							}
						}
					}

					// Get the rendered result.
					result = renderer(dataCopy, helpers);
	
					// Resolve with the rendered view.
					deferred.resolve(result, dataCopy);

					// If there's a `callback`, call it back with the result.
					callback && callback(result, dataCopy);
				}, function() {
					deferred.reject.apply(deferred, arguments)
				});
				// Return the deferred...
				return deferred;
			}
			else {
				// No deferreds! Render this bad boy.
				var response, 
					// If there's a `callback` function
					async = isFunction( callback ),
					// Get the `view` type
					deferred = get(view, async);

				// If we are `async`...
				if ( async ) {
					// Return the deferred
					response = deferred;
					// And fire callback with the rendered result.
					deferred.then(function( renderer ) {
						callback(data ? renderer(data, helpers) : renderer);
					})
				} else {
					// if the deferred is resolved, call the cached renderer instead
					// this is because it's possible, with recursive deferreds to
					// need to render a view while its deferred is _resolving_.  A _resolving_ deferred
					// is a deferred that was just resolved and is calling back it's success callbacks.
					// If a new success handler is called while resoliving, it does not get fired by
					// jQuery's deferred system.  So instead of adding a new callback
					// we use the cached renderer.
					// We also add __view_id on the deferred so we can look up it's cached renderer.
					// In the future, we might simply store either a deferred or the cached result.
					if(deferred.state() === "resolved" && deferred.__view_id  ){
						var currentRenderer = $view.cachedRenderers[ deferred.__view_id ];
						return data ? currentRenderer(data, helpers) : currentRenderer;
					} else {
						// Otherwise, the deferred is complete, so
						// set response to the result of the rendering.
						deferred.then(function( renderer ) {
							response = data ? renderer(data, helpers) : renderer;
						});
					}
				}

				return response;
			}
		},

		/**
		 * @hide
		 * Registers a view with `cached` object.  This is used
		 * internally by this class and Mustache to hookup views.
		 * @param  {String} id
		 * @param  {String} text
		 * @param  {String} type
		 * @param  {can.Deferred} def
		 */
		registerView: function( id, text, type, def ) {
			// Get the renderer function.
			var func = (type || $view.types[$view.ext]).renderer(id, text);
			def = def || new can.Deferred();
			
			// Cache if we are caching.
			if ( $view.cache ) {
				$view.cached[id] = def;
				def.__view_id = id;
				$view.cachedRenderers[id] = func;
			}

			// Return the objects for the response's `dataTypes`
			// (in this case view).
			return def.resolve(func);
		}
	});

	// Makes sure there's a template, if not, have `steal` provide a warning.
	var	checkText = function( text, url ) {
			if ( ! text.length ) {
				
				throw "can.view: No template or empty template:" + url;
			}
		},
		// `Returns a `view` renderer deferred.  
		// `url` - The url to the template.  
		// `async` - If the ajax request should be asynchronous.  
		// Returns a deferred.
		get = function( url, async ) {
			var suffix = url.match(/\.[\w\d]+$/),
			type, 
			// If we are reading a script element for the content of the template,
			// `el` will be set to that script element.
			el, 
			// A unique identifier for the view (used for caching).
			// This is typically derived from the element id or
			// the url for the template.
			id, 
			// The ajax request used to retrieve the template content.
			jqXHR;

			//If the url has a #, we assume we want to use an inline template
			//from a script element and not current page's HTML
			if( url.match(/^#/) ) {
				url = url.substr(1);
			}
			// If we have an inline template, derive the suffix from the `text/???` part.
			// This only supports `<script>` tags.
			if ( el = document.getElementById(url) ) {
				suffix = "."+el.type.match(/\/(x\-)?(.+)/)[2];
			}
	
			// If there is no suffix, add one.
			if (!suffix && !$view.cached[url] ) {
				url += ( suffix = $view.ext );
			}

			if ( can.isArray( suffix )) {
				suffix = suffix[0]
			}
	
			// Convert to a unique and valid id.
			id = $view.toId(url);
	
			// If an absolute path, use `steal` to get it.
			// You should only be using `//` if you are using `steal`.
			if ( url.match(/^\/\//) ) {
				var sub = url.substr(2);
				url = ! window.steal ? 
					sub :
					steal.config().root.mapJoin(""+steal.id(sub));
			}
	
			// Set the template engine type.
			type = $view.types[suffix];
	
			// If it is cached, 
			if ( $view.cached[id] ) {
				// Return the cached deferred renderer.
				return $view.cached[id];
			
			// Otherwise if we are getting this from a `<script>` element.
			} else if ( el ) {
				// Resolve immediately with the element's `innerHTML`.
				return $view.registerView(id, el.innerHTML, type);
			} else {
				// Make an ajax request for text.
				var d = new can.Deferred();
				can.ajax({
					async: async,
					url: url,
					dataType: "text",
					error: function(jqXHR) {
						checkText("", url);
						d.reject(jqXHR);
					},
					success: function( text ) {
						// Make sure we got some text back.
						checkText(text, url);
						$view.registerView(id, text, type, d)
					}
				});
				return d;
			}
		},
		// Gets an `array` of deferreds from an `object`.
		// This only goes one level deep.
		getDeferreds = function( data ) {
			var deferreds = [];

			// pull out deferreds
			if ( can.isDeferred(data) ) {
				return [data]
			} else {
				for ( var prop in data ) {
					if ( can.isDeferred(data[prop]) ) {
						deferreds.push(data[prop]);
					}
				}
			}
			return deferreds;
		},
		// Gets the useful part of a resolved deferred.
		// This is for `model`s and `can.ajax` that resolve to an `array`.
		usefulPart = function( resolved ) {
			return can.isArray(resolved) && resolved[1] === 'success' ? resolved[0] : resolved
		};

	//!steal-pluginify-remove-start
	if ( window.steal ) {
		steal.type("view js", function( options, success, error ) {
			var type = $view.types["." + options.type],
				id = $view.toId(options.id);
			/**
			 * @hide
			 * should return something like steal("dependencies",function(EJS){
			 * 	 return can.view.preload("ID", options.text)
			 * })
			 */
			options.text = "steal('" + (type.plugin || "can/view/" + options.type) + "',function(can){return " + "can.view.preload('" + id + "'," + options.text + ");\n})";
			success();
		})
	}
	//!steal-pluginify-remove-end

	can.extend($view, {
		register: function( info ) {
			this.types["." + info.suffix] = info;

			//!steal-pluginify-remove-start
			if ( window.steal ) {
				steal.type(info.suffix + " view js", function( options, success, error ) {
					var type = $view.types["." + options.type],
						id = $view.toId(options.id+'');

					options.text = type.script(id, options.text)
					success();
				})
			};
			//!steal-pluginify-remove-end
			
			$view[info.suffix] = function(id, text){
				if(!text) {
					// Return a nameless renderer
					var renderer = function() {
						return $view.frag(renderer.render.apply(this, arguments));
					}
					renderer.render = function() {
						var renderer = info.renderer(null, id);
						return renderer.apply(renderer, arguments);
					}
					return renderer;
				}

				$view.preload(id, info.renderer(id, text));
				return can.view(id);
			}
		},
		registerScript: function( type, id, src ) {
			return "can.view.preload('" + id + "'," + $view.types["." + type].script(id, src) + ");";
		},
		preload: function( id, renderer ) {
			$view.cached[id] = new can.Deferred().resolve(function( data, helpers ) {
				return renderer.call(data, data, helpers);
			});
			function frag(){
				return $view.frag(renderer.apply(this,arguments));
			}
			// expose the renderer for mustache
			frag.render = renderer;
			return frag;
		}

	});

	return can;
});
;
steal.executed('can/view/view.js');
steal('can/view', './elements',function(can, elements){

/**
 * Helper(s)
 */
var newLine = /(\r|\n)+/g,
	// Escapes characters starting with `\`.
	clean = function( content ) {
		return content
			.split('\\').join("\\\\")
			.split("\n").join("\\n")
			.split('"').join('\\"')
			.split("\t").join("\\t");
	},
	// Returns a tagName to use as a temporary placeholder for live content
	// looks forward ... could be slow, but we only do it when necessary
	getTag = function(tagName, tokens, i){
		// if a tagName is provided, use that
		if(tagName){
			return tagName;  
		} else {
			// otherwise go searching for the next two tokens like "<",TAG
			while(i < tokens.length){
				if(tokens[i] == "<" && elements.reverseTagMap[tokens[i+1]]){
					return elements.reverseTagMap[tokens[i+1]];
				}
				i++;
			}
		}
		return '';
	},
	bracketNum = function(content){
		return (--content.split("{").length) - (--content.split("}").length);
	},
	 myEval = function( script ) {
		eval(script);
	},
	attrReg = /([^\s]+)[\s]*=[\s]*$/,
	// Commands for caching.
	startTxt = 'var ___v1ew = [];',
	finishTxt = "return ___v1ew.join('')",
	put_cmd = "___v1ew.push(",
	insert_cmd = put_cmd,
	// Global controls (used by other functions to know where we are).
	// Are we inside a tag?
	htmlTag = null,
	// Are we within a quote within a tag?
	quote = null,
	// What was the text before the current quote? (used to get the `attr` name)
	beforeQuote = null,
	// Whether a rescan is in progress
	rescan = null,
	// Used to mark where the element is.
	status = function(){
		// `t` - `1`.
		// `h` - `0`.
		// `q` - String `beforeQuote`.
		return quote ? "'"+beforeQuote.match(attrReg)[1]+"'" : (htmlTag ? 1 : 0);
	};

can.view.Scanner = Scanner = function( options ) {
  // Set options on self
  can.extend(this, {
		text: {},
  	tokens: []
  }, options);
	
	// Cache a token lookup
	this.tokenReg = [];
	this.tokenSimple = { "<": "<", ">": ">", '"': '"', "'": "'" };
	this.tokenComplex = [];
	this.tokenMap = {};
	for (var i = 0, token; token = this.tokens[i]; i++) {
		/**
		 * Token data structure (complex token and rescan function are optional):
		 * [
		 *	"token name",
		 *	"simple token or abbreviation",
		 *	/complex token regexp/,
		 *	function(content) {
		 *		// Rescan Function
		 *		return {
		 *			before: '\n',
		 *			content: content.trim(),
		 *			after: '\n'
		 *		}
		 * ]
		 */
		
		// Save complex mappings (custom regexp)
		if (token[2]) {
			this.tokenReg.push(token[2]);
			this.tokenComplex.push({ abbr: token[1], re: new RegExp(token[2]), rescan: token[3] });
		}
		// Save simple mappings (string only, no regexp)
		else {
			this.tokenReg.push(token[1]);
			this.tokenSimple[token[1]] = token[0];
		}
		this.tokenMap[token[0]] = token[1];
	}
	
	// Cache the token registry.
	this.tokenReg = new RegExp("(" + this.tokenReg.slice(0).concat(["<", ">", '"', "'"]).join("|") + ")","g");
};

/**
 * Extend can.View to add scanner support.
 */
Scanner.prototype = {

	helpers: [
		/**
		 * Check if its a func like `()->`.
		 * @param {String} content
		 */
		{
			name:/\s*\(([\$\w]+)\)\s*->([^\n]*)/,
			fn: function(content){
				var quickFunc = /\s*\(([\$\w]+)\)\s*->([^\n]*)/,
					parts = content.match(quickFunc);

				return "can.proxy(function(__){var " + parts[1] + "=can.$(__);" + parts[2] + "}, this);";
			}
		}
	],

	scan: function(source, name){
		var tokens = [],
			last = 0,
			simple = this.tokenSimple,
			complex = this.tokenComplex;
		
		source = source.replace(newLine, "\n");
		if (this.transform) {
			source = this.transform(source);
		}
		source.replace(this.tokenReg, function(whole, part){
			// offset is the second to last argument
			var offset = arguments[arguments.length-2];
			
			// if the next token starts after the last token ends
			// push what's in between
			if(offset > last){
				tokens.push( source.substring(last, offset) );
			}
			
			// push the simple token (if there is one)
			if (simple[whole]) {
				tokens.push(whole);
			}
			// otherwise lookup complex tokens
			else {
				for (var i = 0, token; token = complex[i]; i++) {
					if (token.re.test(whole)) {
						tokens.push(token.abbr);
						// Push a rescan function if one exists
						if (token.rescan) {
							tokens.push(token.rescan(part));
						}
						break;
					}
				}
			}

			// update the position of the last part of the last token
			last = offset+part.length;
		});

		// if there's something at the end, add it
		if(last < source.length){
			tokens.push(source.substr(last));
		}
		
		var content = '',
			buff = [startTxt + (this.text.start || '')],
			// Helper `function` for putting stuff in the view concat.
			put = function( content, bonus ) {
				buff.push(put_cmd, '"', clean(content), '"'+(bonus||'')+');');
			},
			// A stack used to keep track of how we should end a bracket
			// `}`.  
			// Once we have a `<%= %>` with a `leftBracket`,
			// we store how the file should end here (either `))` or `;`).
			endStack =[],
			// The last token, used to remember which tag we are in.
			lastToken,
			// The corresponding magic tag.
			startTag = null,
			// Was there a magic tag inside an html tag?
			magicInTag = false,
			// The current tag name.
			tagName = '',
			// stack of tagNames
			tagNames = [],
			// Pop from tagNames?
			popTagName = false,
			// Declared here.
			bracketCount,
			i = 0,
			token,
			tmap = this.tokenMap;

		// Reinitialize the tag state goodness.
		htmlTag = quote = beforeQuote = null;

		for (; (token = tokens[i++]) !== undefined;) {
			if ( startTag === null ) {
				switch ( token ) {
				case tmap.left:
				case tmap.escapeLeft:
				case tmap.returnLeft:
					magicInTag = htmlTag && 1;
				case tmap.commentLeft:
					// A new line -- just add whatever content within a clean.  
					// Reset everything.
					startTag = token;
					if ( content.length ) {
						put(content);
					}
					content = '';
					break;
				case tmap.escapeFull:
					// This is a full line escape (a line that contains only whitespace and escaped logic)
					// Break it up into escape left and right
					magicInTag = htmlTag && 1;
					rescan = 1;
					startTag = tmap.escapeLeft;
					if ( content.length ) {
						put(content);
					}
					rescan = tokens[i++];
					content = rescan.content || rescan;
					if ( rescan.before ) {
						put(rescan.before);
					}
					tokens.splice(i, 0, tmap.right);
					break;
				case tmap.commentFull:
					// Ignore full line comments.
					break;
				case tmap.templateLeft:
					content += tmap.left;
					break;
				case '<':
					// Make sure we are not in a comment.
					if(tokens[i].indexOf("!--") !== 0) {
						htmlTag = 1;
						magicInTag = 0;
					}
					content += token;
					break;
				case '>':
					htmlTag = 0;
					// content.substr(-1) doesn't work in IE7/8
					var emptyElement = content.substr(content.length-1) == "/" || content.substr(content.length-2) == "--";
					// if there was a magic tag
					// or it's an element that has text content between its tags, 
					// but content is not other tags add a hookup
					// TODO: we should only add `can.EJS.pending()` if there's a magic tag 
					// within the html tags.
					if(magicInTag || !popTagName && elements.tagToContentPropMap[ tagNames[tagNames.length -1] ]){
						// make sure / of /> is on the left of pending
						if(emptyElement){
							put(content.substr(0,content.length-1), ",can.view.pending(),\"/>\"");
						} else {
							put(content, ",can.view.pending(),\">\"");
						}
						content = '';
						magicInTag = 0;
					} else {
						content += token;
					}
					// if it's a tag like <input/>
					if(emptyElement || popTagName){
						// remove the current tag in the stack
						tagNames.pop();
						// set the current tag to the previous parent
						tagName = tagNames[tagNames.length-1];
						// Don't pop next time
						popTagName = false;
					}
					break;
				case "'":
				case '"':
					// If we are in an html tag, finding matching quotes.
					if(htmlTag){
						// We have a quote and it matches.
						if(quote && quote === token){
							// We are exiting the quote.
							quote = null;
							// Otherwise we are creating a quote.
							// TODO: does this handle `\`?
						} else if(quote === null){
							quote = token;
							beforeQuote = lastToken;
						}
					}
				default:
					// Track the current tag
					if(lastToken === '<'){
						tagName = token.split(/\s/)[0];
						if( tagName.indexOf("/") === 0 && tagNames[tagNames.length-1] === tagName.substr(1) ) {
							// set tagName to the last tagName
							// if there are no more tagNames, we'll rely on getTag.
							tagName = tagNames[tagNames.length-1];
							popTagName = true;
						} else {
							tagNames.push(tagName);
						}
					}
					content += token;
					break;
				}
			} else {
				// We have a start tag.
				switch ( token ) {
				case tmap.right:
				case tmap.returnRight:
					switch ( startTag ) {
					case tmap.left:
						// Get the number of `{ minus }`
						bracketCount = bracketNum(content);
						
						// We are ending a block.
						if (bracketCount == 1) {

							// We are starting on.
							buff.push(insert_cmd, "can.view.txt(0,'"+getTag(tagName,tokens, i)+"'," + status() + ",this,function(){", startTxt, content);

							endStack.push({
								before: "",
								after: finishTxt+"}));\n"
							});
						}
						else {
							
							// How are we ending this statement?
							last = // If the stack has value and we are ending a block...
								endStack.length && bracketCount == -1 ? // Use the last item in the block stack.
								endStack.pop() : // Or use the default ending.
							{
								after: ";"
							};
							
							// If we are ending a returning block, 
							// add the finish text which returns the result of the
							// block.
							if (last.before) {
								buff.push(last.before);
							}
							// Add the remaining content.
							buff.push(content, ";",last.after);
						}
						break;
					case tmap.escapeLeft:
					case tmap.returnLeft:
						// We have an extra `{` -> `block`.
						// Get the number of `{ minus }`.
						bracketCount = bracketNum(content);
						// If we have more `{`, it means there is a block.
						if( bracketCount ){
							// When we return to the same # of `{` vs `}` end with a `doubleParent`.
							endStack.push({
								before : finishTxt,
								after: "}));"
							});
						} 

						var escaped = startTag === tmap.escapeLeft ? 1 : 0,
							commands = { insert: insert_cmd, tagName: getTag(tagName, tokens, i), status: status() };

						for(var ii = 0; ii < this.helpers.length;ii++){
							// Match the helper based on helper
							// regex name value
							var helper = this.helpers[ii];
							if(helper.name.test(content)){
								content = helper.fn(content, commands);

								// dont escape partials
								if(helper.name.source == /^>[\s]*\w*/.source){
									escaped = 0;
								}	
								break;
							}
						}
						
						// Handle special cases
						if (typeof content == 'object') {
							if (content.raw) {
								buff.push(content.raw);
							}
						} else {
							// If we have `<%== a(function(){ %>` then we want
							// `can.EJS.text(0,this, function(){ return a(function(){ var _v1ew = [];`.
							buff.push(insert_cmd, "can.view.txt(" + escaped + ",'"+tagName+"'," + status() +",this,function(){ " + (this.text.escape || '') + "return ", content, 
								// If we have a block.
								bracketCount ? 
								// Start with startTxt `"var _v1ew = [];"`.
								startTxt : 
								// If not, add `doubleParent` to close push and text.
								"}));"
								);
						}
						
						if (rescan && rescan.after && rescan.after.length) {
							put(rescan.after.length);
							rescan = null;
						}
						break;
					}
					startTag = null;
					content = '';
					break;
				case tmap.templateLeft:
					content += tmap.left;
					break;
				default:
					content += token;
					break;
				}
			}
			lastToken = token;
		}
		
		// Put it together...
		if ( content.length ) {
			// Should be `content.dump` in Ruby.
			put(content);
		}
		buff.push(";");
		
		var template = buff.join(''),
			out = {
				out: 'with(_VIEW) { with (_CONTEXT) {' + template + " "+finishTxt+"}}"
			};
		// Use `eval` instead of creating a function, because it is easier to debug.
		myEval.call(out, 'this.fn = (function(_CONTEXT,_VIEW){' + out.out + '});\r\n//@ sourceURL=' + name + ".js");

		return out;
	}
};

return Scanner;
});;
steal.executed('can/view/scanner.js');

steal(function(){
	/**
	 * @typedef {{}} can/view/elements.js
	 * 
	 * Provides helper methods for and information about the behavior
	 * of DOM elements.
	 */
	var elements = {
		tagToContentPropMap: {
			option: "textContent" in document.createElement("option") ? "textContent" : "innerText",
			textarea: "value"
		},
		/**
		 * @property {Object.<String,(String|Boolean)>} attrMap a mapping of
		 * special attributes to their JS property. For example:
		 * 
		 *     "class" : "className"
		 * 
		 * means call element.className. And: 
		 * 
		 *      "checked" : true
		 * 
		 * means call `element.checked = true`
		 *     
		 */
		attrMap: {
			"class" : "className",
			"value": "value",
			"innerText" : "innerText",
			"textContent" : "textContent",
			"checked": true,
			"disabled": true,
			"readonly": true,
			"required": true
		},
		// elements whos default value we should set
		defaultValue : ["input","textarea"],
		// a map of parent element to child elements
		tagMap : {
			"": "span", 
			table: "tbody", 
			tr: "td",
			ol: "li", 
			ul: "li", 
			tbody: "tr",
			thead: "tr",
			tfoot: "tr",
			select: "option",
			optgroup: "option"
		},
		// a tag's parent element
		reverseTagMap: {
			tr:"tbody",
			option:"select",
			td:"tr",
			th:"tr",
			li: "ul"
		},
		
		getParentNode: function(el, defaultParentNode){
			return defaultParentNode && el.parentNode.nodeType === 11 ? defaultParentNode : el.parentNode;
		},
		// set an attribute on an element
		setAttr: function (el, attrName, val) {
			var tagName = el.nodeName.toString().toLowerCase(),
				prop = elements.attrMap[attrName];
			// if this is a special property
			if(prop === true) {
				el[attrName]  = true;
			} else if (prop) {
				// set the value as true / false
				el[prop] = val;
				if( prop === "value" && can.inArray(tagName, elements.defaultValue) >= 0 ) {
					el.defaultValue = val;
				}
			} else {
				el.setAttribute(attrName, val);
			}
		},
		// gets the value of an attribute
		getAttr: function(el, attrName){
			// Default to a blank string for IE7/8
			return (elements.attrMap[attrName] && el[elements.attrMap[attrName]] ?
				el[elements.attrMap[attrName]]:
				el.getAttribute(attrName)) || '';
		},
		// removes the attribute
		removeAttr: function(el, attrName){
			if( elements.attrMap[attrName] === true ) {
				el[attrName] = false;
			} else{
				el.removeAttribute(attrName);
			}
		},
		contentText: function(text){
			if ( typeof text == 'string' ) {
				return text;
			}
			// If has no value, return an empty string.
			if ( !text && text !== 0 ) {
				return '';
			}
			return "" + text;
		}
	};
	
	return elements;
})
;
steal.executed('can/view/elements.js');
steal('can/util', 'can/util/bind', function(can, bind) {
	
	// returns the
    // - observes and attr methods are called by func
	// - the value returned by func
	// ex: `{value: 100, observed: [{obs: o, attr: "completed"}]}`
	var getValueAndObserved = function(func, self){
		
		var oldReading;
		if (can.Observe) {
			// Set a callback on can.Observe to know
			// when an attr is read.
			// Keep a reference to the old reader
			// if there is one.  This is used
			// for nested live binding.
			oldReading = can.Observe.__reading;
			can.Observe.__reading = function(obj, attr){
				// Add the observe and attr that was read
				// to `observed`
				observed.push({
					obj: obj,
					attr: attr+""
				});
			};
		}
		
		var observed = [],
			// Call the "wrapping" function to get the value. `observed`
			// will have the observe/attribute pairs that were read.
			value = func.call(self);

		// Set back so we are no longer reading.
		if(can.Observe){
			can.Observe.__reading = oldReading;
		}
		return {
			value : value,
			observed : observed
		};
	},
		// Calls `callback(newVal, oldVal)` everytime an observed property
		// called within `getterSetter` is changed and creates a new result of `getterSetter`.
		// Also returns an object that can teardown all event handlers.
		computeBinder = function(getterSetter, context, callback, computeState){
			// track what we are observing
			var observing = {},
				// a flag indicating if this observe/attr pair is already bound
				matched = true,
				// the data to return 
				data = {
					// we will maintain the value while live-binding is taking place
					value : undefined,
					// a teardown method that stops listening
					teardown: function(){
						for ( var name in observing ) {
							var ob = observing[name];
							ob.observe.obj.unbind(ob.observe.attr, onchanged);
							delete observing[name];
						}
					}
				},
				batchNum;
			
			// when a property value is changed
			var onchanged = function(ev){
				// If the compute is no longer bound (because the same change event led to an unbind)
				// then do not call getValueAndBind, or we will leak bindings.
				if ( computeState && !computeState.bound ) {
					return;
				}
				if(ev.batchNum === undefined || ev.batchNum !== batchNum) {
					// store the old value
					var oldValue = data.value,
						// get the new value
						newvalue = getValueAndBind();

					// update the value reference (in case someone reads)
					data.value = newvalue;
					// if a change happened
					if ( newvalue !== oldValue ) {
						callback(newvalue, oldValue);
					}
					batchNum = batchNum = ev.batchNum;
				}
				
				
			};
			
			// gets the value returned by `getterSetter` and also binds to any attributes
			// read by the call
			var getValueAndBind = function(){
				var info = getValueAndObserved( getterSetter, context ),
					newObserveSet = info.observed;
				
				var value = info.value;
				matched = !matched;
				
				// go through every attribute read by this observe
				can.each(newObserveSet, function(ob){
					// if the observe/attribute pair is being observed
					if(observing[ob.obj._cid+"|"+ob.attr]){
						// mark at as observed
						observing[ob.obj._cid+"|"+ob.attr].matched = matched;
					} else {
						// otherwise, set the observe/attribute on oldObserved, marking it as being observed
						observing[ob.obj._cid+"|"+ob.attr] = {
							matched: matched,
							observe: ob
						};
						ob.obj.bind(ob.attr, onchanged);
					}
				});
				
				// Iterate through oldObserved, looking for observe/attributes
				// that are no longer being bound and unbind them
				for ( var name in observing ) {
					var ob = observing[name];
					if(ob.matched !== matched){
						ob.observe.obj.unbind(ob.observe.attr, onchanged);
						delete observing[name];
					}
				}
				return value;
			};
			// set the initial value
			data.value = getValueAndBind();

			data.isListening = ! can.isEmptyObject(observing);
			return data;
		}
	
	// if no one is listening ... we can not calculate every time

	can.compute = function(getterSetter, context, eventName){
		if(getterSetter && getterSetter.isComputed){
			return getterSetter;
		}
		// stores the result of computeBinder
		var computedData,
			// how many listeners to this this compute
			bindings = 0,
			// the computed object
			computed,
			// an object that keeps track if the computed is bound
			// onchanged needs to know this. It's possible a change happens and results in
			// something that unbinds the compute, it needs to not to try to recalculate who it
			// is listening to
			computeState = { 
				bound: false,
				// true if this compute is calculated from other computes and observes
				hasDependencies: false
			},
			// The following functions are overwritten depending on how compute() is called
			// a method to setup listening
			on = function(){},
			// a method to teardown listening
			off = function(){},
			// the current cached value (only valid if bound = true)
			value,
			// how to read the value
			get = function(){
				return value
			},
			// sets the value
			set = function(newVal){
				value = newVal;
			},
			// this compute can be a dependency of other computes
			// 
			canReadForChangeEvent = true;

		computed = function(newVal){
			// setting ...
			if(arguments.length){
				// save a reference to the old value
				var old = value;

				// setter may return a value if 
				// setter is for a value maintained exclusively by this compute
				var setVal = set.call(context,newVal, old);

				// if this has dependencies return the current value
				if(computed.hasDependencies){
					return get.call(context);
				}

				if(setVal === undefined) {
					// it's possible, like with the DOM, setting does not
					// fire a change event, so we must read
					value = get.call(context);
				} else {
					value = setVal;
				}
				// fire the change
				if( old !== value){
					can.Observe.triggerBatch(computed, "change",[value, old] );
				}
				return value;
			} else {
				// Let others know to listen to changes in this compute
				if( can.Observe.__reading && canReadForChangeEvent) {
					can.Observe.__reading(computed,'change');
				}
				// if we are bound, use the cached value
				if( computeState.bound ) {
					return value;
				} else {
					return get.call(context);
				}
			}
		}
		if(typeof getterSetter === "function"){
			set = getterSetter;
			get = getterSetter;
			canReadForChangeEvent = eventName === false ? false : true;
			computed.hasDependencies = false;
			on = function(update){
				computedData = computeBinder(getterSetter, context || this, update, computeState);
				computed.hasDependencies = computedData.isListening
				value = computedData.value;
			}
			off = function(){
				computedData && computedData.teardown();
			}
		} else if(context) {
			
			if(typeof context == "string"){
				// `can.compute(obj, "propertyName", [eventName])`
				
				var propertyName = context,
					isObserve = getterSetter instanceof can.Observe;
				if(isObserve){
					computed.hasDependencies = true;
				}
				get = function(){
					if(isObserve){
						return getterSetter.attr(propertyName);
					} else {
						return getterSetter[propertyName];
					}
				}
				set = function(newValue){
					if(isObserve){
						getterSetter.attr(propertyName, newValue)
					} else {
						getterSetter[propertyName] = newValue;
					}
				}
				var handler;
				on = function(update){
					handler = function(){
						update(get(), value)
					};
					can.bind.call(getterSetter, eventName || propertyName,handler)
					
					// use getValueAndObserved because
					// we should not be indicating that some parent
					// reads this property if it happens to be binding on it
					value = getValueAndObserved(get).value
				}
				off = function(){
					can.unbind.call(getterSetter, eventName || propertyName,handler)
				}

			} else {
				// `can.compute(initialValue, setter)`
				if(typeof context === "function"){
					value = getterSetter;
					set = context;
				} else {
					// `can.compute(initialValue,{get:, set:, on:, off:})`
					value = getterSetter;
					var options = context;
					get = options.get || get;
					set = options.set ||set;
					on = options.on || on;
					off = options.off || off;
				}

			}


			

		} else {
			// `can.compute(5)`
			value = getterSetter;
		}
		/**
		 * @property {Boolean} can.computed.isComputed compute.isComputed
		 * @parent can.compute
		 * Whether the value of the compute has been computed yet.
		 */
		computed.isComputed = true;
		
		can.cid(computed,"compute")

		var updater= function(newValue, oldValue){
			value = newValue;
			// might need a way to look up new and oldVal
			can.Observe.triggerBatch(computed, "change",[newValue, oldValue])
		}

		return can.extend(computed,{
			_bindsetup: function(){
				computeState.bound = true;
				// setup live-binding
				on.call(this, updater)
			},
			_bindteardown: function(){
				off.call(this,updater)
				computeState.bound = false;
			},
			/**
			 * @function can.computed.bind compute.bind
			 * @parent can.compute
			 * @description Bind an event handler to a compute.
			 * @signature `compute.bind(eventType, handler)`
			 * @param {String} eventType The event to bind this handler to.
			 * The only event type that computes emit is _change_.
			 * @param {function({Object},{*},{*})} handler The handler to call when the event happens.
			 * The handler should have three parameters:
			 *
			 * - _event_ is the event object.
			 * - _newVal_ is the newly-computed value of the compute.
			 * - _oldVal_ is the value of the compute before it changed.
			 *
			 * `bind` lets you listen to a compute to know when it changes. It works just like
			 * can.Observe's `[can.Observe.prototype.bind bind]`:
			 @codestart
			 * var tally = can.compute(0);
			 * tally.bind('change', function(ev, newVal, oldVal) {
			 *     console.log('The tally is now at ' + newVal + '.');
			 * });
			 *
			 * tally(tally() + 5); // The log reads:
			 *                     // 'The tally is now at 5.'
			 * @codeend
			 */
			bind: can.bindAndSetup,
			/**
			 * @function computed.unbind compute.unbind
			 * @parent can.compute
			 * @description Unbind an event handler from a compute.
			 * @signature `compute.unbind(eventType[, handler])`
			 * @param {String} eventType The type of event to unbind.
			 * The only event type available for computes is _change_.
			 * @param {function} [handler] If given, the handler to unbind.
			 * If _handler_ is not supplied, all handlers bound to _eventType_
			 * will be removed.
			 */
			unbind: can.unbindAndTeardown
		});
	};
	can.compute.binder = computeBinder;
	return can.compute;
})
;
steal.executed('can/observe/compute/compute.js');
steal('can/util',function(can){
	
	/**
	 * @typedef {{bind:function():*,unbind:function():*}} can/util/bind
	 * 
	 * Provides mixin-able bind and unbind methods. `bind()` calls `this._bindsetup`
	 * when the first bind happens and.  `unbind()` calls `this._bindteardown` when there
	 * are no more event handlers.
	 * 
	 */
	// ## Bind helpers
	can.bindAndSetup = function() {
		// Add the event to this object
		can.addEvent.apply(this, arguments);
		// If not initializing, and the first binding
		// call bindsetup if the function exists.
		if(!this._init){
			if(!this._bindings ){
				this._bindings = 1;
				// setup live-binding
				this._bindsetup && this._bindsetup();
				
			} else {
				this._bindings++;
			}
			
		}
		
		return this;
	};

	can.unbindAndTeardown = function(ev, handler) {
		// Remove the event handler
		can.removeEvent.apply(this, arguments);

		this._bindings--;
		// If there are no longer any bindings and
		// there is a bindteardown method, call it.
		if(!this._bindings){
			this._bindteardown && this._bindteardown();
		}
		return this;
	}

	return can;

});
steal.executed('can/util/bind/bind.js');
steal('can/view','./elements','./live', 'can/util/string', function(can, elements, live){

/**
 * Helper(s)
 */
var pendingHookups = [],
	tagChildren = function(tagName) {
		var newTag = elements.tagMap[tagName] || "span";
		if(newTag === "span") {
			//innerHTML in IE doesn't honor leading whitespace after empty elements
			return "@@!!@@";
		}	
		return "<" + newTag + ">" + tagChildren(newTag) + "</" + newTag + ">";
	},
	contentText = function( input, tag ) {	
		
		// If it's a string, return.
		if ( typeof input == 'string' ) {
			return input;
		}
		// If has no value, return an empty string.
		if ( !input && input !== 0 ) {
			return '';
		}

		// If it's an object, and it has a hookup method.
		var hook = (input.hookup &&

		// Make a function call the hookup method.
		function( el, id ) {
			input.hookup.call(input, el, id);
		}) ||

		// Or if it's a `function`, just use the input.
		(typeof input == 'function' && input);

		// Finally, if there is a `function` to hookup on some dom,
		// add it to pending hookups.
		if ( hook ) {
			if(tag){
				return "<"+tag+" "+can.view.hook(hook)+"></"+tag+">"
			} else {
				pendingHookups.push(hook);
			}
			
			return '';
		}

		// Finally, if all else is `false`, `toString()` it.
		return "" + input;
	},
	// Returns escaped/sanatized content for anything other than a live-binding
	contentEscape = function( txt ) {
		return (typeof txt == 'string' || typeof txt == 'number') ?
			can.esc( txt ) :
			contentText(txt);
	};


var current;

can.extend(can.view, {
	live: live,
	setupLists: function(){

		var old = can.view.lists,
			data;

		can.view.lists = function(list, renderer){
			data = {
				list: list,
				renderer: renderer
			}
		}
		return function(){
			can.view.lists = old;
			return data;
		}
	},
	pending: function() {
		// TODO, make this only run for the right tagName
		var hooks = pendingHookups.slice(0);
		lastHookups = hooks;
		pendingHookups = [];
		return can.view.hook(function(el){
			can.each(hooks, function(fn){
				fn(el);
			});
		});
	},

	/**
	 * @function can.view.txt
	 * @hide
	 * 
	 * A helper function used to insert the 
	 * value of the contents of a magic tag into 
	 * a template's output. It detects if an observable value is
	 * read and will setup live binding.
	 * 
	 * @signature `can.view.txt(escape, tagName, status, self, func)`
	 * 
	 * @param {Number} 1 if the content returned should be escaped, 0 if otherwise.
	 * @param {String} tagName the name of the tag the magic tag is most immediately
	 * within. Ex: `"li"`.
	 * @param {String|Number} status A flag indicates which part of a tag the
	 * magic tag is within. Status can be:
	 * 
	 *  - _STRING_ - The name of the attribute the magic tag is within. Ex: `"class"`
	 *  - `1` - The magic tag is within a tag like `<div <%= %>>`
	 *  - `0` - The magic tag is outside (or between) tags like `<div><%= %></div>`
	 * 
	 * @param {*} self The `this` of the current context template. `func` is called with
	 * self as this.
	 *   
	 * @param {function} func The "wrapping" function. For 
	 * example:  `<%= task.attr('name') %>` becomes
	 *   `(function(){return task.attr('name')})
	 *
	 */
	txt: function(escape, tagName, status, self, func){
		var listTeardown = can.view.setupLists(),
			emptyHandler = function(){},
			unbind = function(){
				compute.unbind("change",emptyHandler)
			};

		var compute = can.compute(func, self, false);
		// bind to get and temporarily cache the value
		compute.bind("change",emptyHandler);
		// call the "wrapping" function and get the binding information
		var tag = (elements.tagMap[tagName] || "span"),
			listData = listTeardown(),
			value = compute();
		

		if(listData){
			return "<" +tag+can.view.hook(function(el, parentNode){
				live.list(el, listData.list, listData.renderer, self, parentNode);
			})+"></" +tag+">";
		}

		// If we had no observes just return the value returned by func.
		if(!compute.hasDependencies){
			unbind();
			return (escape || status !== 0? contentEscape : contentText)(value, status === 0 && tag);
		}


		// the property (instead of innerHTML elements) to adjust. For
		// example options should use textContent
		var contentProp = elements.tagToContentPropMap[tagName];
		

		// The magic tag is outside or between tags.
		if ( status === 0 && !contentProp ) {
			// Return an element tag with a hookup in place of the content
			return "<" +tag+can.view.hook(
			escape ? 
				// If we are escaping, replace the parentNode with 
				// a text node who's value is `func`'s return value.
				function(el, parentNode){
					live.text(el, compute, parentNode);
					unbind();
				} 
				:
				// If we are not escaping, replace the parentNode with a
				// documentFragment created as with `func`'s return value.
				function( el, parentNode ) {
					live.html(el, compute, parentNode);
					unbind();
				//children have to be properly nested HTML for buildFragment to work properly
				}) + ">"+tagChildren(tag)+"</" +tag+">";
		// In a tag, but not in an attribute
		} else if( status === 1 ) { 
			// remember the old attr name
			pendingHookups.push(function(el) {
				live.attributes(el, compute, compute());
				unbind();
			});
			return compute();
		} else { // In an attribute...
			var attributeName = status === 0 ? contentProp : status;
			// if the magic tag is inside the element, like `<option><% TAG %></option>`,
			// we add this hookup to the last element (ex: `option`'s) hookups.
			// Otherwise, the magic tag is in an attribute, just add to the current element's
			// hookups.
			(status === 0  ? lastHookups : pendingHookups ).push(function(el){
				live.attribute(el, attributeName, compute);
				unbind();
			});
			return live.attributePlaceholder;
		}
	}
});

return can;
});;
steal.executed('can/view/render.js');
steal('can/util', './elements.js','can/view','./node_lists.js',
	function(can, elements,view,nodeLists){
	// ## live.js
	// 
	// The live module provides live binding for computes
	// and can.Observe.List.
	// 
	// Currently, it's API is designed for `can/view/render`, but
	// it could easily be used for other purposes.


	// ### Helper methods
	// 
	// #### setup
	// 
	// `setup(HTMLElement, bind(data), unbind(data)) -> data`
	// 
	// Calls bind right away, but will call unbind
	// if the element is "destroyed" (removed from the DOM).
	var setup = function(el, bind, unbind){
		var teardown = function(){
			unbind(data)
			can.unbind.call(el,'destroyed', teardown);
		},
			data = {
				teardownCheck: function(parent){
					if(!parent){
						teardown();
					}
				}
			}

		can.bind.call(el,'destroyed', teardown);
		bind(data)
		return data;
	},
		// #### listen
		// Calls setup, but presets bind and unbind to 
		// operate on a compute
		listen = function(el, compute, change){
			return setup(el, function(){
				compute.bind("change", change);
			},function(data){
				compute.unbind("change", change);
				if(data.nodeList){
					nodeLists.unregister( data.nodeList );
				}
			});
		},
		// #### getAttributeParts
		// Breaks up a string like foo='bar' into ["foo","'bar'""]
		getAttributeParts = function(newVal){
			return (newVal|| "").replace(/['"]/g, '').split('=')
		}
		// #### insertElementsAfter
		// Appends elements after the last item in oldElements.
		insertElementsAfter = function(oldElements, newFrag){
			var last = oldElements[oldElements.length - 1];
					
			// Insert it in the `document` or `documentFragment`
			if( last.nextSibling ){
				last.parentNode.insertBefore(newFrag, last.nextSibling);
			} else {
				last.parentNode.appendChild(newFrag);
			}
		};


	var live = {
		nodeLists : nodeLists,
		list: function(el, list, func, context, parentNode){
			// A mapping of the index to an array
			// of elements that represent the item.
			// Each array is registered so child or parent
			// live structures can update the elements
			var nodesMap = [],

				add = function(ev, items, index){

					// Collect new html and mappings
					var frag = document.createDocumentFragment(),
						newMappings = [];
					can.each(items, function(item){
						var itemHTML = func.call(context,item),
							itemFrag = can.view.frag(itemHTML, parentNode);

						newMappings.push(can.makeArray(itemFrag.childNodes));
						frag.appendChild(itemFrag);
					})

					// Inserting at the end of the list
					if(!nodesMap[index]){
						insertElementsAfter(
							index == 0 ?
								[text] :
								nodesMap[index-1], frag)
					} else {
						var el = nodesMap[index][0];
						el.parentNode.insertBefore(frag, el)
					}
					// register each item
					can.each(newMappings,function(nodeList){
						nodeLists.register(nodeList)
					});
					[].splice.apply(nodesMap, [index, 0].concat(newMappings));
				},
				remove = function(ev, items, index){
					var removedMappings = nodesMap.splice(index, items.length),
						itemsToRemove = [];

					can.each(removedMappings,function(nodeList){
						// add items that we will remove all at once
						[].push.apply(itemsToRemove, nodeList)
						// Update any parent lists to remove these items
						nodeLists.replace(nodeList,[]);
						// unregister the list
						nodeLists.unregister(nodeList);

					});
					can.remove( can.$(itemsToRemove) );
				},
				parentNode = elements.getParentNode(el, parentNode),
				text = document.createTextNode("");

			// Setup binding and teardown to add and remove events
			setup(parentNode, function(){
				list.bind("add", add).bind("remove", remove)
			},function(){
				list.unbind("add", add).unbind("remove", remove);
				can.each(nodesMap, function(nodeList){
					nodeLists.unregister( nodeList );
				})
			})

			insertElementsAfter([el],text);
			can.remove( can.$(el) );
			add({}, list, 0);
/*
			list.each(function(item, i){
				
				var itemFrag = func.call(context,item),
					newNodes = can.makeArray(itemFrag.childNodes);

				frag.appendChild(itemFrag);

				nodesMap[i] = newNodes;
				nodeLists.register(newNodes);
			})
			replaceElements([el], frag);*/
		},
		html: function(el, compute, parentNode){
			var parentNode = elements.getParentNode(el, parentNode),

				data = listen(parentNode, compute, function(ev, newVal, oldVal){
				var attached = nodes[0].parentNode;
				// update the nodes in the DOM with the new rendered value
				if( attached ) {
					makeAndPut(newVal);
				}
				data.teardownCheck(nodes[0].parentNode);
			});

			var nodes,
				makeAndPut = function(val){
					// create the fragment, but don't hook it up
					// we need to insert it into the document first
					var frag = can.view.frag(val, parentNode),
						// keep a reference to each node
						newNodes = can.makeArray(frag.childNodes);
					// Insert it in the `document` or `documentFragment`
					insertElementsAfter(nodes || [el], frag)
					// nodes hasn't been set yet
					if( !nodes ) {
						can.remove( can.$(el) );
						nodes = newNodes;
						// set the teardown nodeList
						data.nodeList = nodes;
						nodeLists.register(nodes);
					} else {
						// Update node Array's to point to new nodes
						// and then remove the old nodes.
						// It has to be in this order for Mootools
						// and IE because somehow, after an element
						// is removed from the DOM, it loses its
						// expando values.
						var nodesToRemove = can.makeArray(nodes);
						nodeLists.replace(nodes,newNodes);
						can.remove( can.$(nodesToRemove) );
					}
				};
				makeAndPut(compute(), [el]);

		},
		text: function(el, compute, parentNode){
			var parent = elements.getParentNode(el, parentNode);

			// setup listening right away so we don't have to re-calculate value
			var data  = listen( el.parentNode !== parent ? el.parentNode : parent, compute, function(ev, newVal, oldVal){
				// Sometimes this is 'unknown' in IE and will throw an exception if it is
				if ( typeof node.nodeValue != 'unknown' ) {
					node.nodeValue = ""+newVal;
				}
				data.teardownCheck(node.parentNode);
			});

			var node = document.createTextNode(compute());

			if ( el.parentNode !== parent ) {
				parent = el.parentNode;
				parent.insertBefore(node, el);
				parent.removeChild(el);
			} else {
				parent.insertBefore(node, el);
				parent.removeChild(el);
			}
		},
		attributes: function(el, compute, currentValue){
			var setAttrs = function(newVal){
				var parts = getAttributeParts(newVal),
					newAttrName = parts.shift();
				
				// Remove if we have a change and used to have an `attrName`.
				if((newAttrName != attrName) && attrName){
					elements.removeAttr(el,attrName);
				}
				// Set if we have a new `attrName`.
				if(newAttrName){
					elements.setAttr(el, newAttrName, parts.join('='));
					attrName = newAttrName;
				}
			}

			listen(el, compute, function(ev, newVal){
				setAttrs(newVal)
			})
			// current value has been set
			if(arguments.length >= 3) {
				var attrName = getAttributeParts(currentValue)[0]
			} else {
				setAttrs(compute())
			}
		},
		attributePlaceholder: '__!!__',
		attributeReplace: /__!!__/g,
		attribute: function(el, attributeName, compute){
			listen(el, compute, function(ev, newVal){
				elements.setAttr( el, attributeName, hook.render() );
			})

			var wrapped = can.$(el),
				hooks;
			
			// Get the list of hookups or create one for this element.
			// Hooks is a map of attribute names to hookup `data`s.
			// Each hookup data has:
			// `render` - A `function` to render the value of the attribute.
			// `funcs` - A list of hookup `function`s on that attribute.
			// `batchNum` - The last event `batchNum`, used for performance.
			hooks = can.data(wrapped,'hooks');
			if ( ! hooks ) {
				can.data(wrapped, 'hooks', hooks = {});
			}
			
			// Get the attribute value.
			var attr = elements.getAttr(el, attributeName ),
				// Split the attribute value by the template.
				// Only split out the first __!!__ so if we have multiple hookups in the same attribute, 
				// they will be put in the right spot on first render
				parts = attr.split(live.attributePlaceholder),
				goodParts = [],
				hook;
				goodParts.push(parts.shift(), 
							   parts.join(live.attributePlaceholder));

			// If we already had a hookup for this attribute...
			if(hooks[attributeName]) {
				// Just add to that attribute's list of `function`s.
				hooks[attributeName].computes.push(compute);
			} else {
				// Create the hookup data.
				hooks[attributeName] = {
					render: function() {
						var i =0,
							// attr doesn't have a value in IE
							newAttr = attr
								? attr.replace(live.attributeReplace, function() {
										return elements.contentText( hook.computes[i++]() );
									})
								: elements.contentText( hook.computes[i++]() );
						return newAttr;
					},
					computes: [compute],
					batchNum : undefined
				};
			}

			// Save the hook for slightly faster performance.
			hook = hooks[attributeName];

			// Insert the value in parts.
			goodParts.splice(1,0,compute());

			// Set the attribute.
			elements.setAttr(el, attributeName, goodParts.join("") );




		}
	}
	return live;

});
steal.executed('can/view/live.js');
steal('can/util',function(can){


	// text node expando test
	var canExpando = true;
	try {
		document.createTextNode('')._ = 0;
	} catch (ex) {
		canExpando = false;
	}


	// a mapping of element ids to nodeList ids
	var nodeMap = {},
	// a mapping of ids to text nodes
	textNodeMap = {},
	// a mapping of nodeList ids to nodeList
	nodeListMap = {},
	expando = "ejs_"+Math.random(),
	_id=0,
	id = function(node){
		if(canExpando || node.nodeType !== 3) {
			if(node[expando]) {
				return node[expando];
			}
			else {
				return node[expando] = (node.nodeName ? "element_" : "obj_")+(++_id);
			}
		}
		else {
			for(var textNodeID in textNodeMap) {
				if(textNodeMap[textNodeID] === node) {
					return textNodeID;
				}
			}

			textNodeMap["text_" + (++_id)] = node;
			return "text_" + _id;
		}
	},
	// removes a nodeListId from a node's nodeListIds
	removeNodeListId= function(node, nodeListId){
		var nodeListIds = nodeMap[id(node)];
		if( nodeListIds ) {
			var index = can.inArray(nodeListId, nodeListIds);
		
			if ( index >= 0 ) {
				nodeListIds.splice( index ,  1 );
			}
			if(!nodeListIds.length){
				delete nodeMap[id(node)];
			}
		}
	},
	addNodeListId = function(node, nodeListId){
		var nodeListIds = nodeMap[id(node)];
			if(!nodeListIds){
				nodeListIds = nodeMap[id(node)] = [];
			}
			nodeListIds.push(nodeListId);
	};


	var nodeLists = {
		id: id,
		// replaces the contents of one node list with the nodes in another list
		replace: function(oldNodeList, newNodes){
			// for each node in the node list
			oldNodeList = can.makeArray( oldNodeList );
			
			// try every set
			//can.each( oldNodeList, function(node){
			var node = oldNodeList[0]
				// for each nodeList the node is in
				can.each( can.makeArray( nodeMap[id(node)] ), function( nodeListId ){
					
					// if startNode to endNode is 
					// within list, replace that list
					// 
					// I think the problem is not the WHOLE part is being 
					// matched
					var nodeList = nodeListMap[nodeListId],
						startIndex = can.inArray( node, nodeList ),
						endIndex = can.inArray( oldNodeList[oldNodeList.length - 1], nodeList);
					

					// remove this nodeListId from each node
					if(startIndex >=0 && endIndex >= 0){
						for( var i = startIndex; i <= endIndex; i++){
							var n = nodeList[i];
							removeNodeListId(n, nodeListId);
						}
						// swap in new nodes into the nodeLIst
						nodeList.splice.apply(nodeList, [startIndex,endIndex-startIndex+1 ].concat(newNodes));

						// tell these new nodes they belong to the nodeList
						can.each(newNodes, function( node ) {
							addNodeListId(node, nodeListId);
						});
					} else {
						nodeLists.unregister( nodeList );
					}
				});
			//});
		},
		// registers a list of nodes
		register: function(nodeList){
			var nLId = id(nodeList);
			nodeListMap[nLId] = nodeList;
			
			can.each(nodeList, function(node){
				addNodeListId(node, nLId);
			});
				
		},
		// removes mappings
		unregister: function(nodeList){
			var nLId = id(nodeList);
			can.each(nodeList, function(node){
				removeNodeListId(node, nLId);
			});
			delete nodeListMap[nLId];
		},
		nodeMap: nodeMap,
		nodeListMap: nodeListMap
	}
	var ids = function(nodeList){
		return nodeList.map(function(n){
			return id(n)+":"+(n.innerHTML  || n.nodeValue)  
		})
	}
	return nodeLists;


});
steal.executed('can/view/node_lists.js');
// 1.69
steal('can/util','can/util/bind','can/construct', function(can, bind) {
	// ## observe.js  
	// `can.Observe`  
	// _Provides the observable pattern for JavaScript Objects._  
	//  
	// Returns `true` if something is an object with properties of its own.
	var canMakeObserve = function( obj ) {
			return obj && !can.isDeferred(obj) && (can.isArray(obj) || can.isPlainObject( obj ) || ( obj instanceof can.Observe ));
		},
		
		// Removes all listeners.
		unhookup = function(items, namespace){
			return can.each(items, function(item){
				if(item && item.unbind){
					item.unbind("change" + namespace);
				}
			});
		},
		// Listens to changes on `child` and "bubbles" the event up.  
		// `child` - The object to listen for changes on.  
		// `prop` - The property name is at on.  
		// `parent` - The parent object of prop.
		// `ob` - (optional) The Observe object constructor
		// `list` - (optional) The observable list constructor
		hookupBubble = function( child, prop, parent, Ob, List ) {
			Ob = Ob || Observe;
			List = List || Observe.List;

			// If it's an `array` make a list, otherwise a child.
			if (child instanceof Observe){
				// We have an `observe` already...
				// Make sure it is not listening to this already
				// It's only listening if it has bindings already.
				parent._bindings &&unhookup([child], parent._cid);
			} else if ( can.isArray(child) ) {
				child = new List(child);
			} else {
				child = new Ob(child);
			}
			// only listen if something is listening to you
			if(parent._bindings){
				// Listen to all changes and `batchTrigger` upwards.
				bindToChildAndBubbleToParent(child, prop, parent)
			}
			

			return child;
		},
		bindToChildAndBubbleToParent = function(child, prop, parent){
			child.bind("change" + parent._cid, 
				function( /* ev, attr */ ) {
				// `batchTrigger` the type on this...
				var args = can.makeArray(arguments),
					ev = args.shift();
					args[0] = (prop === "*" ? 
						[ parent.indexOf( child ), args[0]] :
						[ prop, args[0]] ).join(".");

				// track objects dispatched on this observe		
				ev.triggeredNS = ev.triggeredNS || {};

				// if it has already been dispatched exit
				if (ev.triggeredNS[parent._cid]) {
					return;
				}

				ev.triggeredNS[parent._cid] = true;
				// send change event with modified attr to parent	
				can.trigger(parent, ev, args);
				// send modified attr event to parent
				//can.trigger(parent, args[0], args);
			});
		},
		// An `id` to track events for a given observe.
		observeId = 0,
		// A helper used to serialize an `Observe` or `Observe.List`.  
		// `observe` - The observable.  
		// `how` - To serialize with `attr` or `serialize`.  
		// `where` - To put properties, in an `{}` or `[]`.
		serialize = function( observe, how, where ) {
			// Go through each property.
			observe.each(function( val, name ) {
				// If the value is an `object`, and has an `attrs` or `serialize` function.
				where[name] = canMakeObserve(val) && can.isFunction( val[how] ) ?
				// Call `attrs` or `serialize` to get the original data back.
				val[how]() :
				// Otherwise return the value.
				val;
			});
			return where;
		},
		attrParts = function(attr, keepKey) {
			if(keepKey) {
				return [attr];
			}
			return can.isArray(attr) ? attr : (""+attr).split(".");
		},
		// Which batch of events this is for -- might not want to send multiple
		// messages on the same batch.  This is mostly for event delegation.
		batchNum = 1,
		// how many times has start been called without a stop
		transactions = 0,
		// an array of events within a transaction
		batchEvents = [],
		stopCallbacks = [],
		makeBindSetup = function(wildcard){
			return function(){
				var parent = this;
				this._each(function(child, prop){
					if(child && child.bind){
						bindToChildAndBubbleToParent(child, wildcard || prop, parent)
					}
				})
			};
		};
	
	/**
	 * @add can.Observe
	 */
	//
	var Observe = can.Map = can.Observe = can.Construct( {
	/**
	 * @static
	 */
		// keep so it can be overwritten
		bind : can.bindAndSetup,
		unbind: can.unbindAndTeardown,
		id: "id",
		canMakeObserve : canMakeObserve,
		// starts collecting events
		// takes a callback for after they are updated
		// how could you hook into after ejs
		/**
		 * @function can.Observe.startBatch startBatch
		 * @parent can.Observe.static
		 * @description Begin an event batch.
		 * 
		 * @signature `can.Observe.startBatch([batchStopHandler])`
		 * 
		 * @param {Function} [batchStopHandler] a callback that gets called after all batched events have been called
		 *
		 * @body
		 * `startBatch` causes can.Observe to begin an event batch. Until `[can.Observe.stopBatch]` is called, any
		 * events that would result from calls to `[can.Observe::attr attr]` are held back from firing. If you have
		 * lots of changes to make to can.Observes, batching them together can help performance &emdash; especially if
		 * those can.Observes are live-bound to the DOM.
		 *
		 * In this example, you can see how the _first_ and _change_ events are not fired (and their handlers
		 * are not called) until `stopBatch` is called.
		 *
		 * @codestart
		 * var person = new can.Observe({
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
		 * can.Observe.startBatch();
		 * person.attr('first', 'Alex');
		 * console.log('Still in the batch.');
		 * can.Observe.stopBatch();
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
		 * can.Observe.startBatch(function() {
		 *     console.log('The batch is over.');
		 * });
		 * person.attr('first', 'Izzy');
		 * console.log('Still in the batch.');
		 * can.Observe.stopBatch();
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
		 * to circumvent this process, see [can.Observe.stopBatch].
		 *
		 * Here is an example that demonstrates how events are affected by calling
		 * `startBatch` multiple times.
		 * 
		 * @codestart
		 * var addPeople = function(observable) {
		 *     can.Observe.startBatch();
		 *     observable.attr('a', 'Alice');
		 *     observable.attr('b', 'Bob');
		 *     observable.attr('e', 'Eve');
		 *     can.Observe.stopBatch();
		 * };
		 *
		 * // In a completely different place:
		 * var list = new can.Observe();
		 * list.bind('change', function() {
		 *     console.log('The list changed.');
		 * });
		 *
		 * can.Observe.startBatch();
		 * addPeople(list);
		 * console.log('Still in the batch.');
		 *
		 * // Here, the console has:
		 * // Still in the batch.
		 * 
		 * can.Observe.stopBatch();
		 * 
		 * // Here, the console has:
		 * // Still in the batch.
		 * // The list changed.
		 * // The list changed.
		 * // The list changed.
		 * @codeend
		 */
		startBatch: function( batchStopHandler ) {
			transactions++;
			batchStopHandler && stopCallbacks.push(batchStopHandler);
		},
		/**
		 * @function can.Observe.stopBatch stopBatch
		 * @parent can.Observe.static
		 * @description End an event batch.
		 * @signature `can.Observe.stopBatch([force[, callStart]])`
		 * @param {bool} [force=false] whether to stop batching events immediately
		 * @param {bool} [callStart=false] whether to call `[can.Observe.startBatch startBatch]` after firing batched events
		 * 
		 * @body
		 * `stopBatch` matches an earlier `[can.Observe.startBatch]` call. If `stopBatch` has been
		 * called as many times as `startBatch` (or if _force_ is true), all batched events will be
		 * fired and any callbacks passed to `startBatch` since the beginning of the batch will be
		 * called. If _force and _callStart_ are both true, a new batch will be started when all
		 * the events and callbacks have been fired.
		 *
		 * See `[can.Observe.startBatch]` for examples of `startBatch` and `stopBatch` in normal use.
		 * 
		 * In this example, the batch is forceably ended in the `addPeople` function.
		 * @codestart
		 * var addPeople = function(observable) {
		 *     can.Observe.startBatch();
		 *     observable.attr('a', 'Alice');
		 *     observable.attr('b', 'Bob');
		 *     observable.attr('e', 'Eve');
		 *     can.Observe.stopBatch(true);
		 * };
		 *
		 * // In a completely different place:
		 * var list = new can.Observe();
		 * list.bind('change', function() {
		 *     console.log('The list changed.');
		 * });
		 *
		 * can.Observe.startBatch();
		 * addPeople(list);
		 * console.log('Still in the batch.');
		 *
		 * // Here, the console has:
		 * // Still in the batch.
		 * 
		 * can.Observe.stopBatch();
		 * 
		 * // Here, the console has:
		 * // The list changed.
		 * // The list changed.
		 * // The list changed.
		 * // Still in the batch.
		 * @codeend
		 */
		stopBatch: function(force, callStart){
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
		 * @function can.Observe.triggerBatch triggerBatch
		 * @parent can.Observe.static
		 * @description Trigger an event to be added to the current batch.
		 * @signature `can.Observe.triggerBatch(item, event [, args])`
		 * @param {can.Observe} item the target of the event
		 * @param {String|{type: String}} event the type of event, or an event object with a type given
		 * @param {Array} [args] the parameters to trigger the event with.
		 * 
		 * @body
		 * If events are currently being batched, calling `triggerBatch` adds an event
		 * to the batch. If events are not currently being batched, the event is triggered
		 * immediately.
		 */
		triggerBatch: function( item, event, args ) {
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
		},
		/**
		 * @function can.Observe.keys keys
		 * @parent can.Observe.static
		 * @description Iterate over the keys of an Observe.
		 * @signature `can.Observe.keys(observe)`
		 * @param {can.Observe} observe the `can.Observe` to get the keys from
		 * @return {Array} array An array containing the keys from _observe_.
		 * 
		 * @body
		 * `keys` iterates over an observe to get an array of its keys.
		 * 
		 * @codestart
		 * var people = new can.Observe({
		 *     a: 'Alice',
		 *     b: 'Bob',
		 *     e: 'Eve'
		 * });
		 * 
		 * can.Observe.keys(people); // ['a', 'b', 'e']
		 * @codeend
		 */
		keys: function(observe) {
			var keys = [];
			Observe.__reading && Observe.__reading(observe, '__keys');
			for(var keyName in observe._data) {
				keys.push(keyName);
			}
			return keys;
		}
	},
	/**
	 * @prototype
	 */
	{
		setup: function( obj ) {
			// `_data` is where we keep the properties.
			this._data = {};
			/**
			 * @property {String} can.Observe.prototype._cid
			 * @hide
			 *
			 * A globally unique ID for this `can.Observe` instance.
			 */
			// The namespace this `object` uses to listen to events.
			can.cid(this, ".observe");
			// Sets all `attrs`.
			this._init = 1;
			this.attr(obj);
			this.bind('change'+this._cid,can.proxy(this._changes,this));
			delete this._init;
		},
		_bindsetup: makeBindSetup(),
		_bindteardown: function(){
			var cid = this._cid;
			this._each(function(child){
				unhookup([child], cid)
			})
		},
		_changes: function(ev, attr, how,newVal, oldVal){
			Observe.triggerBatch(this, {type:attr, batchNum: ev.batchNum}, [newVal,oldVal]);
		},
		_triggerChange: function(attr, how,newVal, oldVal){
			Observe.triggerBatch(this,"change",can.makeArray(arguments))
		},
		// no live binding iterator
		_each: function(callback){
			var data = this.__get();
			for(var prop in data){
				if(data.hasOwnProperty(prop)){
					callback(data[prop],prop)
				}
			}
		},
		/**
		 * @function can.Observe.prototype.attr attr
		 * @description Get or set properties on an Observe.
		 * @signature `observe.attr()`
		 * 
		 * Gets a collection of all the properties in this `can.Observe`.
		 * 
		 * @return {Object<String, *>} an object with all the properties in this `can.Observe`.
		 * 
		 * @signature `observe.attr(key)`
		 * 
		 * Reads a property from this `can.Observe`.
		 * 
		 * @param {String} key the property to read
		 * @return {*} the value assigned to _key_.
		 *
		 * @signature `observe.attr(key, value)`
		 * 
		 * Assigns _value_ to a property on this `can.Observe` called _key_.
		 * 
		 * @param {String} key the property to set
		 * @param {*} the value to assign to _key_.
		 * @return {can.Observe} this Observe, for chaining
		 * 
		 * @signature `observe.attr(obj[, removeOthers])`
		 * 
		 * Assigns each value in _obj_ to a property on this `can.Observe` named after the
		 * corresponding key in _obj_, effectively merging _obj_ into the Observe.
		 * 
		 * @param {Object<String, *>} obj a collection of key-value pairs to set.
		 * If any properties already exist on the `can.Observe`, they will be overwritten.
		 *
		 * @param {bool} [removeOthers=false] whether to remove keys not present in _obj_.
		 * To remove keys without setting other keys, use `[can.Observe::removeAttr removeAttr]`.
		 *
		 * @return {can.Observe} this Observe, for chaining
		 * 
		 * @body
		 * `attr` gets or sets properties on the `can.Observe` it's called on. Here's a tour through
		 * how all of its forms work:
		 *
		 * @codestart
		 * var people = new can.Observe({});
		 * 
		 * // set a property:
		 * people.attr('a', 'Alex');
		 * 
		 * // get a property:
		 * people.attr('a'); // 'Alex'
		 *
		 * // set and merge multiple properties:
		 * people.attr({
		 *     a: 'Alice',
		 *     b: 'Bob'
		 * });
		 * 
		 * // get all properties:
		 * people.attr(); // {a: 'Alice', b: 'Bob'}
		 * 
		 * // set properties while removing others:
		 * people.attr({
		 *     b: 'Bill',
		 *     e: 'Eve'
		 * }, true);
		 *
		 * people.attr(); // {b: 'Bill', e: 'Eve'}
		 * @codeend
		 * 
		 * ## Deep properties
		 * 
		 * `attr` can also set and read deep properties. All you have to do is specify
		 * the property name as you normally would if you weren't using `attr`.
		 * 
		 * @codestart
		 * var people = new can.Observe({names: {}});
		 * 
		 * // set a property:
		 * people.attr('names.a', 'Alice');
		 * 
		 * // get a property:
		 * people.attr('names.a'); // 'Alice'
		 * people.names.attr('a'); // 'Alice'
		 *
		 * // get all properties:
		 * people.attr(); // {names: {a: 'Alice'}}
		 * @codeend
		 * 
		 * Objects that are added to Observes become Observes themselves behind the scenes,
		 * so changes to deep properties fire events at each level, and you can bind at any
		 * level. As this example shows, all the same events are fired no matter what level
		 * you call `attr` at:
		 * 
		 * @codestart
		 * var people = new can.Observe({names: {}});
		 *
		 * people.bind('change', function(ev, attr, how, newVal, oldVal) {
		 *   console.log('people change: ' + attr + ', ' + how + ', ' + newVal + ', ' + oldVal);
		 * });
		 * 
		 * people.names.bind('change', function(ev, attr, how, newVal, oldVal) {
		 *    console.log('people.names change' + attr + ', ' + how + ', ' + newVal + ', ' + oldVal);
		 * });
		 * 
		 * people.bind('names', function(ev, newVal, oldVal) {
		 *     console.log('people names: ' + newVal + ', ' + oldVal);
		 * });
		 *
		 * people.names.bind('a', function(ev, newVal, oldVal) {
		 *     console.log('people.names a: ' + newVal + ', ' + oldVal);
		 * });
		 * 
		 * people.bind('names.a', function(ev, newVal, oldVal) {
		 *     console.log('people names.a: ' + newVal + ', ' + oldVal);
		 * });
		 * 
		 * people.attr('names.a', 'Alice'); // people change: names.a, add, Alice, undefined
		 *                                  // people.names change: a, add, Alice, undefined
		 *                                  // people.names a: Alice, undefined
		 *                                  // people names.a: Alice, undefined
		 * 
		 * people.names.attr('b', 'Bob');   // people change: names.b, add, Bob, undefined
		 *                                  // people.names change: b, add, Bob, undefined
		 *                                  // people.names b: Bob, undefined
		 *                                  // people names.b: Bob, undefined
		 * @codeend
		 * 
		 * ## See also
		 * 
		 * For information on the events that are fired on property changes and how
		 * to listen for those events, see [can.Observe.prototype.bind bind].
		 */
		attr: function( attr, val ) {
			// This is super obfuscated for space -- basically, we're checking
			// if the type of the attribute is not a `number` or a `string`.
			var type = typeof attr;
			if ( type !== "string" && type !== "number" ) {
				return this._attrs(attr, val)
			} else if ( arguments.length === 1 ) {// If we are getting a value.
				// Let people know we are reading.
				Observe.__reading && Observe.__reading(this, attr)
				return this._get(attr)
			} else {
				// Otherwise we are setting.
				this._set(attr, val);
				return this;
			}
		},
		/**
		 * @function can.Observe.prototype.each each
		 * @description Call a function on each property of an Observe.
		 * @signature `observe.each( callback(item, propName ) )`
		 * 
		 * `each` iterates through the Observe, calling a function
		 * for each property value and key.
		 * 
		 * @param {function(*,String)} callback(item,propName) the function to call for each property
		 * The value and key of each property will be passed as the first and second
		 * arguments, respectively, to the callback. If the callback returns false,
		 * the loop will stop.
		 * 
		 * @return {can.Observe} this Observe, for chaining
		 *
		 * @body
		 * @codestart
		 * var names = [];
		 * new can.Observe({a: 'Alice', b: 'Bob', e: 'Eve'}).each(function(value, key) {
		 *     names.push(value);
		 * });
		 * 
		 * names; // ['Alice', 'Bob', 'Eve']
		 * 
		 * names = [];
		 * new can.Observe({a: 'Alice', b: 'Bob', e: 'Eve'}).each(function(value, key) {
		 *     names.push(value);
		 *     if(key === 'b') {
		 *         return false;
		 *     }
		 * });
		 * 
		 * names; // ['Alice', 'Bob']
		 * 
		 * @codeend
		 */
		each: function() {
			Observe.__reading && Observe.__reading(this, '__keys');
			return can.each.apply(undefined, [this.__get()].concat(can.makeArray(arguments)))
		},
		/**
		 * @function can.Observe.prototype.removeAttr removeAttr
		 * @description Remove a property from an Observe.
		 * @signature `observe.removeAttr(attrName)`
		 * @param {String} attrName the name of the property to remove
		 * @return {*} the value of the property that was removed
		 * 
		 * @body
		 * `removeAttr` removes a property by name from an Observe.
		 * 
		 * @codestart
		 * var people = new can.Observe({a: 'Alice', b: 'Bob', e: 'Eve'});
		 * 
		 * people.removeAttr('b'); // 'Bob'
		 * people.attr();          // {a: 'Alice', e: 'Eve'}
		 * @codeend
		 * 
		 * Removing an attribute will cause a _change_ event to fire with `'remove'`
		 * passed as the _how_ parameter and `undefined` passed as the _newVal_ to
		 * handlers. It will also cause a _property name_ event to fire with `undefined`
		 * passed as _newVal_. An in-depth description at these events can be found
		 * under `[can.Observe.prototype.attr attr]`.
		 */
		removeAttr: function( attr ) {
				// Info if this is List or not
			var isList = this instanceof can.Observe.List,
				// Convert the `attr` into parts (if nested).
				parts = attrParts(attr),
				// The actual property to remove.
				prop = parts.shift(),
				// The current value.
				current = isList ? this[prop] : this._data[prop];

			// If we have more parts, call `removeAttr` on that part.
			if ( parts.length ) {
				return current.removeAttr(parts)
			} else {
				if(isList) {
					this.splice(prop, 1)
				} else if( prop in this._data ){
					// Otherwise, `delete`.
					delete this._data[prop];
					// Create the event.
					if (!(prop in this.constructor.prototype)) {
						delete this[prop]
					}
					// Let others know the number of keys have changed
					Observe.triggerBatch(this, "__keys");
					this._triggerChange(prop, "remove", undefined, current);

				}
				return current;
			}
		},
		// Reads a property from the `object`.
		_get: function( attr ) {
			var value = typeof attr === 'string' && !!~attr.indexOf('.') && this.__get(attr);
			if(value) {
				return value;
			}

			// break up the attr (`"foo.bar"`) into `["foo","bar"]`
			var parts = attrParts(attr),
				// get the value of the first attr name (`"foo"`)
				current = this.__get(parts.shift());
			// if there are other attributes to read
			return parts.length ? 
				// and current has a value
				current ?
					// lookup the remaining attrs on current
					current._get(parts) : 
					// or if there's no current, return undefined
					undefined 	
				: 
				// if there are no more parts, return current
				current;
		},
		// Reads a property directly if an `attr` is provided, otherwise
		// returns the "real" data object itself.
		__get: function( attr ) {
			return attr ? this._data[attr] : this._data;
		},
		// Sets `attr` prop as value on this object where.
		// `attr` - Is a string of properties or an array  of property values.
		// `value` - The raw value to set.
		_set: function( attr, value, keepKey) {
			// Convert `attr` to attr parts (if it isn't already).
			var parts = attrParts(attr, keepKey),
				// The immediate prop we are setting.
				prop = parts.shift(),
				// The current value.
				current = this.__get(prop);

			// If we have an `object` and remaining parts.
			if ( canMakeObserve(current) && parts.length ) {
				// That `object` should set it (this might need to call attr).
				current._set(parts, value)
			} else if (!parts.length ) {
				// We're in "real" set territory.
				if(this.__convert){
					value = this.__convert(prop, value)
				}
				this.__set(prop, value, current)
			} else {
				throw "can.Observe: Object does not exist"
			}
		},
		__set : function(prop, value, current){
		
			// Otherwise, we are setting it on this `object`.
			// TODO: Check if value is object and transform
			// are we changing the value.
			if ( value !== current ) {
				// Check if we are adding this for the first time --
				// if we are, we need to create an `add` event.
				var changeType = this.__get().hasOwnProperty(prop) ? "set" : "add";

				// Set the value on data.
				this.___set(prop,

				// If we are getting an object.
				canMakeObserve(value) ?

				// Hook it up to send event.
				hookupBubble(value, prop, this) :
				// Value is normal.
				value);

				if(changeType == "add"){
					// If there is no current value, let others know that
					// the the number of keys have changed
					
					Observe.triggerBatch(this, "__keys", undefined);
					
				}
				// `batchTrigger` the change event.
				this._triggerChange(prop, changeType, value, current);
				
				//Observe.triggerBatch(this, prop, [value, current]);
				// If we can stop listening to our old value, do it.
				current && unhookup([current], this._cid);
			}

		},
		// Directly sets a property on this `object`.
		___set: function( prop, val ) {
			this._data[prop] = val;
			// Add property directly for easy writing.
			// Check if its on the `prototype` so we don't overwrite methods like `attrs`.
			if (!(prop in this.constructor.prototype)) {
				this[prop] = val
			}
		},

		/**
		 * @function can.Observe.prototype.bind bind
		 * @description Bind event handlers to an Observe.
		 * 
		 * @signature `observe.bind(eventType, handler)`
		 * 
		 * @param {String} eventType the type of event to bind this handler to
		 * @param {Function} handler the handler to be called when this type of event fires
		 * The signature of the handler depends on the type of event being bound. See below
		 * for details.
		 * @return {can.Observe} this Observe, for chaining
		 * 
		 * @body
		 * `bind` binds event handlers to property changes on `can.Observe`s. When you change
		 * a property using `attr`, two events are fired on the Observe, allowing other parts
		 * of your application to observe the changes to the object.
		 *
		 * ## The _change_ event
		 * 
		 * The first event that is fired is the _change_ event. The _change_ event is useful
		 * if you want to react to all changes on an Observe.
		 *
		 * @codestart
		 * var o = new can.Observe({});
		 * o.bind('change', function(ev, attr, how, newVal, oldVal) {
		 *     console.log('Something changed.');
		 * });
		 * @codeend
		 * 
		 * The parameters of the event handler for the _change_ event are:
		 *
		 * - _ev_ The event object.
		 * - _attr_ Which property changed.
		 * - _how_ Whether the property was added, removed, or set. Possible values are `'add'`, `'remove'`, or `'set'`.
		 * - _newVal_ The value of the property after the change. `newVal` will be `undefined` if the property was removed.
		 * - _oldVal_ Thishe value of the property before the change. `oldVal` will be `undefined` if the property was added.
		 * 
		 * Here is a concrete tour through the _change_ event handler's arguments:
		 * 
		 * @codestart
		 * var o = new can.Observe({});
		 * o.bind('change', function(ev, attr, how, newVal, oldVal) {
		 *     console.log(ev + ', ' + attr + ', ' + how + ', ' + newVal + ', ' + oldVal);
		 * });
		 * 
		 * o.attr('a', 'Alexis'); // [object Object], a, add, Alexis, undefined
		 * o.attr('a', 'Adam');   // [object Object], a, set, Adam, Alexis
		 * o.attr({
		 *     'a': 'Alice',      // [object Object], a, set, Alice, Adam
		 *     'b': 'Bob'         // [object Object], b, add, Bob, undefined
		 * });
		 * o.removeAttr('a');     // [object Object], a, remove, undefined, Alice
		 * @codeend
		 *
		 * (See also `[can.Observe::removeAttr removeAttr]`, which removes properties).
		 * 
		 * ## The _property name_ event
		 * 
		 * The second event that is fired is an event whose type is the same as the changed
		 * property's name. This event is useful for noticing changes to a specific property.
		 *
		 * @codestart
		 * var o = new can.Observe({});
		 * o.bind('a', function(ev, newVal, oldVal) {
		 *     console.log('The value of a changed.');
		 * });
		 * @codeend
		 * 
		 * The parameters of the event handler for the _property name_ event are:
		 *
		 * - _ev_ The event object.
		 * - _newVal_ The value of the property after the change. `newVal` will be `undefined` if the property was removed.
		 * - _oldVal_ The value of the property before the change. `oldVal` will be `undefined` if the property was added.
		 * 
		 * Here is a concrete tour through the _property name_ event handler's arguments:
		 * 
		 * @codestart
		 * var o = new can.Observe({});
		 * o.bind('a', function(ev, newVal, oldVal) {
		 *     console.log(ev + ', ' + newVal + ', ' + oldVal);
		 * });
		 * 
		 * o.attr('a', 'Alexis'); // [object Object], Alexis, undefined
		 * o.attr('a', 'Adam');   // [object Object], Adam, Alexis
		 * o.attr({
		 *     'a': 'Alice',      // [object Object], Alice, Adam
		 *     'b': 'Bob' 
		 * });
		 * o.removeAttr('a');     // [object Object], undefined, Alice
		 * @codeend
		 *
		 * ## See also
		 * 
		 * More information about changing properties on Observes can be found under
		 * [can.Observe.prototype.attr attr].
		 * 
		 * For a more specific way to changes on Observes, see the [can.Observe.delegate] plugin.
		 */
		bind: can.bindAndSetup,
		/**
		 * @function can.Observe.prototype.unbind unbind
		 * @description Unbind event handlers from an Observe.
		 * @signature `observe.unbind(eventType[, handler])`
		 * @param {String} eventType the type of event to unbind, exactly as passed to `bind`
		 * @param {Function} [handler] the handler to unbind
		 *
		 * @body
		 * `unbind` unbinds event handlers previously bound with [can.Observe.prototype.bind|`bind`].
		 * If no _handler_ is passed, all handlers for the given event type will be unbound.
		 *
		 * @codestart
		 * var i = 0,
		 *     increaseBy2 = function() { i += 2; },
		 *     increaseBy3 = function() { i += 3; },
		 *     o = new can.Observe();
		 *
		 * o.bind('change', increaseBy2);
		 * o.bind('change', increaseBy3);
		 * o.attr('a', 'Alice');
		 * i; // 5
		 * 
		 * o.unbind('change', increaseBy2);
		 * o.attr('b', 'Bob');
		 * i; // 8
		 *
		 * o.unbind('change');
		 * o.attr('e', 'Eve');
		 * i; // 8
		 * @codeend
		 */
		unbind: can.unbindAndTeardown,
		/**
		 * @function can.Observe.prototype.serialize serialize
		 * @description Serialize this object to something that
		 * can be passed to `JSON.stringify`.
		 * @signature `observe.serialize()`
		 * 
		 * 
		 * Get the serialized Object form of the observe.  Serialized
		 * data is typically used to send back to a server.
		 * 
		 *     o.serialize() //-> { name: 'Justin' }
		 *     
		 * Serialize currently returns the same data 
		 * as [can.Observe.prototype.attrs].  However, in future
		 * versions, serialize will be able to return serialized
		 * data similar to [can.Model].  The following will work:
		 * 
		 *     new Observe({time: new Date()})
		 *       .serialize() //-> { time: 1319666613663 }
		 * 
		 * @return {Object} a JavaScript Object that can be 
		 * serialized with `JSON.stringify` or other methods. 
		 * 
		 */
		serialize: function() {
			return serialize(this, 'serialize', {});
		},
		/**
		 * @hide
		 * Set multiple properties on the observable
		 * @param {Object} props
		 * @param {Boolean} remove true if you should remove properties that are not in props
		 */
		_attrs: function( props, remove ) {

			if ( props === undefined ) {
				return serialize(this, 'attr', {})
			}

			props = can.extend({}, props);
			var prop,
				self = this,
				newVal;
			Observe.startBatch();
			this.each(function(curVal, prop){
				newVal = props[prop];

				// If we are merging...
				if ( newVal === undefined ) {
					remove && self.removeAttr(prop);
					return;
				}
				
				if(self.__convert){
					newVal = self.__convert(prop, newVal)
				}

				// if we're dealing with models, want to call _set to let converter run
				if( newVal instanceof can.Observe ) {
					self.__set(prop, newVal, curVal)
				// if its an object, let attr merge
				} else if ( canMakeObserve(curVal) && canMakeObserve(newVal) && curVal.attr ) {
					curVal.attr(newVal, remove)
				// otherwise just set
				} else if ( curVal != newVal ) {
					self.__set(prop, newVal, curVal)
				}

				delete props[prop];
			})
			// Add remaining props.
			for ( var prop in props ) {
				newVal = props[prop];
				this._set(prop, newVal, true)
			}
			Observe.stopBatch()
			return this;
		},

		/**
		 * @function can.Observe.prototype.compute compute
		 * @description Make a can.compute from an observable property.
		 * @signature `observe.compute(attrName)`
		 * @param {String} attrName the property to bind to
		 * @return {can.compute} a [can.compute] bound to _attrName_
		 *
		 * @body
		 * `compute` is a convenience method for making computes from properties
		 * of Observes. More information about computes can be found under [can.compute].
		 *
		 * @codestart
		 * var observe = new can.Observe({a: 'Alexis'});
		 * var name = observe.compute('a');
		 * name.bind('change', function(ev, nevVal, oldVal) {
		 *     console.log('a changed from ' + oldVal + 'to' + newName + '.');
		 * });
		 *
		 * name(); // 'Alexis'
		 * 
		 * observe.attr('a', 'Adam'); // 'a changed from Alexis to Adam.'
		 * name(); // 'Adam'
		 *
		 * name('Alice'); // 'a changed from Adam to Alice.'
		 * name(); // 'Alice'
		 */
		compute: function(prop) {
			return can.compute(this,prop);
		}
	});
	// Helpers for `observable` lists.
	var splice = [].splice,
		/**
		 * @constructor can.Observe.List
		 * @inherits can.Observe
		 * @download can/observe
		 * @test can/observe/qunit.html
		 * @parent canjs
		 * 
		 * Use for observable array-like objects.
		 * 
		 * @signature `new can.Observe.List([array])`
		 * 
		 * Create an observable array-like object.
		 * 
		 * @param {Array} [array] items to seed the List with
		 * @return {can.Observe.List} an instance of `can.Observe.List` with the elements from _array_
		 * 
		 * @signature `can.Observe.List([name,] [staticProperties,] instanceProperties)`
		 * 
		 * Creates a new extended constructor function. 
		 *     
		 * This is deprecated. In CanJS 1.2, by default, calling the constructor function
		 * without `new` will create a `new` instance. Use [can.Construct.extend can.Observe.extend] 
		 * instead of calling the constructor to extend.
		 * 
		 * @body
		 * 
		 * ## Working with Lists
		 *
		 * `can.Observe.List` extends `[can.Observe]`, so all the ways that you're used to working with
		 * Observes also work here, including [can.Observe.prototype.bind bind], [can.Observe.prototype.unbind unbind],
		 * and [can.Observe.prototype.each each]. And just as you can directly read properties normally
		 * off of an Observe, you can use array accessors ([]) to read elements directly off of a List.
		 *
		 * The one function of `can.Observe` that works slightly differently is `attr`. As expected when working with
		 * arrays, top-level keys passed into `attr` are required to be numeric. (Strings may still be used when getting
		 * or modifying deep properties). Any top-level keys that are non-numeric are ignored. In addition, as might be
		 * expected, a call to argument-less `attr` returns an array instead of an object.
		 *
		 * Just as you shouldn't set properties of an Observe directly, you shouldn't change elements
		 * of a List directly. Always use `attr` to set the elements of a List, or use [can.Observe.List.push push],
		 * [can.Observe.List.pop pop], [can.Observe.List.shift shift], [can.Observe.List.unshift unshift], or [can.Observe.List.splice splice].
		 *
		 * Here is a tour through the forms of `can.Observe.List`'s `attr` that parallels the one found under [can.Observe.prototype.attr attr]:
		 *
		 * @codestart
		 * var people = new can.Observe.List(['Alex', 'Bill']);
		 *
		 * // set an element:
		 * people.attr(0, 'Adam');
		 * people[0] = 'Adam'; // don't do this!
		 *
		 * // get an element:
		 * people.attr(0); // 'Adam'
		 * people[0]; // 'Adam'
		 *
		 * // get all elements:
		 * people.attr(); // ['Adam', 'Bill']
		 *
		 * // extend the array:
		 * people.attr(4, 'Charlie');
		 * people.attr(); // ['Adam', 'Bill', undefined, undefined, 'Charlie']
		 *
		 * // merge the elements:
		 * people.attr(['Alice', 'Bob', 'Eve']);
		 * people.attr(); // ['Alice', 'Bob', 'Eve', undefined, 'Charlie']
		 * @codeend
		 *
		 * ## Listening to changes
		 *
		 * As with `can.Observe`s, the real power of observable arrays comes from being able to
		 * react to changes in the member elements of the array. Lists emit five types of events:
		 * - the _change_ event fires on every change to a List.
		 * - the _set_ event is fired when an element is set.
		 * - the _add_ event is fired when an element is added to the List.
		 * - the _remove_ event is fired when an element is removed from the List.
		 * - the _length_ event is fired when the length of the List changes.
		 *
		 * This example presents a brief concrete survey of the times these events are fired:
		 *
		 * @codestart
		 * var list = new can.Observe.List(['Alice', 'Bob', 'Eve']);
		 *
		 * list.bind('change', function() { console.log('An element changed.'); });
		 * list.bind('set', function() { console.log('An element was set.'); });
		 * list.bind('add', function() { console.log('An element was added.'); });
		 * list.bind('remove', function() { console.log('An element was removed.'); });
		 * list.bind('length', function() { console.log('The length of the list changed.'); });
		 *
		 * list.attr(0, 'Alexis'); // 'An element changed.'
		 *                         // 'An element was set.'
		 *
		 * list.attr(3, 'Xerxes'); // 'An element changed.'
		 *                         // 'An element was added.'
		 *                         // 'The length of the list was changed.'
		 *
		 * list.attr(['Adam', 'Bill']); // 'An element changed.'
		 *                              // 'An element was set.'
		 *                              // 'An element was changed.'
		 *                              // 'An element was set.'
		 *
		 * list.pop(); // 'An element changed.'
		 *             // 'An element was removed.'
		 *             // 'The length of the list was changed.'
		 * @codeend
		 *
		 * More information about binding to these events can be found under [can.Observe.List.attr attr].
		 */
			list = Observe(
	/**
	 * @prototype
	 */
	{
		setup: function( instances, options ) {
			this.length = 0;
			can.cid(this, ".observe")
			this._init = 1;
			if( can.isDeferred(instances) ) {
				this.replace(instances)
			} else {
				this.push.apply(this, can.makeArray(instances || []));
			}
			// this change needs to be ignored
			this.bind('change'+this._cid,can.proxy(this._changes,this));
			can.extend(this, options);
			delete this._init;
		},
		_triggerChange: function(attr, how, newVal, oldVal){
			
			Observe.prototype._triggerChange.apply(this,arguments)
			// `batchTrigger` direct add and remove events...
			if ( !~ attr.indexOf('.')){
				
				if( how === 'add' ) {
					Observe.triggerBatch(this, how, [newVal,+attr]);
					Observe.triggerBatch(this,'length',[this.length]);
				} else if( how === 'remove' ) {
					Observe.triggerBatch(this, how, [oldVal, +attr]);
					Observe.triggerBatch(this,'length',[this.length]);
				} else {
					Observe.triggerBatch(this,how,[newVal, +attr])
				}
				
			}
			
		},
		__get : function(attr){
			return attr ? this[attr] : this;
		},
		___set : function(attr, val){
			this[attr] = val;
			if(+attr >= this.length){
				this.length = (+attr+1)
			}
		},
		_each: function(callback){
			var data = this.__get();
			for(var i =0; i < data.length; i++){
				callback(data[i],i)
			}
		},
		_bindsetup: makeBindSetup("*"),
		// Returns the serialized form of this list.
		/**
		 * @hide
		 * Returns the serialized form of this list.
		 */
		serialize: function() {
			return serialize(this, 'serialize', []);
		},
		/**
		 * @function can.Observe.List.prototype.each each
		 * @description Call a function on each element of a List.
		 * @signature `list.each( callback(item, index) )`
		 * 
		 * `each` iterates through the Observe, calling a function
		 * for each element.
		 * 
		 * @param {function(*, Number)} callback the function to call for each element
		 * The value and index of each element will be passed as the first and second
		 * arguments, respectively, to the callback. If the callback returns false,
		 * the loop will stop.
		 * 
		 * @return {can.Observe.List} this List, for chaining
		 *
		 * @body
		 * @codestart
		 * var i = 0;
		 * new can.Observe([1, 10, 100]).each(function(element, index) {
		 *     i += element;
		 * });
		 * 
		 * i; // 111
		 * 
		 * i = 0;
		 * new can.Observe([1, 10, 100]).each(function(element, index) {
		 *     i += element;
		 *     if(index >= 1) {
		 *         return false;
		 *     }
		 * });
		 * 
		 * i; // 11
		 * @codeend
		 */
		//  
		/**
		 * @function can.Observe.List.prototype.splice splice
		 * @description Insert and remove elements from a List.
		 * @signature `list.splice(index[, howMany[, ...newElements]])`
		 * @param {Number} index where to start removing or inserting elements
		 * 
		 * @param {Number} [howMany] the number of elements to remove
		 * If _howMany_ is not provided, `splice` will all elements from `index` to the end of the List.
		 *
		 * @param {*} newElements elements to insert into the List
		 *
		 * @return {Array} the elements removed by `splice`
		 *
		 * @body
		 * `splice` lets you remove elements from and insert elements into a List.
		 *
		 * This example demonstrates how to do surgery on a list of numbers:
		 * 
		 * @codestart
		 * var list = new can.Observe.List([0, 1, 2, 3]);
		 *
		 * // starting at index 2, remove one element and insert 'Alice' and 'Bob':
		 * list.splice(2, 1, 'Alice', 'Bob');
		 * list.attr(); // [0, 1, 'Alice', 'Bob', 3]
		 * @codeend
		 *
		 * ## Events
		 *
		 * `splice` causes the List it's called on to emit _change_ events,
		 * _add_ events, _remove_ events, and _length_ events. If there are
		 * any elements to remove, a _change_ event, a _remove_ event, and a
		 * _length_ event will be fired. If there are any elements to insert, a
		 * separate _change_ event, an _add_ event, and a separate _length_ event
		 * will be fired. 
		 *
		 * This slightly-modified version of the above example should help
		 * make it clear how `splice` causes events to be emitted:
		 *
		 * @codestart
		 * var list = new can.Observe.List(['a', 'b', 'c', 'd']);
		 * list.bind('change', function(ev, attr, how, newVals, oldVals) {
	     *     console.log('change: ' + attr + ', ' + how + ', ' + newVals + ', ' + oldVals);
		 * });
		 * list.bind('add', function(ev, newVals, where) {
	     *     console.log('add: ' + newVals + ', ' + where);
		 * });
		 * list.bind('remove', function(ev, oldVals, where) {
	     *     console.log('remove: ' + oldVals + ', ' + where);
		 * });
		 * list.bind('length', function(ev, length) {
	     *     console.log('length: ' + length + ', ' + this.attr());
		 * });
		 *
		 * // starting at index 2, remove one element and insert 'Alice' and 'Bob':
		 * list.splice(2, 1, 'Alice', 'Bob'); // change: 2, 'remove', undefined, ['c']
		 *                                    // remove: ['c'], 2
		 *                                    // length: 5, ['a', 'b', 'Alice', 'Bob', 'd']
		 *                                    // change: 2, 'add', ['Alice', 'Bob'], ['c']
		 *                                    // add: ['Alice', 'Bob'], 2
		 *                                    // length: 5, ['a', 'b', 'Alice', 'Bob', 'd']
		 * @codeend
		 *
		 * More information about binding to these events can be found under [can.Observe.List.attr attr].
		 */
		splice: function( index, howMany ) {
			var args = can.makeArray(arguments),
				i;

			for ( i = 2; i < args.length; i++ ) {
				var val = args[i];
				if ( canMakeObserve(val) ) {
					args[i] = hookupBubble(val, "*", this, this.constructor.Observe, this.constructor)
				}
			}
			if ( howMany === undefined ) {
				howMany = args[1] = this.length - index;
			}
			var removed = splice.apply(this, args);
			can.Observe.startBatch();
			if ( howMany > 0 ) {
				this._triggerChange(""+index, "remove", undefined, removed);
				unhookup(removed, this._cid);
			}
			if ( args.length > 2 ) {
				this._triggerChange(""+index, "add", args.slice(2), removed);
			}
			can.Observe.stopBatch();
			return removed;
		},
		/**
		 * @description Get or set elements in a List.
		 * @function can.Observe.List.prototype.attr attr
		 * @signature `list.attr()`
		 * 
		 * Gets a collection of all the elements in this `can.Observe.List`.
		 * 
		 * @return {Array} array with all the elements in this List.
		 * 
		 * @signature `list.attr(index)`
		 * 
		 * Reads a element from this `can.Observe.List`.
		 * 
		 * @param {Number} index the element to read
		 * @return {*} the value at _index_.
		 *
		 * @signature `list.attr(index, value)`
		 * 
		 * Assigns _value_ to the index _index_ on this `can.Observe.List`, expanding the list if necessary.
		 * 
		 * @param {Number} index the element to set
		 * @param {*} the value to assign at _index_
		 * @return {can.Observe.List} this List, for chaining
		 * 
		 * @signature `list.attr(elements[, replaceCompletely])`
		 * 
		 * Merges the members of _elements_ into this List, replacing each from the beginning in order. If
		 * _elements_ is longer than the current List, the current List will be expanded. If _elements_
		 * is shorter than the current List, the extra existing members are not affected (unless
		 * _replaceCompletely_ is `true`). To remove elements without replacing them, use `[can.Observe.List.prototype.removeAttr removeAttr]`.
		 * 
		 * @param {Array} elements an array of elements to merge in
		 *
		 * @param {bool} [replaceCompletely=false] whether to completely replace the elements of List
		 * If _replaceCompletely_ is `true` and _elements_ is shorter than the List, the existing
		 * extra members of the List will be removed.
		 *
		 * @return {can.Observe.List} this List, for chaining
		 * 
		 * @body
		 * `attr` gets or sets elements on the `can.Observe.List` it's called on. Here's a tour through
		 * how all of its forms work:
		 *
		 * @codestart
		 * var people = new can.Observe.List(['Alex', 'Bill']);
		 * 
		 * // set an element:
		 * people.attr(0, 'Adam');
		 * 
		 * // get an element:
		 * people.attr(0); // 'Adam'
		 * people[0]; // 'Adam'
		 *
		 * // get all elements:
		 * people.attr(); // ['Adam', 'Bill']
		 *
		 * // extend the array:
		 * people.attr(4, 'Charlie');
		 * people.attr(); // ['Adam', 'Bill', undefined, undefined, 'Charlie']
		 *
		 * // merge the elements:
		 * people.attr(['Alice', 'Bob', 'Eve']);
		 * people.attr(); // ['Alice', 'Bob', 'Eve', undefined, 'Charlie']
		 * @codeend
		 * 
		 * ## Deep properties
		 * 
		 * `attr` can also set and read deep properties. All you have to do is specify
		 * the property name as you normally would if you weren't using `attr`.
		 * 
		 * @codestart
		 * var people = new can.Observe.List([{name: 'Alex'}, {name: 'Bob'}]);
		 * 
		 * // set a property:
		 * people.attr('0.name', 'Alice');
		 * 
		 * // get a property:
		 * people.attr('0.name');  // 'Alice'
		 * people[0].attr('name'); // 'Alice'
		 *
		 * // get all properties:
		 * people.attr(); // [{name: 'Alice'}, {name: 'Bob'}]
		 * @codeend
		 *
		 * The discussion of deep properties under `[can.Observe.prototype.attr]` may also
		 * be enlightening.
		 *
		 * ## Events
		 *
		 * `can.Observe.List`s emit five types of events in response to changes. They are:
		 * - the _change_ event fires on every change to a List.
		 * - the _set_ event is fired when an element is set.
		 * - the _add_ event is fired when an element is added to the List.
		 * - the _remove_ event is fired when an element is removed from the List.
		 * - the _length_ event is fired when the length of the List changes.
		 *
		 * * ## The _change_ event
		 * 
		 * The first event that is fired is the _change_ event. The _change_ event is useful
		 * if you want to react to all changes on an List.
		 *
		 * @codestart
		 * var list = new can.Observe.List([]);
		 * list.bind('change', function(ev, index, how, newVal, oldVal) {
		 *     console.log('Something changed.');
		 * });
		 * @codeend
		 * 
		 * The parameters of the event handler for the _change_ event are:
		 *
		 * - _ev_ The event object.
		 * - _index_ Where the change took place.
		 * - _how_ Whether elements were added, removed, or set.
		 * Possible values are `'add'`, `'remove'`, or `'set'`.
		 * - _newVal_ The elements affected after the change
		 *  _newVal_ will be a single value when an index is set, an Array when elements
		 * were added, and `undefined` if elements were removed.
		 * - _oldVal_ The elements affected before the change.
		 * _newVal_ will be a single value when an index is set, an Array when elements
		 * were removed, and `undefined` if elements were added.
		 * 
		 * Here is a concrete tour through the _change_ event handler's arguments:
		 * 
		 * @codestart
		 * var list = new can.Observe.List();
		 * list.bind('change', function(ev, index, how, newVal, oldVal) {
		 *     console.log(ev + ', ' + index + ', ' + how + ', ' + newVal + ', ' + oldVal);
		 * });
		 * 
		 * list.attr(['Alexis', 'Bill']); // [object Object], 0, add, ['Alexis', 'Bill'], undefined
		 * list.attr(2, 'Eve');           // [object Object], 2, add, Eve, undefined
		 * list.attr(0, 'Adam');          // [object Object], 0, set, Adam, Alexis
		 * list.attr(['Alice', 'Bob']);   // [object Object], 0, set, Alice, Adam
		 *                                // [object Object], 1, set, Bob, Bill
		 * list.removeAttr(1);            // [object Object], 1, remove, undefined, Bob
		 * @codeend
		 *
		 * ## The _set_ event
		 * 
		 * _set_ events are fired when an element at an index that already exists in the List is
		 * modified. Actions can cause _set_ events to fire never also cause _length_ events
		 * to fire (although some functions, such as `[can.Observe.List.prototype.splice splice]`
		 * may cause unrelated sets of events to fire after being batched).
		 * 
		 * The parameters of the event handler for the _set_ event are:
		 *
		 * - _ev_ The event object.
		 * - _newVal_ The new value of the element.
		 * - _index_ where the set took place.
		 *
		 * Here is a concrete tour through the _set_ event handler's arguments:
		 * 
		 * @codestart
		 * var list = new can.Observe.List();
		 * list.bind('set', function(ev, newVal, index) {
		 *     console.log(newVal + ', ' + index);
		 * });
		 * 
		 * list.attr(['Alexis', 'Bill']);
		 * list.attr(2, 'Eve');          
		 * list.attr(0, 'Adam');          // Adam, 0
		 * list.attr(['Alice', 'Bob']);   // Alice, 0
		 *                                // Bob, 1
		 * list.removeAttr(1);            
		 * @codeend
		 *
		 * ## The _add_ event
		 * 
		 * _add_ events are fired when elements are added or inserted
		 * into the List.
		 * 
		 * The parameters of the event handler for the _add_ event are:
		 *
		 * - _ev_ The event object.
		 * - _newElements_ The new elements.
		 * If more than one element is added, _newElements_ will be an array.
		 * Otherwise, it is simply the new element itself.
		 * - _index_ Where the add or insert took place.
		 *
		 * Here is a concrete tour through the _add_ event handler's arguments:
		 * 
		 * @codestart
		 * var list = new can.Observe.List();
		 * list.bind('add', function(ev, newElements, index) {
		 *     console.log(newElements + ', ' + index);
		 * });
		 * 
		 * list.attr(['Alexis', 'Bill']); // ['Alexis', 'Bill'], 0
		 * list.attr(2, 'Eve');           // Eve, 2
		 * list.attr(0, 'Adam');          
		 * list.attr(['Alice', 'Bob']);   
		 *                                
		 * list.removeAttr(1);            
		 * @codeend
		 *
		 * ## The _remove_ event
		 * 
		 * _remove_ events are fired when elements are removed from the list.
		 * 
		 * The parameters of the event handler for the _remove_ event are:
		 *
		 * - _ev_ The event object.
		 * - _removedElements_ The removed elements.
		 * If more than one element was removed, _removedElements_ will be an array.
		 * Otherwise, it is simply the element itself.
		 * - _index_ Where the removal took place.
		 *
		 * Here is a concrete tour through the _remove_ event handler's arguments:
		 * 
		 * @codestart
		 * var list = new can.Observe.List();
		 * list.bind('remove', function(ev, removedElements, index) {
		 *     console.log(removedElements + ', ' + index);
		 * });
		 * 
		 * list.attr(['Alexis', 'Bill']); 
		 * list.attr(2, 'Eve');           
		 * list.attr(0, 'Adam');          
		 * list.attr(['Alice', 'Bob']);   
		 *                                
		 * list.removeAttr(1);            // Bob, 1
		 * @codeend
		 *
		 * ## The _length_ event
		 * 
		 * _length_ events are fired whenever the list changes.
		 * 
		 * The parameters of the event handler for the _length_ event are:
		 *
		 * - _ev_ The event object.
		 *- _length_ The current length of the list.
		 * If events were batched when the _length_ event was triggered, _length_
		 * will have the length of the list when `stopBatch` was called. Because
		 * of this, you may recieve multiple _length_ events with the same
		 * _length_ parameter.
		 * 
		 * Here is a concrete tour through the _length_ event handler's arguments:
		 * 
		 * @codestart
		 * var list = new can.Observe.List();
		 * list.bind('length', function(ev, length) {
		 *     console.log(length);
		 * });
		 * 
		 * list.attr(['Alexis', 'Bill']); // 2
		 * list.attr(2, 'Eve');           // 3
		 * list.attr(0, 'Adam');          
		 * list.attr(['Alice', 'Bob']);   
		 *                                
		 * list.removeAttr(1);            // 2
		 * @codeend
		 */
		_attrs: function( items, remove ) {
			if ( items === undefined ) {
				return serialize(this, 'attr', []);
			}

			// Create a copy.
			items = can.makeArray( items );

      		Observe.startBatch();
			this._updateAttrs(items, remove);
			Observe.stopBatch()
		},

	    _updateAttrs : function( items, remove ){
	      var len = Math.min(items.length, this.length);
	
	      for ( var prop = 0; prop < len; prop++ ) {
	        var curVal = this[prop],
	          newVal = items[prop];
	
	        if ( canMakeObserve(curVal) && canMakeObserve(newVal) ) {
	          curVal.attr(newVal, remove)
	        } else if ( curVal != newVal ) {
	          this._set(prop, newVal)
	        } else {
	
	        }
	      }
	      if ( items.length > this.length ) {
	        // Add in the remaining props.
	        this.push.apply( this, items.slice( this.length ) );
	      } else if ( items.length < this.length && remove ) {
	        this.splice(items.length)
	      }
	    }
	}),


		// Converts to an `array` of arguments.
		getArgs = function( args ) {
			return args[0] && can.isArray(args[0]) ?
				args[0] :
				can.makeArray(args);
		};
	// Create `push`, `pop`, `shift`, and `unshift`
	can.each({
		/**
		 * @function can.Observe.List.prototype.push push
		 * @description Add elements to the end of a list.
		 * @signature `list.push(...elements)`
		 *
		 * `push` adds elements onto the end of a List.]
		 * 
		 * @param {*} elements the elements to add to the List
		 *
		 * @return {Number} the new length of the List
		 *
		 * @body
		 * `push` is fairly straightforward:
		 *
		 * @codestart
		 * var list = new can.Observe.List(['Alice']);
		 *
		 * list.push('Bob', 'Eve');
		 * list.attr(); // ['Alice', 'Bob', 'Eve']
		 * @codeend
		 *
		 * If you have an array you want to concatenate to the end
		 * of the List, you can use `apply`:
		 *
		 * @codestart
		 * var names = ['Bob', 'Eve'],
		 *     list = new can.Observe.List(['Alice']);
		 *
		 * list.push.apply(list, names);
		 * list.attr(); // ['Alice', 'Bob', 'Eve']
		 * @codeend
		 *
		 * ## Events
		 *
		 * `push` causes _change_, _add_, and _length_ events to be fired.
		 *
		 * ## See also
		 *
		 * `push` has a counterpart in [can.Observe.List.pop pop], or you may be
		 * looking for [can.Observe.List.unshift unshift] and its counterpart [can.Observe.List.shift shift].
		 */
		push: "length",
		/**
		 * @function can.Observe.List.prototype.unshift unshift
		 * @description Add elements to the beginning of a List.
		 * @signature `list.unshift(...elements)`
		 *
		 * `unshift` adds elements onto the beginning of a List.
		 * 
		 * @param {*} elements the elements to add to the List
		 *
		 * @return {Number} the new length of the List
		 *
		 * @body
		 * `unshift` adds elements to the front of the list in bulk in the order specified:
		 *
		 * @codestart
		 * var list = new can.Observe.List(['Alice']);
		 *
		 * list.unshift('Bob', 'Eve');
		 * list.attr(); // ['Bob', 'Eve', 'Alice']
		 * @codeend
		 *
		 * If you have an array you want to concatenate to the beginning
		 * of the List, you can use `apply`:
		 *
		 * @codestart
		 * var names = ['Bob', 'Eve'],
		 *     list = new can.Observe.List(['Alice']);
		 *
		 * list.push.apply(list, names);
		 * list.attr(); // ['Bob', 'Eve', 'Alice']
		 * @codeend
		 *
		 * ## Events
		 *
		 * `unshift` causes _change_, _add_, and _length_ events to be fired.
		 *
		 * ## See also
		 *
		 * `unshift` has a counterpart in [can.Observe.List.shift shift], or you may be
		 * looking for [can.Observe.List.push push] and its counterpart [can.Observe.List.pop pop].
		 */
		unshift: 0
	},
	// Adds a method
	// `name` - The method name.
	// `where` - Where items in the `array` should be added.
	function( where, name ) {
		var orig = [][name]
		list.prototype[name] = function() {
			// Get the items being added.
			var args = [],
				// Where we are going to add items.
				len = where ? this.length : 0,
				i = arguments.length,
				res,
				val,
				constructor = this.constructor;

			// Go through and convert anything to an `observe` that needs to be converted.
			while(i--){
				val = arguments[i];
				args[i] =  canMakeObserve(val) ?
					hookupBubble(val, "*", this, this.constructor.Observe, this.constructor) :
					val;
			}
			
			// Call the original method.
			res = orig.apply(this, args);

			if ( !this.comparator || args.length ) {

				this._triggerChange(""+len, "add", args, undefined);
			}
						
			return res;
		}
	});

	can.each({
		/**
		 * @function can.Observe.List.prototype.pop pop
		 * @description Remove an element from the end of a List.
		 * @signature `list.pop()`
		 *
		 * `push` removes an element from the end of a List.
		 * 
		 * @return {*} the element just popped off the List, or `undefined` if the List was empty
		 *
		 * @body
		 * `pop` is the opposite action from `[can.Observe.List.push push]`:
		 *
		 * @codestart
		 * var list = new can.Observe.List(['Alice']);
		 *
		 * list.push('Bob', 'Eve');
		 * list.attr(); // ['Alice', 'Bob', 'Eve']
		 * 
		 * list.pop(); // 'Eve'
		 * list.pop(); // 'Bob'
		 * list.pop(); // 'Alice'
		 * list.pop(); // undefined
		 * @codeend
		 *
		 * ## Events
		 *
		 * `pop` causes _change_, _remove_, and _length_ events to be fired if the List is not empty
		 * when it is called.
		 *
		 * ## See also
		 *
		 * `pop` has its counterpart in [can.Observe.List.push push], or you may be
		 * looking for [can.Observe.List.unshift unshift] and its counterpart [can.Observe.List.shift shift].
		 */
		pop: "length",
		/**
		 * @function can.Observe.List.prototype.shift shift
		 * @description Remove en element from the front of a list.
		 * @signature `list.shift()`
		 *
		 * `shift` removes an element from the beginning of a List.
		 *
		 * @return {*} the element just shifted off the List, or `undefined` if the List is empty
		 *
		 * @body
		 * `shift` is the opposite action from `[can.Observe.List.unshift unshift]`:
		 *
		 * @codestart
		 * var list = new can.Observe.List(['Alice']);
		 *
		 * list.unshift('Bob', 'Eve');
		 * list.attr(); // ['Bob', 'Eve', 'Alice']
		 *
		 * list.shift(); // 'Bob'
		 * list.shift(); // 'Eve'
		 * list.shift(); // 'Alice'
		 * list.shift(); // undefined
		 * @codeend
		 *
		 * ## Events
		 *
		 * `pop` causes _change_, _remove_, and _length_ events to be fired if the List is not empty
		 * when it is called.
		 *
		 * ## See also
		 *
		 * `shift` has a counterpart in [can.Observe.List.unshift unshift], or you may be
		 * looking for [can.Observe.List.push push] and its counterpart [can.Observe.List.pop pop].
		 */
		shift: 0
	},
	// Creates a `remove` type method
	function( where, name ) {
		list.prototype[name] = function() {
			
			var args = getArgs(arguments),
				len = where && this.length ? this.length - 1 : 0;


			var res = [][name].apply(this, args)

			// Create a change where the args are
			// `len` - Where these items were removed.
			// `remove` - Items removed.
			// `undefined` - The new values (there are none).
			// `res` - The old, removed values (should these be unbound).
			this._triggerChange(""+len, "remove", undefined, [res])

			if ( res && res.unbind ) {
				res.unbind("change" + this._cid)
			}
			return res;
		}
	});
	
	can.extend(list.prototype, {
		/**
		 * @function can.Observe.List.prototype.indexOf indexOf
		 * @description Look for an item in a List.
		 * @signature `list.indexOf(item)`
		 *
		 * `indexOf` finds the position of a given item in the List.
		 *
		 * @param {*} item the item to find
		 *
		 * @return {Number} the position of the item in the List, or -1 if the item is not found.
		 *
		 * @body
		 * @codestart
		 * var list = new can.Observe.List(['Alice', 'Bob', 'Eve']);
		 * list.indexOf('Alice');   // 0
		 * list.indexOf('Charlie'); // -1
		 * @codeend
		 *
		 * It is trivial to make a `contains`-type function using `indexOf`:
		 *
		 * @codestart
		 * function(list, item) {
		 *     return list.indexOf(item) >= 0;
		 * }
		 * @codeend
		 */
		indexOf: function(item) {
			this.attr('length')
			return can.inArray(item, this)
		},

		/**
		 * @function can.Observe.List.prototype.join join
		 * @description Join a List's elements into a string.
		 * @signature `list.join(separator)`
		 *
		 * `join` turns a List into a string by inserting _separator_ between the string representations
		 * of all the elements of the List.
		 *
		 * @param {String} separator the string to seperate elements with
		 *
		 * @return {String} the joined string
		 *
		 * @body
		 * @codestart
		 * var list = new can.Observe.List(['Alice', 'Bob', 'Eve']);
		 * list.join(', '); // 'Alice, Bob, Eve'
		 *
		 * var beatles = new can.Observe.List(['John', 'Paul', 'Ringo', 'George']);
		 * beatles.join('&'); // 'John&Paul&Ringo&George'
		 * @codeend
		 */
		join : [].join,
		
		/**
		 * @function can.Observe.List.prototype.reverse reverse
		 * @description Reverse the order of a List.
		 * @signature `list.reverse()`
		 *
		 * `reverse` reverses the elements of the List in place.
		 *
		 * @return {can.Observe.List} the List, for chaining
		 *
		 * @body
		 * @codestart
		 * var list = new can.Observe.List(['Alice', 'Bob', 'Eve']);
		 * var reversedList = list.reverse();
		 *
		 * reversedList.attr(); // ['Eve', 'Bob', 'Alice'];
		 * list === reversedList; // true
		 * @codeend
		 */
		reverse: [].reverse,

		/**
		 * @function can.Observe.List.prototype.slice slice
		 * @description Make a copy of a part of a List.
		 * @signature `list.slice([start[, end]])`
		 *
		 * `slice` creates a copy of a portion of the List.
		 *
		 * @param {Number} [start=0] the index to start copying from
		 *
		 * @param {Number} [end] the first index not to include in the copy
		 * If _end_ is not supplied, `slice` will copy until the end of the list.
		 *
		 * @return {can.Observe.List} a new `can.Observe.List` with the extracted elements
		 *
		 * @body
		 * @codestart
		 * var list = new can.Observe.List(['Alice', 'Bob', 'Charlie', 'Daniel', 'Eve']);
		 * var newList = list.slice(1, 4);
		 * newList.attr(); // ['Bob', 'Charlie', 'Daniel']
		 * @codeend
		 *
		 * `slice` is the simplest way to copy a List:
		 * 
		 * @codestart
		 * var list = new can.Observe.List(['Alice', 'Bob', 'Eve']);
		 * var copy = list.slice();
		 *
		 * copy.attr();   // ['Alice', 'Bob', 'Eve']
		 * list === copy; // false
		 * @codeend
		 */
		slice : function() {
			var temp = Array.prototype.slice.apply(this, arguments);
			return new this.constructor( temp );
		},

		/**
		 * @function can.Observe.List.prototype.concat concat
		 * @description Merge many collections together into a List.
		 * @signature `list.concat(...args)`
		 * @param {Array|can.Observe.List|*} args Any number of arrays, Lists, or values to add in
		 * For each parameter given, if it is an Array or a List, each of its elements will be added to
		 * the end of the concatenated List. Otherwise, the parameter itself will be added.
		 *
		 * @body
		 * `concat` makes a new List with the elements of the List followed by the elements of the parameters.
		 *
		 * @codestart
		 * var list = new can.Observe.List();
		 * var newList = list.concat(
		 *     'Alice',
		 *     ['Bob', 'Charlie']),
		 *     new can.Observe.List(['Daniel', 'Eve']),
		 *     {f: 'Francis'}
		 * );
		 * newList.attr(); // ['Alice', 'Bob', 'Charlie', 'Daniel', 'Eve', {f: 'Francis'}]
		 * @codeend
		 */
		concat : function() {
			var args = [];
			can.each( can.makeArray( arguments ), function( arg, i ) {
				args[i] = arg instanceof can.Observe.List ? arg.serialize() : arg ;
			});
			return new this.constructor(Array.prototype.concat.apply(this.serialize(), args));
		},

		/**
		 * @function can.Observe.List.prototype.forEach forEach
		 * @description Call a function for each element of a List.
		 * @signature `list.forEach(callback[, thisArg])`
		 * @param {function(element, index, list)} callback a function to call with each element of the List
		 * The three parameters that _callback_ gets passed are _element_, the element at _index_, _index_ the
		 * current element of the list, and _list_ the List the elements are coming from.
		 * @param {Object} [thisArg] the object to use as `this` inside the callback
		 *
		 * @body
		 * `forEach` calls a callback for each element in the List.
		 *
		 * @codestart
		 * var list = new can.Observe.List([1, 2, 3]);
		 * list.forEach(function(element, index, list) {
		 *     list.attr(index, element * element);
		 * });
		 * list.attr(); // [1, 4, 9]
		 * @codeend
		 */
		forEach : function( cb, thisarg ) {
			can.each(this, cb, thisarg || this );
		},

		/**
		 * @function can.Observe.List.prototype.replace replace
		 * @description Replace all the elements of a List.
		 * @signature `list.replace(collection)`
		 * @param {Array|can.Observe.List|can.Deferred} collection the collection of new elements to use
		 * If a [can.Deferred] is passed, it must resolve to an `Array` or `can.Observe.List`.
		 * The elements of the list are not actually removed until the Deferred resolves.
		 *
		 * @body
		 * `replace` replaces all the elements of this List with new ones.
		 *
		 * `replace` is especially useful when `can.Observe.List`s are live-bound into `[can.Control]`s,
		 * and you intend to populate them with the results of a `[can.Model]` call:
		 *
		 * @codestart
		 * can.Control({
		 *     init: function() {
		 *         this.list = new Todo.List();
		 *         // live-bind the list into the DOM
		 *         this.element.html(can.view('list.mustache', this.list));
		 *         // when this AJAX call returns, the live-bound DOM will be updated
		 *         this.list.replace(Todo.findAll());
		 *     }
		 * });
		 * @codeend
		 *
		 * Learn more about [can.Model.List making Lists of models].
		 *
		 * ## Events
		 * 
		 * A major difference between `replace` and `attr(newElements, true)` is that `replace` always emits
		 * an_add_ event and a _remove_ event, whereas `attr` will cause _set_ events along an _add_ or _remove_
		 * event if needed. Corresponding _change_ and _length_ events will be fired as well.
		 *
		 * The differences in the events fired by `attr` and `replace` are demonstrated concretely by this example:
		 * @codestart
		 * var attrList = new can.Observe.List(['Alexis', 'Bill']);
		 * attrList.bind('change', function(ev, index, how, newVals, oldVals) {
		 *     console.log(index + ', ' + how + ', ' + newVals + ', ' + oldVals);
		 * });
		 * 
		 * var replaceList = new can.Observe.List(['Alexis', 'Bill']);
		 * replaceList.bind('change', function(ev, index, how, newVals, oldVals) {
		 *     console.log(index + ', ' + how + ', ' + newVals + ', ' + oldVals);
		 * });
		 * 
		 * attrList.attr(['Adam', 'Ben'], true);         // 0, set, Adam, Alexis
		 *                                               // 1, set, Ben, Bill
		 * replaceList.replace(['Adam', 'Ben']);         // 0, remove, undefined, ['Alexis', 'Bill']
		 *                                               // 0, add, undefined, ['Adam', 'Ben']
		 * 
		 * attrList.attr(['Amber'], true);               // 0, set, Amber, Adam
		 *                                               // 1, remove, undefined, Ben
		 * replaceList.replace(['Amber']);               // 0, remove, undefined, ['Adam', 'Ben']
		 *                                               // 0, add, Amber, ['Adam', 'Ben']
		 * 
		 * attrList.attr(['Alice', 'Bob', 'Eve'], true); // 0, set, Alice, Amber
		 *                                               // 1, add, ['Bob', 'Eve'], undefined
		 * replaceList.replace(['Alice', 'Bob', 'Eve']); // 0, remove, undefined, Amber
		 *                                               // 0, add, ['Alice', 'Bob', 'Eve'], Amber
		 * @codeend
		 */
		replace : function(newList) {
			if(can.isDeferred(newList)) {
				newList.then(can.proxy(this.replace, this));
			} else {
				this.splice.apply(this, [0, this.length].concat(can.makeArray(newList || [])));
			}

			return this;
		}
	});

	can.List = Observe.List = list;
	Observe.setup = function(){
		can.Construct.setup.apply(this, arguments);
		// I would prefer not to do it this way. It should
		// be using the attributes plugin to do this type of conversion.
		this.List = Observe.List({ Observe : this }, {});
	}
	return Observe;
});
;
steal.executed('can/observe/observe.js');
steal('can/control','jquery','./demo_frame.js',function(Control, $,DemoFrame){

	return Control( {
		init: function() {
			this.replaceIframes();
			this.replaceDemos();
		},
		replaceIframes: function() {
			// @iframe can/test/demo.html 400
			// <div class="iframe_wrapper" data-iframe-src="can/test/demo.html" data-iframe-height="400"></div>
			$('.iframe_wrapper', this.element).each(function() {
				var wrapper = $(this),
					iframe = $('<iframe src="../' + wrapper.data('iframeSrc') + '">');
				
				if(wrapper.data('iframeHeight')) {
					iframe.height(wrapper.data('iframeHeight'));
				}
	
				wrapper.append(iframe);
			});
		},
		replaceDemos: function() {
			// @demo can/control/control.html 400
			// <div class="demo_wrapper" data-demo-src="can/control/control.html"></div>
			$('.demo_wrapper', this.element).each(function() {
				var wrapper = $(this);
				new DemoFrame(wrapper);
				
				if(wrapper.data('demoHeight')) {
					iframe.height(wrapper.data('demoHeight'));
				}
			});
		}
	});

});
steal.executed('documentjs/site/static/build/frame_helper.js');
steal("can/control","./demo_frame.mustache","jquery","can/observe","./prettify.js",function(Control,demoFrameMustache,$){
	
	

return can.Control({
	init: function() {
		// Render out the demo container.
		this.element.html(demoFrameMustache( {demoSrc: '../' + this.element.data('demoSrc')}));

		// Start with the demo tab showing.
		this.showTab('html');

		// When the iframe loads, grab the HTML and JS and fill in the other tabs.
		var self = this;
		$('[data-for=demo] > iframe').load(function() {
			$('[data-for=html] > pre').html(self.prettify(this.contentDocument.getElementById('demo-html').innerHTML));
			$('[data-for=js] > pre').html(self.prettify(this.contentDocument.getElementById('demo-source').innerHTML));
			//prettyPrint();
		});
	},
	'.tab click': function(el, ev) {
		this.showTab(el.data('tab'));
	},
	showTab: function(tabName) {
		$('.tab', this.element).removeClass('active');
		$('.tab-content', this.element).hide();
		$('.tab[data-tab=' + tabName + ']', this.element).addClass('active');
		$('[data-for=' + tabName + ']', this.element).show();
	},
	prettify: function(unescaped) {
		return prettyPrintOne(unescaped.replace(/</g, '&lt;'));
	}
});

});
steal.executed('documentjs/site/static/build/demo_frame.js');
steal('can/view/mustache',function(can){return can.view.preload('documentjs_site_static_build_demo_frame_mustache',can.Mustache(function(_CONTEXT,_VIEW) { with(_VIEW) { with (_CONTEXT) {var ___v1ew = [];var ___c0nt3xt = this && this.___st4ck3d ? this : [];___c0nt3xt.___st4ck3d = true;var ___st4ck = function(context, self) {var s;if (arguments.length == 1 && context) {s = !context.___st4ck3d ? [context] : context;} else if (!context.___st4ck3d) {s = [self, context];} else if (context && context === self && context.___st4ck3d) {s = context.slice(0);} else {s = context && context.___st4ck3d ? context.concat([self]) : ___st4ck(context).concat([self]);}return (s.___st4ck3d = true) && s;};___v1ew.push("<div class=\"demo\">\n\t<ul>\n\t\t<li class=\"tab\" data-tab=\"demo\">Demo</li>\n\t\t<li class=\"tab\" data-tab=\"html\">HTML</li>\n\t\t<li class=\"tab\" data-tab=\"js\">JS</li>\n\t</ul>\n\t<div class=\"tab-content\" data-for=\"demo\">\n\t\t<iframe src=\"");___v1ew.push(can.view.txt(1,'iframe','src',this,function(){ return can.Mustache.txt({context:___st4ck(___c0nt3xt,this),options:options},null,can.Mustache.get("demoSrc",{context:___st4ck(___c0nt3xt,this),options:options},false,false));}));___v1ew.push("\"",can.view.pending(),"/>");___v1ew.push("\n\t</div>\n\t<div class=\"tab-content\" data-for=\"html\">\n\t\t<pre class=\"prettyprint\"></pre>\n\t</div>\n\t<div class=\"tab-content\" data-for=\"js\">\n\t\t<pre class=\"prettyprint lang-js\"></pre>\n\t</div>\n</div>");; return ___v1ew.join('')}} }));
});
steal.executed('documentjs/site/static/build/demo_frame.mustache');
!function(){var q=null;window.PR_SHOULD_USE_CONTINUATION=!0;
	(function(){function S(a){function d(e){var b=e.charCodeAt(0);if(b!==92)return b;var a=e.charAt(1);return(b=r[a])?b:"0"<=a&&a<="7"?parseInt(e.substring(1),8):a==="u"||a==="x"?parseInt(e.substring(2),16):e.charCodeAt(1)}function g(e){if(e<32)return(e<16?"\\x0":"\\x")+e.toString(16);e=String.fromCharCode(e);return e==="\\"||e==="-"||e==="]"||e==="^"?"\\"+e:e}function b(e){var b=e.substring(1,e.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),e=[],a=
		b[0]==="^",c=["["];a&&c.push("^");for(var a=a?1:0,f=b.length;a<f;++a){var h=b[a];if(/\\[bdsw]/i.test(h))c.push(h);else{var h=d(h),l;a+2<f&&"-"===b[a+1]?(l=d(b[a+2]),a+=2):l=h;e.push([h,l]);l<65||h>122||(l<65||h>90||e.push([Math.max(65,h)|32,Math.min(l,90)|32]),l<97||h>122||e.push([Math.max(97,h)&-33,Math.min(l,122)&-33]))}}e.sort(function(e,a){return e[0]-a[0]||a[1]-e[1]});b=[];f=[];for(a=0;a<e.length;++a)h=e[a],h[0]<=f[1]+1?f[1]=Math.max(f[1],h[1]):b.push(f=h);for(a=0;a<b.length;++a)h=b[a],c.push(g(h[0])),
		h[1]>h[0]&&(h[1]+1>h[0]&&c.push("-"),c.push(g(h[1])));c.push("]");return c.join("")}function s(e){for(var a=e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),c=a.length,d=[],f=0,h=0;f<c;++f){var l=a[f];l==="("?++h:"\\"===l.charAt(0)&&(l=+l.substring(1))&&(l<=h?d[l]=-1:a[f]=g(l))}for(f=1;f<d.length;++f)-1===d[f]&&(d[f]=++x);for(h=f=0;f<c;++f)l=a[f],l==="("?(++h,d[h]||(a[f]="(?:")):"\\"===l.charAt(0)&&(l=+l.substring(1))&&l<=h&&
		(a[f]="\\"+d[l]);for(f=0;f<c;++f)"^"===a[f]&&"^"!==a[f+1]&&(a[f]="");if(e.ignoreCase&&m)for(f=0;f<c;++f)l=a[f],e=l.charAt(0),l.length>=2&&e==="["?a[f]=b(l):e!=="\\"&&(a[f]=l.replace(/[A-Za-z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return a.join("")}for(var x=0,m=!1,j=!1,k=0,c=a.length;k<c;++k){var i=a[k];if(i.ignoreCase)j=!0;else if(/[a-z]/i.test(i.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){m=!0;j=!1;break}}for(var r={b:8,t:9,n:10,v:11,
		f:12,r:13},n=[],k=0,c=a.length;k<c;++k){i=a[k];if(i.global||i.multiline)throw Error(""+i);n.push("(?:"+s(i)+")")}return RegExp(n.join("|"),j?"gi":"g")}function T(a,d){function g(a){var c=a.nodeType;if(c==1){if(!b.test(a.className)){for(c=a.firstChild;c;c=c.nextSibling)g(c);c=a.nodeName.toLowerCase();if("br"===c||"li"===c)s[j]="\n",m[j<<1]=x++,m[j++<<1|1]=a}}else if(c==3||c==4)c=a.nodeValue,c.length&&(c=d?c.replace(/\r\n?/g,"\n"):c.replace(/[\t\n\r ]+/g," "),s[j]=c,m[j<<1]=x,x+=c.length,m[j++<<1|1]=
		a)}var b=/(?:^|\s)nocode(?:\s|$)/,s=[],x=0,m=[],j=0;g(a);return{a:s.join("").replace(/\n$/,""),d:m}}function H(a,d,g,b){d&&(a={a:d,e:a},g(a),b.push.apply(b,a.g))}function U(a){for(var d=void 0,g=a.firstChild;g;g=g.nextSibling)var b=g.nodeType,d=b===1?d?a:g:b===3?V.test(g.nodeValue)?a:d:d;return d===a?void 0:d}function C(a,d){function g(a){for(var j=a.e,k=[j,"pln"],c=0,i=a.a.match(s)||[],r={},n=0,e=i.length;n<e;++n){var z=i[n],w=r[z],t=void 0,f;if(typeof w==="string")f=!1;else{var h=b[z.charAt(0)];
		if(h)t=z.match(h[1]),w=h[0];else{for(f=0;f<x;++f)if(h=d[f],t=z.match(h[1])){w=h[0];break}t||(w="pln")}if((f=w.length>=5&&"lang-"===w.substring(0,5))&&!(t&&typeof t[1]==="string"))f=!1,w="src";f||(r[z]=w)}h=c;c+=z.length;if(f){f=t[1];var l=z.indexOf(f),B=l+f.length;t[2]&&(B=z.length-t[2].length,l=B-f.length);w=w.substring(5);H(j+h,z.substring(0,l),g,k);H(j+h+l,f,I(w,f),k);H(j+h+B,z.substring(B),g,k)}else k.push(j+h,w)}a.g=k}var b={},s;(function(){for(var g=a.concat(d),j=[],k={},c=0,i=g.length;c<i;++c){var r=
		g[c],n=r[3];if(n)for(var e=n.length;--e>=0;)b[n.charAt(e)]=r;r=r[1];n=""+r;k.hasOwnProperty(n)||(j.push(r),k[n]=q)}j.push(/[\S\s]/);s=S(j)})();var x=d.length;return g}function v(a){var d=[],g=[];a.tripleQuotedStrings?d.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,q,"'\""]):a.multiLineStrings?d.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,
		q,"'\"`"]):d.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,q,"\"'"]);a.verbatimStrings&&g.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,q]);var b=a.hashComments;b&&(a.cStyleComments?(b>1?d.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):d.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/,q,"#"]),g.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,q])):d.push(["com",
		/^#[^\n\r]*/,q,"#"]));a.cStyleComments&&(g.push(["com",/^\/\/[^\n\r]*/,q]),g.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,q]));if(b=a.regexLiterals){var s=(b=b>1?"":"\n\r")?".":"[\\S\\s]";g.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+("/(?=[^/*"+b+"])(?:[^/\\x5B\\x5C"+b+"]|\\x5C"+s+"|\\x5B(?:[^\\x5C\\x5D"+b+"]|\\x5C"+
		s+")*(?:\\x5D|$))+/")+")")])}(b=a.types)&&g.push(["typ",b]);b=(""+a.keywords).replace(/^ | $/g,"");b.length&&g.push(["kwd",RegExp("^(?:"+b.replace(/[\s,]+/g,"|")+")\\b"),q]);d.push(["pln",/^\s+/,q," \r\n\t\u00a0"]);b="^.[^\\s\\w.$@'\"`/\\\\]*";a.regexLiterals&&(b+="(?!s*/)");g.push(["lit",/^@[$_a-z][\w$@]*/i,q],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,q],["pln",/^[$_a-z][\w$@]*/i,q],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,q,"0123456789"],["pln",/^\\[\S\s]?/,
		q],["pun",RegExp(b),q]);return C(d,g)}function J(a,d,g){function b(a){var c=a.nodeType;if(c==1&&!x.test(a.className))if("br"===a.nodeName)s(a),a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)b(a);else if((c==3||c==4)&&g){var d=a.nodeValue,i=d.match(m);if(i)c=d.substring(0,i.index),a.nodeValue=c,(d=d.substring(i.index+i[0].length))&&a.parentNode.insertBefore(j.createTextNode(d),a.nextSibling),s(a),c||a.parentNode.removeChild(a)}}function s(a){function b(a,c){var d=
		c?a.cloneNode(!1):a,e=a.parentNode;if(e){var e=b(e,1),g=a.nextSibling;e.appendChild(d);for(var i=g;i;i=g)g=i.nextSibling,e.appendChild(i)}return d}for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),d;(d=a.parentNode)&&d.nodeType===1;)a=d;c.push(a)}for(var x=/(?:^|\s)nocode(?:\s|$)/,m=/\r\n?|\n/,j=a.ownerDocument,k=j.createElement("li");a.firstChild;)k.appendChild(a.firstChild);for(var c=[k],i=0;i<c.length;++i)b(c[i]);d===(d|0)&&c[0].setAttribute("value",d);var r=j.createElement("ol");
		r.className="linenums";for(var d=Math.max(0,d-1|0)||0,i=0,n=c.length;i<n;++i)k=c[i],k.className="L"+(i+d)%10,k.firstChild||k.appendChild(j.createTextNode("\u00a0")),r.appendChild(k);a.appendChild(r)}function p(a,d){for(var g=d.length;--g>=0;){var b=d[g];F.hasOwnProperty(b)?D.console&&console.warn("cannot override language handler %s",b):F[b]=a}}function I(a,d){if(!a||!F.hasOwnProperty(a))a=/^\s*</.test(d)?"default-markup":"default-code";return F[a]}function K(a){var d=a.h;try{var g=T(a.c,a.i),b=g.a;
		a.a=b;a.d=g.d;a.e=0;I(d,b)(a);var s=/\bMSIE\s(\d+)/.exec(navigator.userAgent),s=s&&+s[1]<=8,d=/\n/g,x=a.a,m=x.length,g=0,j=a.d,k=j.length,b=0,c=a.g,i=c.length,r=0;c[i]=m;var n,e;for(e=n=0;e<i;)c[e]!==c[e+2]?(c[n++]=c[e++],c[n++]=c[e++]):e+=2;i=n;for(e=n=0;e<i;){for(var p=c[e],w=c[e+1],t=e+2;t+2<=i&&c[t+1]===w;)t+=2;c[n++]=p;c[n++]=w;e=t}c.length=n;var f=a.c,h;if(f)h=f.style.display,f.style.display="none";try{for(;b<k;){var l=j[b+2]||m,B=c[r+2]||m,t=Math.min(l,B),A=j[b+1],G;if(A.nodeType!==1&&(G=x.substring(g,
			t))){s&&(G=G.replace(d,"\r"));A.nodeValue=G;var L=A.ownerDocument,o=L.createElement("span");o.className=c[r+1];var v=A.parentNode;v.replaceChild(o,A);o.appendChild(A);g<l&&(j[b+1]=A=L.createTextNode(x.substring(t,l)),v.insertBefore(A,o.nextSibling))}g=t;g>=l&&(b+=2);g>=B&&(r+=2)}}finally{if(f)f.style.display=h}}catch(u){D.console&&console.log(u&&u.stack||u)}}var D=window,y=["break,continue,do,else,for,if,return,while"],E=[[y,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
			"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],M=[E,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],N=[E,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],
		O=[N,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],E=[E,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],P=[y,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
		Q=[y,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],W=[y,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],y=[y,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],R=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
		V=/\S/,X=v({keywords:[M,O,E,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",P,Q,y],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),F={};p(X,["default-code"]);p(C([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",
		/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]);p(C([["pln",/^\s+/,q," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,q,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],
		["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]);p(C([],[["atv",/^[\S\s]+/]]),["uq.val"]);p(v({keywords:M,hashComments:!0,cStyleComments:!0,types:R}),["c","cc","cpp","cxx","cyc","m"]);p(v({keywords:"null,true,false"}),["json"]);p(v({keywords:O,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:R}),
		["cs"]);p(v({keywords:N,cStyleComments:!0}),["java"]);p(v({keywords:y,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]);p(v({keywords:P,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]);p(v({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]);p(v({keywords:Q,
		hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]);p(v({keywords:E,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]);p(v({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);p(v({keywords:W,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]);
		p(C([],[["str",/^[\S\s]+/]]),["regex"]);var Y=D.PR={createSimpleLexer:C,registerLangHandler:p,sourceDecorator:v,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:D.prettyPrintOne=function(a,d,g){var b=document.createElement("div");b.innerHTML="<pre>"+a+"</pre>";b=b.firstChild;g&&J(b,g,!0);K({h:d,j:g,c:b,i:1});
			return b.innerHTML},prettyPrint:D.prettyPrint=function(a,d){function g(){for(var b=D.PR_SHOULD_USE_CONTINUATION?c.now()+250:Infinity;i<p.length&&c.now()<b;i++){for(var d=p[i],j=h,k=d;k=k.previousSibling;){var m=k.nodeType,o=(m===7||m===8)&&k.nodeValue;if(o?!/^\??prettify\b/.test(o):m!==3||/\S/.test(k.nodeValue))break;if(o){j={};o.replace(/\b(\w+)=([\w%+\-.:]+)/g,function(a,b,c){j[b]=c});break}}k=d.className;if((j!==h||e.test(k))&&!v.test(k)){m=!1;for(o=d.parentNode;o;o=o.parentNode)if(f.test(o.tagName)&&
			o.className&&e.test(o.className)){m=!0;break}if(!m){d.className+=" prettyprinted";m=j.lang;if(!m){var m=k.match(n),y;if(!m&&(y=U(d))&&t.test(y.tagName))m=y.className.match(n);m&&(m=m[1])}if(w.test(d.tagName))o=1;else var o=d.currentStyle,u=s.defaultView,o=(o=o?o.whiteSpace:u&&u.getComputedStyle?u.getComputedStyle(d,q).getPropertyValue("white-space"):0)&&"pre"===o.substring(0,3);u=j.linenums;if(!(u=u==="true"||+u))u=(u=k.match(/\blinenums\b(?::(\d+))?/))?u[1]&&u[1].length?+u[1]:!0:!1;u&&J(d,u,o);r=
		{h:m,c:d,j:u,i:o};K(r)}}}i<p.length?setTimeout(g,250):"function"===typeof a&&a()}for(var b=d||document.body,s=b.ownerDocument||document,b=[b.getElementsByTagName("pre"),b.getElementsByTagName("code"),b.getElementsByTagName("xmp")],p=[],m=0;m<b.length;++m)for(var j=0,k=b[m].length;j<k;++j)p.push(b[m][j]);var b=q,c=Date;c.now||(c={now:function(){return+new Date}});var i=0,r,n=/\blang(?:uage)?-([\w.]+)(?!\S)/,e=/\bprettyprint\b/,v=/\bprettyprinted\b/,w=/pre|xmp/i,t=/^code$/i,f=/^(?:pre|code|xmp)$/i,
			h={};g()}};typeof define==="function"&&define.amd&&define("google-code-prettify",[],function(){return Y})})();}()
;
steal.executed('documentjs/site/static/build/prettify.js');
steal({id: "./less_engine.js",ignore: true}, function(){
	// only if rhino and we have less
	if(steal.isRhino && window.less) {
		// Some monkey patching of the LESS AST
		// For production builds we NEVER want the parser to add paths to a url(),
		// the CSS postprocessor is doing that already.
		(function(tree) {
			var oldProto = tree.URL.prototype;
			tree.URL = function (val, paths) {
				if (val.data) {
					this.attrs = val;
				} else {
					this.value = val;
					this.paths = paths;
				}
			};
			tree.URL.prototype = oldProto;
		})(less.tree);
	}

	/**
	 * @page steal.less steal.less
	 * @parent stealjs
	 * @plugin steal/less
	 *
	 * @signature `steal('path/to/filename.less')`
	 *
	 * @param {String} path the relative path from the current file to the coffee file.
	 * You can pass multiple paths.
	 * @return {steal} returns the steal function.
	 * 
	 *
	 * @body
	 * 
	 * Lets you build and compile [http://lesscss.org/ Less ] css styles.
	 * Less is an extension of CSS that adds variables, mixins, and quite a bit more.
	 * 
	 * You can write css like:
	 * 
	 *     @@brand_color: #4D926F;
	 *     #header {
	 *       color: @@brand_color;
	 *     }
	 *     h2 {
	 *       color: @@brand_color;
	 *     }
	 * 
	 * ## Use
	 * 
	 * First, create a less file like:
	 * 
	 *     @@my_color red
	 *    
	 *     body { color:  @@my_color; }
	 *
	 *
	 * Save this in a file named `red.less`.
	 *
	 * Next, you have to add the less entry to the `stealconfig.js` file so it
	 * looks like this:
	 *
	 *     steal.config({
	 *         ext: {
	 *             less: "steal/less/less.js"
	 *         }
	 *     });
	 *
	 * This will automatically load the Less parser when the Less file is
	 * loaded. It's expected that all Less files end with `less`.
	 * 
	 * You can steal the Less file like any other file:
	 *
	 *     steal('filename.less')
	 *
	 */
	steal.type("less css", function(options, success, error){
		var pathParts = (options.src+'').split('/');
		pathParts[pathParts.length - 1] = ''; // Remove filename

		var paths = [];
		if (!steal.isRhino) {
			var pathParts = (options.src+'').split('/');
			pathParts[pathParts.length - 1] = ''; // Remove filename
			paths = [pathParts.join('/')];
		}
		new (less.Parser)({
            optimization: less.optimization,
            paths: [pathParts.join('/')]
        }).parse(options.text, function (e, root) {
			options.text = root.toCSS();
			success();
		});
	});
});
steal.executed('steal/less/less.js');
steal("jquery","can","can/construct/super").then("./lib/lib.js","./models/models.js","./controls/controls.js")
.then(function() {
	Bitovi.OSS.initTwitterWidgets = function() {
		if($('.twitter-follow-button').length) {
			// replace the "Follow @canjs!" link with a little wiget with follower count.
			$('#twitter-wjs').remove();
			!function (d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0];
				if (!d.getElementById(id)) {
					js = d.createElement(s);
					js.id = id;
					js.src = "//platform.twitter.com/widgets.js";
					fjs.parentNode.insertBefore(js, fjs);
				}
			}(document, "script", "twitter-wjs");
		}
	};

	Bitovi.OSS.redrawFont = function() {
		var style = $('<style>:before,:after{content:none !important}</style>');
		$('head').append(style);

		window.setTimeout(function() {
			style.remove();
		}, 0);
	};
	
	
	
	var initControls = function(mappings) {
		can.each(mappings, function(name, selector) {
			$(selector).each(function() {
				new Bitovi.OSS[name]($(this));
			});
		});
	}

	$(function() {
		Bitovi.OSS.initTwitterWidgets();
		initControls({
			'#hero-download': 'HeroDownloadCustomizer',
			'.benefits': 'Benefits',
			'.social': 'SocialStats',
			'.cdn': 'CDNChooser',
			'.customize': 'DownloadCustomizer',
			'.hero': 'CommunityTabs',
			'.sidebar': 'Menu'
		});

		// Syntax highlighting
		$('pre code').each(function() {
			var el = $(this).parent();
			el.addClass('prettyprint');
			if(!el.hasClass('nolinenums')) {
				el.addClass('linenums');
			}
		});

		prettyPrint();
	});

	// feature-test for canvas
	var canvas = !!((document.createElement('canvas')).getContext);

	if(canvas) {
		// this needs to wait until everything is loaded.
		$(window).load(function() {

			// Grayscaling for our featured apps.
			Grayscale($('.carousel img'), 300);
		});
	}
});;
steal.executed('documentjs/site/static/build/app.js');
steal('can/util', 'can/control/route', 'can/model', 'can/view/ejs', 'can/route', function(can) {
	return can;
});;
steal.executed('can/can.js');
steal('can/util','can/route','can/control', function(can){
	
	// ## control/route.js  
	// _Controller route integration._
	
	can.Control.processors.route = function( el, event, selector, funcName, controller ) {
		selector = selector || "";
		can.route( selector );
		var batchNum,
			check = function( ev, attr, how ) {
				if ( can.route.attr('route') === ( selector ) && 
					( ev.batchNum === undefined || ev.batchNum !== batchNum ) ) {
					
					batchNum = ev.batchNum;
					
					var d = can.route.attr();
					delete d.route;
					if ( can.isFunction( controller[ funcName ] )) {
						controller[funcName]( d );
					} else {
						controller[controller[funcName]](d);
					}
					
				}
			};
		can.route.bind( 'change', check );
		return function() {
			can.route.unbind( 'change', check );
		};
	};

	return can;
});
;
steal.executed('can/control/route/route.js');
steal('can/util','can/observe', 'can/util/string/deparam', function(can) {

	// ## route.js  
	// `can.route`  
	// _Helps manage browser history (and client state) by synchronizing the 
	// `window.location.hash` with a `can.Observe`._  
	//   
    // Helper methods used for matching routes.
	var 
		// `RegExp` used to match route variables of the type ':name'.
        // Any word character or a period is matched.
        matcher = /\:([\w\.]+)/g,
        // Regular expression for identifying &amp;key=value lists.
        paramsMatcher = /^(?:&[^=]+=[^&]*)+/,
        // Converts a JS Object into a list of parameters that can be 
        // inserted into an html element tag.
		makeProps = function( props ) {
			var tags = [];
			can.each(props, function(val, name){
				tags.push( ( name === 'className' ? 'class'  : name )+ '="' + 
						(name === "href" ? val : can.esc(val) ) + '"');
			});
			return tags.join(" ");
		},
		// Checks if a route matches the data provided. If any route variable
        // is not present in the data, the route does not match. If all route
        // variables are present in the data, the number of matches is returned 
        // to allow discerning between general and more specific routes. 
		matchesData = function(route, data) {
			var count = 0, i = 0, defaults = {};
			// look at default values, if they match ...
			for( var name in route.defaults ) {
				if(route.defaults[name] === data[name]){
					// mark as matched
					defaults[name] = 1;
					count++;
				}
			}
			for (; i < route.names.length; i++ ) {
				if (!data.hasOwnProperty(route.names[i]) ) {
					return -1;
				}
				if(!defaults[route.names[i]]){
					count++;
				}
				
			}
			
			return count;
		},
		onready = !0,
		location = window.location,
		wrapQuote = function(str) {
			return (str+'').replace(/([.?*+\^$\[\]\\(){}|\-])/g, "\\$1");
		},
		each = can.each,
		extend = can.extend;


	can.route = function( url, defaults ) {
        defaults = defaults || {};
        // Extract the variable names and replace with `RegExp` that will match
		// an atual URL with values.
		var names = [],
			test = url.replace(matcher, function( whole, name, i ) {
				names.push(name);
				var next = "\\"+( url.substr(i+whole.length,1) || can.route._querySeparator );
				// a name without a default value HAS to have a value
				// a name that has a default value can be empty
				// The `\\` is for string-escaping giving single `\` for `RegExp` escaping.
				return "([^" +next+"]"+(defaults[name] ? "*" : "+")+")";
			});

		// Add route in a form that can be easily figured out.
		can.route.routes[url] = {
            // A regular expression that will match the route when variable values 
            // are present; i.e. for `:page/:type` the `RegExp` is `/([\w\.]*)/([\w\.]*)/` which
            // will match for any value of `:page` and `:type` (word chars or period).
			test: new RegExp("^" + test+"($|"+wrapQuote(can.route._querySeparator)+")"),
            // The original URL, same as the index for this entry in routes.
			route: url,
            // An `array` of all the variable names in this route.
			names: names,
            // Default values provided for the variables.
			defaults: defaults,
            // The number of parts in the URL separated by `/`.
			length: url.split('/').length
		};
		return can.route;
	};

	/**
	 * @static
	 */
	extend(can.route, {

		_querySeparator: '&',
		_paramsMatcher: paramsMatcher,

		/**
		 * @function can.route.param param
		 * @parent can.route.static
		 * @description Get a route path from given data.
		 * @signature `can.route.param( data )`
		 * @param {data} object The data to populate the route with.
		 * @return {String} The route, with the data populated in it.
		 *
		 * @body
		 * Parameterizes the raw JS object representation provided in data.
		 *
		 *     can.route.param( { type: "video", id: 5 } ) 
		 *          // -> "type=video&id=5"
		 *
		 * If a route matching the provided data is found, that URL is built
		 * from the data. Any remaining data is added at the end of the
		 * URL as &amp; separated key/value parameters.
		 *
		 *     can.route(":type/:id")
		 *     
		 *     can.route.param( { type: "video", id: 5 } ) // -> "video/5"
		 *     can.route.param( { type: "video", id: 5, isNew: false } ) 
		 *          // -> "video/5&isNew=false"
		 */
		param: function( data , _setRoute ) {
			// Check if the provided data keys match the names in any routes;
			// Get the one with the most matches.
			var route,
				// Need to have at least 1 match.
				matches = 0,
				matchCount,
				routeName = data.route,
				propCount = 0;
				
			delete data.route;
			
			each(data, function(){
				propCount++;
			});
			// Otherwise find route.
			each(can.route.routes, function(temp, name){
				// best route is the first with all defaults matching
				
				
				matchCount = matchesData(temp, data);
				if ( matchCount > matches ) {
					route = temp;
					matches = matchCount;
				}
				if(matchCount >= propCount){
					return false;
				}
			});
			// If we have a route name in our `can.route` data, and it's
			// just as good as what currently matches, use that
			if (can.route.routes[routeName] && matchesData(can.route.routes[routeName], data ) === matches) {
				route = can.route.routes[routeName];
			}
			// If this is match...
			if ( route ) {
				var cpy = extend({}, data),
                    // Create the url by replacing the var names with the provided data.
                    // If the default value is found an empty string is inserted.
					res = route.route.replace(matcher, function( whole, name ) {
                        delete cpy[name];
                        return data[name] === route.defaults[name] ? "" : encodeURIComponent( data[name] );
                    }),
                    after;
				// Remove matching default values
				each(route.defaults, function(val,name){
					if(cpy[name] === val) {
						delete cpy[name];
					}
				});
				
				// The remaining elements of data are added as 
				// `&amp;` separated parameters to the url.
				after = can.param(cpy);
				// if we are paraming for setting the hash
				// we also want to make sure the route value is updated
				if(_setRoute){
					can.route.attr('route',route.route);
				}
				return res + (after ? can.route._querySeparator + after : "");
			}
            // If no route was found, there is no hash URL, only paramters.
			return can.isEmptyObject(data) ? "" : can.route._querySeparator + can.param(data);
		},
		/**
		 * @function can.route.deparam deparam
		 * @parent can.route.static
		 * @description Extract data from a route path.
		 * @signature `can.route.deparam( url )`
		 * @param {String} url A route fragment to extract data from.
		 * @return {Object} An object containing the extracted data.
		 * 
		 * @body
		 * Creates a data object based on the query string passed into it. This is 
		 * useful to create an object based on the `location.hash`.
		 *
		 *     can.route.deparam("id=5&type=videos") 
		 *          // -> { id: 5, type: "videos" }
		 *
		 * 
		 * It's important to make sure the hash or exclamantion point is not passed
		 * to `can.route.deparam` otherwise it will be included in the first property's
		 * name.
		 *
		 *     can.route.attr("id", 5) // location.hash -> #!id=5
		 *     can.route.attr("type", "videos") 
		 *          // location.hash -> #!id=5&type=videos
		 *     can.route.deparam(location.hash) 
		 *          // -> { #!id: 5, type: "videos" }
		 *
		 * `can.route.deparam` will try and find a matching route and, if it does,
		 * will deconstruct the URL and parse our the key/value parameters into the data object.
		 *
		 *     can.route(":type/:id")
		 *
		 *     can.route.deparam("videos/5");
		 *          // -> { id: 5, route: ":type/:id", type: "videos" }
		 */
		deparam: function( url ) {
			// See if the url matches any routes by testing it against the `route.test` `RegExp`.
            // By comparing the URL length the most specialized route that matches is used.
			var route = {
				length: -1
			};
			each(can.route.routes, function(temp, name){
				if ( temp.test.test(url) && temp.length > route.length ) {
					route = temp;
				}
			});
            // If a route was matched.
			if ( route.length > -1 ) { 

				var // Since `RegExp` backreferences are used in `route.test` (parens)
                    // the parts will contain the full matched string and each variable (back-referenced) value.
                    parts = url.match(route.test),
                    // Start will contain the full matched string; parts contain the variable values.
					start = parts.shift(),
                    // The remainder will be the `&amp;key=value` list at the end of the URL.
					remainder = url.substr(start.length - (parts[parts.length-1] === can.route._querySeparator ? 1 : 0) ),
                    // If there is a remainder and it contains a `&amp;key=value` list deparam it.
                    obj = (remainder && can.route._paramsMatcher.test(remainder)) ? can.deparam( remainder.slice(1) ) : {};

                // Add the default values for this route.
				obj = extend(true, {}, route.defaults, obj);
                // Overwrite each of the default values in `obj` with those in 
				// parts if that part is not empty.
				each(parts,function(part,  i){
					if ( part && part !== can.route._querySeparator) {
						obj[route.names[i]] = decodeURIComponent( part );
					}
				});
				obj.route = route.route;
				return obj;
			}
            // If no route was matched, it is parsed as a `&amp;key=value` list.
			if ( url.charAt(0) !== can.route._querySeparator ) {
				url = can.route._querySeparator + url;
			}
			return can.route._paramsMatcher.test(url) ? can.deparam( url.slice(1) ) : {};
		},
		/**
		 * @hide
		 * A can.Observe that represents the state of the history.
		 */
		data: new can.Observe({}),
        /**
         * @property {Object} routes
		 * @hide
		 * 
         * A list of routes recognized by the router indixed by the url used to add it.
         * Each route is an object with these members:
         * 
		 *  - test - A regular expression that will match the route when variable values 
         *    are present; i.e. for :page/:type the `RegExp` is /([\w\.]*)/([\w\.]*)/ which
         *    will match for any value of :page and :type (word chars or period).
		 * 
         *  - route - The original URL, same as the index for this entry in routes.
         * 
		 *  - names - An array of all the variable names in this route
         * 
		 *  - defaults - Default values provided for the variables or an empty object.
         * 
		 *  - length - The number of parts in the URL separated by '/'.
         */
		routes: {},
		/**
		 * @function can.route.ready ready
		 * @parent can.route.static
		 * 
		 * @signature `can.route.ready( readyYet )`
		 * 
		 * Pause and resume the initialization of can.route.
		 * 
		 * @param {Boolean} [readyYet] Whether the ready event should be fired yet.
		 * @return {can.route} The `can.route` object.
		 *
		 * @body
		 * Indicates that all routes have been added and sets can.route.data
		 * based upon the routes and the current hash.
		 * 
		 * By default, ready is fired on jQuery's ready event.  Sometimes
		 * you might want it to happen sooner or earlier.  To do this, call:
		 * 
		 *     can.route.ready(false); //prevents firing by the ready event
		 *     can.route.ready(true); // fire the first route change
		 */
		ready: function(val) {
			if( val === false ) {
				onready = val;
			}
			if( val === true || onready === true ) {
				can.route._setup();
				setState();
			}
			return can.route;
		},
		/**
		 * @function can.route.url url
		 * @parent can.route.static
		 * @signature `can.route.url( data [, merge] )`
		 * 
		 * Make a URL fragment that when set to window.location.hash will update can.route's properties
		 * to match those in `data`.
		 * 
		 * @param {Object} data The data to populate the route with.
		 * @param {Boolean} [merge] Whether the given options should be merged into the current state of the route.
		 * @return {String} The route URL and query string.
		 *
		 * @body 
		 * Similar to [can.route.link], but instead of creating an anchor tag, `can.route.url` creates 
		 * only the URL based on the route options passed into it.
		 *
		 *     can.route.url( { type: "videos", id: 5 } ) 
		 *          // -> "#!type=videos&id=5"
		 *
		 * If a route matching the provided data is found the URL is built from the data. Any remaining
		 * data is added at the end of the URL as & separated key/value parameters.
		 *
		 *     can.route(":type/:id")
		 *
		 *     can.route.url( { type: "videos", id: 5 } ) // -> "#!videos/5"
		 *     can.route.url( { type: "video", id: 5, isNew: false } ) 
		 *          // -> "#!video/5&isNew=false"
		 */
		url: function( options, merge ) {
			if (merge) {
				options = extend({}, curParams, options)
			}
			return "#!" + can.route.param(options);
		},
		/**
		 * @function can.route.link link
		 * @parent can.route.static
		 * @signature `can.route.link( innerText, data, props [, merge] )`
		 * 
		 * Make an anchor tag (`<A>`) that when clicked on will update can.route's properties
		 * to match those in `data`.
		 * 
		 * @param {Object} innerText The text inside the link.
		 * @param {Object} data The data to populate the route with.
		 * @param {Object} props Properties for the anchor other than `href`.
		 * @param {Boolean} [merge] Whether the given options should be merged into the current state of the route.
		 * @return {String} A string with an anchor tag that points to the populated route.
		 * 
		 * @body
		 * Creates and returns an anchor tag with an href of the route 
		 * attributes passed into it, as well as any properies desired
		 * for the tag.
		 *
		 *     can.route.link( "My videos", { type: "videos" }, {}, false )
		 *          // -> <a href="#!type=videos">My videos</a>
		 * 
		 * Other attributes besides href can be added to the anchor tag
		 * by passing in a data object with the attributes desired.
		 *
		 *     can.route.link( "My videos", { type: "videos" }, 
		 *       { className: "new" }, false ) 
		 *          // -> <a href="#!type=videos" class="new">My Videos</a>
		 *
		 * It is possible to utilize the current route options when making anchor
		 * tags in order to make your code more reusable. If merge is set to true,
		 * the route options passed into `can.route.link` will be passed into the
		 * current ones.
		 *
		 *     location.hash = "#!type=videos" 
		 *     can.route.link( "The zoo", { id: 5 }, true )
		 *          // -> <a href="#!type=videos&id=5">The zoo</true>
		 *
		 *     location.hash = "#!type=pictures" 
		 *     can.route.link( "The zoo", { id: 5 }, true )
		 *          // -> <a href="#!type=pictures&id=5">The zoo</true>
		 *
		 *
		 */
		link: function( name, options, props, merge ) {
			return "<a " + makeProps(
			extend({
				href: can.route.url(options, merge)
			}, props)) + ">" + name + "</a>";
		},
		/**
		 * @function can.route.current current
		 * @parent can.route.static
		 * @signature `can.route.current( data )`
		 * 
		 * Check if data represents the current route.
		 * 
		 * @param {Object} data Data to check agains the current route.
         * @return {Boolean} Whether the data matches the current URL.
		 * 
		 * @body
		 * Checks the page's current URL to see if the route represents the options passed 
		 * into the function.
		 *
		 * Returns true if the options respresent the current URL.
		 * 
		 *     can.route.attr('id', 5) // location.hash -> "#!id=5"
		 *     can.route.current({ id: 5 }) // -> true
		 *     can.route.current({ id: 5, type: 'videos' }) // -> false
		 *     
		 *     can.route.attr('type', 'videos') 
		 *            // location.hash -> #!id=5&type=videos
		 *     can.route.current({ id: 5, type: 'videos' }) // -> true
		 */
		current: function( options ) {
			return location.hash == "#!" + can.route.param(options)
		},
		_setup: function() {
			// If the hash changes, update the `can.route.data`.
			can.bind.call(window,'hashchange', setState);
		},
		_getHash: function() {
			return location.href.split(/#!?/)[1] || "";
		},
		_setHash: function(serialized) {
			var path = (can.route.param(serialized, true));
			location.hash = "#!" + path;
			return path;
		}
	});
	
	
    // The functions in the following list applied to `can.route` (e.g. `can.route.attr('...')`) will
    // instead act on the `can.route.data` observe.
	each(['bind','unbind','delegate','undelegate','attr','removeAttr'], function(name){
		can.route[name] = function(){
			// `delegate` and `undelegate` require
			// the `can/observe/delegate` plugin
			if(!can.route.data[name]) {
            	return;
			}

			return can.route.data[name].apply(can.route.data, arguments);
		}
	})

	var // A ~~throttled~~ debounced function called multiple times will only fire once the
        // timer runs down. Each call resets the timer.
		timer,
        // Intermediate storage for `can.route.data`.
        curParams,
        // Deparameterizes the portion of the hash of interest and assign the
        // values to the `can.route.data` removing existing values no longer in the hash.
        // setState is called typically by hashchange which fires asynchronously
        // So it's possible that someone started changing the data before the 
        // hashchange event fired.  For this reason, it will not set the route data
        // if the data is changing or the hash already matches the hash that was set.
        setState = can.route.setState = function() {
			var hash = can.route._getHash();
			curParams = can.route.deparam( hash );
			
			// if the hash data is currently changing, or
			// the hash is what we set it to anyway, do NOT change the hash
			if(!changingData || hash !== lastHash){
				can.route.attr(curParams, true);
			}
		},
		// The last hash caused by a data change
		lastHash,
		// Are data changes pending that haven't yet updated the hash
		changingData;

	// If the `can.route.data` changes, update the hash.
    // Using `.serialize()` retrieves the raw data contained in the `observable`.
    // This function is ~~throttled~~ debounced so it only updates once even if multiple values changed.
    // This might be able to use batchNum and avoid this.
	can.route.bind("change", function(ev, attr) {
		// indicate that data is changing
		changingData = 1;
		clearTimeout( timer );
		timer = setTimeout(function() {
			// indicate that the hash is set to look like the data
			changingData = 0;
			var serialized = can.route.data.serialize();

			lastHash = can.route._setHash(serialized);
		}, 1);
	});
	// `onready` event...
	can.bind.call(document,"ready",can.route.ready);

	// Libraries other than jQuery don't execute the document `ready` listener
	// if we are already DOM ready
	if( (document.readyState === 'complete' || document.readyState === "interactive") && onready) {
		can.route.ready();
	}

	// extend route to have a similar property 
	// that is often checked in mustache to determine
	// an object's observability
	can.route.constructor.canMakeObserve = can.Observe.canMakeObserve;

	return can.route;
});
;
steal.executed('can/route/route.js');
steal('can/util','can/util/string', function( can ){
	
	// ## deparam.js  
	// `can.deparam`  
	// _Takes a string of name value pairs and returns a Object literal that represents those params._
	var digitTest = /^\d+$/,
		keyBreaker = /([^\[\]]+)|(\[\])/g,
		paramTest = /([^?#]*)(#.*)?$/,
		prep = function( str ) {
			return decodeURIComponent( str.replace(/\+/g, " ") );
		};
	

	can.extend(can, { 
		/**
		 * @function can.deparam
		 * @parent can.util.function
		 * Takes a string of name value pairs and returns a Object literal that represents those params.
		 * 
		 * @param {String} params a string like <code>"foo=bar&person[age]=3"</code>
		 * @return {Object} A JavaScript Object that represents the params:
		 * 
		 *     {
		 *       foo: "bar",
		 *       person: {
		 *         age: "3"
		 *       }
		 *     }
		 */
		deparam: function(params){
		
			var data = {},
				pairs, lastPart;

			if ( params && paramTest.test( params )) {
				
				pairs = params.split('&'),
				
				can.each( pairs, function( pair ) {

					var parts = pair.split('='),
						key   = prep( parts.shift() ),
						value = prep( parts.join("=")),
						current = data;
					
					if(key) {
						parts = key.match(keyBreaker);
				
						for ( var j = 0, l = parts.length - 1; j < l; j++ ) {
							if (!current[parts[j]] ) {
								// If what we are pointing to looks like an `array`
								current[parts[j]] = digitTest.test(parts[j+1]) || parts[j+1] == "[]" ? [] : {};
							}
							current = current[parts[j]];
						}
						lastPart = parts.pop();
						if ( lastPart == "[]" ) {
							current.push(value);
						} else {
							current[lastPart] = value;
						}
					}
				});
			}
			return data;
		}
	});
	return can;
});
;
steal.executed('can/util/string/deparam/deparam.js');
// this file should not be stolen directly
steal('can/util','can/observe', function( can ) {
	
	// ## model.js  
	// `can.Model`  
	// _A `can.Observe` that connects to a RESTful interface._
	//  
	// Generic deferred piping function
	/**
	 * @add can.Model
	 */
	var	pipe = function( def, model, func ) {
		var d = new can.Deferred();
		def.then(function(){
			var args = can.makeArray( arguments );
			args[0] = model[func](args[0]);
			d.resolveWith(d, args);
		},function(){
			d.rejectWith(this, arguments);
		});

		if(typeof def.abort === 'function') {
			d.abort = function() {
				return def.abort();
			}
		}

		return d;
	},
		modelNum = 0,
		ignoreHookup = /change.observe\d+/,
		getId = function( inst ) {
			// Instead of using attr, use __get for performance.
			// Need to set reading
			can.Observe.__reading && can.Observe.__reading(inst, inst.constructor.id)
			return inst.__get(inst.constructor.id);
		},
		// Ajax `options` generator function
		ajax = function( ajaxOb, data, type, dataType, success, error ) {

			var params = {};
			
			// If we get a string, handle it.
			if ( typeof ajaxOb == "string" ) {
				// If there's a space, it's probably the type.
				var parts = ajaxOb.split(/\s+/);
				params.url = parts.pop();
				if ( parts.length ) {
					params.type = parts.pop();
				}
			} else {
				can.extend( params, ajaxOb );
			}

			// If we are a non-array object, copy to a new attrs.
			params.data = typeof data == "object" && ! can.isArray( data ) ?
				can.extend(params.data || {}, data) : data;
	
			// Get the url with any templated values filled out.
			params.url = can.sub(params.url, params.data, true);

			return can.ajax( can.extend({
				type: type || "post",
				dataType: dataType ||"json",
				success : success,
				error: error
			}, params ));
		},
		makeRequest = function( self, type, success, error, method ) {
			var args;
			// if we pass an array as `self` it it means we are coming from
			// the queued request, and we're passing already serialized data
			// self's signature will be: [self, serializedData]
			if(can.isArray(self)){
				args = self[1];
				self = self[0];
			} else {
				args = self.serialize();
			}
			args = [args];
			var deferred,
				// The model.
				model = self.constructor,
				jqXHR;

			// `destroy` does not need data.
			if ( type == 'destroy' ) {
				args.shift();
			}
			// `update` and `destroy` need the `id`.
			if ( type !== 'create' ) {
				args.unshift(getId(self));
			}

			
			jqXHR = model[type].apply(model, args);
			
			deferred = jqXHR.pipe(function(data){
				self[method || type + "d"](data, jqXHR);
				return self;
			});

			// Hook up `abort`
			if(jqXHR.abort){
				deferred.abort = function(){
					jqXHR.abort();
				};
			}

			deferred.then(success,error);
			return deferred;
		},
	
	// This object describes how to make an ajax request for each ajax method.  
	// The available properties are:
	//		`url` - The default url to use as indicated as a property on the model.
	//		`type` - The default http request type
	//		`data` - A method that takes the `arguments` and returns `data` used for ajax.
	/** 
	 * @static
	 */
	//
		/**
		 * @function can.Model.bind bind
		 * @parent can.Model.static
		 * @description Listen for events on a Model class.
		 *
		 * @signature `can.Model.bind(eventType, handler)`
		 * @param {String} eventType The type of event.  It must be
		 * `"created"`, `"udpated"`, `"destroyed"`.
		 * @param {function} handler A callback function
		 * that gets called with the event and instance that was
		 * created, destroyed, or updated.
		 * @return {can.Model} The model constructor function.
		 *
		 * @body
		 * `bind(eventType, handler(event, instance))` listens to
		 * __created__, __updated__, __destroyed__ events on all 
		 * instances of the model.
		 * 
		 *     Task.bind("created", function(ev, createdTask){
		 * 	     this //-> Task
		 *       createdTask.attr("name") //-> "Dishes"
		 *     })
		 *     
		 *     new Task({name: "Dishes"}).save();
		 */
		// 
		/**
		 * @function can.Model.unbind unbind
		 * @parent can.Model.static
		 * @description Stop listening for events on a Model class.
		 * 
		 * @signature `can.Model.unbind(eventType, handler)`
		 * @param {String} eventType The type of event. It must be
		 * `"created"`, `"udpated"`, `"destroyed"`.
		 * @param {function} handler A callback function
		 * that was passed to `bind`.
		 * @return {can.Model} The model constructor function.
		 *
		 * @body
		 * `unbind(eventType, handler)` removes a listener
		 * attached with [can.Model.bind].
		 * 
		 *     var handler = function(ev, createdTask){
		 * 	     
		 *     }
		 *     Task.bind("created", handler)
		 *     Task.unbind("created", handler)
		 * 
		 * You have to pass the same function to `unbind` that you
		 * passed to `bind`.
		 */
		// 
		/**
		 * @property {String} can.Model.id id
		 * @parent can.Model.static
		 * The name of the id field.  Defaults to `'id'`. Change this if it is something different.
		 * 
		 * For example, it's common in .NET to use `'Id'`.  Your model might look like:
		 * 
		 *     Friend = can.Model.extend({
		 *       id: "Id"
		 *     },{});
		 */
		/**
		 * @property {Boolean} can.Model.removeAttr removeAttr
		 * @parent can.Model.static
		 * Sets whether model conversion should remove non existing attributes or merge with
		 * the existing attributes. The default is `false`.
		 * For example, if `Task.findOne({ id: 1 })` returns
		 *
		 *      { id: 1, name: 'Do dishes', index: 1, color: ['red', 'blue'] }
		 *
         * for the first request and
		 *
		 *      { id: 1, name: 'Really do dishes', color: ['green'] }
		 *
		 *  for the next request, the actual model attributes would look like:
		 *
		 *      { id: 1, name: 'Really do dishes', index: 1, color: ['green', 'blue'] }
		 *
		 *  Because the attributes of the original model and the updated model will
		 *  be merged. Setting `removeAttr` to `true` will result in model attributes like
		 *
		 *      { id: 1, name: 'Really do dishes', color: ['green'] }
		 *
		 */
	ajaxMethods = {
		/**
		 * @description Specifies how to create a new resource on the server. `create(serialized)` is called 
		 * by [can.Model.prototype.save save] if the model instance [can.Model.prototype.isNew is new].
		 * @function can.Model.create create
		 * @parent can.Model.static
		 * 
		 * 
		 * @signature `can.Model.create: function(serialized) -> seferred`
		 * 
		 * Specify a function to create persistent instances. The function will
		 * typically perform an AJAX request to a service that results in
		 * creating a record in a database.
		 * 
		 * @param {Object} serialized The [can.Observe::serialize serialized] properties of
		 * the model to create.
		 * @return {can.Deferred} A Deferred that resolves to an object of attributes
		 * that will be added to the created model isntance.  The object __MUST__ contain
		 * an [can.Model.id id] property so that future calls to [can.Model.prototype.save save]
		 * will call [can.Model.update].
		 * 
		 * 
		 * @signature `can.Model.create: "[METHOD] /path/to/resource"`
		 * 
		 * Specify a HTTP method and url to create persistent instances.
		 * 
		 * If you provide a URL, the Model will send a request to that URL using
		 * the method specified (or POST if none is specified) when saving a
		 * new instance on the server. (See below for more details.)
		 * 
		 * @param {HttpMethod} METHOD An HTTP method. Defaults to `"POST"`.
		 * @param {STRING} url The URL of the service to retrieve JSON data.
		 * 
		 * 
		 * @signature `can.Model.create: {ajaxSettings}`
		 * 
		 * Specify an options object that is used to make a HTTP request to create
		 * persistent instances.
		 * 
		 * @param {can.AjaxSettings} ajaxSettings A settings object that
		 * specifies the options available to pass to [can.ajax].
		 * 
		 * @body
		 * 
		 * `create(attributes) -> Deferred` is used by [can.Model::save save] to create a 
		 * model instance on the server. 
		 * 
		 * ## Implement with a URL
		 * 
		 * The easiest way to implement create is to give it the url 
		 * to post data to:
		 * 
		 *     var Recipe = can.Model.extend({
		 *       create: "/recipes"
		 *     },{})
		 *     
		 * This lets you create a recipe like:
		 *  
		 *     new Recipe({name: "hot dog"}).save();
		 * 
		 * 
		 * ## Implement with a Function
		 * 
		 * You can also implement create by yourself. Create gets called 
		 * with `attrs`, which are the [can.Observe::serialize serialized] model 
		 * attributes.  Create returns a `Deferred` 
		 * that contains the id of the new instance and any other 
		 * properties that should be set on the instance.
		 *  
		 * For example, the following code makes a request 
		 * to `POST /recipes.json {'name': 'hot+dog'}` and gets back
		 * something that looks like:
		 *  
		 *     { 
		 *       "id": 5,
		 *       "createdAt": 2234234329
		 *     }
		 * 
		 * The code looks like:
		 * 
		 *     can.Model.extend("Recipe", {
		 *       create : function( attrs ){
		 *         return $.post("/recipes.json",attrs, undefined ,"json");
		 *       }
		 *     },{})
		 */
		create : {
			url : "_shortName",
			type :"post"
		},
		/**
		 * @description Update a resource on the server.
		 * @function can.Model.update update
		 * @parent can.Model.static
		 * @signature `can.Model.update: "[METHOD] /path/to/resource"`
		 * If you provide a URL, the Model will send a request to that URL using
		 * the method specified (or PUT if none is specified) when updating an
		 * instance on the server. (See below for more details.)
		 * @return {can.Deferred} A Deferred that resolves to the updated model.
		 *
		 * @signature `can.Model.update: function(id, serialized) -> can.Deffered`
		 * If you provide a function, the Model will expect you to do your own AJAX requests.
		 * @param {*} id The ID of the model to update.
		 * @param {Object} serialized The [can.Observe::serialize serialized] properties of
		 * the model to update.
		 * @return {can.Deferred} A Deferred that resolves to the updated model.
		 *
		 * @body
		 * `update( id, attrs ) -> Deferred` is used by [can.Model::save save] to 
		 * update a model instance on the server. 
		 * 
		 * ## Implement with a URL
		 * 
		 * The easist way to implement update is to just give it the url to `PUT` data to:
		 * 
		 *     Recipe = can.Model.extend({
		 *       update: "/recipes/{id}"
		 *     },{});
		 *     
		 * This lets you update a recipe like:
		 *  
		 *     Recipe.findOne({id: 1}, function(recipe){
		 *       recipe.attr('name','salad');
		 *       recipe.save();
		 *     })
		 * 
		 * This will make an XHR request like:
		 * 
		 *     PUT /recipes/1 
		 *     name=salad
		 *  
		 * If your server doesn't use PUT, you can change it to post like:
		 * 
		 *     Recipe = can.Model.extend({
		 *       update: "POST /recipes/{id}"
		 *     },{});
		 * 
		 * The server should send back an object with any new attributes the model 
		 * should have.  For example if your server udpates the "updatedAt" property, it
		 * should send back something like:
		 * 
		 *     // PUT /recipes/4 {name: "Food"} ->
		 *     {
		 *       updatedAt : "10-20-2011"
		 *     }
		 * 
		 * ## Implement with a Function
		 * 
		 * You can also implement update by yourself.  Update takes the `id` and
		 * `attributes` of the instance to be udpated.  Update must return
		 * a [can.Deferred Deferred] that resolves to an object that contains any 
		 * properties that should be set on the instance.
		 *  
		 * For example, the following code makes a request 
		 * to '/recipes/5.json?name=hot+dog' and gets back
		 * something that looks like:
		 *  
		 *     { 
		 *       updatedAt: "10-20-2011"
		 *     }
		 * 
		 * The code looks like:
		 * 
		 *     Recipe = can.Model.extend({
		 *       update : function(id, attrs ) {
		 *         return $.post("/recipes/"+id+".json",attrs, null,"json");
		 *       }
		 *     },{});
		 */
		update : {
			data : function(id, attrs){
				attrs = attrs || {};
				var identity = this.id;
				if ( attrs[identity] && attrs[identity] !== id ) {
					attrs["new" + can.capitalize(id)] = attrs[identity];
					delete attrs[identity];
				}
				attrs[identity] = id;
				return attrs;
			},
			type : "put"
		},
		/**
		 * @description Destroy a resource on the server.
		 * @function can.Model.destroy destroy
		 * @parent can.Model.static
		 * 
		 * @signature `can.Model.destroy: function(id) -> deferred`
		 * 
		 * 
		 * 
		 * If you provide a function, the Model will expect you to do your own AJAX requests.
		 * @param {*} id The ID of the resource to destroy.
		 * @return {can.Deferred} A Deferred that resolves to the destroyed model.
		 * 
		 * 
		 * @signature `can.Model.destroy: "[METHOD] /path/to/resource"`
		 * 
		 * If you provide a URL, the Model will send a request to that URL using
		 * the method specified (or DELETE if none is specified) when deleting an
		 * instance on the server. (See below for more details.)
		 * 
		 * @return {can.Deferred} A Deferred that resolves to the destroyed model.
		 *
		 *
		 *
		 * @body
		 * `destroy(id) -> Deferred` is used by [can.Model::destroy] remove a model 
		 * instance from the server.
		 * 
		 * ## Implement with a URL
		 * 
		 * You can implement destroy with a string like:
		 * 
		 *     Recipe = can.Model.extend({
		 *       destroy : "/recipe/{id}"
		 *     },{})
		 * 
		 * And use [can.Model::destroy] to destroy it like:
		 * 
		 *     Recipe.findOne({id: 1}, function(recipe){
		 * 	      recipe.destroy();
		 *     });
		 * 
		 * This sends a `DELETE` request to `/thing/destroy/1`.
		 * 
		 * If your server does not support `DELETE` you can override it like:
		 * 
		 *     Recipe = can.Model.extend({
		 *       destroy : "POST /recipe/destroy/{id}"
		 *     },{})
		 * 
		 * ## Implement with a function
		 * 
		 * Implement destroy with a function like:
		 * 
		 *     Recipe = can.Model.extend({
		 *       destroy : function(id){
		 *         return $.post("/recipe/destroy/"+id,{});
		 *       }
		 *     },{})
		 * 
		 * Destroy just needs to return a deferred that resolves.
		 */
		destroy : {
			type : "delete",
			data : function(id){
				var args = {};
				args.id = args[this.id] = id;
				return args;
			}
		},
		/**
		 * @description Retrieve multiple resources from a server.
		 * @function can.Model.findAll findAll
		 * @parent can.Model.static
		 * 
		 * @signature `can.Model.findAll( params[, success[, error]] )`
		 * 
		 * Retrieve multiple resources from a server.
		 * 
		 * @param {Object} params Values to filter the request or results with.
		 * @param {function(can.Model.List)} [success(list)] A callback to call on successful retrieval. The callback recieves
		 * a can.Model.List of the retrieved resources.
		 * @param {function(can.AjaxSettings)} [error(xhr)] A callback to call when an error occurs. The callback receives the
		 * XmlHttpRequest object.
		 * @return {can.Deferred} A deferred that resolves to a [can.Model.List] of retrieved models.
		 *
		 * 
		 * @signature `can.Model.findAll: findAllData( params ) -> deferred`
		 * 
		 * Implements `findAll` with a [can.Model.findAllData function]. This function
		 * is passed to [can.Model.makeFindAll makeFindAll] to create the external 
		 * `findAll` method.
		 * 
		 *     findAll: function(params){
		 *       return $.get("/tasks",params)  
		 *     }
		 * 
		 * @param {can.Model.findAllData} findAllData A function that accepts parameters
		 * specifying a list of instance data to retreive and returns a [can.Deferred]
		 * that resolves to an array of those instances.
		 * 
		 * @signature `can.Model.findAll: "[METHOD] /path/to/resource"`
		 * 
		 * Implements `findAll` with a HTTP method and url to retrieve instance data. 
		 * 
		 *     findAll: "GET /tasks"
		 * 
		 * If `findAll` is implemented with a string, this gets converted to 
		 * a [can.Model.findAllData findAllData function]
		 * which is passed to [can.Model.makeFindAll makeFindAll] to create the external 
		 * `findAll` method.
		 * 
		 * @param {HttpMethod} METHOD An HTTP method. Defaults to `"GET"`.
		 * 
		 * @param {STRING} url The URL of the service to retrieve JSON data.
		 * 
		 * @return {JSON} The service should return a JSON object like:
		 * 
		 *     {
		 *       "data": [
		 *         { "id" : 1, "name" : "do the dishes" },
		 *         { "id" : 2, "name" : "mow the lawn" },
		 *         { "id" : 3, "name" : "iron my shirts" }
		 *       ]
		 *     }
		 * 
		 * This object is passed to [can.Model.models] to turn it into instances.
		 * 
		 * _Note: .findAll can also accept an array, but you 
		 * probably [should not be doing that](http://haacked.com/archive/2008/11/20/anatomy-of-a-subtle-json-vulnerability.aspx)._
		 * 
		 * 
		 * @signature `can.Model.findAll: {ajaxSettings}`
		 * 
		 * Implements `findAll` with a [can.AjaxSettings ajax settings object].
		 * 
		 *     findAll: {url: "/tasks", dataType: "json"}
		 * 
		 * If `findAll` is implemented with an object, it gets converted to 
		 * a [can.Model.findAllData findAllData function]
		 * which is passed to [can.Model.makeFindAll makeFindAll] to create the external 
		 * `findAll` method.
		 * 
		 * @param {can.AjaxSettings} ajaxSettings A settings object that
		 * specifies the options available to pass to [can.ajax].
		 * 
		 * @body
		 * 
		 * ## Use
		 * 
		 * `findAll( params, success(instances), error(xhr) ) -> Deferred` is used to retrieve model 
		 * instances from the server. After implementing `findAll`, use it to retrieve instances of the model
		 * like:
		 * 
		 *     Recipe.findAll({favorite: true}, function(recipes){
		 *       recipes[0].attr('name') //-> "Ice Water"
		 *     }, function( xhr ){
		 *       // called if an error
		 *     }) //-> Deferred
		 * 
		 * 
		 * Before you can use `findAll`, you must implement it.
		 * 
		 * ## Implement with a URL
		 * 
		 * Implement findAll with a url like:
		 * 
		 *     Recipe = can.Model.extend({
		 *       findAll : "/recipes.json"
		 *     },{});
		 * 
		 * The server should return data that looks like:
		 * 
		 *     [
		 *       {"id" : 57, "name": "Ice Water"},
		 *       {"id" : 58, "name": "Toast"}
		 *     ]
		 * 
		 * ## Implement with an Object
		 * 
		 * Implement findAll with an object that specifies the parameters to
		 * `can.ajax` (jQuery.ajax) like:
		 * 
		 *     Recipe = can.Model.extend({
		 *       findAll : {
		 *         url: "/recipes.xml",
		 *         dataType: "xml"
		 *       }
		 *     },{})
		 * 
		 * ## Implement with a Function
		 * 
		 * To implement with a function, `findAll` is passed __params__ to filter
		 * the instances retrieved from the server and it should return a
		 * deferred that resolves to an array of model data. For example:
		 * 
		 *     Recipe = can.Model.extend({
		 *       findAll : function(params){
		 *         return $.ajax({
		 *           url: '/recipes.json',
		 *           type: 'get',
		 *           dataType: 'json'})
		 *       }
		 *     },{})
		 * 
		 */
		findAll : {
			url : "_shortName"
		},
		/**
		 * @description Retrieve a resource from a server.
		 * @function can.Model.findOne findOne
		 * @parent can.Model.static
		 * 
		 * @signature `can.Model.findOne( params[, success[, error]] )`
		 * 
		 * Retrieve a single instance from the server.
		 * 
		 * @param {Object} params Values to filter the request or results with.
		 * @param {function(can.Model)} [success(model)] A callback to call on successful retrieval. The callback recieves
		 * the retrieved resource as a can.Model.
		 * @param {function(can.AjaxSettings)} [error(xhr)] A callback to call when an error occurs. The callback receives the
		 * XmlHttpRequest object.
		 * @return {can.Deferred} A deferred that resolves to a [can.Model.List] of retrieved models.
		 * 
		 * @signature `can.Model.findOne: findOneData( params ) -> deferred`
		 * 
		 * Implements `findOne` with a [can.Model.findOneData function]. This function
		 * is passed to [can.Model.makeFindOne makeFindOne] to create the external 
		 * `findOne` method.
		 * 
		 *     findOne: function(params){
		 *       return $.get("/task/"+params.id)  
		 *     }
		 * 
		 * @param {can.Model.findOneData} findOneData A function that accepts parameters
		 * specifying an instance to retreive and returns a [can.Deferred]
		 * that resolves to that instance.
		 * 
		 * @signature `can.Model.findOne: "[METHOD] /path/to/resource"`
		 * 
		 * Implements `findOne` with a HTTP method and url to retrieve an instance's data. 
		 * 
		 *     findOne: "GET /tasks/{id}"
		 * 
		 * If `findOne` is implemented with a string, this gets converted to 
		 * a [can.Model.makeFindOne makeFindOne function]
		 * which is passed to [can.Model.makeFindOne makeFindOne] to create the external 
		 * `findOne` method.
		 * 
		 * @param {HttpMethod} METHOD An HTTP method. Defaults to `"GET"`.
		 * 
		 * @param {STRING} url The URL of the service to retrieve JSON data.
		 * 
		 * @signature `can.Model.findOne: {ajaxSettings}`
		 * 
		 * Implements `findOne` with a [can.AjaxSettings ajax settings object].
		 * 
		 *     findOne: {url: "/tasks/{id}", dataType: "json"}
		 * 
		 * If `findOne` is implemented with an object, it gets converted to 
		 * a [can.Model.makeFindOne makeFindOne function]
		 * which is passed to [can.Model.makeFindOne makeFindOne] to create the external 
		 * `findOne` method.
		 * 
		 * @param {can.AjaxSettings} ajaxSettings A settings object that
		 * specifies the options available to pass to [can.ajax].
		 * 
		 * @body
		 * 
		 * ## Use
		 * 
		 * `findOne( params, success(instance), error(xhr) ) -> Deferred` is used to retrieve a model 
		 * instance from the server. 
		 * 
		 * Use `findOne` like:
		 * 
		 *     Recipe.findOne({id: 57}, function(recipe){
		 * 	     recipe.attr('name') //-> "Ice Water"
		 *     }, function( xhr ){
		 * 	     // called if an error
		 *     }) //-> Deferred
		 * 
		 * Before you can use `findOne`, you must implement it.
		 * 
		 * ## Implement with a URL
		 * 
		 * Implement findAll with a url like:
		 * 
		 *     Recipe = can.Model.extend({
		 *       findOne : "/recipes/{id}.json"
		 *     },{});
		 * 
		 * If `findOne` is called like:
		 * 
		 *     Recipe.findOne({id: 57});
		 * 
		 * The server should return data that looks like:
		 * 
		 *     {"id" : 57, "name": "Ice Water"}
		 * 
		 * ## Implement with an Object
		 * 
		 * Implement `findOne` with an object that specifies the parameters to
		 * `can.ajax` (jQuery.ajax) like:
		 * 
		 *     Recipe = can.Model.extend({
		 *       findOne : {
		 *         url: "/recipes/{id}.xml",
		 *         dataType: "xml"
		 *       }
		 *     },{})
		 * 
		 * ## Implement with a Function
		 * 
		 * To implement with a function, `findOne` is passed __params__ to specify
		 * the instance retrieved from the server and it should return a
		 * deferred that resolves to the model data.  Also notice that you now need to
		 * build the URL manually. For example:
		 * 
		 *     Recipe = can.Model.extend({
		 *       findOne : function(params){
		 *         return $.ajax({
		 *           url: '/recipes/' + params.id,
		 *           type: 'get',
		 *           dataType: 'json'})
		 *       }
		 *     },{})
		 * 
		 * 
		 */
		findOne: {}
	},
		// Makes an ajax request `function` from a string.
		//		`ajaxMethod` - The `ajaxMethod` object defined above.
		//		`str` - The string the user provided. Ex: `findAll: "/recipes.json"`.
		ajaxMaker = function(ajaxMethod, str){
			// Return a `function` that serves as the ajax method.
			return function(data){
				// If the ajax method has it's own way of getting `data`, use that.
				data = ajaxMethod.data ? 
					ajaxMethod.data.apply(this, arguments) :
					// Otherwise use the data passed in.
					data;
				// Return the ajax method with `data` and the `type` provided.
				return ajax(str || this[ajaxMethod.url || "_url"], data, ajaxMethod.type || "get")
			}
		}


	
	
	can.Model = can.Observe({
		fullName: "can.Model",
		_reqs: 0,
		/**
		 * @hide
		 * @function can.Model.setup
		 * @parent can.Model.static
		 * 
		 * Configures 
		 * 
		 */
		setup : function(base){
			// create store here if someone wants to use model without inheriting from it
			this.store = {};
			can.Observe.setup.apply(this, arguments);
			// Set default list as model list
			if(!can.Model){
				return;
			}
			this.List = ML({Observe: this},{});
			var self = this,
				clean = can.proxy(this._clean, self);
			
			
			// go through ajax methods and set them up
			can.each(ajaxMethods, function(method, name){
				// if an ajax method is not a function, it's either
				// a string url like findAll: "/recipes" or an
				// ajax options object like {url: "/recipes"}
				if ( ! can.isFunction( self[name] )) {
					// use ajaxMaker to convert that into a function
					// that returns a deferred with the data
					self[name] = ajaxMaker(method, self[name]);
				}
				// check if there's a make function like makeFindAll
				// these take deferred function and can do special
				// behavior with it (like look up data in a store)
				if (self["make"+can.capitalize(name)]){
					// pass the deferred method to the make method to get back
					// the "findAll" method.
					var newMethod = self["make"+can.capitalize(name)](self[name]);
					can.Construct._overwrite(self, base, name,function(){
						// increment the numer of requests
						can.Model._reqs++;
						var def = newMethod.apply(this, arguments);
						var then = def.then(clean, clean);
						then.abort = def.abort;

						// attach abort to our then and return it
						return then;
					})
				}
			});

			if(self.fullName == "can.Model" || !self.fullName){
				self.fullName = "Model"+(++modelNum);
			}
			// Add ajax converters.
			can.Model._reqs = 0;
			this._url = this._shortName+"/{"+this.id+"}"
		},
		_ajax : ajaxMaker,
		_makeRequest : makeRequest,
		_clean : function(){
			can.Model._reqs--;
			if(!can.Model._reqs){
				for(var id in this.store) {
					if(!this.store[id]._bindings){
						delete this.store[id];
					}
				}
			}
			return arguments[0];
		},
		/**
		 * @function can.Model.models models
		 * @parent can.Model.static
		 * @description Convert raw data into can.Model instances.
		 * @signature `can.Model.models(data[, oldList])`
		 * @param {Array<Object>} data The raw data from a `[can.Model.findAll findAll()]` request.
		 * @param {can.Model.List} [oldList] If supplied, this List will be updated with the data from
		 * __data__.
		 * @return {can.Model.List} A List of Models made from the raw data.
		 * 
		 * @body
		 * `can.Model.models(data, xhr)` is used to 
		 * convert the raw response of a [can.Model.findAll] request 
		 * into a [can.Model.List] of model instances.  
		 * 
		 * This method is rarely called directly. Instead the deferred returned
		 * by findAll is piped into `models`.  This creates a new deferred that
		 * resolves to a [can.Model.List] of instances instead of an array of
		 * simple JS objects.
		 * 
		 * If your server is returning data in non-standard way,
		 * overwriting `can.Model.models` is the best way to normalize it.
		 * 
		 * ## Quick Example
		 * 
		 * The following uses models to convert to a [can.Model.List] of model
		 * instances.
		 * 
		 *     Task = can.Model.extend({},{})
		 *     var tasks = Task.models([
		 *       {id: 1, name : "dishes", complete : false},
		 *       {id: 2, name: "laundry", compelte: true}
		 *     ])
		 *     
		 *     tasks.attr("0.complete", true)
		 * 
		 * ## Non-standard Services
		 * 
		 * `can.Model.models` expects data to be an array of name-value pair 
		 * objects like:
		 * 
		 *     [{id: 1, name : "dishes"},{id:2, name: "laundry"}, ...]
		 *     
		 * It can also take an object with additional data about the array like:
		 * 
		 *     {
		 *       count: 15000 //how many total items there might be
		 *       data: [{id: 1, name : "justin"},{id:2, name: "brian"}, ...]
		 *     }
		 * 
		 * In this case, models will return a [can.Model.List] of instances found in 
		 * data, but with additional properties as expandos on the list:
		 * 
		 *     var tasks = Task.models({
		 *       count : 1500,
		 *       data : [{id: 1, name: 'dishes'}, ...]
		 *     })
		 *     tasks.attr("name") // -> 'dishes'
		 *     tasks.count // -> 1500
		 * 
		 * ### Overwriting Models
		 * 
		 * If your service returns data like:
		 * 
		 *     {thingsToDo: [{name: "dishes", id: 5}]}
		 * 
		 * You will want to overwrite models to pass the base models what it expects like:
		 * 
		 *     Task = can.Model.extend({
		 *       models : function(data){
		 *         return can.Model.models.call(this,data.thingsToDo);
		 *       }
		 *     },{})
		 * 
		 * `can.Model.models` passes each intstance's data to `can.Model.model` to
		 * create the individual instances.
		 */
		models: function( instancesRawData, oldList ) {
			// until "end of turn", increment reqs counter so instances will be added to the store
			can.Model._reqs++;
			if ( ! instancesRawData ) {
				return;
			}
      
			if ( instancesRawData instanceof this.List ) {
				return instancesRawData;
			}

			// Get the list type.
			var self = this,
				tmp = [],
				res = oldList instanceof can.Observe.List ? oldList : new( self.List || ML),
				// Did we get an `array`?
				arr = can.isArray(instancesRawData),
				
				// Did we get a model list?
				ml = (instancesRawData instanceof ML),

				// Get the raw `array` of objects.
				raw = arr ?

				// If an `array`, return the `array`.
				instancesRawData :

				// Otherwise if a model list.
				(ml ?

				// Get the raw objects from the list.
				instancesRawData.serialize() :

				// Get the object's data.
				instancesRawData.data),
				i = 0;

			

			if(res.length) {
				res.splice(0);
			}

			can.each(raw, function( rawPart ) {
				tmp.push( self.model( rawPart ));
			});

			// We only want one change event so push everything at once
			res.push.apply(res, tmp);

			if ( ! arr ) { // Push other stuff onto `array`.
				can.each(instancesRawData, function(val, prop){
					if ( prop !== 'data' ) {
						res.attr(prop, val);
					}
				})
			}
			// at "end of turn", clean up the store
			setTimeout(can.proxy(this._clean, this), 1);
			return res;
		},
		/**
		 * @function can.Model.model model
		 * @parent can.Model.static
		 * @description Convert raw data into a can.Model instance.
		 * @signature `can.Model.model(data)`
		 * @param {Object} data The data to convert to a can.Model instance.
		 * @return {can.Model} An instance of can.Model made with the given data.
		 * 
		 * @body
		 * `can.Model.model(attributes)` is used to convert data from the server into
		 * a model instance.  It is rarely called directly.  Instead it is invoked as 
		 * a result of [can.Model.findOne] or [can.Model.findAll].  
		 * 
		 * If your server is returning data in non-standard way,
		 * overwriting `can.Model.model` is a good way to normalize it.
		 * 
		 * ## Example
		 * 
		 * The following uses `model` to convert to a model
		 * instance.
		 * 
		 *     Task = can.Model.extend({},{})
		 *     var task = Task.model({id: 1, name : "dishes", complete : false})
		 *     
		 *     tasks.attr("complete", true)
		 * 
		 * `Task.model(attrs)` is very similar to simply calling `new Model(attrs)` except
		 * that it checks the model's store if the instance has already been created.  The model's 
		 * store is a collection of instances that have event handlers.  
		 * 
		 * This means that if the model's store already has an instance, you'll get the same instance
		 * back.  Example:
		 * 
		 *     // create a task
		 *     var taskA = new Task({id: 5, complete: true});
		 * 
		 *     // bind to it, which puts it in the store
		 * 	   taskA.bind("complete", function(){});
		 *     
		 *     // use model to create / retrieve a task
		 *     var taskB = Task.model({id: 5, complete: true});
		 *     
		 *     taskA === taskB //-> true
		 * 
		 * ## Non-standard Services
		 * 
		 * `can.Model.model` expects to retreive attributes of the model 
		 * instance like:
		 * 
		 * 
		 *     {id: 5, name : "dishes"}
		 *     
		 * 
		 * If the service returns data formatted differently, like:
		 * 
		 *     {todo: {name: "dishes", id: 5}}
		 * 
		 * Overwrite `model` like:
		 * 
		 *     Task = can.Model.extend({
		 *       model : function(data){
		 *         return can.Model.model.call(this,data.todo);
		 *       }
		 *     },{});
		 */
		model: function( attributes ) {
			if ( ! attributes ) {
				return;
			}
			if ( attributes instanceof this ) {
				attributes = attributes.serialize();
			}
			var id = attributes[ this.id ],
			    model = (id || id === 0) && this.store[id] ?
				    this.store[id].attr(attributes, this.removeAttr || false) : new this( attributes );
			if(can.Model._reqs){
				this.store[attributes[this.id]] = model;
			}
			return model;
		}
	},


	/**
	 * @prototype
	 */
	{
		/**
		 * @function can.Model.prototype.isNew isNew
		 * @description Check if a Model has yet to be saved on the server.
		 * @signature `model.isNew()`
		 * @return {Boolean} Whether an instance has been saved on the server.
		 * (This is determined by whether `id` has a value set yet.)
		 *
		 * @body
		 * `isNew()` returns if the instance is has been created 
		 * on the server. This is essentially if the [can.Model.id]
		 * property is null or undefined.
		 * 
		 *     new Recipe({id: 1}).isNew() //-> false
		 */
		isNew: function() {
			var id = getId(this);
			return ! ( id || id === 0 ); // If `null` or `undefined`
		},
		/**
		 * @function can.Model.prototype.save save
		 * @description Save a model back to the server.
		 * @signature `model.save([success[, error]])`
		 * @param {function} [success] A callback to call on successful save. The callback recieves
		 * the can.Model after saving.
		 * @param {function} [error] A callback to call when an error occurs. The callback receives the
		 * XmlHttpRequest object.
		 * @return {can.Deferred} A Deferred that resolves to the Model after it has been saved.
		 *
		 * @body
		 * `model.save([success(model)],[error(xhr)])` creates or updates 
		 * the model instance using [can.Model.create] or
		 * [can.Model.update] depending if the instance
		 * [can.Model::isNew has an id or not].
		 * 
		 * ## Using `save` to create an instance.
		 * 
		 * If `save` is called on an instance that does not have 
		 * an [can.Model.id id] property, it calls [can.Model.create]
		 * with the instance's properties.  It also [can.trigger triggers]
		 * a "created" event on the instance and the model.
		 * 
		 *     // create a model instance
		 *     var todo = new Todo({name: "dishes"})
		 *     
		 *     // listen when the instance is created
		 *     todo.bind("created", function(ev){
		 * 	     this //-> todo
		 *     })
		 *     
		 *     // save it on the server
		 *     todo.save(function(todo){
		 * 	     console.log("todo", todo, "created")
		 *     });
		 * 
		 * ## Using `save` to update an instance.
		 * 
		 * If save is called on an instance that has 
		 * an [can.Model.id id] property, it calls [can.Model.create]
		 * with the instance's properties.  When the save is complete,
		 * it triggers an "updated" event on the instance and the instance's model.
		 * 
		 * Instances with an
		 * __id__ are typically retrieved with [can.Model.findAll] or
		 * [can.Model.findOne].  
		 * 
		 *  
		 *     // get a created model instance
		 *     Todo.findOne({id: 5},function(todo){
		 *       	     
		 *       // listen when the instance is updated
		 *       todo.bind("updated", function(ev){
		 * 	       this //-> todo
		 *       })
		 * 
		 *       // update the instance's property
		 *       todo.attr("complete", true)
		 *       
		 *       // save it on the server
		 *       todo.save(function(todo){
		 * 	       console.log("todo", todo, "updated")
		 *       });
		 * 
		 *     });
		 * 
		 */
		save: function( success, error ) {
			return makeRequest(this, this.isNew() ? 'create' : 'update', success, error);
		},
		/**
		 * @function can.Model.prototype.destroy destroy
		 * @description Destroy a Model on the server.
		 * @signature `model.destroy([success[, error]])`
		 * @param {function} [success] A callback to call on successful destruction. The callback recieves
		 * the can.Model as it was just prior to destruction.
		 * @param {function} [error] A callback to call when an error occurs. The callback receives the
		 * XmlHttpRequest object.
		 * @return {can.Deferred} A Deferred that resolves to the Model as it was before destruction.
		 *
		 * @body
		 * Destroys the instance by calling 
		 * [Can.Model.destroy] with the id of the instance.
		 * 
		 *     recipe.destroy(success, error);
		 * 
		 * This triggers "destroyed" events on the instance and the 
		 * Model constructor function which can be listened to with
		 * [can.Model::bind] and [can.Model.bind]. 
		 * 
		 *     Recipe = can.Model.extend({
		 *       destroy : "DELETE /services/recipes/{id}",
		 *       findOne : "/services/recipes/{id}"
		 *     },{})
		 *     
		 *     Recipe.bind("destroyed", function(){
		 *       console.log("a recipe destroyed");	
		 *     });
		 * 
		 *     // get a recipe
		 *     Recipe.findOne({id: 5}, function(recipe){
		 *       recipe.bind("destroyed", function(){
		 *         console.log("this recipe destroyed")	
		 *       })
		 *       recipe.destroy();
		 *     })
		 */
		destroy: function( success, error ) {
			if(this.isNew()) {
				var self = this;
				var def = can.Deferred();
				def.then(success, error);
				return def.done(function(data) {
					self.destroyed(data)
				}).resolve(self);
			}
			return makeRequest(this, 'destroy', success, error, 'destroyed');
		},
		/**
		 * @description Listen to events on this Model.
		 * @function can.Model.prototype.bind bind
		 * @signature `model.bind(eventName, handler)`
		 * @param {String} eventName The event to bind to.
		 * @param {function} handler The function to call when the
		 * event occurs. __handler__ is passed the event and the
		 * Model instance.
		 * @return {can.Model} The Model, for chaining.
		 * 
		 * @body
		 * `bind(eventName, handler(ev, args...) )` is used to listen
		 * to events on this model instance.  Example:
		 * 
		 *     Task = can.Model.extend()
		 *     var task = new Task({name : "dishes"})
		 *     task.bind("name", function(ev, newVal, oldVal){})
		 * 
		 * Use `bind` the
		 * same as [can.Observe::bind] which should be used as
		 * a reference for listening to property changes.
		 * 
		 * Bind on model can be used to listen to when 
		 * an instance is:
		 * 
		 *  - created
		 *  - updated
		 *  - destroyed
		 * 
		 * like:
		 * 
		 *     Task = can.Model.extend()
		 *     var task = new Task({name : "dishes"})
		 * 
		 *     task.bind("created", function(ev, newTask){
		 * 	     console.log("created", newTask)
		 *     })
		 *     .bind("updated", function(ev, updatedTask){
		 *       console.log("updated", updatedTask)
		 *     })
		 *     .bind("destroyed", function(ev, destroyedTask){
		 * 	     console.log("destroyed", destroyedTask)
		 *     })
		 * 
		 *     // create, update, and destroy
		 *     task.save(function(){
		 *       task.attr('name', "do dishes")
		 *           .save(function(){
		 * 	            task.destroy()
		 *           })
		 *     }); 
		 *     
		 * 
		 * `bind` also extends the inherited 
		 * behavior of [can.Observe::bind] to track the number
		 * of event bindings on this object which is used to store
		 * the model instance.  When there are no bindings, the 
		 * model instance is removed from the store, freeing memory.  
		 */
		_bindsetup: function(){
			this.constructor.store[this.__get(this.constructor.id)] = this;
			return can.Observe.prototype._bindsetup.apply( this, arguments );
		},
		/**
		 * @function can.Model.prototype.unbind unbind
		 * @description Stop listening to events on this Model.
		 * @signature `model.unbind(eventName[, handler])`
		 * @param {String} eventName The event to unbind from.
		 * @param {function} [handler] A handler previously bound with `bind`.
		 * If __handler__ is not passed, `unbind` will remove all handlers
		 * for the given event.
		 * @return {can.Model} The Model, for chaining.
		 *
		 * @body
		 * `unbind(eventName, handler)` removes a listener
		 * attached with [can.Model::bind].
		 * 
		 *     var handler = function(ev, createdTask){
		 * 	     
		 *     }
		 *     task.bind("created", handler)
		 *     task.unbind("created", handler)
		 * 
		 * You have to pass the same function to `unbind` that you
		 * passed to `bind`.
		 * 
		 * Unbind will also remove the instance from the store
		 * if there are no other listeners.
		 */
		_bindteardown: function(){
			delete this.constructor.store[getId(this)];
			return can.Observe.prototype._bindteardown.apply( this, arguments );;
		},
		// Change `id`.
		___set: function( prop, val ) {
			can.Observe.prototype.___set.call(this,prop, val)
			// If we add an `id`, move it to the store.
			if(prop === this.constructor.id && this._bindings){
				this.constructor.store[getId(this)] = this;
			}
		}
	});
	
	can.each({
		/**
		 * @function can.Model.makeFindAll
		 * @parent can.Model.static
		 * 
		 * @signature `can.Model.makeFindAll: function(findAllData) -> findAll`
		 * 
		 * Returns the external `findAll` method given the implemented [can.Model.findAllData findAllData] function.
		 * 
		 * @params {can.Model.findAllData}
		 * 
		 * [can.Model.findAll] is implemented with a `String`, [can.AjaxSettings ajax settings object], or 
		 * [can.Model.findAllData findAllData] function. If it is implemented as
		 * a `String` or [can.AjaxSettings ajax settings object], those values are used
		 * to create a [can.Model.findAllData findAllData] function.
		 * 
		 * The [can.Model.findAllData findAllData] function is passed to `makeFindAll`. `makeFindAll`
		 * should use `findAllData` internally to get the raw data for the request. 
		 * 
		 * @return {function(params,success,error):can.Deferred}
		 * 
		 * Returns function that implements the external API of `findAll`. 
		 * 
		 * @body 
		 * 
		 * ## Use
		 * 
		 * `makeFindAll` can be used to implement base models that perform special 
		 * behavior. `makeFindAll` is passed a [can.Model.findAllData findAllData] function that retrieves raw
		 * data. It should return a function that when called, uses
		 * the findAllData function to get the raw data, convert them to model instances with
		 * [can.Model.models models].
		 * 
		 * ## Caching
		 * 
		 * The following uses `makeFindAll` to create a base `CachedModel`:
		 * 
		 *     CachedModel = can.Model.extend({
		 *       makeFindAll: function(findAllData){
		 *         // A place to store requests
		 *         var cachedRequests = {};
		 * 
		 *         return function(params, success, error){
		 *           // is this not cached?
		 *           if(! cachedRequests[JSON.stringify(params)] ) {
		 *             var self = this;
		 *             // make the request for data, save deferred
		 *             cachedRequests[JSON.stringify(params)] = 
		 *               findAllData(params).then(function(data){
		 *                 // convert the raw data into instances
		 *                 return self.models(data)
		 *               })
		 *           }
		 *           // get the saved request
		 *           var def = cachedRequests[JSON.stringify(params)]
		 *           // hookup success and error
		 *           def.then(success,error)
		 *           return def;
		 *         }  
		 *       }
		 *     },{})
		 * 
		 * The following Todo model will never request the same list of todo's twice:
		 * 
		 *     Todo = CachedModel({
		 *       findAll: "/todos"
		 *     },{})
		 * 
		 *     // widget 1
		 *     Todo.findAll({})
		 * 
		 *     // widget 2
		 *     Todo.findAll({})
		 */
		makeFindAll : "models",
		/**
		 * @function can.Model.makeFindOne
		 * @parent can.Model.static
		 * 
		 * @signature `can.Model.makeFindOne: function(findOneData) -> findOne`
		 * 
		 * Returns the external `findOne` method given the implemented [can.Model.findOneData findOneData] function.
		 * 
		 * @params {can.Model.findOneData}
		 * 
		 * [can.Model.findOne] is implemented with a `String`, [can.AjaxSettings ajax settings object], or 
		 * [can.Model.findOneData findOneData] function. If it is implemented as
		 * a `String` or [can.AjaxSettings ajax settings object], those values are used
		 * to create a [can.Model.findOneData findOneData] function.
		 * 
		 * The [can.Model.findOneData findOneData] function is passed to `makeFindOne`. `makeFindOne`
		 * should use `findOneData` internally to get the raw data for the request. 
		 * 
		 * @return {function(params,success,error):can.Deferred}
		 * 
		 * Returns function that implements the external API of `findOne`. 
		 * 
		 * @body
		 * 
		 * ## Use
		 * 
		 * `makeFindOne` can be used to implement base models that perform special 
		 * behavior. `makeFindOne` is passed a [can.Model.findOneData findOneData] function that retrieves raw
		 * data. It should return a function that when called, uses
		 * the findOneData function to get the raw data, convert them to model instances with
		 * [can.Model.models models].
		 * 
		 * ## Caching
		 * 
		 * The following uses `makeFindOne` to create a base `CachedModel`:
		 * 
		 *     CachedModel = can.Model.extend({
		 *       makeFindOne: function(findOneData){
		 *         // A place to store requests
		 *         var cachedRequests = {};
		 * 
		 *         return function(params, success, error){
		 *           // is this not cached?
		 *           if(! cachedRequests[JSON.stringify(params)] ) {
		 *             var self = this;
		 *             // make the request for data, save deferred
		 *             cachedRequests[JSON.stringify(params)] = 
		 *               findOneData(params).then(function(data){
		 *                 // convert the raw data into instances
		 *                 return self.models(data)
		 *               })
		 *           }
		 *           // get the saved request
		 *           var def = cachedRequests[JSON.stringify(params)]
		 *           // hookup success and error
		 *           def.then(success,error)
		 *           return def;
		 *         }  
		 *       }
		 *     },{})
		 * 
		 * The following Todo model will never request the same todo twice:
		 * 
		 *     Todo = CachedModel({
		 *       findOne: "/todos/{id}"
		 *     },{})
		 * 
		 *     // widget 1
		 *     Todo.findOne({id: 5})
		 * 
		 *     // widget 2
		 *     Todo.findOne({id: 5})
		 */
		makeFindOne: "model",
		makeCreate: "model",
		makeUpdate: "model"
	}, function( method, name ) {
		can.Model[name] = function( oldMethod ) {
			return function() {
				var args = can.makeArray(arguments),
					oldArgs = can.isFunction( args[1] ) ? args.splice( 0, 1 ) : args.splice( 0, 2 ),
					def = pipe( oldMethod.apply( this, oldArgs ), this, method );
					def.then( args[0], args[1] );
				// return the original promise
				return def;
			};
		};
	});
				
		can.each([
	/**
	 * @function can.Model.prototype.created created
	 * @hide
	 * Called by save after a new instance is created.  Publishes 'created'.
	 * @param {Object} attrs
	 */
	"created",
	/**
	 * @function can.Model.prototype.updated updated
	 * @hide
	 * Called by save after an instance is updated.  Publishes 'updated'.
	 * @param {Object} attrs
	 */
	"updated",
	/**
	 * @function can.Model.prototype.destroyed destroyed
	 * @hide
	 * Called after an instance is destroyed.  
	 *   - Publishes "shortName.destroyed".
	 *   - Triggers a "destroyed" event on this model.
	 *   - Removes the model from the global list if its used.
	 * 
	 */
	"destroyed"], function( funcName ) {
		can.Model.prototype[funcName] = function( attrs ) {
			var stub, 
				constructor = this.constructor;

			// Update attributes if attributes have been passed
			stub = attrs && typeof attrs == 'object' && this.attr(attrs.attr ? attrs.attr() : attrs);
			
			// triggers change event that bubble's like
			// handler( 'change','1.destroyed' ). This is used
			// to remove items on destroyed from Model Lists.
			// but there should be a better way.
			can.trigger(this,"change",funcName)
			

			// Call event on the instance's Class
			can.trigger(constructor,funcName, this);
		};
	});
  
  // Model lists are just like `Observe.List` except that when their items are 
  // destroyed, it automatically gets removed from the list.
  /**
   * @constructor can.Model.List
   * @inherits can.Observe.List
   * @parent canjs
   * @download can/model
   * @test can/model/qunit.html
   *
   * Works exactly like [can.Observe.List] and has all of the same properties,
   * events, and functions as an observable list. The only difference is that 
   * when an item from the list is destroyed, it will automatically get removed
   * from the list.
   *
   * ## Creating a new Model List
   *
   * To create a new model list, just use `new {model_name}.List(ARRAY)` like:
   *
   *     var todo1 = new Todo( { name: "Do the dishes" } ),
   *         todo2 = new Todo( { name: "Wash floors" } )
   *     var todos = new Todo.List( [todo1, todo2] );
   *
   * ### Model Lists in `can.Model`
   * [can.Model.findAll can.Model.findAll] or [can.Model.models] will
   * almost always be used to return a `can.Model.List` object, even though it
   * is possible to create new lists like below:
   *
   *     var todos = Todo.models([
   *         new Todo( { name: "Do the dishes" } ),
   *         new Todo( { name: "Wash floors" } )
   *     ])
   *     
   *     todos.constructor // -> can.Model.List
   *
   *     // the most correct way to get a can.Model.List
   *     Todo.findAll({}, function(todos) {
   *         todos.constructor // -> can.Model.List
   *     })
   *
   * ### Extending `can.Model.List`
   *
   * Creating custom `can.Model.Lists` allows you to extend lists with helper
   * functions for a list of a specific type. So, if you wanted to be able to
   * see how many todos were completed and remaining something could be written
   * like:
   *
   *     Todo.List = can.Model.List({
   *         completed: function() {
   *             var completed = 0;
   *             this.each(function(i, todo) {
   *                 completed += todo.attr('complete') ? 1 : 0
   *             })
   *             return completed;
   *         },
   *         remaining: function() {
   *             return this.attr('length') - this.completed();
   *         }
   *     })
   *
   *     Todo.findAll({}, function(todos) {
   *         todos.completed() // -> 0
   *         todos.remaining() // -> 2
   *     });
   *
   * ## Removing models from model list
   *
   * The advantage that `can.Model.List` has over a traditional `can.Observe.List`
   * is that when you destroy a model, if it is in that list, it will automatically
   * be removed from the list. 
   *
   *     // Listen for when something is removed from the todos list.
   *     todos.bind("remove", function( ev, oldVals, indx ) {
   *         console.log(oldVals[indx].attr("name") + " removed")
   *     })
   *
   *     todo1.destroy(); // console shows "Do the dishes removed"
   *
   *
   */
	var ML = can.Model.List = can.Observe.List({
		setup: function(params){
			if( can.isPlainObject(params) && ! can.isArray(params) ){
				can.Observe.List.prototype.setup.apply(this);
				this.replace(this.constructor.Observe.findAll(params))
			} else {
				can.Observe.List.prototype.setup.apply(this,arguments);
			}
		},
		_changes: function(ev, attr){
			can.Observe.List.prototype._changes.apply(this, arguments );
			if(/\w+\.destroyed/.test(attr)){
				var index = this.indexOf(ev.target);
				if (index != -1) {
					this.splice(index, 1);
				}
			}
		}
	})

	return can.Model;
})
;
steal.executed('can/model/model.js');
steal('can/util', 'can/view', 'can/util/string', 'can/observe/compute', 'can/view/scanner.js', 'can/view/render.js', function( can ) {
	// ## ejs.js
	// `can.EJS`  
	// _Embedded JavaScript Templates._

	// Helper methods.
	var extend = can.extend,
		EJS = function( options ) {
			// Supports calling EJS without the constructor
			// This returns a function that renders the template.
			if ( this.constructor != EJS ) {
				var ejs = new EJS(options);
				return function( data, helpers ) {
					return ejs.render(data, helpers);
				};
			}
			// If we get a `function` directly, it probably is coming from
			// a `steal`-packaged view.
			if ( typeof options == "function" ) {
				this.template = {
					fn: options
				};
				return;
			}
			// Set options on self.
			extend(this, options);
			this.template = this.scanner.scan(this.text, this.name);
		};

	can.EJS = EJS;

	/**
	 * @add can.EJS
	 * @prototype
	 */
	EJS.prototype.
	/**
	 * @function can.EJS.prototype.render render
	 * @parent can.EJS.prototype
	 * @description Render a view object with data and helpers.
	 * @signature `ejs.render(data[, helpers])`
	 * @param {Object} [data] The data to populate the template with.
	 * @param {Object.<String, function>} [helpers] Helper methods referenced in the template.
	 * @return {String} The template with interpolated data.
	 *
	 * @body	 
	 * Renders an object with view helpers attached to the view.
	 * 
	 *     new can.EJS({text: "<%= message %>"}).render({
	 *       message: "foo"
	 *     },{helper: function(){ ... }})
	 */
	render = function( object, extraHelpers ) {
		object = object || {};
		return this.template.fn.call(object, object, new EJS.Helpers(object, extraHelpers || {}));
	};
	
	extend(EJS.prototype, {
		/**
		 * @hide
		 * Singleton scanner instance for parsing templates.
		 */
		scanner: new can.view.Scanner({
			/**
			 * @hide
			 * An ordered token registry for the scanner.
			 * This needs to be ordered by priority to prevent token parsing errors.
			 * Each token is defined as: ["token-name", "string representation", "optional regexp override"]
			 */
			tokens: [
				["templateLeft", "<%%"], // Template
				["templateRight", "%>"], // Right Template
				["returnLeft", "<%=="], // Return Unescaped
				["escapeLeft", "<%="], // Return Escaped
				["commentLeft", "<%#"], // Comment
				["left", "<%"], // Run --- this is hack for now
				["right", "%>"], // Right -> All have same FOR Mustache ...
				["returnRight", "%>"]
			],

			/**
			 * @hide
			 * Transforms the EJS template to add support for shared blocks.
			 * Essentially, this breaks up EJS tags into multiple EJS tags 
			 * if they contained unmatched brackets.
			 *
			 * For example, this doesn't work:
			 * 	<% if (1) { %><% if (1) { %> hi <% } } %>
			 * ...without isolated EJS blocks:
			 * 	<% if (1) { %><% if (1) { %> hi <% } %><% } %> 
			 * The result of transforming:
			 * 	<% if (1) { %><% %><% if (1) { %><% %> hi <% } %><% } %> 
			 */
			transform: function(source) {
				return source.replace(/<%([\s\S]+?)%>/gm, function(whole, part) {
					var brackets = [], 
						foundBracketPair, 
						i;

					// Look for brackets (for removing self-contained blocks)
					part.replace(/[{}]/gm, function(bracket, offset) {
						brackets.push([ bracket, offset ]);
					});

					// Remove bracket pairs from the list of replacements
					do {
						foundBracketPair = false;
						for (i = brackets.length - 2; i >= 0; i--) {
							if (brackets[i][0] == '{' && brackets[i+1][0] == '}') {
								brackets.splice(i, 2);
								foundBracketPair = true;
								break;
							}
						}
					} while (foundBracketPair);

					// Unmatched brackets found, inject EJS tags
					if (brackets.length >= 2) {
						var result = ['<%'],
							bracket,
							last = 0;
						for (i = 0; bracket = brackets[i]; i++) {
							result.push(part.substring(last, last = bracket[1]));
							if ((bracket[0] == '{' && i < brackets.length - 1) || (bracket[0] == '}' && i > 0)) {
								result.push(bracket[0] == '{' ? '{ %><% ' : ' %><% }');
							}
							else {
								result.push(bracket[0]);
							}
							++last;
						}
						result.push(part.substring(last), '%>');
						return result.join('');
					}
					// Otherwise return the original
					else {
						return '<%' + part + '%>';
					}
				});
			}
		})
	});

	EJS.Helpers = function( data, extras ) {
		this._data = data;
		this._extras = extras;
		extend(this, extras);
	};

	/**
	 * @page can.EJS.Helpers Helpers
	 * @parent can.EJS
	 *
	 * @body
	 * By adding functions to can.EJS.Helpers.prototype, those functions will be available in the
	 * views.
	 *
	 * The following helper converts a given string to upper case:
	 *
	 * 	can.EJS.Helpers.prototype.toUpper = function(params)
	 * 	{
	 * 		return params.toUpperCase();
	 * 	}
	 *
	 * Use it like this in any EJS template:
	 *
	 * 	<%= toUpper('javascriptmvc') %>
	 *
	 * To access the current DOM element return a function that takes the element as a parameter:
	 *
	 * 	can.EJS.Helpers.prototype.upperHtml = function(params)
	 * 	{
	 * 		return function(el) {
	 * 			$(el).html(params.toUpperCase());
	 * 		}
	 * 	}
	 *
	 * In your EJS view you can then call the helper on an element tag:
	 *
	 * 	<div <%= upperHtml('javascriptmvc') %>></div>
	 */
	EJS.Helpers.prototype = {
		// TODO Deprecated!!
		list : function(list, cb){
			
			can.each(list, function(item, i){
				cb(item, i, list)
			})
		},
		each: function(list, cb){
			// Normal arrays don't get live updated
			if (can.isArray(list)) {
				this.list(list, cb);
			}
			else {
				can.view.lists(list, cb);
			}
		}
	};

	// Options for `steal`'s build.
	can.view.register({
		suffix: "ejs",
		// returns a `function` that renders the view.
		script: function( id, src ) {
			return "can.EJS(function(_CONTEXT,_VIEW) { " + new EJS({
				text: src,
				name: id
			}).template.out + " })";
		},
		renderer: function( id, text ) {
			return EJS({
				text: text,
				name: id
			});
		}
	});

	return can;
});;
steal.executed('can/view/ejs/ejs.js');
steal('can/util', 'can/construct', function(can, Construct){

// tests if we can get super in .toString()
	var isFunction = can.isFunction,
		
		fnTest = /xyz/.test(function() {
			xyz;
		}) ? /\b_super\b/ : /.*/;
		
		// overwrites a single property so it can still call super
		can.Construct._overwrite = function(addTo, base, name, val) {
			// Check if we're overwriting an existing function
			addTo[name] = isFunction(val) &&
							  isFunction(base[name]) &&
							  fnTest.test(val) ? (function( name, fn ) {
					return function() {
						var tmp = this._super,
							ret;

						// Add a new ._super() method that is the same method
						// but on the super-class
						this._super = base[name];

						// The method only need to be bound temporarily, so we
						// remove it when we're done executing
						ret = fn.apply(this, arguments);
						this._super = tmp;
						return ret;
					};
				})(name, val) : val;
		}

		// overwrites an object with methods, sets up _super
		//   newProps - new properties
		//   oldProps - where the old properties might be
		//   addTo - what we are adding to
		can.Construct._inherit = function( newProps, oldProps, addTo ) {
			addTo = addTo || newProps
			for ( var name in newProps ) {
				can.Construct._overwrite(addTo, oldProps, name, newProps[name]);
			}
		}

	return can;
});;
steal.executed('can/construct/super/super.js');
steal("./grayscale.js","./moment.js")
;
steal.executed('documentjs/site/static/build/lib/lib.js');
// Adapted from http://webdesignerwall.com/tutorials/html5-grayscale-image-hover

var grayscale = function(src) {
	var canvas = document.createElement('canvas'),
		ctx = canvas.getContext('2d'),
		imgObj = new Image();
	
	imgObj.src = src;
	canvas.width = imgObj.width;
	canvas.height = imgObj.height; 
	
	ctx.drawImage(imgObj, 0, 0); 
	var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

	for(var y = 0; y < imgPixels.height; y++){
		for(var x = 0; x < imgPixels.width; x++){
			var i = (y * 4) * imgPixels.width + x * 4;
			var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
			imgPixels.data[i] = avg; 
			imgPixels.data[i + 1] = avg; 
			imgPixels.data[i + 2] = avg;
		}
	}
	
	ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
	return canvas.toDataURL();
};

window.Grayscale = function(elements, fadeDuration) {
	elements.each(function() {
		var el = $(this);

		// wrap the image in a wrapper and clone it, adding the clone to the wrapper
		el.css({"position":"absolute"})
		  .wrap("<div class='img_wrapper' style='display: inline-block'>")
		  .clone()
		  .addClass('img_grayscale')
		  .css({
		  	'position': "absolute",
		  	'z-index': "998",
		  	'opacity': "0"
		  })
		  .insertBefore(el)
		  .queue(function(){
			el.parent().css({
				'width': this.width,
				'height': this.height
			}).end()
			.dequeue();
		});

		// replace the original with a greyscale version
		this.src = grayscale(this.src);
	});

	elements.parent().mouseover(function() {
		// fade in color image
		$(this).find('img:first').stop().animate({opacity:1}, fadeDuration);
	});
};

$(function() {
	$(document.body).on('mouseout', '.img_grayscale', function(){
		// fade out color image
		$(this).stop().animate({opacity:0}, 300);
	});
});
	    ;
steal.executed('documentjs/site/static/build/lib/grayscale.js');
// moment.js
// version : 2.0.0
// author : Tim Wood
// license : MIT
// momentjs.com

(function (undefined) {

	/************************************
	 Constants
	 ************************************/

	var moment,
		VERSION = "2.0.0",
		round = Math.round, i,
	// internal storage for language config files
		languages = {},

	// check for nodeJS
		hasModule = (typeof module !== 'undefined' && module.exports),

	// ASP.NET json date format regex
		aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,

	// format tokens
		formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,
		localFormattingTokens = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,

	// parsing tokens
		parseMultipleFormatChunker = /([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,

	// parsing token regexes
		parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
		parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
		parseTokenThreeDigits = /\d{3}/, // 000 - 999
		parseTokenFourDigits = /\d{1,4}/, // 0 - 9999
		parseTokenSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
		parseTokenWord = /[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i, // any word (or two) characters or numbers including two word month in arabic.
		parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/i, // +00:00 -00:00 +0000 -0000 or Z
		parseTokenT = /T/i, // T (ISO seperator)
		parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123

	// preliminary iso regex
	// 0000-00-00 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000
		isoRegex = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,
		isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

	// iso time formats and regexes
		isoTimes = [
			['HH:mm:ss.S', /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
			['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
			['HH:mm', /(T| )\d\d:\d\d/],
			['HH', /(T| )\d\d/]
		],

	// timezone chunker "+10:00" > ["10", "00"] or "-1530" > ["-15", "30"]
		parseTimezoneChunker = /([\+\-]|\d\d)/gi,

	// getter and setter names
		proxyGettersAndSetters = 'Month|Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
		unitMillisecondFactors = {
			'Milliseconds' : 1,
			'Seconds' : 1e3,
			'Minutes' : 6e4,
			'Hours' : 36e5,
			'Days' : 864e5,
			'Months' : 2592e6,
			'Years' : 31536e6
		},

	// format function strings
		formatFunctions = {},

	// tokens to ordinalize and pad
		ordinalizeTokens = 'DDD w W M D d'.split(' '),
		paddedTokens = 'M D H h m s w W'.split(' '),

		formatTokenFunctions = {
			M    : function () {
				return this.month() + 1;
			},
			MMM  : function (format) {
				return this.lang().monthsShort(this, format);
			},
			MMMM : function (format) {
				return this.lang().months(this, format);
			},
			D    : function () {
				return this.date();
			},
			DDD  : function () {
				return this.dayOfYear();
			},
			d    : function () {
				return this.day();
			},
			dd   : function (format) {
				return this.lang().weekdaysMin(this, format);
			},
			ddd  : function (format) {
				return this.lang().weekdaysShort(this, format);
			},
			dddd : function (format) {
				return this.lang().weekdays(this, format);
			},
			w    : function () {
				return this.week();
			},
			W    : function () {
				return this.isoWeek();
			},
			YY   : function () {
				return leftZeroFill(this.year() % 100, 2);
			},
			YYYY : function () {
				return leftZeroFill(this.year(), 4);
			},
			YYYYY : function () {
				return leftZeroFill(this.year(), 5);
			},
			a    : function () {
				return this.lang().meridiem(this.hours(), this.minutes(), true);
			},
			A    : function () {
				return this.lang().meridiem(this.hours(), this.minutes(), false);
			},
			H    : function () {
				return this.hours();
			},
			h    : function () {
				return this.hours() % 12 || 12;
			},
			m    : function () {
				return this.minutes();
			},
			s    : function () {
				return this.seconds();
			},
			S    : function () {
				return ~~(this.milliseconds() / 100);
			},
			SS   : function () {
				return leftZeroFill(~~(this.milliseconds() / 10), 2);
			},
			SSS  : function () {
				return leftZeroFill(this.milliseconds(), 3);
			},
			Z    : function () {
				var a = -this.zone(),
					b = "+";
				if (a < 0) {
					a = -a;
					b = "-";
				}
				return b + leftZeroFill(~~(a / 60), 2) + ":" + leftZeroFill(~~a % 60, 2);
			},
			ZZ   : function () {
				var a = -this.zone(),
					b = "+";
				if (a < 0) {
					a = -a;
					b = "-";
				}
				return b + leftZeroFill(~~(10 * a / 6), 4);
			},
			X    : function () {
				return this.unix();
			}
		};

	function padToken(func, count) {
		return function (a) {
			return leftZeroFill(func.call(this, a), count);
		};
	}
	function ordinalizeToken(func) {
		return function (a) {
			return this.lang().ordinal(func.call(this, a));
		};
	}

	while (ordinalizeTokens.length) {
		i = ordinalizeTokens.pop();
		formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i]);
	}
	while (paddedTokens.length) {
		i = paddedTokens.pop();
		formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
	}
	formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


	/************************************
	 Constructors
	 ************************************/

	function Language() {

	}

	// Moment prototype object
	function Moment(config) {
		extend(this, config);
	}

	// Duration Constructor
	function Duration(duration) {
		var data = this._data = {},
			years = duration.years || duration.year || duration.y || 0,
			months = duration.months || duration.month || duration.M || 0,
			weeks = duration.weeks || duration.week || duration.w || 0,
			days = duration.days || duration.day || duration.d || 0,
			hours = duration.hours || duration.hour || duration.h || 0,
			minutes = duration.minutes || duration.minute || duration.m || 0,
			seconds = duration.seconds || duration.second || duration.s || 0,
			milliseconds = duration.milliseconds || duration.millisecond || duration.ms || 0;

		// representation for dateAddRemove
		this._milliseconds = milliseconds +
			seconds * 1e3 + // 1000
			minutes * 6e4 + // 1000 * 60
			hours * 36e5; // 1000 * 60 * 60
		// Because of dateAddRemove treats 24 hours as different from a
		// day when working around DST, we need to store them separately
		this._days = days +
			weeks * 7;
		// It is impossible translate months into days without knowing
		// which months you are are talking about, so we have to store
		// it separately.
		this._months = months +
			years * 12;

		// The following code bubbles up values, see the tests for
		// examples of what that means.
		data.milliseconds = milliseconds % 1000;
		seconds += absRound(milliseconds / 1000);

		data.seconds = seconds % 60;
		minutes += absRound(seconds / 60);

		data.minutes = minutes % 60;
		hours += absRound(minutes / 60);

		data.hours = hours % 24;
		days += absRound(hours / 24);

		days += weeks * 7;
		data.days = days % 30;

		months += absRound(days / 30);

		data.months = months % 12;
		years += absRound(months / 12);

		data.years = years;
	}


	/************************************
	 Helpers
	 ************************************/


	function extend(a, b) {
		for (var i in b) {
			if (b.hasOwnProperty(i)) {
				a[i] = b[i];
			}
		}
		return a;
	}

	function absRound(number) {
		if (number < 0) {
			return Math.ceil(number);
		} else {
			return Math.floor(number);
		}
	}

	// left zero fill a number
	// see http://jsperf.com/left-zero-filling for performance comparison
	function leftZeroFill(number, targetLength) {
		var output = number + '';
		while (output.length < targetLength) {
			output = '0' + output;
		}
		return output;
	}

	// helper function for _.addTime and _.subtractTime
	function addOrSubtractDurationFromMoment(mom, duration, isAdding) {
		var ms = duration._milliseconds,
			d = duration._days,
			M = duration._months,
			currentDate;

		if (ms) {
			mom._d.setTime(+mom + ms * isAdding);
		}
		if (d) {
			mom.date(mom.date() + d * isAdding);
		}
		if (M) {
			currentDate = mom.date();
			mom.date(1)
				.month(mom.month() + M * isAdding)
				.date(Math.min(currentDate, mom.daysInMonth()));
		}
	}

	// check if is an array
	function isArray(input) {
		return Object.prototype.toString.call(input) === '[object Array]';
	}

	// compare two arrays, return the number of differences
	function compareArrays(array1, array2) {
		var len = Math.min(array1.length, array2.length),
			lengthDiff = Math.abs(array1.length - array2.length),
			diffs = 0,
			i;
		for (i = 0; i < len; i++) {
			if (~~array1[i] !== ~~array2[i]) {
				diffs++;
			}
		}
		return diffs + lengthDiff;
	}


	/************************************
	 Languages
	 ************************************/


	Language.prototype = {
		set : function (config) {
			var prop, i;
			for (i in config) {
				prop = config[i];
				if (typeof prop === 'function') {
					this[i] = prop;
				} else {
					this['_' + i] = prop;
				}
			}
		},

		_months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
		months : function (m) {
			return this._months[m.month()];
		},

		_monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
		monthsShort : function (m) {
			return this._monthsShort[m.month()];
		},

		monthsParse : function (monthName) {
			var i, mom, regex, output;

			if (!this._monthsParse) {
				this._monthsParse = [];
			}

			for (i = 0; i < 12; i++) {
				// make the regex if we don't have it already
				if (!this._monthsParse[i]) {
					mom = moment([2000, i]);
					regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
					this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
				}
				// test the regex
				if (this._monthsParse[i].test(monthName)) {
					return i;
				}
			}
		},

		_weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
		weekdays : function (m) {
			return this._weekdays[m.day()];
		},

		_weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
		weekdaysShort : function (m) {
			return this._weekdaysShort[m.day()];
		},

		_weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
		weekdaysMin : function (m) {
			return this._weekdaysMin[m.day()];
		},

		_longDateFormat : {
			LT : "h:mm A",
			L : "MM/DD/YYYY",
			LL : "MMMM D YYYY",
			LLL : "MMMM D YYYY LT",
			LLLL : "dddd, MMMM D YYYY LT"
		},
		longDateFormat : function (key) {
			var output = this._longDateFormat[key];
			if (!output && this._longDateFormat[key.toUpperCase()]) {
				output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
					return val.slice(1);
				});
				this._longDateFormat[key] = output;
			}
			return output;
		},

		meridiem : function (hours, minutes, isLower) {
			if (hours > 11) {
				return isLower ? 'pm' : 'PM';
			} else {
				return isLower ? 'am' : 'AM';
			}
		},

		_calendar : {
			sameDay : '[Today at] LT',
			nextDay : '[Tomorrow at] LT',
			nextWeek : 'dddd [at] LT',
			lastDay : '[Yesterday at] LT',
			lastWeek : '[last] dddd [at] LT',
			sameElse : 'L'
		},
		calendar : function (key, mom) {
			var output = this._calendar[key];
			return typeof output === 'function' ? output.apply(mom) : output;
		},

		_relativeTime : {
			future : "in %s",
			past : "%s ago",
			s : "a few seconds",
			m : "a minute",
			mm : "%d minutes",
			h : "an hour",
			hh : "%d hours",
			d : "a day",
			dd : "%d days",
			M : "a month",
			MM : "%d months",
			y : "a year",
			yy : "%d years"
		},
		relativeTime : function (number, withoutSuffix, string, isFuture) {
			var output = this._relativeTime[string];
			return (typeof output === 'function') ?
				output(number, withoutSuffix, string, isFuture) :
				output.replace(/%d/i, number);
		},
		pastFuture : function (diff, output) {
			var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
			return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
		},

		ordinal : function (number) {
			return this._ordinal.replace("%d", number);
		},
		_ordinal : "%d",

		preparse : function (string) {
			return string;
		},

		postformat : function (string) {
			return string;
		},

		week : function (mom) {
			return weekOfYear(mom, this._week.dow, this._week.doy);
		},
		_week : {
			dow : 0, // Sunday is the first day of the week.
			doy : 6  // The week that contains Jan 1st is the first week of the year.
		}
	};

	// Loads a language definition into the `languages` cache.  The function
	// takes a key and optionally values.  If not in the browser and no values
	// are provided, it will load the language file module.  As a convenience,
	// this function also returns the language values.
	function loadLang(key, values) {
		values.abbr = key;
		if (!languages[key]) {
			languages[key] = new Language();
		}
		languages[key].set(values);
		return languages[key];
	}

	// Determines which language definition to use and returns it.
	//
	// With no parameters, it will return the global language.  If you
	// pass in a language key, such as 'en', it will return the
	// definition for 'en', so long as 'en' has already been loaded using
	// moment.lang.
	function getLangDefinition(key) {
		if (!key) {
			return moment.fn._lang;
		}
		if (!languages[key] && hasModule) {
			require('./lang/' + key);
		}
		return languages[key];
	}


	/************************************
	 Formatting
	 ************************************/


	function removeFormattingTokens(input) {
		if (input.match(/\[.*\]/)) {
			return input.replace(/^\[|\]$/g, "");
		}
		return input.replace(/\\/g, "");
	}

	function makeFormatFunction(format) {
		var array = format.match(formattingTokens), i, length;

		for (i = 0, length = array.length; i < length; i++) {
			if (formatTokenFunctions[array[i]]) {
				array[i] = formatTokenFunctions[array[i]];
			} else {
				array[i] = removeFormattingTokens(array[i]);
			}
		}

		return function (mom) {
			var output = "";
			for (i = 0; i < length; i++) {
				output += typeof array[i].call === 'function' ? array[i].call(mom, format) : array[i];
			}
			return output;
		};
	}

	// format date using native date object
	function formatMoment(m, format) {
		var i = 5;

		function replaceLongDateFormatTokens(input) {
			return m.lang().longDateFormat(input) || input;
		}

		while (i-- && localFormattingTokens.test(format)) {
			format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
		}

		if (!formatFunctions[format]) {
			formatFunctions[format] = makeFormatFunction(format);
		}

		return formatFunctions[format](m);
	}


	/************************************
	 Parsing
	 ************************************/


		// get the regex to find the next token
	function getParseRegexForToken(token) {
		switch (token) {
			case 'DDDD':
				return parseTokenThreeDigits;
			case 'YYYY':
				return parseTokenFourDigits;
			case 'YYYYY':
				return parseTokenSixDigits;
			case 'S':
			case 'SS':
			case 'SSS':
			case 'DDD':
				return parseTokenOneToThreeDigits;
			case 'MMM':
			case 'MMMM':
			case 'dd':
			case 'ddd':
			case 'dddd':
			case 'a':
			case 'A':
				return parseTokenWord;
			case 'X':
				return parseTokenTimestampMs;
			case 'Z':
			case 'ZZ':
				return parseTokenTimezone;
			case 'T':
				return parseTokenT;
			case 'MM':
			case 'DD':
			case 'YY':
			case 'HH':
			case 'hh':
			case 'mm':
			case 'ss':
			case 'M':
			case 'D':
			case 'd':
			case 'H':
			case 'h':
			case 'm':
			case 's':
				return parseTokenOneOrTwoDigits;
			default :
				return new RegExp(token.replace('\\', ''));
		}
	}

	// function to convert string input to date
	function addTimeToArrayFromToken(token, input, config) {
		var a, b,
			datePartArray = config._a;

		switch (token) {
			// MONTH
			case 'M' : // fall through to MM
			case 'MM' :
				datePartArray[1] = (input == null) ? 0 : ~~input - 1;
				break;
			case 'MMM' : // fall through to MMMM
			case 'MMMM' :
				a = getLangDefinition(config._l).monthsParse(input);
				// if we didn't find a month name, mark the date as invalid.
				if (a != null) {
					datePartArray[1] = a;
				} else {
					config._isValid = false;
				}
				break;
			// DAY OF MONTH
			case 'D' : // fall through to DDDD
			case 'DD' : // fall through to DDDD
			case 'DDD' : // fall through to DDDD
			case 'DDDD' :
				if (input != null) {
					datePartArray[2] = ~~input;
				}
				break;
			// YEAR
			case 'YY' :
				datePartArray[0] = ~~input + (~~input > 68 ? 1900 : 2000);
				break;
			case 'YYYY' :
			case 'YYYYY' :
				datePartArray[0] = ~~input;
				break;
			// AM / PM
			case 'a' : // fall through to A
			case 'A' :
				config._isPm = ((input + '').toLowerCase() === 'pm');
				break;
			// 24 HOUR
			case 'H' : // fall through to hh
			case 'HH' : // fall through to hh
			case 'h' : // fall through to hh
			case 'hh' :
				datePartArray[3] = ~~input;
				break;
			// MINUTE
			case 'm' : // fall through to mm
			case 'mm' :
				datePartArray[4] = ~~input;
				break;
			// SECOND
			case 's' : // fall through to ss
			case 'ss' :
				datePartArray[5] = ~~input;
				break;
			// MILLISECOND
			case 'S' :
			case 'SS' :
			case 'SSS' :
				datePartArray[6] = ~~ (('0.' + input) * 1000);
				break;
			// UNIX TIMESTAMP WITH MS
			case 'X':
				config._d = new Date(parseFloat(input) * 1000);
				break;
			// TIMEZONE
			case 'Z' : // fall through to ZZ
			case 'ZZ' :
				config._useUTC = true;
				a = (input + '').match(parseTimezoneChunker);
				if (a && a[1]) {
					config._tzh = ~~a[1];
				}
				if (a && a[2]) {
					config._tzm = ~~a[2];
				}
				// reverse offsets
				if (a && a[0] === '+') {
					config._tzh = -config._tzh;
					config._tzm = -config._tzm;
				}
				break;
		}

		// if the input is null, the date is not valid
		if (input == null) {
			config._isValid = false;
		}
	}

	// convert an array to a date.
	// the array should mirror the parameters below
	// note: all values past the year are optional and will default to the lowest possible value.
	// [year, month, day , hour, minute, second, millisecond]
	function dateFromArray(config) {
		var i, date, input = [];

		if (config._d) {
			return;
		}

		for (i = 0; i < 7; i++) {
			config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
		}

		// add the offsets to the time to be parsed so that we can have a clean array for checking isValid
		input[3] += config._tzh || 0;
		input[4] += config._tzm || 0;

		date = new Date(0);

		if (config._useUTC) {
			date.setUTCFullYear(input[0], input[1], input[2]);
			date.setUTCHours(input[3], input[4], input[5], input[6]);
		} else {
			date.setFullYear(input[0], input[1], input[2]);
			date.setHours(input[3], input[4], input[5], input[6]);
		}

		config._d = date;
	}

	// date from string and format string
	function makeDateFromStringAndFormat(config) {
		// This array is used to make a Date, either with `new Date` or `Date.UTC`
		var tokens = config._f.match(formattingTokens),
			string = config._i,
			i, parsedInput;

		config._a = [];

		for (i = 0; i < tokens.length; i++) {
			parsedInput = (getParseRegexForToken(tokens[i]).exec(string) || [])[0];
			if (parsedInput) {
				string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
			}
			// don't parse if its not a known token
			if (formatTokenFunctions[tokens[i]]) {
				addTimeToArrayFromToken(tokens[i], parsedInput, config);
			}
		}
		// handle am pm
		if (config._isPm && config._a[3] < 12) {
			config._a[3] += 12;
		}
		// if is 12 am, change hours to 0
		if (config._isPm === false && config._a[3] === 12) {
			config._a[3] = 0;
		}
		// return
		dateFromArray(config);
	}

	// date from string and array of format strings
	function makeDateFromStringAndArray(config) {
		var tempConfig,
			tempMoment,
			bestMoment,

			scoreToBeat = 99,
			i,
			currentDate,
			currentScore;

		while (config._f.length) {
			tempConfig = extend({}, config);
			tempConfig._f = config._f.pop();
			makeDateFromStringAndFormat(tempConfig);
			tempMoment = new Moment(tempConfig);

			if (tempMoment.isValid()) {
				bestMoment = tempMoment;
				break;
			}

			currentScore = compareArrays(tempConfig._a, tempMoment.toArray());

			if (currentScore < scoreToBeat) {
				scoreToBeat = currentScore;
				bestMoment = tempMoment;
			}
		}

		extend(config, bestMoment);
	}

	// date from iso format
	function makeDateFromString(config) {
		var i,
			string = config._i;
		if (isoRegex.exec(string)) {
			config._f = 'YYYY-MM-DDT';
			for (i = 0; i < 4; i++) {
				if (isoTimes[i][1].exec(string)) {
					config._f += isoTimes[i][0];
					break;
				}
			}
			if (parseTokenTimezone.exec(string)) {
				config._f += " Z";
			}
			makeDateFromStringAndFormat(config);
		} else {
			config._d = new Date(string);
		}
	}

	function makeDateFromInput(config) {
		var input = config._i,
			matched = aspNetJsonRegex.exec(input);

		if (input === undefined) {
			config._d = new Date();
		} else if (matched) {
			config._d = new Date(+matched[1]);
		} else if (typeof input === 'string') {
			makeDateFromString(config);
		} else if (isArray(input)) {
			config._a = input.slice(0);
			dateFromArray(config);
		} else {
			config._d = input instanceof Date ? new Date(+input) : new Date(input);
		}
	}


	/************************************
	 Relative Time
	 ************************************/


		// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	function substituteTimeAgo(string, number, withoutSuffix, isFuture, lang) {
		return lang.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	}

	function relativeTime(milliseconds, withoutSuffix, lang) {
		var seconds = round(Math.abs(milliseconds) / 1000),
			minutes = round(seconds / 60),
			hours = round(minutes / 60),
			days = round(hours / 24),
			years = round(days / 365),
			args = seconds < 45 && ['s', seconds] ||
				minutes === 1 && ['m'] ||
				minutes < 45 && ['mm', minutes] ||
				hours === 1 && ['h'] ||
				hours < 22 && ['hh', hours] ||
				days === 1 && ['d'] ||
				days <= 25 && ['dd', days] ||
				days <= 45 && ['M'] ||
				days < 345 && ['MM', round(days / 30)] ||
				years === 1 && ['y'] || ['yy', years];
		args[2] = withoutSuffix;
		args[3] = milliseconds > 0;
		args[4] = lang;
		return substituteTimeAgo.apply({}, args);
	}


	/************************************
	 Week of Year
	 ************************************/


		// firstDayOfWeek       0 = sun, 6 = sat
		//                      the day of the week that starts the week
		//                      (usually sunday or monday)
		// firstDayOfWeekOfYear 0 = sun, 6 = sat
		//                      the first week is the week that contains the first
		//                      of this day of the week
		//                      (eg. ISO weeks use thursday (4))
	function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
		var end = firstDayOfWeekOfYear - firstDayOfWeek,
			daysToDayOfWeek = firstDayOfWeekOfYear - mom.day();


		if (daysToDayOfWeek > end) {
			daysToDayOfWeek -= 7;
		}

		if (daysToDayOfWeek < end - 7) {
			daysToDayOfWeek += 7;
		}

		return Math.ceil(moment(mom).add('d', daysToDayOfWeek).dayOfYear() / 7);
	}


	/************************************
	 Top Level Functions
	 ************************************/

	function makeMoment(config) {
		var input = config._i,
			format = config._f;

		if (input === null || input === '') {
			return null;
		}

		if (typeof input === 'string') {
			config._i = input = getLangDefinition().preparse(input);
		}

		if (moment.isMoment(input)) {
			config = extend({}, input);
			config._d = new Date(+input._d);
		} else if (format) {
			if (isArray(format)) {
				makeDateFromStringAndArray(config);
			} else {
				makeDateFromStringAndFormat(config);
			}
		} else {
			makeDateFromInput(config);
		}

		return new Moment(config);
	}

	moment = function (input, format, lang) {
		return makeMoment({
			_i : input,
			_f : format,
			_l : lang,
			_isUTC : false
		});
	};

	// creating with utc
	moment.utc = function (input, format, lang) {
		return makeMoment({
			_useUTC : true,
			_isUTC : true,
			_l : lang,
			_i : input,
			_f : format
		});
	};

	// creating with unix timestamp (in seconds)
	moment.unix = function (input) {
		return moment(input * 1000);
	};

	// duration
	moment.duration = function (input, key) {
		var isDuration = moment.isDuration(input),
			isNumber = (typeof input === 'number'),
			duration = (isDuration ? input._data : (isNumber ? {} : input)),
			ret;

		if (isNumber) {
			if (key) {
				duration[key] = input;
			} else {
				duration.milliseconds = input;
			}
		}

		ret = new Duration(duration);

		if (isDuration && input.hasOwnProperty('_lang')) {
			ret._lang = input._lang;
		}

		return ret;
	};

	// version number
	moment.version = VERSION;

	// default format
	moment.defaultFormat = isoFormat;

	// This function will load languages and then set the global language.  If
	// no arguments are passed in, it will simply return the current global
	// language key.
	moment.lang = function (key, values) {
		var i;

		if (!key) {
			return moment.fn._lang._abbr;
		}
		if (values) {
			loadLang(key, values);
		} else if (!languages[key]) {
			getLangDefinition(key);
		}
		moment.duration.fn._lang = moment.fn._lang = getLangDefinition(key);
	};

	// returns language data
	moment.langData = function (key) {
		if (key && key._lang && key._lang._abbr) {
			key = key._lang._abbr;
		}
		return getLangDefinition(key);
	};

	// compare moment object
	moment.isMoment = function (obj) {
		return obj instanceof Moment;
	};

	// for typechecking Duration objects
	moment.isDuration = function (obj) {
		return obj instanceof Duration;
	};


	/************************************
	 Moment Prototype
	 ************************************/


	moment.fn = Moment.prototype = {

		clone : function () {
			return moment(this);
		},

		valueOf : function () {
			return +this._d;
		},

		unix : function () {
			return Math.floor(+this._d / 1000);
		},

		toString : function () {
			return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
		},

		toDate : function () {
			return this._d;
		},

		toJSON : function () {
			return moment.utc(this).format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
		},

		toArray : function () {
			var m = this;
			return [
				m.year(),
				m.month(),
				m.date(),
				m.hours(),
				m.minutes(),
				m.seconds(),
				m.milliseconds()
			];
		},

		isValid : function () {
			if (this._isValid == null) {
				if (this._a) {
					this._isValid = !compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray());
				} else {
					this._isValid = !isNaN(this._d.getTime());
				}
			}
			return !!this._isValid;
		},

		utc : function () {
			this._isUTC = true;
			return this;
		},

		local : function () {
			this._isUTC = false;
			return this;
		},

		format : function (inputString) {
			var output = formatMoment(this, inputString || moment.defaultFormat);
			return this.lang().postformat(output);
		},

		add : function (input, val) {
			var dur;
			// switch args to support add('s', 1) and add(1, 's')
			if (typeof input === 'string') {
				dur = moment.duration(+val, input);
			} else {
				dur = moment.duration(input, val);
			}
			addOrSubtractDurationFromMoment(this, dur, 1);
			return this;
		},

		subtract : function (input, val) {
			var dur;
			// switch args to support subtract('s', 1) and subtract(1, 's')
			if (typeof input === 'string') {
				dur = moment.duration(+val, input);
			} else {
				dur = moment.duration(input, val);
			}
			addOrSubtractDurationFromMoment(this, dur, -1);
			return this;
		},

		diff : function (input, units, asFloat) {
			var that = this._isUTC ? moment(input).utc() : moment(input).local(),
				zoneDiff = (this.zone() - that.zone()) * 6e4,
				diff, output;

			if (units) {
				// standardize on singular form
				units = units.replace(/s$/, '');
			}

			if (units === 'year' || units === 'month') {
				diff = (this.daysInMonth() + that.daysInMonth()) * 432e5; // 24 * 60 * 60 * 1000 / 2
				output = ((this.year() - that.year()) * 12) + (this.month() - that.month());
				output += ((this - moment(this).startOf('month')) - (that - moment(that).startOf('month'))) / diff;
				if (units === 'year') {
					output = output / 12;
				}
			} else {
				diff = (this - that) - zoneDiff;
				output = units === 'second' ? diff / 1e3 : // 1000
					units === 'minute' ? diff / 6e4 : // 1000 * 60
						units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
							units === 'day' ? diff / 864e5 : // 1000 * 60 * 60 * 24
								units === 'week' ? diff / 6048e5 : // 1000 * 60 * 60 * 24 * 7
									diff;
			}
			return asFloat ? output : absRound(output);
		},

		from : function (time, withoutSuffix) {
			return moment.duration(this.diff(time)).lang(this.lang()._abbr).humanize(!withoutSuffix);
		},

		fromNow : function (withoutSuffix) {
			return this.from(moment(), withoutSuffix);
		},

		calendar : function () {
			var diff = this.diff(moment().startOf('day'), 'days', true),
				format = diff < -6 ? 'sameElse' :
					diff < -1 ? 'lastWeek' :
						diff < 0 ? 'lastDay' :
							diff < 1 ? 'sameDay' :
								diff < 2 ? 'nextDay' :
									diff < 7 ? 'nextWeek' : 'sameElse';
			return this.format(this.lang().calendar(format, this));
		},

		isLeapYear : function () {
			var year = this.year();
			return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
		},

		isDST : function () {
			return (this.zone() < moment([this.year()]).zone() ||
				this.zone() < moment([this.year(), 5]).zone());
		},

		day : function (input) {
			var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
			return input == null ? day :
				this.add({ d : input - day });
		},

		startOf: function (units) {
			units = units.replace(/s$/, '');
			// the following switch intentionally omits break keywords
			// to utilize falling through the cases.
			switch (units) {
				case 'year':
					this.month(0);
				/* falls through */
				case 'month':
					this.date(1);
				/* falls through */
				case 'week':
				case 'day':
					this.hours(0);
				/* falls through */
				case 'hour':
					this.minutes(0);
				/* falls through */
				case 'minute':
					this.seconds(0);
				/* falls through */
				case 'second':
					this.milliseconds(0);
				/* falls through */
			}

			// weeks are a special case
			if (units === 'week') {
				this.day(0);
			}

			return this;
		},

		endOf: function (units) {
			return this.startOf(units).add(units.replace(/s?$/, 's'), 1).subtract('ms', 1);
		},

		isAfter: function (input, units) {
			units = typeof units !== 'undefined' ? units : 'millisecond';
			return +this.clone().startOf(units) > +moment(input).startOf(units);
		},

		isBefore: function (input, units) {
			units = typeof units !== 'undefined' ? units : 'millisecond';
			return +this.clone().startOf(units) < +moment(input).startOf(units);
		},

		isSame: function (input, units) {
			units = typeof units !== 'undefined' ? units : 'millisecond';
			return +this.clone().startOf(units) === +moment(input).startOf(units);
		},

		zone : function () {
			return this._isUTC ? 0 : this._d.getTimezoneOffset();
		},

		daysInMonth : function () {
			return moment.utc([this.year(), this.month() + 1, 0]).date();
		},

		dayOfYear : function (input) {
			var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
			return input == null ? dayOfYear : this.add("d", (input - dayOfYear));
		},

		isoWeek : function (input) {
			var week = weekOfYear(this, 1, 4);
			return input == null ? week : this.add("d", (input - week) * 7);
		},

		week : function (input) {
			var week = this.lang().week(this);
			return input == null ? week : this.add("d", (input - week) * 7);
		},

		// If passed a language key, it will set the language for this
		// instance.  Otherwise, it will return the language configuration
		// variables for this instance.
		lang : function (key) {
			if (key === undefined) {
				return this._lang;
			} else {
				this._lang = getLangDefinition(key);
				return this;
			}
		}
	};

	// helper for adding shortcuts
	function makeGetterAndSetter(name, key) {
		moment.fn[name] = moment.fn[name + 's'] = function (input) {
			var utc = this._isUTC ? 'UTC' : '';
			if (input != null) {
				this._d['set' + utc + key](input);
				return this;
			} else {
				return this._d['get' + utc + key]();
			}
		};
	}

	// loop through and add shortcuts (Month, Date, Hours, Minutes, Seconds, Milliseconds)
	for (i = 0; i < proxyGettersAndSetters.length; i ++) {
		makeGetterAndSetter(proxyGettersAndSetters[i].toLowerCase().replace(/s$/, ''), proxyGettersAndSetters[i]);
	}

	// add shortcut for year (uses different syntax than the getter/setter 'year' == 'FullYear')
	makeGetterAndSetter('year', 'FullYear');

	// add plural methods
	moment.fn.days = moment.fn.day;
	moment.fn.weeks = moment.fn.week;
	moment.fn.isoWeeks = moment.fn.isoWeek;

	/************************************
	 Duration Prototype
	 ************************************/


	moment.duration.fn = Duration.prototype = {
		weeks : function () {
			return absRound(this.days() / 7);
		},

		valueOf : function () {
			return this._milliseconds +
				this._days * 864e5 +
				this._months * 2592e6;
		},

		humanize : function (withSuffix) {
			var difference = +this,
				output = relativeTime(difference, !withSuffix, this.lang());

			if (withSuffix) {
				output = this.lang().pastFuture(difference, output);
			}

			return this.lang().postformat(output);
		},

		lang : moment.fn.lang
	};

	function makeDurationGetter(name) {
		moment.duration.fn[name] = function () {
			return this._data[name];
		};
	}

	function makeDurationAsGetter(name, factor) {
		moment.duration.fn['as' + name] = function () {
			return +this / factor;
		};
	}

	for (i in unitMillisecondFactors) {
		if (unitMillisecondFactors.hasOwnProperty(i)) {
			makeDurationAsGetter(i, unitMillisecondFactors[i]);
			makeDurationGetter(i.toLowerCase());
		}
	}

	makeDurationAsGetter('Weeks', 6048e5);


	/************************************
	 Default Lang
	 ************************************/


		// Set default language, other languages will inherit from English.
	moment.lang('en', {
		ordinal : function (number) {
			var b = number % 10,
				output = (~~ (number % 100 / 10) === 1) ? 'th' :
					(b === 1) ? 'st' :
						(b === 2) ? 'nd' :
							(b === 3) ? 'rd' : 'th';
			return number + output;
		}
	});


	/************************************
	 Exposing Moment
	 ************************************/


	// CommonJS module is defined
	if (hasModule) {
		module.exports = moment;
	}
	/*global ender:false */
	if (typeof ender === 'undefined') {
		// here, `this` means `window` in the browser, or `global` on the server
		// add `moment` as a global object via a string identifier,
		// for Closure Compiler "advanced" mode
		this['moment'] = moment;
	}
	/*global define:false */
	if (typeof define === "function" && define.amd) {
		define("moment", [], function () {
			return moment;
		});
	}
}).call(this);;
steal.executed('documentjs/site/static/build/lib/moment.js');
steal("./activitySummary.js",
	"./chatLine.js",
	"./configuration.js",
	"./forumPost.js",
	"./githubEvent.js",
	"./githubIssue.js",
	"./plugin.js",
	"./tweet.js")
;
steal.executed('documentjs/site/static/build/models/models.js');
can.Model('Bitovi.OSS.ActivitySummary', {
	summary: null,
	// the configuration is not going to change,
	// and it's pretty much a singleton, so:
	findOne: function() {
		if(Bitovi.OSS.ActivitySummary.summary === null) {
			Bitovi.OSS.ActivitySummary.summary = $.ajax({
				url: Bitovi.URL.BITHUB + 'summary',
				dataType: 'json',
				data: {
					origin_date: moment().subtract('years', 3).format('YYYY-MM-DD:')
				}
			});
		}

		return Bitovi.OSS.ActivitySummary.summary;
	},
	model: function(data) {
		//{"data":{"app":23,"article":30,"plugin":7,"code":1041,"chat":5578,"twitter":1510,"issues_event":247,"github":2547}}
		data = data.data;
		return {
			apps: data.app,
			commits: data.code,
			posts: data.posts,
			articles: data.article,
			plugins: data.plugin
		};
	}
}, { });;
steal.executed('documentjs/site/static/build/models/activitySummary.js');
can.Model("Bitovi.OSS.ChatLine", {
	models: function(list) {
		var models = list.data.map(function(el) {
			return Bitovi.OSS.ChatLine.model(el);
		});

		return new can.Observe.List(models).reverse();
	},
	model: function(data) {
		return {
			actor: data.actor,
			body: data.title,
			feed: data.feed,
			date: new Date(data.origin_ts)
		};
	},
	findAll: {
		url: Bitovi.URL.BITHUB + '?category=chat&order=origin_ts:desc&limit={limit}',
		dataType: 'json'
	}
}, { });
;
steal.executed('documentjs/site/static/build/models/chatLine.js');
can.Model('Bitovi.OSS.Configuration', {
	configuration: null,
	// the configuration is not going to change,
	// and it's pretty much a singleton, so:
	findOne: function() {
		if(Bitovi.OSS.Configuration.configuration === null) {
			Bitovi.OSS.Configuration.configuration = $.ajax({
				url: Bitovi.URL.BUILDER_DATA,
				dataType: 'jsonp'
			});
		}

		return Bitovi.OSS.Configuration.configuration;
	},
	model: function(data) {
		var libraries = [];
		can.each(data.configurations, function(library, id) {
			library.id = id;
			libraries.push(library);
		});
		
		var types = {};
		can.each(data.types, function(description, id) {
			types[id] = {
				id: id,
				description: description,
				modules: []
			};
		});

		can.each(data.modules, function(module, path) {
			module.id = Bitovi.OSS.Configuration.pathToID(path);
			module.path = path;
			types[module.type].modules.push(module);
		});

		return {
			name: data.name,
			version: data.version,
			description: data.description,
			libraries: libraries,
			types: types,
			modules: data.modules
		};
	},
	pathToID: function(path) {
		return path.split('/').join('-').split('.').join('_');
	},
	idToPath: function(id) {
		return id.split('_').join('.').split('/').join('/');
	}
}, { });;
steal.executed('documentjs/site/static/build/models/configuration.js');
can.Model("Bitovi.OSS.ForumPost", {
	model: function(data) {
		return {
			actor: data.actor,
			title: data.title,
			body: data.body,

			feed: data.feed,
			link: data.url,
			points: data.upvotes,
			date: new Date(data.origin_ts)
		};
	},
	findAll: {
		url: Bitovi.URL.BITHUB + '?feed=forums&order=origin_ts:desc&limit={limit}',
		dataType: 'json'
	}
}, { });;
steal.executed('documentjs/site/static/build/models/forumPost.js');
can.Model("Bitovi.OSS.GithubEvent", {
	model: function(data) {
		return {
			actor: data.actor,
			actorID: data._author,
			picture: data.source_data.org.avatar_url,
			title: data.title,
			commits: data.source_data.payload.commits ? data.source_data.payload.commits.map(function(el) {
				return {
					hash: el.sha,
					message: el.message
				}
			}) : [],
			feed: data.feed,
			category: data.category,
			link: data.url,
			points: data.points,
			date: new Date(data.origin_ts)
		};
	},
	findAll: {
		url: Bitovi.URL.BITHUB + '?category=code&also=source_data&order=origin_ts:desc&limit={limit}',
		dataType: 'json'
	}
}, { });;
steal.executed('documentjs/site/static/build/models/githubEvent.js');
can.Model("Bitovi.OSS.GithubIssue", {
	model: function(data) {
		return {
			actor: data.actor,
			actorID: data._author,
			picture: data.source_data.org.avatar_url,
			title: data.title,
			body: data.body,

			feed: data.feed,
			category: data.category,
			link: data.url,
			points: data.upvotes,
			date: new Date(data.origin_ts)
		};
	},
	findAll: {
		url: Bitovi.URL.BITHUB +  '?category=bug&also=source_data&order=upvotes&limit={limit}',
		dataType: 'json'
	}
}, { });;
steal.executed('documentjs/site/static/build/models/githubIssue.js');
can.Model("Bitovi.OSS.Plugin", {
	model: function(data) {
		// The API's not returning plugins and apps yet, so this may
		// end up being innacurate.
		return {
			actor: data.actor,
			title: data.title,
			body: data.body,

			feed: data.feed,
			link: data.url,
			points: data.upvotes,
			date: new Date(data.origin_ts)
		};
	},
	findAll: {
		url: Bitovi.URL.BITHUB + '?category=article|app|plugin&order=upvotes:desc&limit={limit}',
		dataType: 'json'
	}
}, { });;
steal.executed('documentjs/site/static/build/models/plugin.js');
can.Model("Bitovi.OSS.Tweet", {
	model: function(data) {
		return {
			handle: data.actor,
			realName: data.source_data[data.source_data.event === 'follow' ? 'source' : 'user'].name,
			picture: data.source_data[data.source_data.event === 'follow' ? 'source' : 'user'].profile_image_url,
			body: data.title,

			feed: data.feed,
			link: data.url,
			points: data.upvotes,
			date: new Date(data.origin_ts)
		};
	},
	findAll: {
		url: Bitovi.URL.BITHUB + '?feed=twitter&order=origin_ts:desc&limit={limit}',
		dataType: 'json'
	}
}, { });;
steal.executed('documentjs/site/static/build/models/tweet.js');
steal("./downloadCustomizer.js").then(
	"./apiSignature.js",
	"./benefitTabs.js",
	"./cdnChooser.js",
	"./communityTab.js",
	"./communityTabs.js",
	"./contentsList.js",
	"./forumsTab.js",
	"./githubTab.js",
	"./heroDownloadCustomizer.js",
	"./ircTab.js",
	"./issuesTab.js",
	"./liveExample.js",
	"./menu.js",
	"./pluginsTab.js",
	"./socialStats.js",
	"./twitterTab.js")
;
steal.executed('documentjs/site/static/build/controls/controls.js');
can.Control('Bitovi.OSS.DownloadCustomizer', {
	defaults: {
		minified: false,
		configuration: null,
		view: 'templates/downloadCustomizer.mustache'
	}
}, {
	init: function() {
		this.options = new can.Observe(this.options);
		this.isDependedOnBy = {};
		this.checkAlls = {};
		
		var self = this;
		Bitovi.OSS.Configuration.findOne().done(function(config) {
			self.isDependedOnBy = self._collectDependedOn(config);
			self.options.attr('configuration', config);
			can.each(config.types, function(obj, type) {
				self.element.find('[name=' + type + ']:checkbox:first').change();
			});
		});

		this.element.append(can.view(this.options.view, this.options, {
			versionNumber: function(version) {
				return version() ? version() : '';
			}
		}));
	},
	_collectDependedOn: function(config) {
		var isDependedOnBy = {};
		can.each(config.modules, function(module, path) {
			can.each(module.dependencies, function(dependency) {
				if(! isDependedOnBy[dependency]) {
					isDependedOnBy[dependency] = [];
				}

				isDependedOnBy[dependency].push(path);
			});
		});

		return isDependedOnBy;
	},
	'input.module[type=checkbox] change': function(el, ev) {
		if(el.prop('checked')) {
			// also check dependencies
			can.each(can.data(el, 'module').dependencies, function(dependency) {
				$('#' + Bitovi.OSS.Configuration.pathToID(dependency)).prop('checked', true).change();
			});

			if(! $('[name=' + el.prop('name') + ']:checkbox:enabled:not(:checked)').length) {
				$('#' + el.prop('name')).prop('checked', true);
			}
		} else {
			$('.all[data-type=' + can.data(el, 'module').type + ']').prop('checked', false);
			this.checkAlls[can.data(el, 'module').type] = false;

			if(this.isDependedOnBy[el.val()]) {
				// uncheck depended-on-cies
				can.each(this.isDependedOnBy[el.val()], function(dependedOn) {
					$('#' + Bitovi.OSS.Configuration.pathToID(dependedOn)).prop('checked', false).change();
				});
			}
		}
	},
	'.all change': function(el, ev) {
		this.checkAlls[can.data(el, 'type')] = el.prop('checked');

		can.each(this.options.configuration.types[can.data(el, 'type')].modules, function(module) {
			var check = $('#' + Bitovi.OSS.Configuration.pathToID(module.id))
			if(! check.prop('disabled')) {
				check.prop('checked', el.prop('checked')).change();
			}
		});
	},
	'input[name=configuration] change': function(el, ev) {
		if(el.prop('checked')) {
			this._libraryChanged(el.prop('id'));
		}
	},
	_libraryChanged: function(libraryID) {
		var self = this;
		can.each(this.options.configuration.modules, function(module) {
			var disallowed = !!(module.configurations && module.configurations.indexOf(libraryID) < 0);
			var check = $('#' + module.id);
			check
				.closest('tr').toggleClass('inactive', disallowed).end()
				.prop('disabled', disallowed)
				.prop('checked', disallowed ? false : check.prop('checked') || self.checkAlls[module.type]).change();
		});
		can.each(this.options.configuration.types, function(obj, type) {
			self.element.find('[name=' + type + ']:checkbox:first').change();
		});
	}

});;
steal.executed('documentjs/site/static/build/controls/downloadCustomizer.js');
can.Control('Bitovi.OSS.ApiSignature', {}, {
	'h2 click': function(el, ev) {
		this.element.toggleClass('collapsed');
	}
});;
steal.executed('documentjs/site/static/build/controls/apiSignature.js');
can.Control('Bitovi.OSS.Benefits', {
	defaults: {
		tabs: {
			flexible: {
				className: 'flexible',
				title: 'Flexible',
				tagline: 'Works with jQuery, Dojo, Mootools, YUI, and Zepto. Reuse your existing templates.',
				link: 'guides/Why.html#Flexible'
			},
			powerful: {
				className: 'powerful',
				title: 'Powerful',
				tagline: 'Live binding, restful models, observables, declarative events, and memory safety.',
				link: 'guides/Why.html#Powerful'
			},
			fast: {
				className: 'fast',
				title: 'Fast',
				tagline: 'Fast templates, responsive widgets, and you can learn it in a day.',
				link: 'guides/Why.html#Fast'
			}
		}
	}
}, {
	init: function() {
		this.state = new can.Observe({tabs: this.options.tabs, selectedTab: this.options.tabs.powerful});
		this.element.html(can.view('templates/benefitTabs.mustache', this.state, {
			makeTabs: function(tabs, options) {
				var out = '';
				can.each(tabs().attr(), function(val, key) {
					out += options.fn(val);
				});
				return out;
			}
		}));
		this._switchBenefit('powerful');
	},
	'li mouseover': function(el, ev) {
		this._switchBenefit(el.data('benefit'));
	},
	_switchBenefit: function(benefit) {
		this.state.attr('selectedTab', this.options.tabs[benefit]);

		$('li', this.element).removeClass('active');
		$('li[data-benefit=' + benefit + ']', this.element).addClass('active');

	}
});;
steal.executed('documentjs/site/static/build/controls/benefitTabs.js');
can.Control('Bitovi.OSS.CDNChooser', {
	defaults: {
		version: '',
		libraries: [],
		selectedLibrary: '',
		cdn: Bitovi.URL.CDN
	}
}, {
	init: function() {
		this.options = new can.Observe(this.options);
		
		var self = this;
		Bitovi.OSS.Configuration.findOne().done(function(config) {
			self.options.libraries.attr(config.libraries);
			self.options.attr('version', config.version);
			self.element.find('select').change();
		});

		this.element.html(can.view('templates/cdnChooser.mustache', this.options));
	},
	// function adapted from http://stackoverflow.com/questions/11128130/select-text-in-javascript
	selectText: function(element) {
		if (document.body.createTextRange) { // ms
	        var range = document.body.createTextRange();
	        range.moveToElementText(element);
	        range.select();
	    } else if (window.getSelection) { // moz, opera, webkit
	        var selection = window.getSelection();            
	        var range = document.createRange();
	        range.selectNodeContents(element);
	        selection.removeAllRanges();
	        selection.addRange(range);
	    }
	},
	'.cdn-link click': function(el, ev) {
		this.selectText(el[0]);
	},
	'select change': function(el, ev) {
		this.options.attr('selectedLibrary', el.val());
	}
});;
steal.executed('documentjs/site/static/build/controls/cdnChooser.js');
can.Control('Bitovi.OSS.CommunityTab', {
	defaults: {
		view: ''
	}
}, {
	init: function() {
		can.Mustache.registerHelper('formatDate', function(date) {
			return moment(date()).calendar();
		});

		this.element.html(can.view(this.options.view, this.options.state));
	}
});;
steal.executed('documentjs/site/static/build/controls/communityTab.js');
can.Control('Bitovi.OSS.CommunityTabs', {
	defaults: {
		tabControls: {
			'forums': 'ForumsTab',
			'irc': 'IRCTab',
			'plugins': 'PluginsTab',
			'twitter': 'TwitterTab',
			'issues': 'IssuesTab',
			'github': 'GithubTab'
		}
	}
}, {
	init: function() {
		// get data for all six tabs up front
		// this way, it doesn't call for the data every time a tab switches.
		this.state = new can.Observe({});
		var self = this;

		Bitovi.OSS.ForumPost.findAll({limit: 3}).done(function(posts) {
			self.state.attr('forumPosts', posts);
		});
		// Missing counts for forum categories
		Bitovi.OSS.ChatLine.findAll({limit: 30}).done(function(lines) {
			self.state.attr('lines', lines);
		});
		Bitovi.OSS.Plugin.findAll({limit: 3}).done(function(plugins) {
			self.state.attr('plugins', plugins);
		});
		// Missing counts for plugins/apps/articles
		Bitovi.OSS.Tweet.findAll({limit: 3}).done(function(tweets) {
			self.state.attr('tweets', tweets);
		});
		Bitovi.OSS.GithubIssue.findAll({limit: 3}).done(function(issues) {
			self.state.attr('issues', issues);
		});
		Bitovi.OSS.GithubEvent.findAll({limit: 3}).done(function(commits) {
			self.state.attr('commits', commits);
		});
		// Missing follower counts for github

		this.element.html(can.view('templates/communityTabs.mustache', {}));
	},
	//'li mouseenter': '_switchTab',
	'li click': function(el, ev) {
		can.route.attr('type', el.prop('class'));
	},
	':type route': function(data) {
		this._switchTab(data.type);
	},
	_switchTab: function(selectedTab) {
		this.element
			.find('li').removeClass('active')
			.filter('.' + selectedTab).addClass('active');
		var tabControl = this.options.tabControls[selectedTab];
		new Bitovi.OSS[tabControl]($('.content > .container'), {state: this.state});
	}
});;
steal.executed('documentjs/site/static/build/controls/communityTabs.js');
can.Control("Bitovi.OSS.ContentsList", {
	init: function() {
		var sections = [];

		this.collectSignatures().each(function(ix) {
			var h2 = $('h2', this);
			this.id = 'sig' + ix;
			//this.id = encodeURIComponent(h2.text());
			sections.push({id: this.id, text: h2.text()});
		});

		this.collectHeadings().each(function(ix) {
			var el = $(this);
			this.id = 'section' + ix;
			//this.id = encodeURIComponent(el.text());
			sections.push({id: this.id, text: el.text()});
		});

		this.element.html(can.view(
			'templates/contentsList.mustache',
			{sections: sections},
			{encode: function() { return encodeURIComponent(this); }}
		));

		if(window.location.hash.length) {
			var anchor = $(window.location.hash);
			if(anchor.length) {
				anchor[0].scrollIntoView(true);
			}
		}
	},
	collectSignatures: function() {
		return $('.content .signature');
	},
	collectHeadings: function() {
		return $('.content .comment h2');
	}
});;
steal.executed('documentjs/site/static/build/controls/contentsList.js');
Bitovi.OSS.CommunityTab('Bitovi.OSS.ForumsTab', {
	defaults: {
		view: 'templates/forumsTab.mustache'
	}
}, {
	init: function() {
		this._super();

		can.Mustache.registerHelper('truncatePost', function(post) {
			var div = $('<div></div>').html(post());
			/* Here's the 'smart' (ish?) way, but that's not how Bithub does it.
			return div[0].childNodes[0].nodeValue || div.children().first().text();
			*/
			return div.text().substr(0, 200);
		});

	},
	'#forumSearch button click': function(el, ev) {
		var terms = $('input[type=search]').val();
		window.location.href = 'https://forum.javascriptmvc.com/#Search/' + terms;
	},
	'#forumSearch input[type=search] keypress': function(el, ev) {
		if(ev.which === 13/* Return */) {
			ev.preventDefault();
			var terms = el.val();
			window.location.href = 'https://forum.javascriptmvc.com/#Search/' + terms;
		}
	}
});;
steal.executed('documentjs/site/static/build/controls/forumsTab.js');
Bitovi.OSS.CommunityTab('Bitovi.OSS.GithubTab', {
	defaults: {
		view: 'templates/githubTab.mustache'
	}
}, {
	init: function() {
		this._super();

		can.Mustache.registerHelper('truncateHash', function(hash) {
			return hash().substr(0, 6);
		});
	}
});;
steal.executed('documentjs/site/static/build/controls/githubTab.js');
Bitovi.OSS.DownloadCustomizer('Bitovi.OSS.HeroDownloadCustomizer', {
	defaults: {
		view: 'templates/heroDownloadCustomizer.mustache'
	}
}, {
	init: function() {
		this._super();
		this.isOpen = false;
	},
	'.customize click': function(el, ev) {
		this.toggleFlyout();
		ev.stopPropagation();
	},
	'.customize-box click': function(el, ev) {
		ev.stopPropagation();
	},
	'{window} click': function(el, ev) {
		this.toggleFlyout(false);
	},
	'.download click': function(el, ev) {
		this.toggleFlyout(false);
	},
	'select[name=configuration] change': function(el, ev) {
		this._libraryChanged(el.val());
	},
	_libraryChanged: function(libraryID) {
		var self = this;
		can.each(this.options.configuration.modules, function(module) {
			var disallowed = !!(module.configurations && module.configurations.indexOf(libraryID) < 0);
			var check = $('#' + module.id);
			check
				.closest('li').toggleClass('inactive', disallowed).end()
				.prop('disabled', disallowed)
				.prop('checked', disallowed ? false : check.prop('checked') || self.checkAlls[module.type]).change();
		});
	},
	toggleFlyout: function(open) {
		if(open === undefined) {
			this.isOpen = this.element.find('.customize').toggleClass('active').hasClass('active');
			open = this.isOpen;
		}

		if(open) {
			this.element.find('.customize').addClass('active');
			var customizeBox = this.element.find('.customize-box').show();

			// make customizeBox the right width
			customizeBox.width($('#hero-download').width() - (parseInt(customizeBox.css('padding-left'), 10) + parseInt(customizeBox.css('padding-right'), 10)));

			this.isOpen = true;
		} else {
			this.element.find('.customize').removeClass('active');
			this.element.find('.customize-box').hide();
			this.isOpen = false;
		}
	}
});;
steal.executed('documentjs/site/static/build/controls/heroDownloadCustomizer.js');
Bitovi.OSS.CommunityTab('Bitovi.OSS.IRCTab', {
	defaults: {
		view: 'templates/ircTab.mustache'
	}
}, {
	init: function() {
		this._super();
		this.scrollToBottom();
	},
	scrollToBottom: function() {
		var chatbox = $('.irc-chat-container', this.element);
		chatbox.scrollTop(chatbox.prop('scrollHeight'));
	},
	'{state} lines': function(ev, newVal, oldVal) {
		// we have to wait until the tempate re-renders
		window.setTimeout(can.proxy(this.scrollToBottom, this), 0);
	}
});;
steal.executed('documentjs/site/static/build/controls/ircTab.js');
Bitovi.OSS.CommunityTab('Bitovi.OSS.IssuesTab', {
	defaults: {
		view: 'templates/issuesTab.mustache'
	}
}, {
	init: function() {
		this._super();
	}
});;
steal.executed('documentjs/site/static/build/controls/issuesTab.js');
can.Control('Bitovi.OSS.LiveExample', {
    
}, {
    '.execute click': function(el, ev) {
    }
});;
steal.executed('documentjs/site/static/build/controls/liveExample.js');
can.Mustache.registerHelper('makeHref', function(src) {
	return src().replace(/ /g, "_")
		.replace(/&#46;/g, ".")
		.replace(/&gt;/g, "_gt_")
		.replace(/\*/g, "_star_")
		.replace(/\//g, "|") + '.html';
});

can.Control('Bitovi.OSS.Menu', {
	defaults: {
		emptyText: 'Nothing found...'
	}
}, {
	search: function(regex) {
		this.element.addClass('search-results').find('[data-search]').each(function() {
			var el = $(this),
				searchTerm = el.data('search');

			if(searchTerm && regex.test(searchTerm)) {
				// Show parent search containers
				el.show().parents('.search-container').show()
					// Show all children
					.end().closest('.search-container').find('.search-container').show();
			}
		});

		// Show main headings
		this.element.find('.api > .search-container > [data-search]').show();
	},

	reset: function() {
		this.element.removeClass('search-results').find('.search-container').css('display', '')
			.end().find('[data-search]').css('display', '');
	},

	'.search input keyup': function(el) {
		var value = el.val().replace(/([.?*+^$[\]\\(){}|-])/g);
		if(value.length > 1) {
			this.element.find('.search-container').hide();
			this.search(new RegExp(value, 'gim'));
		} else {
			this.reset();
		}
	}/*,

	'li.active > a click': function(el, ev) {
		ev.preventDefault();
	},

	'li.active click': function(el, ev) {
		el.toggleClass('collapsed');
	}*/
});
;
steal.executed('documentjs/site/static/build/controls/menu.js');
Bitovi.OSS.CommunityTab('Bitovi.OSS.PluginsTab', {
	defaults: {
		view: 'templates/pluginsTab.mustache'
	}
}, {
	init: function() {
		this._super();
	}
});;
steal.executed('documentjs/site/static/build/controls/pluginsTab.js');
can.Control('Bitovi.OSS.SocialStats', {}, {
	init: function() {
		this.state = new can.Observe({});
		this.element.html(can.view('templates/socialStats.mustache', this.state, {
			plural: function(word, count) {
				// if we ever get an irregular plural (like 'people') we'll have to special-case.
				return count === 1 ? word : word + 's';
			}
		}));

		Bitovi.OSS.ActivitySummary.findOne().done(can.proxy(function(summary) {
			this.state.attr(summary);
		}, this));
	}
});;
steal.executed('documentjs/site/static/build/controls/socialStats.js');
Bitovi.OSS.CommunityTab('Bitovi.OSS.TwitterTab', {
	defaults: {
		view: 'templates/twitterTab.mustache'
	}
}, {
	init: function() {
		this._super();
	}
});;
steal.executed('documentjs/site/static/build/controls/twitterTab.js');
steal.popPending();
