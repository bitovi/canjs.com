// Here's where we get, save, and delete to-dos.
// (Yep, this is all we need to access the Todo
// REST endpoints!)
var Todo = can.Model({
	findAll: 'GET /todos',
    findOne: 'GET /todos/{id}',
	update: 'PUT /todos/{id}',
	destroy: 'DELETE /todos/{id}'
}, {});

can.Component.extend({
  tag: "todos-list",
  template: can.view('todoListTemplate'),
  scope: {
    todos: new Todo.List({}),
    select: function(todo){
      can.route.attr("id",todo.attr("id"))
    }
  },
  helpers: {
    todoClass: function(options){
      if(options.context.attr('complete')) {
        return "class='description done'"
      }
      else {
        return "class='description'" 
      }
    }
  }
});

can.Component.extend({
  tag: "todos-editor",
  template: can.view('todoEditorTemplate')
});

can.Component.extend({
  tag: "todos-app",
  scope: {
    todo: null
  },
  events: {
    "{can.route} id": function(route, ev, id){
      if(id){
        var self = this;
        Todo.findOne({id: id}, $.proxy(function(todo){
          this.scope.attr("todo", todo)
        }, this))
      } else {
        this.scope.removeAttr("todo")
      }
    },
    "{Todo} destroyed": function(Todo, ev, destroyedTodo){
      if( destroyedTodo.id == can.route.attr("id") ){
        can.route.removeAttr("id")
      }
    },
    "{todo} change": function(todo, ev, attr){
      if( attr === "description" || attr == "complete" ) {
        todo.save();
        can.route.removeAttr("id");
      }
    }
  }
})

can.route("todos/:id");
can.route.ready();