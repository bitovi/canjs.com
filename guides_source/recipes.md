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

Templates are rendered with [can.view](../docs/can.view.html). 
can.view takes two arguments: the first is the `id` of the template,
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

CanJS will update the page automatically when observable data changes. To make 
observable data, pass raw data to [can.Map](../docs/can.Map.html), 
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

Previous examples have used jQuery's `click` event listener:

	

### Bind an Input Field to a Value

	//Coming soon

### ?? Respond to Keyboard and Mouse Events

	//Coming soon

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

	<!-- The breadcrumb template -->
	<ul class='breadcrumb'>
		<li><%= title %></li>
		<% breadcrumb.each(function(item){ %>
			<li <%=(el)-> el.data('item',item) %>>
	          <%= item.attr('title') %>
	        </li>
		<%})%>
	</ul>

	<!-- The options template -->
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



<iframe width="100%" height="300" src="http://jsfiddle.net/donejs/CRZXH/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" frameborder="0"> </iframe>