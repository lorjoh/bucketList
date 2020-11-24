
var parkResponse="";
var savedParkInfo="";


// *********************************************************************************************
// function to retrieve detailed Park information for Focus page 

function getParkFocusInfo() {

let parkSelected = localStorage.chosenParkCode;
console.log('calling parkInfo api')
console.log('using park code: ' + parkSelected)


      $.ajax({
        url: '/parkFocusInfo/' + parkSelected,
        Method: "GET"
      })
        // We store all of the retrieved data inside of an object called "response"
        .then(function(response) {
          // Log the queryURL
          console.log(response);
              parkResponse = response;
              localStorage.parkResponse = JSON.stringify(response)
              $(location).attr('href','/focus') 
            });
        }

  function getParksFromActivities() {

    let activitySelected = localStorage.activitySelected;
    console.log('calling park activity api')
    console.log('using activity code: ' + activitySelectedCode)
    
    
        $.ajax({
          url: '/focusActivities/' + activitySelected,
          Method: "GET"
        })
          // We store all of the retrieved data inside of an object called "response"
          .then(function(response) {
            // Log the queryURL
            console.log(response);
            // localStorage.filteredParks = JSON.stringify(response.data[0].parks);
            localStorage.filteredParks = JSON.stringify(response);
            console.log(filteredParks);
            populateFilteredParks();
          });
      }

  function getParksFromTopics() {
    // let topicSelectedCode = '28AEAE85-9DDA-45B6-981B-1CFCDCC61E14';
    let topicSelected = localStorage.topicSelected;
    console.log('calling park topic api')
    console.log('using topic code: ' + topicSelected)
    
    
        $.ajax({
          url: '/focusTopics/' + topicSelected,
          Method: "GET"
        })
          // We store all of the retrieved data inside of an object called "response"
          .then(function(response) {
            // Log the queryURL
            console.log(response);
            // localStorage.filteredParks = JSON.stringify(response.data[0].parks);
            localStorage.filteredParks = JSON.stringify(response);
            console.log(filteredParks);
            populateFilteredParks();
          });
      }



      



  

  