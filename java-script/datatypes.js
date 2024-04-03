let length = 16;
let weight = 7.5;

let color = "Yellow";
let lastName = "Johnson";

let x = true;
let y = false;

const person = { firstName: "John", lastName: "Doe" };

const cars = ["Saab", "Volvo", "BMW"];

const date = new Date("2022-03-25");

let isOnSale = true;
console.log(isOnSale);
isOnSale = false;
console.log(isOnSale);

// true answers
// false

let isTrue;
isTrue = true;
console.log(isTrue);

/* 
All of the following values are falsy:
false
null
undefined
0
-0
NaN
An empty string ('')

*/

let num = 5;
num = 0;
const bool = Boolean(num);
console.log(bool);


function sum(x, y) {
  return x + y;
  console.log("Hello World"); 

  function sum(a, b) {
    return a + b;
  
  }

console.log(sum(1, 3));
console.log(sum(2, 5));

function multiply(a, b) {
  return a * b;
  }
  
  console.log(multiply(2, 4));
  console.log(multiply(3, 2));