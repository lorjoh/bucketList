const express = require('express');

var app = express();

// const fs = require("fs");

const path = require('path');
const exphbs = require('express-handlebars')

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(express.static("public"));
app.set('port', (process.env.PORT || 4000));
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
var routes = require("./controllers/bucketListController.js");
app.use(routes);

// app.get('/', function(req, res){
//     res.render('explore',{
//         // content: 'This is some content',
//         // published: true,
//         // people: people
//     });
// });

// app.get('/focus', function(req, res){
//     res.render('focus',{
//         // content: 'This is some content',
//         // published: true,
//         // people: people
//     });
// });

// app.get('/review', function(req, res){
//     res.render('review',{
//         // content: 'This is some content',
//         // published: true,
//         // people: people
//     });
// });

app.listen(app.get('port'), function(){
    console.log('Server started on port '+app.get('port'))
});