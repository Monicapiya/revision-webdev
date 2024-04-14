// call back function 

document.addEventListener("keydown", respondToKey(event));

function respondToKey(event){
  console.log("Key Pressed.");
}

function anotherAddEventListener(typeOfEvent, callback) {
  // detect event code

  var eventThatHappened = {
    eventType: "keydown",
    key: "p",
    durationOfKeydown: 2
  }

  if(eventThatHappened.eventType === typeOfEvent) {
    callback(eventThatHappened)
  }
}


$0.addEventListener("click", function(event) {
  console.log(event);
});