
{/* <div class="col-sm-10">
  <input class="form-control" id="inputNotes" {{#if park_info.notes}} placeholder={{park_info.notes}} {{/if}} {{#unless park_info.notes}}placeholder="More notes to plan your stay ..."{{/unless}}>
  {{ park_Info.notes}}
</div> */}


// 'focusResults' will be the array created on the front end for use with the database

// connection.query("INSERT INTO trips (park_name, park_code, park_rating, activities, topics, travel, notes) VALUES (?, ?, ?, ?, ?, ?, ?)",
//  [focusResults.parkName, focusResults.parkCode, focusResults.parkRating, focusResults.activities, focusResults.topics,
//     focusResults.travel, focusResults.notes]

//  INSERT INTO trips (park_name, park_code, rating, activities, topics, to_dos, notes) VALUES ('Presidio of San Francisco', 'prsf', '4', 
//  'shopping', 'see the rest of San Francisco', 'find out about parking');


// Model

var saveModel = {
    saveParkInfo: function(focusResults, callBack) {
        connection.query("INSERT INTO trips (park_name, park_code, park_rating, activities, topics, travel, notes) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [focusResults.parkName, focusResults.parkCode, focusResults.parkRating, focusResults.activities, focusResults.topics,
    focusResults.travel, focusResults.notes], function(req, res) {
            callBack(res)
        })
    }
}

// Controller
router.put('/focus/:focusResults', function(req, res) {
    var saveParkData = req.params.focusResults
    saveModel.saveParkInfo(saveParkData, function(saveParkData){
        res.render('focus', { park_info: saveParkData})
    })
})







var model = {
    retrieveParkInfo: function(parkId, callBack) {
        connection.query(`Select * FROM parks WHERE park_id = ${parkId}`, function(req, res) {
            callBack(res)
        })
    }
}

router.get('/focus/:parkId', function(req, res) {
    var parkID = req.params.parkid
    model.parkInfo(parkID, function(parkData){
        res.render('focus', { park_info: parkData})
    })
})


