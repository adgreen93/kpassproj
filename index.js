
var express = require('express');
var app = express();
var http = require('http').Server(app);

// HANDLEBARS TEMPLATES AND LAYOUTS //
app.use(express.static(__dirname + '/public'));
// ROUTES 

app.get('/', function(req, res){
	res.render('home');
});

// Load the full build. 
var _ = require('lodash');
// Load the core build. 
var _ = require('lodash/core');
// Load the fp build for immutable auto-curried iteratee-first data-last methods. 
var fp = require('lodash/fp');
 
// Load a method category. 
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// Load a single method for smaller builds with browserify/rollup/webpack. 
var chunk = require('lodash/chunk');
var extend = require('lodash/fp/extend');

// STARTS SERVER 

http.listen(3000, function(){
	console.log('Parallax testing has started.');
});