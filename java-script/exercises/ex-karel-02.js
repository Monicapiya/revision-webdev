// diagonal move beeper

function main(){
  //your code here
  
putBeeper();
  
clockWise();
  
antiClockWise();
  
clockWise();
  
antiClockWise();
}

function clockWise() {
  
move();
turnLeft();
move();
putBeeper();
 
  }
  
  function antiClockWise() {
     
move();
turnRight();
move();
putBeeper();
 
  }