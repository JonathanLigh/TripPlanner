var Express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = new Express();
var routes = require('./routes');


app.use('/', routes);

app.use(function(req, res, next){
	var err = new Error('Not Found');
	err.status = 404;
	next(err)
})

app.use(function(err, req, res ,next){
	res.status(err.status || 500);
	console.error(err);
	res.send(
		'ERROR')
})

app.listen(3000, function(){
	console.log('app is now listening')
})