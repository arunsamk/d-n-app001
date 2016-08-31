
var express = require('express');
var application = express();

//Making server file to assign port dynamically.
var port = process.env.PORT || 7010;

//Making express to look in the public directory for (css, js, html .....).
app.use(express.static(__dirname + '/public'));

//Setting the home page
app.get('/', function(request, response){
	res.render('index');
});

app.listen(port, function(){
	console.log('App is running on port: ' + port);
});