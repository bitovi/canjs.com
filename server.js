/**
 * Module dependencies.
 */
var express = require('express'),
    http = require('http'),
    path = require('path');

var app = express();

app.configure(function(){
  app.use(express.favicon());
  app.set('port', 4000);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.directory( __dirname ));
  app.use(express.static( __dirname ));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});