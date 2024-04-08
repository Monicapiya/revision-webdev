var words = prompt("What is your name?");
var sliceDice = words.slice(0, 1)
sliceDice = sliceDice.toUpperCase();
var remChar = words.slice(1, words.length);
remChar = remChar.toLowerCase();
alert("Hello " + sliceDice + remChar);
