var express = require("express");
var trips = require("../models/bucketListModel.js");
var router = express.Router();

// router.get("/", function(req, res) {
//   trip.all(function(data) {
//     var tripData = {
//       trips: data
//     };
//     console.log(tripData);
//     res.render("index", tripData);
//   });
// });

router.get('/', function(req, res){
  res.render('explore',{
  });
});

router.get('/focus', function(req, res){
  res.render('focus',{
  });
});

router.get('/review', function(req, res){
  res.render('review',{
  });
});

router.post("/api/trips", function(req, res) {
  trip.create([
    "parkName", "parkCode", "parkRating", "activities", "topics",
    "travel", "notes"
  ], 
  [req.body.parkName, req.body.parkCode, req.body.parkRating, req.body.activities, 
    req.body.topics, req.body.travel, req.body.notes
  ], 
  
  function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// router.put("/api/trips", function(req, res) {
  // var condition = "id = " + req.params.id;

  // console.log("condition", condition);

//   trip.update({
    
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/trips", function(req, res) {


//   trip.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

module.exports = router;