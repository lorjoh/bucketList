const express = require('express');

var app = express();

const fs = require("fs");

const path = require('path');
const exphbs = require('express-handlebars')

app.use(express.static("public"));
const PORT = process.env.PORT || 5000;
// app.set('port', (process.env.PORT || 8000));
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
var routes = require("./controllers/bucketListController.js");
app.use(routes);

app.get('/', function(req, res){
    res.redirect('/explore');
 });

// app.listen(app.get('port'), function(){
//     console.log('Server started on port '+app.get('port'))
// });

// listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  
