# Application: 'Bucket List' National Parks App

## Developer: The ParkPlace team: Sandra Ayika, Doug Davidoff, and Frank Salvo

##### Home Page of National Parks Bucket List App
![Home Page of App](https://user-images.githubusercontent.com/10477863/99888805-62e85880-2c1d-11eb-92fa-9fe3371b6eb1.png)

##### App Page Focusing on One National Park
![Park Focus Page #1](https://user-images.githubusercontent.com/10477863/99888903-531d4400-2c1e-11eb-962a-1fdae33be107.png)
![Park Focus Page #2](https://user-images.githubusercontent.com/10477863/99888922-852ea600-2c1e-11eb-9cd5-48a39b170c1c.png)
![Park Focus Page #3](https://user-images.githubusercontent.com/10477863/99888945-aa231900-2c1e-11eb-8bbb-38a5551dccc1.png)


![License: MIT](http://img.shields.io/static/v1?label=License&message=MIT&color=orange) 

### Table of Contents
[Project Description](#project-description)

[Installation](#installation)

[Usage](#usage)

[Technologies Employed](#technologies-employed)

[Successes and Challenges](#successes-and-challenges)

[Future Development](#future-development)

[Contributors](#contributors)

[Tests](#tests)

[License](#license)

[Questions, Contact Info](#questions-and-contact-info)

### Project Description
 "Bucket List" aids travelers in planning and executing visits to 500 U.S. National Park Service properties. The app presents users with activities and topics featured at each property, and allows users to record their desires and plans.

 ![Our inspiration, the "National Parks Bucket Journal," published by My Bucket Journals of Texas](https://user-images.githubusercontent.com/10477863/99752348-28ae7800-2ab2-11eb-9dde-135b4f3b7ab6.png)
 
### Installation
 The applications runs from a web server. No local installation is necessary. To access the site, visit this URL:
 [https://nationalparksjournal.herokuapp.com/](https://nationalparksjournal.herokuapp.com/).

### Usage
 The user arrives first at the "Explore" page. Here, the user may explore the 500 National Park Service properties by name, or by choosing activities or topics the user would like to pursue at a park. Working through this rubric, the user selects a park for greater attention and arrives at the "Focus" page. Here the user is presented with more details about the park as well as beautiful photography by National Park Service photographers. The user is able to record information about their plans for visiting the park, and the information is stored in a cloud database. Finally, on the "Bucket List" page, the user can review the information they have recorded. 

### Technologies Employed

As indicated above, the application is built around three primary pages which interact with several of the National Park API's supporting interactive exploration of facts about individual Parks, including activities and topics for each.  The user can add their own rating, travel specific information and any comments they wish.  Each 'trip' a user captures this way is saved in an SQL database for later review, including their notes, ratings, topics and actitivies selected. 

#### General flow 
The front-end of the Explore, Focus and My Bucket List pages are driven by Javascript using Handlebars templates, with Ajax calls via Express to an MVC structured set of end-points that, in-turn, fire axios calls to the API's from the server-side.  This protects the API's and leverages the MVC and ORM.  The overall site uses a Handlebars template for nav-bar and other elements.   Carousel is driven by Tiny-Slider which is an NPM package.  The app is deployed on Heroku. 

The 'Explore' page:   The explore page is segmented into three areas.  The first, where a user selects either topics, activities or chooses a park directly is driven by pull-down dialog boxes that use JSON files with the static lists to drive the choices shown.   The second, wehere the user selects either the topic selected, activity selected or Park fires an ajax call the corresponding endpoint on the server side which, in-turn, fires a call to the appropriate Parks API.  In the case of a topic or activity, what is returned is a list of Parks matching that criteria - which is populated in a third selector where a user can see the list of matching Parks and select an individual park.  If a Park is selected that populates directly.  The user can then choose to "Focus" on that park, or continue to search. 

The "Focus" page:  The Focus page is rendered from the Explore page and is populated with the result of another series of Ajax/Axios calls to the Parks API for detailed park information.   Topics and Activities are rendered using Handlebars to the left, photos are rendered using the Tiny-Slider carousel  and other park information is on the right.   Below the information about the Park from the API call, the user has the ability to rate the park, select Activities and Topics they are interested in by clicking on the elements rendered to the left via listeners to those items, and adding text comments for Travel and Notes.  Once satisfied the user can save the Trip.  A confirmation dialog box using jquery-confirm provides a nicer formateed response to the user.  The park code, park name, rating, topics, activities, travel info and notes are saved in an sql database using JAWS out on Heroku.  

The My Bucket List page: The My Bucket List page displays a list of all the Park trips a user has saved in their Bucket List.  These are rendered using Handlebars to the left.  The user can click on any of those trips which will fire an api call to get the park details and then supplement that information with the previously saved data for rating, activities, etc.   The app uses a dynamically opened box to display that information which is closed at page load with a Parks mural in its place and then opens for each park as selected.  The elements on the page are targeted using jquery with the retrieved database response information. 

### Successes and Challenges
 #### Successes
1. The application works and is far more impressive than we would have imagined when we first developed the concept for how it would come together.  The images are awesome and the interface is clean and functional.  Although there are a number of enhancements which would make it really useful, almost on-par with some commercial offerings - you can see the potential!

2. Teamwork really made a difference at crucial moments.  Although the group had very different skills and we were all behind a bit in class, each of us contributed some terrific ideas at crucial moments.  Never underestimate the value of someone else's perspective - in our case these moments were gems. 


 #### Challenges
 1. GitHub was a challenge throughout the project. We had great difficulty managing the repo on GitHub. Even this README file engendered difficulties. The biggest manifestation of the GitHub problems came in deploying the app to Heroku. As a result, we created a copy of the repo and deployed it to GitHub on [https://nationalparksjournal.herokuapp.com](https://nationalparksjournal.herokuapp.com). We did eventually get the original Heroku link to function (which is connected to our primary repo), [https://bucketlist-journal.herokuapp.com/](https://bucketlist-journal.herokuapp.com/). 
 
 
### Future Development
 Near-term improvements will greatly enhance the usefulness of "Bucket List" by ParkPlace. Among these improvements are: (a) user authentication using Passport or similar to allow multiple users to explore and save their Bucket Lists independently and securely, (b) using SendGrid or similar to email the user's Bucket List to the user or to friends, and (c) add additional functionality inspired by the extensive topics in the "National Parks Bucket List" spiral-bound journal and notebook published by My Bucket Journals, a small family-owned company which is not affiliated with the ParkPlace team but nonetheless provided the inspiration for this app.

### Contributors
 In addition to members of the ParkPlace team, instructional staff of our coding bootcamp at the Univesity of Connecticut provided much help working out problems.

### Tests
 The code has been tested at the W3C Markup Validation Service.  We also used Travis during deployment. 

### License
 FastCompany.com says, '[E]xtremely straightforward and open. It permits users to do anything with a given project as long as they credit the developer and don’t hold him or her liable for the project’s use.'

### Questions and Contact Info
 The reader may raise questions and make comments to any member of the team. Sandra Ayika's telephone is (203) 600-4654 and her email is sandraayika@gmail.com. Doug Davidoff's telephone is (203) 522-8533 and his email is douglass.davidoff@gmail.com. Frank Salvo's telephone is (203) 822-4835 and his email is fhsalvo@yahoo.com.
 * Click for [GitHub repository](https://github.com/lorjoh/bucketList) for the The ParkPlace team: Sandra Ayika, Doug Davidoff, and Frank Salvo.
