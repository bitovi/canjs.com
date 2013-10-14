// Here's where we get, save, and delete to-dos.
// (Yep, this is all we need to access the Todo
// REST endpoints!)
var Todo = can.Model({
	findAll: 'GET /todos',
    findOne: 'GET /todos/{id}',
	update: 'PUT /todos/{id}',
	destroy: 'DELETE /todos/{id}'
}, {});

// This controller manages our to-do list. It will
// instantiate the view and respond to events that are
// triggered in the element the control is bound to.
var TodoBoard = can.Control({
	init: function() {
		var el = this.element;
        // Go get all the to-dos and
        // feed them to our template.
        // (See the script tag with id="todoList"
        // for the mustache template being used.)
        this.element.html(can.view('todoBoard', new Todo.List({})));
	},
    // When a checkbox's value changes...
	'input[type=checkbox] change': function(el, ev) {
        // ...update the 'done' property on the
        // corresponding to-do and save to the server.
        el.parent().data('todo').attr('done', el.prop('checked')).save();
	},
    // When the delete button is clicked...
	'.delete click': function(el, ev) {
        // ...destroy the corresponding to-do on the server.
        // The template will re-render itself and the
        // deleted to-do will be removed.
		el.parent().data('todo').destroy();
	},
    // When the description is clicked...
    '.description click': function(el, ev) {
        // Change the page state (we're using the route)
        // to indicate that we're editing that to-do.
        can.route.attr('id', el.parent().data('todo').id);
    }
});

var TodoEditor = can.Control({
    loadTodo: function(todo) {
        this.options.todo = todo;
        // The to-do we're editing has changed, and
        // there are events bound on the to-do, so we
        // need to re-bind those events to the new to-do.
        this.on();
        // Load up the editor with the to-do
        // that was passed in.
        // (See the script tag with id="todoEditor"
        // for the mustache template being used.)
        this.element.html(can.view('todoEditor', this.options.todo));
     },
    // When the input changes...
    'input change': function(el, ev) {
        this.element.find('.spinner').removeClass('hidden');
        // ...save the new description to the server...
        this.options.todo.attr('description', el.val()).save();
    },
    '{todo} updated': function() {
        // Remove the spinner when the todo is updated.
        this.element.find('.spinner').addClass('hidden');
    },
    // If the todo we're editing is removed...
    '{todo} destroyed': function() {
        // ...change the page state (here, the route)
        // to indicate that we are no longer editing.
        can.route.removeAttr('id');
    }
});

// Routing pulls the editor and the to-do board together
// and takes care of routing as well.
var Routing = can.Control({
    init: function() {
        // Declare what our routes will look like.
        can.route('todos/:id');
        // Fire up the to-do board.
        new TodoBoard($('#board'));
        // Also prepare our editor.
        this.editor = new TodoEditor($('#editor'));
        $('#editor').hide();
    },
    // When the route changes...
    'todos/:id route': function(data) {
        if(data.id) {
            // ...if we're editing, go find that to-do and
            // load it into the editor.
            var editor = this.editor;
            Todo.findOne({id: data.id}).done(function(todo) {
                editor.loadTodo(todo);
                editor.element.show();
            });
        } else {
            // ...if we're not editing,
            // hide the editor.
            $('#editor').hide();
        }
    }
});