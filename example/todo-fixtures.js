// For this example, we're not actually going out to
// a REST endpoint, so we'll use fixtures to emulate that.
// Fixtures help you test your application when you
// don't have access to your REST services.
var TODOS = [
    'Download CanJS',
    'Read the guides',
    'Build your app',
    'Become immortal',
    'Haircut @ 2pm'
];

var todoStore = can.fixture.make(TODOS.length, function(i) {
	return {
		id: i + 1,
		description: TODOS[i],
		done: false
	};
});

can.fixture({
	'GET /todos': todoStore.findAll,
    'GET /todos/{id}': todoStore.findOne,
	'PUT /todos/{id}': todoStore.update,
	'DELETE /todos/{id}': todoStore.destroy
});

// Let's drag this out a bit.
can.fixture.delay = 500;