var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.length;
alert ("You have written " + tweetCount + " characters, you have " + (140 - tweetCount) + " characters remanining");

var tweet = prompt("Compose your tweet:");
var tweetUnder140 = tweet.slice(0, 140)
alert (tweetUnder140);

var tweet = prompt("Compose your tweet:");
alert (tweet.slice(0, 140));

var name = "Angel";
name = name.toUpperCase();