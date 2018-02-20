var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require("express-handlebars");

var app = express();
app.use('/public', express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));
app.engine("handlebars", exphbs({ 
	defaultLayout: "main" 
}));

app.set('view engine', 'handlebars');

var PORT = process.env.PORT || 3000;


// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use('/', routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});