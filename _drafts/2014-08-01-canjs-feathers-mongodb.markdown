---
title: No reason to be mean: CanJS + Feathers + MongoDB + Node
category: learning
author: David Luecke
twitterHandle: daffl
githubHandle: daffl
banner_img: /img/brightroll_header.png
lead: Introducing a web application stack with CanJS, Feathers, MongoDB and Node
layout: post
---

In this post I'd like to introduce a full JavaScript web application stack that
uses MongoDB and Node on the server and CanJS on the client.
The concept is similar to the [MEAN](http://mean.io/) (MongoDB, Express, Angular and Node)
stack but has some advantages worth mentioning:

  1) The server boilerplate is small enough to not require a generator
  2) You get real-time capabilities for free
  3) And use CanJS on the client

## Feathers

Feathers is a small framework built top of [Express](http://expressjs.com/),
the most popular web framework for NodeJS.
Just like Express, Feathers is very light weight and unassuming about
how you build your applications. You can literally drop it in place of Express (4.0)
into any existing application and everything will still work just the same.

The key difference is that additionally to your usual Express middleware functions,
Feathers can also use *services*. A service is a JavaScript object that provides one
or more of the `find`, `get`, `create`, `update`, `patch`, `remove` and `setup` methods
with the following signatures:

```js
var feathers = require('feathers');
var app = feathers();

// ...

app.use('/todos', {
  find: function(params, callback) {},
  get: function(id, params, callback) {},
  create: function(data, params, callback) {},
  update: function(id, data, params, callback) {},
  patch: function(id, data, params, callback) {},
  remove: function(id, params, callback) {},
  setup: function(app) {}
});
```

`id` is the resource id, `params` additional parameters (like query parameters
or the logged in user), `data` the actual resource data and a `callback` that will
be called NodeJS style (error-first) with the result data.

As you can see, a service represents basic CRUD functionality which makes
it perfect for creating RESTful APIs. Just add `app.configure(feathers.rest())`
before using a service and they will be exposed through a JSON REST API.

The biggest advantage however is that - because they are only handling plain data -
services can easily be exposed through other means, for example via websockets.
Feathers supports SocketIO and Primus (an abstraction layer for different websocket libraries)
out of the box and it takes as little as `app.configure(feathers.socketio())`
to make your API real-time. This means you can call service methods on the client like this:

```js
var socket = io();

socket.emit('todos::create', {
  description: 'I have to learn CanJS'
}, {}, function(error, data) {
  console.log('Todo successfully created');
});
```

And receive `created`, `updated`, `patched` and `removed` events when service
data changes:

```js
socket.on('todos created', function(todo) {
  console.log('Someone, somewhere created a new todo', todo);
});
```

It does not matter what caused the event, so even if someone created
a Todo via the REST API or on the server the websockets will still receive a
`todos created` event (unless you decide to not publish it to the client).

### Your first service

Lets start our simple Todo webservice by just implementing the `get` functionality.
First install Feathers:

> npm install feathers

And then in `app.js` add:

```js
var feathers = require('feathers');

var app = feathers()
  // Set up a REST api
  .configure(feathers.rest())
  // And SocketIO, because we can
  .configure(feathers.socketio());

app.use('/todos', {
  get: function(id, params, callback) {
    callback(null, {
      id: id,
      description: 'You have to do ' + id + '!'
    });
  }
});

app.listen(8080);
```

When running `node app.js` and opening `http://localhost:8080/todos/dishes`
you should see the following JSON response:

```js
{
  "id": "dishes",
  "description": "You have to do dishes!";
}
```

### Connecting to MongoDB

As mentioned before, services usually implement basic CRUD functionality.
For MongoDB, this has already all been implemented in the `feathers-mongodb` module.
We also need the Express [body-parser](https://github.com/expressjs/body-parser)
to parse POST, PUT and PATCH HTTP request bodies to the API.

After `npm install body-parser feathers-mongodb` and a MongoDB
instance running with the default configuration on localhost
you can get a persistent Todo REST and websocket service up and running like this:

```js
var feathers = require('feathers');
var mongodb = require('feathers-mongodb');
var bodyParser = require('body-parser');
var app = feathers()
  // Set up a REST api
  .configure(feathers.rest())
  // And SocketIO, because we can
  .configure(feathers.socketio())
  // Parse JSON HTTP bodies
  .use(bodyParser.json())
  // Also let us submit HTML forms (extended parsing)
  .use(bodyParser.urlencoded({ extended: true }));

// Set up a basic MongoDB CRUD service locally on the
// todo-app database and the todos collection
app.use('/todos', mongodb({
  collection: 'todos',
  db: 'todo-app'
}));

app.listen(8080);
```

### Converting data

If you are wondering how to extend the basic MongoDB service functionality,
you can find more detailed documentation [here](https://github.com/feathersjs/feathers-mongodb#extending-mongodb-services).
In our case, when submitting a URL encoded form (which is what CanJS does by default)
everything will be converted to a string which is not what we'd want e.g. for
the todo `complete` property. To pre-process the data before sending them to
MongoDB we can use the [Feathers Hooks]() plugin.

### Hosting the frontend

This is all it takes to get a REST and real-time webservice with MongoDB up and
running with Feathers and Node.
The only thing left to do is setting up a static host for our CanJS application
in the `public/` folder:

```js
var feathers = require('feathers');
var mongodb = require('feathers-mongodb');
var bodyParser = require('body-parser');
var app = feathers()
  // Set up a REST api
  .configure(feathers.rest())
  // And SocketIO, because we can
  .configure(feathers.socketio())
  // Parse JSON HTTP bodies
  .use(bodyParser.json())
  // Also let us submit HTML forms
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/', feathers.static(__dirname + '/public'));

// Set up a basic MongoDB CRUD service locally on the
// todo-app database and the todos collection
app.use('/todos', mongodb({
  collection: 'todos',
  db: 'todo-app'
}));

app.listen(8080);
```

## CanJS TodoMVC

Now that we have a Todo webservice running it is time for the frontend.
Luckily, there already is one for managing Todos, namely [TodoMVC](http://todomvc.com/)
so we might as well just use the [CanJS architecture example](http://todomvc.com/architecture-examples/canjs/).
If you haven't yet, check out the source to get an idea how CanJS components,
models and Mustache views work (which you really should but it is not going to be a part
of this tutorial).

The frontend currently uses LocalStorage to store Todos but, like any other framework
that has some concept of a model, it should be easy to hook up both, the REST
and websocket API.

### Connecting to the REST API

To update the model we just slightly need to change `js/models/todo.js`. CanJS has
built in RESTful models so we can replace `can.Model.LocalStorage` with the basic `can.Model`
and add some configuration for our API:

```js
// Basic Todo entry model
var Todo = can.Model.extend({
  // MongoDB uses _id as the id field
  id: '_id',
  findAll: 'GET /todos',
  findOne: 'GET /todos/{id}',
  create:  'POST /todos',
  update:  'PUT /todos/{id}',
  destroy: 'DELETE /todos/{id}'
}, {
	init: function () {
		// Autosave when changing the text or completing the todo
		this.on('change', function (ev, prop) {
			if (prop === 'text' || prop === 'complete') {
				ev.target.save();
			}
		});
	}
});
```

This should get the Todos persistently stored in MongoDB.

### Getting real-time
