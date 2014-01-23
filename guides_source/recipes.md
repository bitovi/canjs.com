@page Recipes Recipes
@parent guides 4


This is organized by what you want to do, illustrated with copious examples

##How do I...

## Get Started

There are a variety of ways to get CanJS.  Read the [using CanJS guide](http://canjs.com/guides/Using.html)
for comprehensive list.  For the following recepies, we will load CanJS
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

### Tabs Widget Component

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
