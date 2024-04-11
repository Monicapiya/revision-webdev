// player 1
var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var diceImg = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + diceImg;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImageSource);

// player 2

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var diceImg2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + diceImg2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " 🚩 Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = " 🚩 Player 2 wins";
} else {
  document.querySelector("h1").innerHTML = " Draw";
}
