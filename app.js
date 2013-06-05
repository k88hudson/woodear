
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes')(),
    path = require('path'),
    http = require('http'),
    habitat = require('habitat'),
    nunjucks = require('nunjucks');

habitat.load();

var app = express(),
    nunjucksEnv = new nunjucks.Environment(new nunjucks.FileSystemLoader(path.join(__dirname, 'views'))),
    env = new habitat();

app.configure(function(){
  app.set('port', env.get('PORT'));
  nunjucksEnv.express(app);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('stylus').middleware(path.join(__dirname, '/public')));
  app.use(express.static(path.join(__dirname, '/public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

console.log( routes );

app.get('/', routes.page('index'));
app.get('/home', routes.page('home'));
app.get('/about', routes.page('about'));

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
