function bmiCalculator(weight, height) {
    
  var bmi = weight / (height * height);


  if (bmi < 18.5) {
      return "Your BMI is " + (bmi % 1 === 0 ? bmi.toFixed(0) : bmi.toFixed(1)) + ", so you are underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Your BMI is " + (bmi % 1 === 0 ? bmi.toFixed(0) : bmi.toFixed(1)) + ", so you have a normal weight.";
  } else {
      return "Your BMI is " + (bmi % 1 === 0 ? bmi.toFixed(0) : bmi.toFixed(1)) + ", so you are overweight.";
  }
}


var weight = 70; // in kilograms
var height = 1.75; // in meters

var interpretation = bmiCalculator(weight, height);
console.log(interpretation);
