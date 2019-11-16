
function displayArticleInfo() {
const apiKey = "weSjq5aQvWOq7OaZI3s7atADMIqekIme";
var articleURLcomm = "";
var searchTerms = $("#search").val().trim();
var startDate = $("#startDate").val().trim();
var endDate = $("#endDate").val().trim();
var records = $("#records").val().trim();
console.log(startDate);
var articleInfo = "";
var queryURLcomm = "https://api.nytimes.com/svc/community/v3/user-content/url.json?api-key=" + apiKey +"&offset=0&url=" + articleURLcomm;
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + startDate +"&end_date=" + endDate + "&q=" + searchTerms + "&api-key=" + apiKey;
    
  // Creates AJAX call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
for (var i = 0; i<records; i++ ) {
  let newArticle = $("<div>");
  let newArticleTitle = response.response.docs[i].headline.main;
  let newArticleAbs = response.response.docs[i].abstract;

  newArticle.append( $("<h2>").text("Title: " + newArticleTitle));
  newArticle.append("<br />");
  newArticle.append( $("<p>").text( newArticleAbs));
$("article-constiner").append(newArticle);

}

  });

}

$("#submit").on("click", function(event) {
  event.preventDefault();
displayArticleInfo();
});

$("#reset").on("click", function(event) {
  event.preventDefault();
$("#article-constiner").clear();
});
    
    // // debugger;
    //   var newList = $("<ul>")
    // if ( response.Ratings.length !== 0 ) {
      
    //   response.Ratings.forEach(element => {
    //     let newItem = $("<li>").text(element.Source + ": " + element.Value);
    //     newList.append(newItem);
    //   });
    //   newMovie.append(newList);
    // }

    // newMovie.append( $("<hr>"));
    // $("#movies-view").prepend(newMovie);
    // // YOUR CODE GOES HERE!!!

// // Function for displaying movie data
// function renderButtons() {

//   // Deletes the movies prior to adding new movies
//   // (this is necessary otherwise you will have repeat buttons)
//   $("#buttons-view").empty();

//   // Loops through the array of movies
//   for (var i = 0; i < movies.length; i++) {

//     // Then dynamicaly generates buttons for each movie in the array
//     // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//     var a = $("<button>");
//     // Adds a class of movie to our button
//     a.addClass("movie");
//     // Added a data-attribute
//     a.attr("data-name", movies[i]);
//     // Provided the initial button text
//     a.text(movies[i]);
//     // Added the button to the buttons-view div
//     $("#buttons-view").append(a);
//   }
// }

// // This function handles events where the add movie button is clicked

//   // This line of code will grab the input from the textbox
//   var movie = $("#movie-input").val().trim();

//   // The movie from the textbox is then added to our array
//   movies.push(movie);

//   // Calling renderButtons which handles the processing of our movie array
//   renderButtons();

// });

// // Adding click event listeners to all elements with a class of "movie"
// $(document).on("click", ".movie", displayMovieInfo);

// // Calling the renderButtons function to display the initial buttons
// renderButtons();
