
console.log('reading Explore.js');

// ***************************************************************************
// Topic block

function populateTopic() {
    var topic = document.getElementById('selectedTopic');
    for (var i = 0; i < topics.length; i++) {
        // POPULATE SELECT ELEMENT WITH JSON.
        topic.innerHTML = topic.innerHTML +
            '<option value="' + topics[i]['topic_code'] + '">' + topics[i]['topic_name'] + '</option>';
    }
}

function showTopic(topic) {
    // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
    var topicSelected = document.getElementById('topicSelected');
    topicSelected.innerHTML = 'Selected Topic: <br><b>' + topic.options[topic.selectedIndex].text;
    console.log('showing topic: ' + topic.value);
    console.log(topic.value);
    localStorage.topicSelected=topic.value  

    }

// ***************************************************************************
// Activity block
    let activitySelectedCode =""
    function populateActivity() {
        var activity = document.getElementById('selectedActivity');
        for (var i = 0; i < activities.length; i++) {
            // POPULATE SELECT ELEMENT WITH JSON.
            activity.innerHTML = activity.innerHTML +
                '<option value="' + activities[i]['activity_code'] + '">' + activities[i]['activity_name'] + '</option>';
        }
    }

    function showActivity(activity) {
        // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
        var activitySelected = document.getElementById('activitySelected');
        activitySelected.innerHTML = 'Selected Activity: <br><b>' + activity.options[activity.selectedIndex].text;
        console.log(activity.value)
        activitySelectedCode=activity.value
        console.log(activitySelectedCode);
        localStorage.activitySelected=activity.value  

        }

// ***************************************************************************
// Parkblock

    function populatePark() {
        var park = document.getElementById('selectedPark');
        for (var i = 0; i < parks.length; i++) {
            // POPULATE SELECT ELEMENT WITH JSON.
            park.innerHTML = park.innerHTML +
                '<option value="' + parks[i]['park_code'] + '">' + parks[i]['park_name'] + '</option>';
            }
        };

        function showPark(park) {
            // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
            var parkSelected = document.getElementById('parkSelected');
            console.log(park, 'parkSelected');
            parkSelected.innerHTML = 'Selected Park: <br><b>' + 
                park.options[park.selectedIndex].text;
            localStorage.parkSelected=park.value
            localStorage.parkSelectedName=park.options[park.selectedIndex].text 
            localStorage.chosenParkCode=park.value
        };

// ***************************************************************************
// filteredParkblock - display a pull-down list of parks which meet criteria

    var filteredParks="";

    function populateFilteredParks() {
    // THE JSON ARRAY.
    $("#selectedFilteredPark").empty();
    
    filteredParks = JSON.parse(localStorage.filteredParks)

    console.log(filteredParks)

    let z = filteredParks[0];

    filteredParks.unshift(z)

    console.log('Updated parks: ' + filteredParks)

    let filteredPark = document.getElementById('selectedFilteredPark');
    for (var i = 0; i < filteredParks.length; i++) {
        // POPULATE SELECT ELEMENT WITH JSON.
        filteredPark.innerHTML = filteredPark.innerHTML +
            '<option value="' + filteredParks[i]['parkCode'] + '">' + filteredParks[i]['fullName'] + '</option>';
        }
    };

    var chosenParkCode 

    function saveParkCode(parkCode){
    localStorage.chosenParkCode =  parkCode;
    }

    function showFilteredPark(filteredPark) {
        $("#finalParkSelection").empty();
        // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
        var filteredParkSelected = document.getElementById('selectedFilteredPark');
        let parkChoice = filteredPark.options[filteredPark.selectedIndex].text 
        selectedFilteredPark.innerHTML = 'ID: <b class="codes">' + 'code' + filteredPark.value + '</b>';
            console.log(selectedFilteredPark.innerHTML);
        let chosenParkCode = selectedFilteredPark.innerHTML.slice(8);
        let displayPark = 'Park Chosen: ' +  '</b> </br>' + parkChoice;

        $('#finalParkSelection').append(displayPark);

        console.log('Park Choice Code: ' + chosenParkCode)
        console.log('Park Choice Name: ' + parkChoice)
        saveParkCode(chosenParkCode);
    };

// ***************************************************************************
// List population and listeners

    populatePark()
    populateTopic()
    populateActivity()

    $(".list-group-item").on("click", function(){
    let code = $(this).find(".codes").text();
    console.log(code);
    });

    $("#activitySelected").on("click", function(){
    let code = $(this).find(".codes").text();
    // console.log("Activity = " + code);
    getParksFromActivities()

    });

    $("#topicSelected").on("click", function(){
    let code = $(this).find(".codes").text();
    console.log("Topic listener fired");
    getParksFromTopics()

    });

    $("#parkSelected").on("click", function(){
        $("#finalParkSelection").empty()
        let displayPark = 'Park Chosen: ' +  '</b> </br>' + localStorage.parkSelectedName;
        $('#finalParkSelection').append(displayPark)
    });

    $("#focus-on-park").on("click", function(){
    getParkFocusInfo()  
    });

    $("#clear-search").on("click", function(){

        $("#finalParkSelection").empty();
    });


src="https://code.jquery.com/jquery-3.4.1.min.js"
