console.log('reading focus.js');


// acadia is the name of the park response object which contains all the detailed park info --}}

let acadia = JSON.parse(localStorage.parkResponse);
let activitiesFound =acadia.data[0].activities;
let topicsFound = acadia.data[0].topics;
let parkName = acadia.data[0].fullName;
let parkCode = acadia.data[0].parkCode;
let activitiesAdded ="";
let topicsAdded ="";

// rendering the lists of activities and topics at the park from the api response

activitiesFound.forEach(element => {
      let activityName = element.name;
      let newListElement = $('<li class="activity">').text(activityName);
      newListElement.attr('dataActivity', activityName )
      $('#activityID').append(newListElement);
})

topicsFound.forEach(element => {
      let topicName = element.name;
      let newListElement = $('<li class="topic">').text(topicName);
      newListElement.attr('dataTopic', topicName )
      $('#topicID').append(newListElement);
})

// click listeners for activities and topics to be added to a users trip 

$(".activity").on("click", function(){
    let activityAdd = $(this).attr('dataActivity');
    console.log(activityAdd);
    activitiesAdded = activityAdd  + ', ' + activitiesAdded;
    $('#inputActivities').attr("placeholder", activitiesAdded)
});

$(".topic").on("click", function(){
    let topicAdd = $(this).attr('dataTopic');
    console.log(topicAdd);
        topicsAdded = topicAdd  + ', ' + topicsAdded;
    $('#inputTopics').attr("placeholder", topicsAdded)
});

// adding trip information to users bucket list upon save trip 

  $("#add-to-bucket").on("click", function(){

  let bucketItem =
          { parkName : parkName,

          parkCode: parkCode,

          parkRating: document.querySelector('input[name="gridRadios"]:checked').value,

          activities: activitiesAdded,

          topics: topicsAdded,

          travel: $('#inputTravel').val(),

          notes: $('#inputNotes').val()

          };

//   {{!-- console.log(document.querySelector('input[name="gridRadios"]:checked').text) --}}

        $.ajax({
        url: '/api/trips',
        method: "POST",
        data: bucketItem
      })
  
        .then(function(response) {
  
          console.log(response);

    $.dialog('Trip saved to My Bucket List !');
        });  
});

// jquery to populate the park data into the template that is rendered 

$('#header').append("<h1><strong>Let's Focus on " + parkName + "</strong><h1>");
$('#parkName').append("Park Name: " + parkName);
$('#location').append("Location: " + acadia.data[0].addresses[0].city +", " + acadia.data[0].addresses[0].stateCode);
$('#description').append("Description: " + acadia.data[0].description);
$('#website').append("Website: <a href>" + acadia.data[0].url + "</a>");
$('#phoneNumber').append("Telephone " + acadia.data[0].contacts.phoneNumbers[0].phoneNumber);
$('#parkEmail').append("Park Email: " + acadia.data[0].contacts.emailAddresses[0].emailAddress);
let shortName = acadia.data[0].name;
$('#photoHed').append("Photo From " + shortName);
$('#activitiesHed').append("<strong>" + shortName + " Actvities</strong>");
$('#topicsHed').append("<strong>" + shortName + " Topics</strong>");
$('#userNotes').append("<strong>Record Your Notes About " + shortName + "</strong>");
$('#moreParkPhotos').append("More photos of " + shortName);
$('#rateThisPark').append("Rate " + shortName);

// photos and related information which drives the tiny-slider carousel 

$('#photoTitle1').append(acadia.data[0].images[0].title);
$('#caption1').append(acadia.data[0].images[0].caption);
$('#photo1').attr("src", acadia.data[0].images[0].url);
$('#photoCredit1').append(acadia.data[0].images[0].credit);

$('#photoTitle2').append(acadia.data[0].images[1].title);
$('#caption2').append(acadia.data[0].images[1].caption);
$('#photo2').attr("src", acadia.data[0].images[1].url);
$('#photoCredit2').append(acadia.data[0].images[1].credit);

$('#photoTitle3').append(acadia.data[0].images[2].title);
$('#caption3').append(acadia.data[0].images[2].caption);
$('#photo3').attr("src", acadia.data[0].images[2].url);
$('#photoCredit3').append(acadia.data[0].images[2].credit);

$('#photoTitle4').append(acadia.data[0].images[3].title);
$('#caption4').append(acadia.data[0].images[3].caption);
$('#photo4').attr("src", acadia.data[0].images[3].url);
$('#photoCredit4').append(acadia.data[0].images[3].credit);

// tiny-slider carousel

var slider = tns({
  container: '.my-slider',
  items: 1,
  autoplay: true,
  loop: true,
  controls: false,
  nav: false,
  autoplayButtonOutput: false,
  navPosition: "bottom", 
  navPosition: "center",
  responsive: {
    640: {
      edgePadding: 0,
      gutter: 0,
      items: 2
    },
    700: {
      gutter: 0
    },
    900: {
      items: 1
    }
  }
});

