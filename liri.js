var request = require("request");

var command = process.argv[2];

var secondaryCommand = process.argv[3];

if (command === "my-tweets"){
    myTweet();
}
else if(command === "spotify-this-song"){
    mySong(secondaryCommand);
}
else if(command === "movie this"){
    myMovie(secondaryCommand);
}
else if(command === "do-what-it-says"){
    backStree();
}
else{
    console.log("Command not recognized, please try again :(")
}







request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=40e9cece", function(error, response, body) {
  if (!error && response.statusCode === 200) {
    var movieData = JSON.parse(body);
    console.log("The movie's rating is: " + movieData.imdbRating);
  }
});