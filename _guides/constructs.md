@page Constructs Constructs
@parent Tutorial 0

@body
Constructor functions made with [can.Construct] are used to create objects with
shared properties, and they make managing inheritance in JavaScript much easier.
[Observes] \(and through Observes, [Models] and [Controls]) are based off of
Constructs, so learning how they work is fundamental to understanding CanJS.

To create a constructor function of your own, call `can.Construct` and pass in
an object of static properties (which will be attached directly to the 
constructor) and an object of instance properties (which will be attached to
each instance of the Construct):

@codestart
var Todo = can.Construct({ }, {
	description: 'Something to do.',
	author: 'Unknown',
	allowedToEdit: function() {
		return true;
	}
});

var t = new Todo();

t.description; // 'Something to do.'
t.author; // 'Unknown'
t.allowedToEdit(); // true
@codeend

There are a few other ways to create classes with  `can.Construct`; see
[the API] for all the details.

## Inheritance
can.Construct sets up the prototype chain so that Constructs are easy to
subclass. Call the constructor function of the class you want to extend and give
it the arguments you would pass to `can.Construct`:

@codestart
// If only one argument is passed, they are considered instance properties.
var PrivateTodo = Todo({
	description: 'Something secret!',
	allowedToEdit: function(account) {
		return account.owns(this);
	}
});

var p = new PrivateTodo();
p.author; // 'Unknown'
p.description; // 'Something secret!'
p.allowedToEdit({owns: function(){ return false; }}); // false
@codeend

## Initialization
As you can see above, when a constructor function is called with `new`,
can.Construct creates a new instance of that class. If you've supplied an
instance method called `[init]`, can.Construct will call that as well, passing
it the arguments you passed to the constructor.

This helps make our Todo a little more configurable:

@codestart
var Todo = can.Construct({
	description: 'Something to do.',
	author: 'Unknown',

	init: function(options) {
		this.author = options.author || this.author;
		this.description = options.description || this.description;
	}
});

var t = new Todo({author: 'Me!'});
t.author; // 'Me!'
t.description; // 'Something to do.'
@codeend

If you're extending a Construct, you probably want to make sure you call the
base's `init` method inside the child's `init`:

@codestart
var PrivateTodo = can.Construct({
	init: function(options) {
		this.
	}
});
@codeend