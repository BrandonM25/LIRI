require("dotenv").config();

var Spotify = require("node-spotify-api");
var Twitter = require("twitter");

var keys = require("./keys.js");

// function Capture(nodeCommand, jsFile, liriCmnd) {
//     this.nodeCommand = nodeCommand;
//     this.jsFile = jsFile;
//     this.liriCmnd = liriCmnd;
// }

//var commandLine = new Capture (process.argv[0], process.argv[1], process.argv[2])

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

console.log(spotify);
console.log(client);


var liriCommand = process.argv[2];

if (liriCommand == "my-tweets") {
    //run the function that gets tweets from twitter api; 
} else if (liriCommand == "spotify-this-song") {
    var song = process.argv[3];
    //run the spotify API function
} else if (liriCommand == "movie-this") {
    var movie = process.argv[3];
    //run the movie api function
} else if (liriCommand == "do-what-it-says") {
    //do whatever wierd stuff the instructions

} else {
    console.log("not a liri command, dummy!");
}
