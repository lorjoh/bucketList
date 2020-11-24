console.log('reading Review.js');


// identify the saved parks and link the display call to the display
    var parkChoices = $("#park-choice-list");
    var displayBox = $(".focus-container");
    var defaultBox = $(".default-container");

    $(".choice-item").on("click", function (event) {
        defaultBox.hide();
        console.log(this);
        let park = {
        name: $(this).data("park-name"),
        code: $(this).data("park-code"),
        rating: $(this).data("park-rating"),
        activities: $(this).data("park-activities"),
        topics: $(this).data("park-topics"),
        travel: $(this).data("park-travel"),
        notes: $(this).data("park-notes")
}
        console.log(park);
 
        renderDisplayBox(park);

    });

    function renderDisplayBox(park) { 

      $.ajax({
        url: '/parkFocusInfo/' + park.code,
        Method: "GET"
      })
     
        .then(function(focusItem) {
     
          console.log(focusItem);
          console.log(park);

            let parkName = focusItem.data[0].fullName;
            let shortName = focusItem.data[0].name;

// populate park info based upon retrieved park data

        $('#header').html("<h1><strong>Let's Focus on " + parkName + "</strong><h1>");
        $('#parkName').html("Park Name: " + parkName);
        $('#location').html("Location: " + focusItem.data[0].addresses[0].city + ", " + focusItem.data[0].addresses[0].stateCode);
        $('#description').html("Description: " + focusItem.data[0].description);
        $('#website').html("Website: <a href>" + focusItem.data[0].url + "</a>");
        $('#phoneNumber').html("Telephone " + focusItem.data[0].contacts.phoneNumbers[0].phoneNumber);
        $('#parkEmail').html("Park Email: " + focusItem.data[0].contacts.emailAddresses[0].emailAddress);
        $('#photoHed').html("Photo From " + shortName);
        $('#caption1').html(focusItem.data[0].images[0].caption);
        $('#photo1').html("<img src='" + focusItem.data[0].images[0].url + "' width='100%'>");
        $('#photoCredit1').html(focusItem.data[0].images[0].credit);
        $('#photoTitle1').html(focusItem.data[0].images[0].title);
        $('#inputActivities').attr('placeholder', park.activities);
        $('#inputTravel').attr('placeholder', park.travel );
        $('#inputTopics').attr('placeholder', park.topics );
        $('#inputNotes').attr('placeholder', park.notes );
        $('#rateThisPark').html("Rate " + shortName); 

// set radio buttons based upon retrieved park rating

console.log('Park rating: ' + park.rating)

        $('#gridRadios1').prop('disabled', true)
        $('#gridRadios2').prop('disabled', true)
        $('#gridRadios3').prop('disabled', true)
        $('#gridRadios4').prop('disabled', true)
        $('#gridRadios5').prop('disabled', true)

        if (park.rating == 1 ) {
            $('#gridRadios1').prop('checked', true);
            } 
        else if (park.rating == 2) {
            $('#gridRadios2').prop('checked', true);                      } 
        else if (park.rating == 3) {
            $('#gridRadios3').prop('checked', true);   
            } 
        else if (park.rating == 4) {
            $('#gridRadios4').prop('checked', true);  
            } 
        else if (park.rating == 5) {
            $('#gridRadios5').prop('checked', true);  
            }       

          displayBox.show()

        });
    }

    $("#focus-on-park").on("click", function () {
        displayBox.hide();
        defaultBox.show();
    });


src="https://code.jquery.com/jquery-3.4.1.min.js"