@page Recipes Recipes
@parent guides 4

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

### Creating a Live Timestamp

This recipe demonstrates adding a `createdAt` property to the data like:

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

To call a function from a template, [register](../docs/can.Mustache.registerHelper.html) the function
as a helper function:

    can.Mustache.registerHelper('prettyDate', function( date ){

    })

In this helper, `date` is not a Date object, instead it is an observable [can.compute](../docs/can.compute.html) that
contains the `createdAt` value.  A `can.compute` is an observables that contains a single value.  To read the value,
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

Previous recipes have shown how the page changes when state and data change. When a user 
interacts with an application (through things like clicking, typing, and submitting forms), 
the state and data of the application are affected. The user sees the page change when 
changing a value in a form, but in CanJS changes should be made to the application data or state 
and the page will update automatically according to its template.

At first this may seem more complicated than making direct changes to the page, but 
[as an application gets larger it makes things much easier](http://www.youtube.com/watch?v=NZi5Ru4KVug&list=UUoF55kH83o2ihqHbDipRm2Q#t=44).
Instead of updating every relevant part of a page when a user clicks a button, with CanJS
the state is changed and the page changes accordingly.

### Respond to user Actions

When a user does something, such as clicking, an `event` occurs. Event handlers specify
how [JavaScript should respond to an event](http://bitovi.com/blog/2010/10/a-crash-course-in-how-dom-events-work.html).
Previous examples have used jQuery's `click` event listener:

	$("#push").click(function(){
	  //handle the event
	})

However, CanJS provides a few different ways to respond to events. As well as
making application code simpler, using CanJS to handle events can help to
automatically prevent [memory leaks](http://bitovi.com/blog/2012/04/zombie-apocolypse.html).

As a reminder, though event handlers respond to actions on the page 
they should *change application state or data* (e.g. make a change to a `can.Map`).
This will update the page automatically, keeping code manageable.

#### Control Events

What we want to do is make something happen when we an event occurs.
The way this works is by using a can.control.  Essentially, this is a module
that is a controller and a view.  We can control UI elements, but we should
be doing this by using state.  Let's make it so when we click a person from the
list we remove that person from the list.  So, how do we check for that click event?

Use a `can.Control` to 

	var PeopleList = can.Control.extend({
    init: function( el, op ){
         this.options.people = new can.List(op.people);
         this.element.html( can.view('app-template', {
             people: this.options.people
        }));
    }
  }

When you create a `PeopleList`, you will pass the elements you want
to insert your templated list into and an object with `people`, an 
array of first and last names.

	var people = [
    {firstname: "John", lastname: "Doe"},
    {firstname: "Emily", lastname: "Dickinson"},
    {firstname: "William", lastname: "Adams"},
    {firstname: "Stevie", lastname: "Nicks"},
    {firstname: "Bob", lastname: "Barker"}
	];

	new PeopleList('#my-app', {people: people});

In the mustache template, there is a `data` helper that can reference 
the object associated with the `li` that is rendering that object.

	<ul>
	{{#each people}}
	    <li {{data 'person'}}>
		{{lastname}}, {{firstname}}
	    </li>
	{{/each}}
	</ul>  

Now, any time a person's name is clicked, that person
should be removed from the `can.List`, which will
also remove it from our page. When a string selector
is defined as a functionwhen extending `can.Control`,
event handlers are automatically bound to the relevant
events:

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

This is *one* way to handle events. Others will be covered
in the following recipes while building widgets.

<iframe width="100%" height="300" src="http://jsfiddle.net/donejs/F9kzt/embedded/result,html,js/" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>

## Build Widgets/UI Elements

So far, recipes have demonstrated how to change page content and introduced
event handling. When application state and data change, so does how the
page is displayed. When users interact with an application, they change
the state and data, but do not directly manipulate the page.

While this can be accomplished with `can.Control`, CanJS actually provides
a way to structure this for individual parts, or components, of an
application. [can.Component](http://canjs.com/docs/can.Component.html)
enables building reusable widgets with using custom tags.

### Create a Component

The previous recipe that displays a list of people can be represented
as a component. The application template can be replaced with:

	<people></people>

Any time a `people` tag is put into a template, the component will
be rendered since we set `people` as the tag.

	can.Component.extend({
	    tag: 'people',
	...

The previous template is now passed as the `template` argument.
This can also be a file.  The template includes a `can-click`
attribute. This is another way of declaring an event binding.
In this case, the `remove` function of component will be called
with the relevant `people` object as an argument.

	...
	    template: '<ul>' +
	                '{{#each people}}' +
	                '<li can-click="remove">' +
	                    '{{lastname}}, {{firstname}}' +
	                '</li>' +
	                '{{/each}}' +
	                '</ul>',
	...

The `scope` object contains the component's state and 
data information, as well as defining some of its
behavior. This includes the `remove` function that
`can-click` uses.

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

<iframe width="100%" height="300" src="http://jsfiddle.net/donejs/WBM9z/embedded/result,html,js/" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>

### Build a Tabs Widget

Using `can.Component`, a tab widget template looks like this:

	<tabs>
		<panel title="Fruit">Oranges, Apples, Pears</panel>
		<panel title="Vegetable">Carrot, Lettuce, Rutabega</panel>
		<panel title="Grains">Bread, Pasta, Rice</panel>
	</tabs>

This is one of the most useful features of components. A designer
that understands HTML can put together a template for a `tabs`
widget without understanding anything other than the syntax.

#### Tabs Widget Behavior

Before implementing the component itself, it can be useful
to take a moment to define an observable *view model*, 
or a representation of the state of the UI element.
This makes unit testing and makes the code modular
and easy to manage. State is best represented using a `can.Map`.

A `TabsViewModel` needs:
 - An observable list of panels
 - An active panel
 - Functions to add, remove, and activate panels

 Since this is a `can.Map`, `panels` is automatically 
 converted to a `can.List`.  `addPanel` will not only
 add a new panel, but activate it if there were previously
 no panels.  `removePanel` handles making a new panel
 active if necessary.

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

The template for a `tabs` component needs a heading for each
panel that will `activate` that panel when clicked. The template
also includes three `panel` components, which can be inserted
into the template with a `<content />` tag.

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
To do this, the `@` helper is used.

	can.Component.extend({
	tag: "panel",
	template: "{{#if visible}}<content />{{/if}}",
	scope: {
		title: "@"
	},
	...

In addition to the `scope` object, a component has 
`events` that behave in a similar way to the events
in a `can.Control`.  A component has two events that
will be used by the tabs widget: `inserted` and 
`removed`. Since this behavior has already been
defined in the `TabsViewModel`, an inserted panel
need only call the tabs component's `addPanel` method.

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

<iframe width="100%" height="300" src="http://jsfiddle.net/donejs/x6TJK/embedded/result,html,js/" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>
