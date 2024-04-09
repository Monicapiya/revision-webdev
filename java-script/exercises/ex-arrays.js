// [] collection of data in array

var guesList = ["Angel", "Devil", "Seven Sins", "Metal Beast", "Blue blooded Wolf"];

var guestName = prompt("What is your name?");

if(guesList.includes(guestName)) {
  alert("Welcome");
} else {
  alert("Sorry, maybe next time")
}