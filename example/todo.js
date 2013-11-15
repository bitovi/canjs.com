// Here's where we get, save, and delete to-dos.
// (Yep, this is all we need to access the Todo
// REST endpoints!)
var Todo = can.Model.extend({
	findAll: 'GET /todos',
  findOne: 'GET /todos/{id}',
	update: 'PUT /todos/{id}',
	destroy: 'DELETE /todos/{id}'
}, {});

can.Component.extend({
  tag: "todos-app",
  scope: {
    selectedTodo: null,
    todos: new Todo.List({}),
    select: function(todo){
      this.attr('selectedTodo', todo);
    },
    saveTodo: function(todo) {
      todo.save();
      this.removeAttr('selectedTodo');
    }
  }
})