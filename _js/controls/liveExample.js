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
    this.element.html(can.view(\n\
      'todoList',\n\
      {todos: this.options.todos}\n\
    ));\n\
  }\n\
});\n\
\n\
new TodoList('#todos', {todos: Todo.findAll()});",
		template: "{{! in a script tag with id 'todoList'}}\n\
<h3>Today's To-dos</h3>\n\
<ul>\n\
{{#todos}}\n\
  <li>{{description}}</li>\n\
{{/todos}}\n\
</ul>",
		todos: [
			'Wash the dishes',
			'Spring cleaning',
			'Wash the car',
			'Go grocery shopping',
			'Balance checkbook',
			'Clear inbox',
			'Build perpetual motion device',
			'Harness cold fusion',
			'Mow the lawn',
			'Do the laundry',
			'Renew library books',
			'Pay bills'
		]
	}
}, {
	init: function() {
		$('.code', this.element).val(this.options.code);
		$('.template', this.element).val(this.options.template);

		this.registerFixtures();
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
	},
	registerFixtures: function() {
		/*var randomInt = function(min, max) {
			return Math.round((Math.random() * (max - min)) + min);
		};

		can.fixture("GET /todos", can.proxy(function(original, respondWith, settings) {
			var start = randomInt(0, this.options.todos.length - 1),
				end = randomInt(start + 1, this.options.todos.length);
			respondWith(this.options.todos.slice(start, end));
		}, this));

		can.fixture("GET /todos/{id}", can.proxy(function(original, respondWith, settings) {
			respondWith(this.options.todos[randomInt(0, this.options.todos.length - 1)]);
		}, this));
*/
		var store = can.fixture.store(this.options.todos.length, can.proxy(function(ix) {
			return {
				id: ix+1,
				description: this.options.todos[ix]
			};
		}, this));

		can.fixture('GET /todos', store.findAll);
		can.fixture('GET /todos/{id}', store.findOne);
	}
});