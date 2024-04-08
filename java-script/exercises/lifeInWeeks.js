/*
create a function that tells us how many days, weeks and months we have left if we live until 90 years old.
 */

function lifeInWeeks(age) {
  var yearsRemaning = 90 - age;
  var days = yearsRemaning * 365;
  var weeks = yearsRemaning * 52;
  var months = yearsRemaning * 12;

  console.log(
    "You have " +
      days +
      " days, " +
      weeks +
      " weeks, and " +
      months +
      " months left."
  );
  
}
