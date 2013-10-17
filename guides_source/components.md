@page Components Components
@parent Tutorial 7

Now that you've learned about observables, templates, and controls, it's time to learn
about [can.Component](../docs/can.Component.html). can.Component makes it easy to combine the functionality of 
these features. We'll use it to rewrite the todo example.

## Tag

A component represents a custom html element whose tagName 
is specified by the component's tag attribute.  To create
a can.Component constructor function that manages
functionality on a `<todos-editor>` elements, 
[extend](../docs/can.Component.extend.html) can.Component like:

    can.Component.extend({
      tag: "todos-editor"
    })

Now, when a `<todos-editor>` element is found in a mustache template,
the template is 



	  tag: "hello-world",
      template: "{{#if visible}}{{message}}{{else}}Click me{{/if}}",
      scope: {
        visible: false,
        message: "Hello There!"
      },
      events: {
        click: function(){
        	this.scope.attr("visible", !this.scope.attr("visible") );
        }
      }