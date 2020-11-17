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

app.set('port', (process.env.PORT || 4500));

var people = ['John', 'Sara', 'Paul'];

topicsFound = [
    {id:"7F81A0CB-B91F-4896-B9A5-41BE9A54A27B",name:"Archeology"},
    {id:"7F12224B-217A-4B07-A4A2-636B1CE7F221",name:"Colonization and Settlement"},
    {id:"DAAD7F5E-9112-45F2-9A27-DA51B639F27E",name:"Dams"},
    {id:"12EA2B56-17EC-410A-A10D-BFBA87A0669B",name:"Explorers and Expeditions"},
    {id:"4C9D4777-A9DA-47D1-A0B9-F4A3C98BC1B3",name:"Maritime"},
    {id:"123CE28E-0EFA-4330-8E6E-EEFF3D7BF772",name:"Coastal Defenses"},
    {id:"263BAC6E-4DEC-47E4-909D-DA8AD351E06E",name:"Lighthouses"},
    ];

    activitiesFound = [
        {id: "09DF0950-D319-4557-A57E-04CD2F63FF42", name: "Arts and Culture"},
        {id: "7CE6E935-F839-4FEC-A63E-052B1DEF39D2", name: "Biking"},
        {id: "299CB934-88DC-474F-A33D-E43E29A149C2", name: "Mountain Biking"},
        {id: "A59947B7-3376-49B4-AD02-C0423E08C5F7", name: "Camping"},
        {id: "9159DF0F-951D-4AAE-9987-CEB3CE2A9ADA", name: "Car or Front Country Camping"},
        {id: "7CFF5F03-5ECC-4F5A-8572-75D1F0976C0C", name: "Group Camping"},
        {id: "AE42B46C-E4B7-4889-A122-08FE180371AE", name: "Fishing"},
        {id: "17411C8D-5769-4D0F-ABD1-52ED03840C18", name: "Saltwater Fishing"},
        {id: "1DFACD97-1B9C-4F5A-80F2-05593604799E", name: "Food"},
        {id: "E53E1320-9B17-41DC-86A5-37EB7D622572", name: "Dining"},
        {id: "C6D3230A-2CEA-4AFE-BFF3-DC1E2C2C4BB4", name: "Picnicking"}],


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





