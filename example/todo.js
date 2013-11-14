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
      can.route.attr("id",todo.attr("id"))
    },
    change: function(todo) {
        todo.save();
        can.route.removeAttr("id");
    }
  },
  events: {
    "{can.route} id": function(route, ev, id){
      if(id){
        var self = this;
        Todo.findOne({id: id}, $.proxy(function(todo){
          this.scope.attr("selectedTodo", todo)
        }, this))
      } else {
        this.scope.removeAttr("selectedTodo")
      }
    },
    "{Todo} destroyed": function(Todo, ev, dsTodo){
      if( dsTodo.id == can.route.attr("id") ){
        can.route.removeAttr("id")
      }
    }
  }
})

can.route("todos/:id");
can.route.ready();