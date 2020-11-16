// Requiring necessary npm packages
const express = require('express');
// const fs = require("fs");
const path = require('path');
const exphbs = require('express-handlebars')

var app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(express.static("public"));

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.set('port', (process.env.PORT || 3500));

var people1 = ['John', 'Sara', 'Paul'];


app.listen(app.get('port'), function(){
    console.log('Server started on port '+app.get('port'))
});

app.get('/', function(req, res){
    res.render('explore',{
        // content: 'This is some content',
        // published: true,
        // people: people
    });
});

app.get('/focus', function(req, res){
    res.render('focus',{
        content: 'This is some content',
        published: true,
        people: people
    });
});

app.get('/review', function(req, res){
    res.render('review',{
        content: 'This is some content',
        published: true,
        people: people
    });
});

app.get('/explore2', function(req, res){
    res.render('explore2',{
        // content: 'This is some content',
        // published: true,
        // people: people
    });
});


var people = [
    {
        firstName: 'Peter',
        lastName: 'Johnson'
    },
    {
        firstName: 'John',
        lastName: 'Doe'
    }
    ];





