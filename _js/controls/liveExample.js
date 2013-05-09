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
    this.options = new can.Observe(this.options);\n\
    \n\
//  fetch data from the server\n\
    Todo.findAll()\n\
      .done(can.proxy(function(todos) {\n\
        this.options.attr('todos', todos);\n\
      }, this));\n\
    \n\
//  render the template & append it to the page\n\
    this.element.html(can.view(\n\
      'todoList',\n\
      this.options\n\
    ));\n\
  }\n\
});\n\
\n\
new TodoList('#todos', {todos: []});",
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
        this.runExample();
    },
    '.execute click': 'runExample',
    runExample: function(el, ev) {
        var code = $('.code', this.element).val(),
            template = $('.template', this.element).val();

        // empty the result area
        $('#todos', this.element).empty();

        // register the template
        can.view.mustache('todoList', template);
            
        //call the code
        (new Function(code))();
    },
    registerFixtures: function() {
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