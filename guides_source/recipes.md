@page Recipes Recipes
@parent guides 4




##How do I...

## Get Started

There are a variety of ways to get CanJS.  Read the [using CanJS guide](http://canjs.com/guides/Using.html)
for comprehensive list.  For the following recipies, we will load CanJS
with a `<script>` tag pointed to CanJS's CDN.

Create a file called `myapp.html` and put the following in it to get started:

	<script src="//code.jquery.com/jquery-1.10.1.min.js"></script>
	<script src="//canjs.com/release/2.0.4/can.jquery.js"></script>
	<script type="text/mustache" id="app-template">
	//Template will go here
	</script>
	<script>
	//Application code will go here
	</script>

	<!-- CanJS needs a place to put your application -->
	<div id="my-app"></div>

To follow along with the other recipes, you can also use 
[this JSFiddle](http://jsfiddle.net/donejs/GE3yf/) as a template.

You can also [Download CanJS](http://canjs.com/download.html) 
or follow [other tutorials](http://canjs.com/guides/Tutorial.html) to get
started, but for the rest of the examples below, we'll be using this
setup.

## Say "Hello World"

In CanJS, content is displayed using *templates*.  Instead of manually
changing elements in the DOM, you create a template and CanJS
automatically updates the page from the data in your application code.

### Template

In the template section of `myapp.html`, put the following:


    <script type="text/mustache" id="app-template">
    <h1>{{message}}</h1>
    </script>

This template displays the value of `message`.

### Pass message to the Template

Templates are rendered with [can.view](../docs/can.view.html), which takes two arguments: the first is the `id` of the template,
and the second is the data passed to the template (in this case,
an object with a `message` property).

Render the template with a `message` and insert it into the page with:


    <script>
    // Give message a value
    var data = {message: "Hello World!"};

    // Pass the id of the template and the data, containing our message to can.view
    var frag = can.view("app-template", data);

	//Load the DocumentFragment in the page
    $("#my-app").html( frag )
    </script>

> `frag` is a [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment). A DocumentFragment 
> is a lightweight container of HTMLElements that can be inserted in the page quickly. They can be used
> anywhere a normal HTMLElement is used.

<iframe width="100%" height="300" src="http://jsfiddle.net/donejs/GE3yf/embedded/result,html,js/" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>

## Update Text in the Page

CanJS will update the page automatically when [observable](http://sourcemaking.com/design_patterns/observer) 
data changes. To make observable data, pass raw data to [can.Map](../docs/can.Map.html), 
[can.List](../docs/can.List.html) or [can.compute](../docs/can.compute.html) like:

	var data = new can.Map({message: "Hello World!"});

To change the message, use the [attr()](../docs/can.Map.prototype.attr.html) method of `can.Map`.

	data.attr("message", "Goodbye World!")

When the button is clicked in the example below, the message is
changed with `data.attr()`.

<iframe width="100%" height="300" src="http://jsfiddle.net/donejs/quTtE/embedded/result,html,js/" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>

### Show a List in a Template

To make an Array observable, pass it to [can.List](../docs/can.List.html).

	var people = new can.List([
		{firstname: "John", lastname: "Doe"},
		{firstname: "Emily", lastname: "Dickinson"}
	])

	var frag = can.view("app-template", {people: people})
	$("#my-app").html(frag);


To show a list of data within a mustache template, use the `#each` operator.

    <ul>
    {{#each people}}
	  <li>
	    {{lastname}}, {{firstname}}
	  <li>
    {{/each}}
    </ul>

Inside the `#each` block, the attributes are scoped to individual
objects in the list of `people`.

To make changes to the list, use an Array method such as 
[push](/docs/can.List.prototype.push.html)
or [pop](/docs/can.List.prototype.pop.html).

	// adds a new person
	people.push({firstname: "Paul", lastname: "Newman"})
	// removes the last person
	people.pop()

<iframe width="100%" height="300" src="http://jsfiddle.net/donejs/Pgbpa/embedded/result,html,js/" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>

### Show and Hide Elements

Instead of showing and hiding elements by changing the DOM
directly like:

    $("h1").show()
    $("h1").hide()

Make the template show or hide those elements when a value 
changes.  


    {{#if visible}}
      <h1>{{message}}</h1>
    {{/if}}

When the button is clicked, change the observable value.

    data.attr("visible", !data.attr("visible"))

<iframe width="100%" height="300" src="http://jsfiddle.net/donejs/eFss4/embedded/result,html,js/" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>

#### Application State

Typically, it's not a good idea to mix view state and application data.
In the previous example, the `message` is application data, while the 
`visible` property represents view state. In CanJS, state and data
should be separated using different observables.

	var data = new can.Map({message: "Hello World!"}),
		state = new can.Map({visible: true});

	var frag = can.view("app-template", {
	  data: data,
	  state: state
	})

As an application gets more complex, separating state from data
makes things more maintainable.

### Create a Live Timestamp

This recipe demonstrates how to generate a 'live' timestamp
that displays in a human-readable format. This means handling 
application state that changes over time, as well as making 
information rendered in a template human-readable using a helper function.

First, we'll add a `createdAt` property to the data like:

     var data = new can.Map({
       message: "Hello World",
       createdAt: new Date()
     })

On the page, this should be displayed as a human readable
timestamp:

     <h1>Hello World <i>created just now</i></h1>

__and__ as time passes, the timestamp will update to:

    <h1>Hello World <i>created a few seconds ago</i></h1>

__and__ then update to "some seconds ago" and so forth.

To accomplish this, create a `prettyDate` [mustache helper](../docs/can.Mustache.helper.html) that converts
dates into a human readable format.  A helper function is called from within the template where its result 
will be displayed.  The following calls `prettyDate` with an observable value of `createdAt`.

    <h1>
      {{message}} 
      <i>created {{prettyDate createdAt}}</i>
    </h1> 

To call a function from a template, [register](../docs/can.Mustache.registerHelper.html) it with `can.view`.
The third argument passed to `can.view` is an object with helper functions, so the `dateHelper` function
can be registered as `prettyView`.

		var dateHelper = function ( date ) {
			//helper function
		}

    var frag = can.view("app-template", data, {prettyDate: dateHelper});

In this helper, `date` is not a Date object, instead it is an observable [can.compute](../docs/can.compute.html) that
contains the `createdAt` value.  A `can.compute` is an observable that contains a single value.  To read the value,
call the compute like you would any other function:

    date() //-> Date

We need to compare `date` with the current time. The current time
will be represented by a compute:

    var now = can.compute( new Date() )

As the current time changes, we update `now` with the new time. To change the value of a `can.compute`,
call it with its new value as an argument:
    
    // update that property every second        
    setTimeout(function(){
        now( new Date() );
        setTimeout(arguments.callee, 1000);
    },1000)

The `prettyDate` helper will read and compare the `date` and `now` compute to 
get the time elapsed in seconds:

    var timeElapsed = ( now() - date() ) / 1000


Using the `timeElapsed`, `prettyDate` returns human readable timestamps:

	  if(timeElapsed < 1.2){
	    return "just now"
	  } else if (timeElapsed < 10) {
	    return "a couple seconds ago"	
	  } 
      ... 
	  else {
	    return Math.round(difference/60)+" minutes ago"
	  }


<iframe width="100%" height="300" src="http://jsfiddle.net/donejs/VQNSH/embedded/result,html,js/" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>

## Handle User Interaction 

When a user does something, such as clicking, an `event` occurs. Event handlers specify
how [JavaScript should respond to an event](http://bitovi.com/blog/2010/10/a-crash-course-in-how-dom-events-work.html).

This recipe will introduce handling a click event using a [`can.Control`](http://canjs.com/docs/can.Control).
Using a list of people like previous recipes, clicking any individual person's name
will remove that person from the list.

Previous examples have used jQuery's event handlers:

	$("#push").click(function(){
	  //handle the event
	})

CanJS provides a few different ways to respond to events. As well as
making application code simpler, using CanJS to handle events can help to
automatically prevent [memory leaks](http://bitovi.com/blog/2012/04/zombie-apocolypse.html).

A `can.Control` allows us to define how the application should behave
when its state changes.  To do this, extend `can.Control`.

	var PeopleList = can.Control.extend({
		//behavior
	});

Then, we will be able to use our data, in this case an array
of `people`, when instantiating our `PeopleList` Control.

	var people = [
    {firstname: "John", lastname: "Doe"},
    {firstname: "Emily", lastname: "Dickinson"},
    {firstname: "William", lastname: "Adams"},
    {firstname: "Stevie", lastname: "Nicks"},
    {firstname: "Bob", lastname: "Barker"}
	];

	new PeopleList('#my-app', {people: people});

When instantiated, the `init` method is called, and `PeopleList`
needs to keep an observable list of `people` (accomplished with
`can.List`) and render the list using `can.view`. The first argument
(in this case `'#my-app'`) is a selector defining the elements
the list should be rendered in.

	var PeopleList = can.Control.extend({
    init: function( element, options ){
         this.people = new can.List(op.people);
         this.element.html( can.view('app-template', {
         		 //defines people in the template as the observable can.List
             people: this.people
        }));
    }
  }

When the event handler for a `click` is defined, it needs a way
to access the object associated with the `li` that was clicked.
With the `data` helper, the element will retain a reference
to the object it is associated with (in this case, a `person`).

	<ul>
	{{#each people}}
	    <li {{data 'person'}}>
			{{lastname}}, {{firstname}}
	    </li>
	{{/each}}
	</ul>  

Finally, the event handler must be defined. In a `can.Control`,
an event handler function can be defined with a string containing
a selector and an event. In this case, these are `li` and `click`,
recpectively, since we want to handle click events on each list item.

	var PeopleList = can.Control.extend({
    init: function(){ 
    	...
    },
    'li click': function( li, event ) {
           var people = this.options.people;
           var person = li.data('person');
           var index = people.indexOf(person);
           people.splice(index, 1);
    }
	});

As a reminder, though event handlers respond to actions on the page 
they should *change application state or data* (e.g. make a change to a `can.Map`).
This will update the page automatically, keeping code manageable.

When a user clicks a list item:

 1. The function bound to `li click` is called
 2. The object associated with that list item is accessed using the `data` helper
 3. That object is removed from the observable `people` list
 4. The template updates automatically

This is *one* way to handle events. Others will be covered
in the following recipes while building widgets.

<iframe width="100%" height="300" src="http://jsfiddle.net/donejs/F9kzt/embedded/result,html,js/" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>

## Build Widgets/UI Elements

Previous recipes have demonstrated how to change page content and introduced
event handling. The following recipes will introduce `can.Component`, 
which allows for straightforward widget construction by packaging
template, state, and event handling code in one place.

While similar *behavior* can be accomplished with `can.Control`,
building a Component enables building reusable widgets using custom
HTML tags.

### Create a Component

The previous recipe that displays a list of people can instead 
be represented as a component. 

	<people></people>

Any time a `people` tag is put into a template, the component will
be rendered since we set `people` as the tag.

	can.Component.extend({
	    tag: 'people',
	...

The template for the component itself is passed via the `template`
argument. This can either be an external file or a string.
Each `li` uses `can-click`, which declares an event binding.
Here, the method called `remove` inside this component's
scope will be called with the relevant `people` object
as an argument.

	...
	    template: '<ul>' +
	                '{{#each people}}' +
	                '<li can-click="remove">' +
	                    '{{lastname}}, {{firstname}}' +
	                '</li>' +
	                '{{/each}}' +
	                '</ul>',
	...

The `scope` object contains the component's state
as well as defining some of its behavior. Here,
this includes the `remove` function that was bound
to the `can-click` event above.

	...
	    scope: {
	        people: people,
	        remove: function( person ) {
	            var people = this.attr("people");
	            var index = people.indexOf(person);
	            people.splice(index, 1);
	        }
	    }
	});

This behaves similarly to the `can.Control` from before.
However, the `<people>` tag can be used without having
any knowledge about the inner workings of the widget.
The template, state, and behavior are all combined
into one Component.

<iframe width="100%" height="300" src="http://jsfiddle.net/donejs/WBM9z/embedded/result,html,js/" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>

### Build a Tabs Widget

A tabs widget could be instantiated with the following HTML:

	<tabs>
		<panel title="Fruit">Oranges, Apples, Pears</panel>
		<panel title="Vegetable">Carrot, Lettuce, Rutabega</panel>
		<panel title="Grains">Bread, Pasta, Rice</panel>
	</tabs>

This is one of the most useful features of components. A designer
that understands HTML can put together a template for a `tabs`
widget without understanding anything other than the syntax.

### Tabs Widget Behavior

Before implementing the component itself, we'll
define an observable *view model*--the state object
of the UI element. This makes the code modular and easier
to manage (and also allows for unit testing).

In order to accurately represent a tabs widget,
a `TabsViewModel` needs:
<ul>
<li>An observable list of panels</li>
<li>A state variable with the active panel</li>
<li>Helper methods to add, remove, and activate panels</li>
</ul>

Since this is a `can.Map`, the `panels` object is
automatically converted to a `can.List`.
The `active` variable references the `panel` object
that should currently be displayed.

	var TabsViewModel = can.Map.extend({
		panels: [],
		active: null,
		addPanel: function( panel ){
			var panels = this.attr("panels");
			panels.push(panel);
			panel.attr("visible", false);
			//activate panel if it is the first one
			if ( panels.attr("length") === 1 ){
				this.activate( panel );
			}
		},
		removePanel: function( panel ){
			var panels = this.attr("panels");
			var index = panels.indexOf(panel);
			panels.splice(index, 1);
			//activate a new panel if panel being removed was the active panel
			if( this.attr("active") === panel ){
				panels.attr("length") ? this.activate(panels[0]) : this.attr("active", null)
			}
		},
		activate: function( panel ){
			var active = this.attr("active")
			if( active !== panel ){
				active && active.attr("visible", false);
				this.attr("active", panel.attr("visible", true));
			}
		}
	})

#### Tabs Widget Component

Now that the view model is defined, making a component is simply
a matter of defining the way the tabs widget is displayed.

The template for a `tabs` component needs a list of panel titles
that will `activate` that panel when clicked. Inside the tabs
template, the `<content>` tag will insert everything that is
inside the Component's tag (in this case,
the three `<panel>` components).

	can.Component.extend({
		tag: "tabs",
		scope: TabsViewModel,
		template: "<ul>\
					{{#each panels}}\
						<li can-click='activate'>{{title}}</li>\
					{{/each}}\
					</ul>\
					<content />"
	});

The `tabs` component contains panels, which are also defined
as components. The template contains the logic for whether
the panel is visible (`visible` is controlled by the tabs
component's `activate` method).

Each panel's `scope` contains a title, which should be
taken from the `title` attribute in the `<panel>` tag.
If you want to set the string value of a Component's
attribute as a `scope` variable, use the `'@'` helper.

	can.Component.extend({
	tag: "panel",
	template: "{{#if visible}}<content />{{/if}}",
	scope: {
		title: "@"
	},
	...

In addition to the `scope` object, a component has 
`events` that behave in a similar way to the events
in a `can.Control`.  The `inserted` event occurs when
each `<panel>` is inserted into the page.  When this
happens, the `TabsViewModel` should change, so the
`addPanel` method of the parent object (a `tabs`
component) is called.

	...
		events: {
			inserted: function() {
				this.element.parent().scope().addPanel( this.scope )
			},
			removed: function() {
				this.element.parent().scope().addPanel( this.scope )
			}
		}
	});

With this component, any time a `<tabs>` element with
`<panel>` elements is put in a page, a tabs widget will
automatically be created. This allows application behavior
and design to be compartmentalized from each other.

<iframe width="100%" height="300" src="http://jsfiddle.net/donejs/x6TJK/embedded/result,html,js/" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>

## Build an Application with Data from a Server

In CanJS, `can.Model` adds functionality to `can.Map` to 
work with data on a server.  It enables you to:

 - Get and modify data from a server
 - Listen to changes made to the data on the server
 - Unify service data with other objects in your application

`can.Model` allows you to access data from a server
easily:

	var Todo = can.Model.extend({
	  findAll: 'GET /todos',
	  findOne: 'GET /todos/{id}',
	  create:  'POST /todos',
	  update:  'PUT /todos/{id}',
	  destroy: 'DELETE /todos/{id}' 
	},{});

Using *any* server with a [*REST* interface](http://blog.mashape.com/post/60820526317/list-of-40-tutorials-on-how-to-create-an-api),
 `can.Model` enables create, read, update, and destroy functionality.

### Create a Chat Application

To put together a chat application, we'll use two methods
from `can.Model` to fetch the messages and create new ones:

	var Message = can.Model({
	    findAll : 'GET ' + myServerUrl + '/messages',
	    create : 'POST ' + myServerUrl + '/messages'
	},{});

Using this `Model`, create a `can.Component`.  The tabs Component
used `can-click` to listen for click events.  Since this chat
application uses a `<form>` for sending messages, we'll use
`can-submit` to specify an event handler.

There's one more helper used in the template: [`can-value`](http://canjs.com/docs/can.view.bindings.can-value.html).
This automatically binds the value of an input field to an observable
variable, in this case `newMessage` will be an attribute of the Component:

	can.Component.extend({
	  tag: 'chat',
	  template: '<ul id="messages">' +
	              '{{#each messages}}' +
	              '<li>{{body}}</li>' +
	              '{{/each}}' +
	            '</ul>' +
	            '<form id="create-message" action="" can-submit="submitMessage">' +
	                '<input type="text" id="body" placeholder="type message here..."' + 
	                'can-value="newMessage" />' +
	            '</form>',
	...


In the scope, the `Message` model is stored so provide
so we can save new messages and observe changes to the Model.
`new Message.List({})` is a shortcut to perform
the `findAll` operation on a `can.Model` and
return a `can.List`.

	...
    scope: {    
        Message: Message,
        messages: new Message.List({}),
  ...


When `submitMessage` is called, a new `Message` is created
with `new Message()`. The body of the message is fetched from
the Component's `newMessage` attribute thanks to `can-value`.

To commit the new message to the server, call `save()`.

        submitMessage: function(el, ev, ev2){
            ev2.preventDefault();
            new Message({body: this.attr("newMessage")}).save();
            this.attr("newMessage", "");
        }
    },

Finally, when a new `Message` is created, the `messages` list
must be updated.

    events: {
        '{Message} created': function(construct, ev, message){
            this.scope.attr('messages').push(message);
        }
    }
});

When the chat Component is loaded, messages are loaded from the server
using `can.Model` and `new Message.List({})`.  When a new message is
submitted:

	1. `can-submit` calls `submitMessage`
	2. a new `Message` is created and saved to the server
	3. `'{Message created}'` detects this change and adds the new message to `messages`
	4. The template is automatically updated since `messages` is an observable `can.List`

### Add real-time functionality

This example uses [socket.io](http://socket.io/)
to enable real-time functionality. This guide won't go
into detail on how to use `socket.io`, but for real-time
chat the application needed two more things.

First, the socket must listen to a change from the server, and trigger
the `{Message} created` event:

	var socket = io.connect(myServerUrl)
	socket.on('message-created', function(message){
		new Message(message).created();
	})

Now, when a new message is sent, this will detect the change and
insert it into `messages`. To keep the `created` event from firing
twice, modify the `create` function in the Model:

	var Message = can.Model({
    findAll : 'GET ' + myServerUrl + '/messages',
    create : function(attrs) {
        $.post(myServerUrl + '/messages', attrs);
        //keep '{Message} created' from firing twice
        return $.Deferred();
    }
	},{});

<iframe width="100%" height="300" src="http://jsfiddle.net/donejs/afC94/embedded/result,html,js/" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>

## Request a Recipe

To request a new recipe or vote on an upcoming one, [submit an issue](https://github.com/bitovi/canjs.com/issues)
to the `canjs.com` respository on GitHub.


<!--
### Bind an Input Field to a Value

	//Coming soon

### ?? Respond to Keyboard and Mouse Events

	//Coming soon

### ?? can.Control

In CanJS, [can.Control](/docs/can.Control) is used to listen
for events.

	var People = can.Control.extend({

	  '#push click': function( el, ev ){
	    people.push({firstname: "Paul", lastname: "Newman"})
	  },
	  '#pop click': function( el, ev ){
	    people.pop()
	  }
	})

Any number of event listeners can be added in a `can.Control`
using jQuery-like selectors. This can be used, for instance,
to remove a specific element from a list. First, add a
'destroy' button to the template:

	<script type="text/mustache" id="app-template">
	<button id="push">Add a new person to the list</button>
	<button id="pop">Remove someone from the list</button>  
	<ul>
	{{#each people}}
	    <li>
		{{lastname}}, {{firstname}}
		<button class="destroy">X</button>
	    </li>
	{{/each}}
	</ul>  
	</script>

Then, add a listener that 

	var People = can.Control.extend({

	  'li .destroy click': function( el, ev ){
	  	// get the li element that holds the destroy button
	  	var li = el.closest( 'li' )

	  }

	  '#push click': function( el, ev ){
	    people.push({firstname: "Paul", lastname: "Newman"})
	  },
	  '#pop click': function( el, ev ){
	    people.pop()
	  }
	})

### Show the Same Data in Two Places

Using the observable pattern, the same data can be showed in
two places at once.  Notice that when 'do dishes' changes on
one list, it also changes on the other.  This is because the
same value is shared accross both lists.

<iframe width="100%" height="300" src="http://jsfiddle.net/donejs/SnRKV/embedded/result,html,js/" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>

### Converting User Input to Data

	//Coming soon

### Update data when a Form is Changed

## Make Widgets / UI Elements

One way to create widgets is to use `can.Control` helper functions
to change the classes of elements that are then styled
with CSS.

### Create a tab widget

The helper functions for a tab widget include
finding a tab's content for a given `li` (the tab)
and on the user clicking a list element, hiding
the old tab and show a new one.

	var Tabs = can.Control.extend({
		init: function ( el ) {
		/*
		 * initialization and rendering
		 * ...
		 * /
		},
		// finds tab for a given li
		tab: function ( li ){
			return $( li.find( 'a' ).attr( 'href' ));
		}
		// hides the old active tab, shows new one
		'li click': function( el, ev ) {
			ev.preventDefault();
			this.tab( this.element.find( '.active' )
			            .removeClass( 'active' ) ).hide()
			this.tab( el.addClass( 'active' ) ).show();
		}
	})

<iframe width="100%" height="300" src="http://jsfiddle.net/donejs/kXLLt/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>

### Create a tooltip

For a tooltip, helper functions include initializing
the tooltip when an element is clicked, then listening
for any click outside the tooltip to hide it.

First, the tooltip's styling and behavior is defined.

	var Tooltip = can.Control.extend({
		init: function(){
			// styling and display of the tooltip
		},
		'{window} click': function( el, ev ) {
		    // hide only if we clicked outside the tooltip
		    // or outside the relative element
		    if (!this.element.has( ev.target ).length &&
		        ev.target !== this.element[0] &&
		        ev.target !== this.options.relativeTo[0] ) {
		      this.element.remove();
		    }
	  	}
	})

Then, when an `li` element is clicked, a new tooltip
is created.

	$("li").bind("click", function(){
	    new Tooltip( $("<div>"), {
	      relativeTo : $(this),
	      html : "tooltip"
	    })
	})

<iframe width="100%" height="300" src="http://jsfiddle.net/donejs/3wtLW/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>

### Create a tree combo

A more advanced UI element, like a tree combo, uses
advanced templates and helpers in its `can.Control`
object.

The templates include breadcrumbs for navigational display
and a list of options.

	<ul class='breadcrumb'>
		<li><%= title %></li>
		<% breadcrumb.each(function(item){ %>
			<li <%=(el)-> el.data('item',item) %>>
	          <%= item.attr('title') %>
	        </li>
		<%})%>
	</ul>

	<ul class='options'>
		<% selectableItems().each(function(item){ %>
			<li class='<%= selected.indexOf(item) >= 0 ? "checked":""%>'
	            <%=(el)-> el.data('item',item) %> >
				<input type="checkbox"
				       <%= selected.indexOf(item) >= 0 ? "checked":""%>>
				
				<%= item.attr('title') %>
				
				<%if(item.children && item.children.length){ %>
					<button class="showChildren">→</button>
				<%}%>
			</li>
		<% }) %>
	</ul>

In addition to rendering the template the `can.Control` object
listens for clicks on the breadcrumbs and navigation arrows as
well as the checkboxes for saving the options selected.


	var TreeCombo = can.Control.extend({
		init: function() {
			/*
			 * initialization and rendering
			 * ...
			 */
		},
		 ".showChildren click": function(el, ev){
		    // add the item to the breadcrumb
		    this.options.breadcrumb.push(el.closest('li').data('item'));
		    // prevents selection
		    ev.stopPropagation();
		  },
		  ".breadcrumb li click": function(el){
		    var item = el.data('item');
		    // if you clicked on a breadcrumb li with data
		    if(item){
		      // remove all breadcrumb items after it
		      var index = this.options.breadcrumb.indexOf(item);
		      this.options.breadcrumb.splice(index+1, 
		                                     this.options.breadcrumb.length - index-1)
		    } else {
		      // clear the breadcrumb
		      this.options.breadcrumb.replace([])
		    }
		    
		  },
		  ".options li click": function(el){
		    // toggles an item's existance in the selected array
		    var item = el.data('item'),
		        index = this.options.selected.indexOf(item);
		    if(index === -1 ){
		      this.options.selected.push(item);
		    } else {
		      this.options.selected.splice(index, 1) 
		    }
		  }
		  
		});
	})

<iframe width="100%" height="300" src="http://jsfiddle.net/donejs/XP5pv/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>

## Use navigation in a single-page app

To implement navigation in a single-page app, use `can.route`
to synchronize the browser's `window.location.hash` with the
application's state (represented in a `can.Map`).  This allows
the usage of the "back" and "forward" buttons on the browser,
as well as the ability to link to specific pages within the app.

### Display multiple pages

To implement pagination that will work with the `hash`, the route
must be updated when the page changes, and the page must
be updated when the route changes.

	// update the route when the page state changes
	"{paginate} offset": function(paginate){
		can.route.attr('page', paginate.page());
	},
	// update the page's state when the route changes
	"{can.route} page": function(route){
		this.options.paginate.page(route.attr('page'));
	}

<iframe width="100%" height="300" src="http://jsfiddle.net/donejs/Rtz2J/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>

### Add history to a tab widget

Similarly to pagination, `can.route` can be used to
add history and navigation to a tab widget.  Instead
of using pages, `can.route` tracks which tab
is being viewed and synchronizes it with the browser's
`window.location.hash`.

<iframe width="100%" height="300" src="http://jsfiddle.net/donejs/epjUv/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>

### ?? Handle advanced navigation with sections and subsections

<iframe width="100%" height="300" src="http://jsfiddle.net/donejs/2UL6R/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>

## Save data

	// coming soon

### Interact with a Server

	// coming soon

### Create a REST interface

	// coming soon

### Simulate a server during development


	// coming soon

### Use LocalStorage

	// coming soon

### Implement Caching

	// coming soon

## Validate Forms

	// coming soon

## Authenticate Users

	// coming soon

## Test an Application

	// coming soon

## Use a third-party UI Library

### Bootstrap

	// coming soon

### jQuery UI

	// coming soon

## Make a real-time application

Making a real-time applicaiton in CanJS is as simple as listening for changes on the server.  Binding values to data on the server allows elements
on the page to atuomatically update accordingly, as seen in this real-time chat application.

<iframe width="100%" height="300" src="http://jsfiddle.net/donejs/bBVHs/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>

## Structure an application

To understand the structure of a full application, take a look at the CanJS implementation of TodoMVC.  This implementation uses `can.Component` to structure the application and to maintain separation between design and behavior.



<iframe width="100%" height="300" src="http://jsfiddle.net/donejs/CRZXH/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>-->