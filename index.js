
var express = require('express');
var app = express();
var http = require('http').Server(app);

// HANDLEBARS TEMPLATES AND LAYOUTS //
app.use(express.static(__dirname + '/public'));
// ROUTES 

app.get('/', function(req, res){
	res.render('home');
});


// STARTS SERVER 

http.listen(3000, function(){
	console.log('Parallax testing has started.');
});