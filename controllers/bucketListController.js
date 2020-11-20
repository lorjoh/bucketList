var express = require("express");
var trips = require("../models/bucketListModel.js");
var router = express.Router();
const axios = require('axios');
var connection = require("../config/connection.js");
const dotenv = require('dotenv').config();
var trip = require("../models/bucketListModel.js");

const apiKey = process.env.API_KEY
console.log(apiKey)

router.get('/', function(req, res){
  res.render('explore',{
  });
});

router.get('/focus', function(req, res){
  res.render('focus',{
  });
});

router.get("/allTrips", function(req, res) {
  trip.all(function(data) {
    var tripObject = {
      trips: data
    };
    console.log(tripObject);
  });
});

router.get('/review', function(req, res){
  res.render('review')
  });

// All park data route from API call from Explore page to invoke API call from National Parks - response to Explore API call with filteredParks object

router.get('/parkFocusInfo/:parkCode', function(req, res){

  let sentParkCode = req.params.parkCode; 

    console.log('calling park info api')
    console.log('using park code: ' + sentParkCode)
    
    // let parkAPIKey = "wOcYQh1jt3j2jym6kbnOKsReaO1JEYLb9g1KIvs5";
    
    let parkURL ="https://developer.nps.gov/api/v1/parks?parkCode=" + sentParkCode+ "&api_key=" + apiKey 
    
    console.log(parkURL);
    
        axios.get(parkURL)      

          // We store all of the retrieved data inside of an object called "response"
          .then(function(response) {
            // Log the queryURL
            console.log(response.data);

           res.json(response.data);
          });
      }
  );

// Activities route from API call from Explore page to invoke API call from National Parks - response to Explore API call with filteredParks object

router.get('/focusActivities/:activityCode', function(req, res){

  let sentActivityCode = req.params.activityCode; 

  // function getParksFromActivities() {

    // let activitySelected = localStorage.activitySelected;
    console.log('calling park activity api')
    console.log('using activity code: ' + sentActivityCode)
    
    // let parkAPIKey = "wOcYQh1jt3j2jym6kbnOKsReaO1JEYLb9g1KIvs5";
    
    let parkURL ="https://developer.nps.gov/api/v1/activities/parks?id=" + sentActivityCode+ "&api_key=" + apiKey 
    
    console.log(parkURL);
    
        axios.get(parkURL)      

          // We store all of the retrieved data inside of an object called "response"
          .then(function(response) {
            // Log the queryURL
            console.log(response.data);

           res.json(response.data.data[0].parks);
          });
      }
  );

// Topics route from API call from Explore page to invoke API call from National Parks - response to Explore API call with filteredParks object
 
router.get('/focusTopics/:topicCode', function(req, res){

  let sentTopicCode = req.params.topicCode; 

  // function getParksFromActivities() {

    // let activitySelected = localStorage.activitySelected;
    console.log('calling park activity api')
    console.log('using activity code: ' + sentTopicCode)
    
    // let parkAPIKey = "wOcYQh1jt3j2jym6kbnOKsReaO1JEYLb9g1KIvs5";
    
    let parkURL ="https://developer.nps.gov/api/v1/topics/parks?id=" + sentTopicCode+ "&api_key=" + apiKey 
    
    console.log(parkURL);
    
        axios.get(parkURL)      

          // We store all of the retrieved data inside of an object called "response"
          .then(function(response) {
            // Log the queryURL
            console.log(response.data);

           res.json(response.data.data[0].parks);
          });
      }
  // res.render('focus',{
  );

// router.post("/api/trips", function(req, res) {
//   trip.create([
//     "parkName", "parkCode", "parkRating", "activities", "topics",
//     "travel", "notes"
//   ], 
//   [req.body.parkName, req.body.parkCode, req.body.parkRating, req.body.activities, 
//     req.body.topics, req.body.travel, req.body.notes
//   ], 
  
//   function(err, result) {
//     if (err) {
//       console.log(err);
//     }
//   });
// });

router.post('/api/trips', function(req, res) {
  let sql = `INSERT INTO trips(park_name, park_code, park_rating, activities, topics, travel, notes) VALUES (?)`;
  
  console.log(JSON.stringify(req.body))
  
  let values = [
    req.body.parkName, 
    req.body.parkCode, 
    req.body.parkRating, 
    req.body.activities, 
    req.body.topics, 
    req.body.travel, 
    req.body.notes
  ];
  connection.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "New trip added successfully"
    })
  })
});




module.exports = router;