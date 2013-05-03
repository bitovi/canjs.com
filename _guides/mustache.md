@page Mustache Mustache
@parent Tutorial 5

@body
[Mustache](can.Mustache) provides logic-less templates that will live-bind to
Observes. You can get Mustache functionality as a [plugin](http://canjs.us/release/latest/can.view.mustache.js)
for CanJS. Mustach and Handlebar templates are both compatible with CanJS's
Mustache implementation, so you can reuse any existing templates you have.

Mustache is easy to get started with. Templates look like normal HTML, except
they contain special tags for inserting data into the template, iterating
through lists, and filtering blocks.

Here's an example of a template that might render a list of Todos:

@codestart
&lt;script type="text/mustache" id="todosList">
{{#todos}}
&lt;li>{{description}}&lt;/li>
{{/todos}}
&lt;/script>
@codeend

And you can use `can.view` to render the template:

@codestart
Todo.findAll({}, function(todos) {
	document.getElementById('list')
		.appendChild(can.view('todoList', {todos: todos}));
});
@codeend

## Magic tags

There are three kinds of magic tags used in Mustache:

- `{{ }}` will HTML-escape the value enclosed inside the tags and write it to
the template.
- `{{{ }}}` will write the value enclosed inside the tags and write it directly
to the template without escaping it.
- `{{! }}` will write nothing to the template and is mostly used for comments.

### Keys

Keys insert data into the template. They reference variables in the current
context.

This template:

@codestart
Name: {{name}}
@codeend

given this data:

@codestart
{name: 'Alice'}
@codeend

will render thusly:

@codestart
Name: Alice
@codeend

### Sections

Sections contain text blocks and are conditionally rendered based on the value
enclosed in the opening tag. They also change the context inside them to the
key referenced in the opening tag.

For the following examples, we will assume the template is being populated with
this set of data:

@codestart
{
	name: 'Alice Liddell',
	nickname: '',
	friends: ['Bob', 'Eve'],
	enemies: []
}
@codeend

If the key is `undefined`, `null`, `false`, `''`, or `[]`, it is considered
a falsey value and the section is not rendered at all. Neither of these sections
will render:

@codestart
{{#enemies}}
&lt;li>{{.}}&lt;/li>
{{/enemies}}
@codeend

@codestart
{{#nickname}}{{.}}{{/nickname}}
@codeend

If the key is a non-empty array, the section will be rendered once for each
element in the array. If it is truthy but not an array, the section is rendered
once.

This template:

@codestart
&lt;h1>{{#name}}{{.}}{{/name}}&lt;/h1>
&lt;ul>
	{{#friends}}
	&lt;li>{{.}}&lt;/li>
	{{/friends}}
&lt;/ul>
@codeend

will render like this:

@codestart
&lt;h1>Alice Liddell&lt;/h1>
&lt;ul>
	&lt;li>Bob&lt;/li>
	&lt;li>Eve&lt;/li>
&lt;/ul>
@codeend

You can also make inverted sections that render if the key referenced in the
opening tag is falsey:

@codestart
&lt;ul>
	{{#friends}}
	&lt;li>{{.}}&lt;/li>
	{{/friends}}
	{{^friends}}
	&lt;li>You have no friends.&lt;/li>
	{{/friends}}
&lt;/ul>
@codeend

### Context

When Mustache is resolving an object in a section, it sets the current context
to the object value for which it is iterating. (If the key in the opening tag
of a section was not an array, it sets the context to the value of that key.)
You can reference the current context as `.`.

Internally, Mustache keeps a stack of contexts as the template enters nested
sections and helpers. If a key is not found in the current context, Mustache
will look for the the in each successive parent context until it resolves the
key or runs out of parent contexts.

For example, with this data:

@codestart
{
	brothers: [{name: 'Bob'}, {name: 'David'}],
	sisters: [{name: 'Alice'}, {name: 'Eve'}]
}
@codeend

and this template:

@codestart
{{#brothers}}
	{{#sisters}}
		{{name}}
	{{/sisters}}
{{/brothers}}
@codeend

the rendered result will be:

@codestart
Alice
Eve
Alice
Eve
@codeend

Since there is no `sisters` key in the context of the elements of the `brothers`
array, Mustache jumps up to the parent context and resolves `sisters` there.

## Helpers

Mustache lets you register functions to be called from inside the template called
helpers. Since Mustache template are logic-less, all your view logic will be
inside helpers.

To use a helper that is local to the template you're rendering, pass it as the
third argument to `can.view` in an object where the key is the name of the helper
and the value is the helper function:

@codestart
var fragment = can.view('todosList', {todos: todos}, {
	uppercase: function(str) {
		return str.toUppercase();
	}
});
@codeend

This might be used in a template like this:

@codestart
&lt;script type="text/mustache" id="todosList">
{{#todos}}
&lt;li>{{uppercase description}}&lt;/li>
{{/todos}}
&lt;/script>
@codeend

If a property of an observe is passed to a helper function, the helper will
become a `[can.compute](can.compute)`. As an example, if you had this template:

@codestart
&lt;script type="text/mustache" id="prefixedName">
&lt;div>{{addMs lastName}}&lt;/div>
&lt;/script>
@codeend

And you ran this code:

@codestart
var name = new can.Observe({firstName: 'Alice', lastName: 'Liddell'});
document.getElementById('name')
	.appendChild(can.view('prefixedName', name, {
		addMs: function(lastName) {
			return 'Ms. ' + lastName;
		}
	}));
name.attr({firstName: 'Allison', lastName: 'Wonderland'});
@codeend

The contents of the &lt;div> would be `Ms. Wonderland`.

### Global helpers

You can register global helpers using `can.Mustache.registerHelper`:

@codestart
can.Mustache.registerHelper('i10n', function(str, options) {
	return (Globalize != undefined ? Globalize.localize(str) : str);
});
@codeend

### Data helpers

You can use the `data` helper in Mustache to associate data to an element. This
helper will associate the current context (`.`) with a key you pass to the
helper.

For example, this template:

@codestart
&lt;script type="text/mustache" id="nameDiv">
&lt;div id="person" {{data 'name'}}>{{firstName}} {{lastName}}&lt;/div>
&lt;/script>
@codeend

lets you do this in code:

@codestart
document.body.appendChild(can.view('nameDiv', {
	firstName: 'Alice',
	lastName: 'Liddell'
}));

var obj = can.data(document.getElementById('person'), 'name');
obj; // { firstName: 'Alice', lastName: 'Liddell'}
@codeend

## Partials

You can embed templates in other templates by using partials. Partials inherit
the context where they are called. They are evaluated at render time, so you
should be careful to avoid infinite loops. To include a partial, put its URL or
ID inside `{{> }}`.

With these templates:
@codestart
&lt;script type="text/mustache" id="names">
&lt;ul>
{{#names}}
	{{>user}}
{{/names}}
&lt;/ul>
&lt;/script>
&lt;script type="text/mustache" id="user">
&lt;li>{{firstName}} {{lastName}}&lt;/li>
&lt;/script>
@codeend

the expanded template at render time would look similar to:

@codestart
&lt;ul>
{{#names}}
	&lt;li>{{firstName}} {{lastName}}&lt;/li>
{{/names}}
&lt;/ul>
@codeend
