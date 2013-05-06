can.Control('CanJSUS.LiveExample', {
	defaults: {
		code: "var Todo = can.Model({\n\
  findAll: 'GET /todos',\n\
  findOne: 'GET /todos/{id}',\n\
  create:  'POST /todos',\n\
  update:  'PUT /todos/{id}',\n\
  destroy: 'DELETE /todos/{id}'\n\
}, {});\n\
\n\
var TodoList = can.Control({\n\
  init: function() {\n\
    var todos = ['a', 'b', 'c'];\n\
    this.element.html(can.view(\n\
      'todoList',\n\
      {todos: todos}\n\
    ));\n\
  }\n\
});\n\
\n\
new TodoList('#todos');",
		template: "{{! in a script tag with id 'todoList'}}\n\
<h3>Today's To-dos</h3>\n\
<ul>\n\
{{#todos}}\n\
  <li>{{.}}</li>\n\
{{/todos}}\n\
</ul>"
	}
}, {
	init: function() {
		$('.code', this.element).val(this.options.code);
		$('.template', this.element).val(this.options.template);
	},
	'.execute click': 'runExample',
	runExample: function(el, ev) {
		var code = $('.code', this.element).val(),
			template = $('.template', this.element).val();

		// empty the result area
		$('#todos', this.element).empty();

		try {
			// register the template
			can.view.mustache('todoList', template);
			
			//call the code
			(new Function(code))();
		} catch (e) { }
	}
});