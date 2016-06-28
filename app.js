var Express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = new Express();
var routes = require('./routes');
var swig = require('swig');
var path = require('path');


app.use(morgan('dev'));
app.use(Express.static(path.join(__dirname, './public')));





app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.engine('html', swig.renderFile);
app.use(bodyParser.urlencoded({ extended: true }));



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