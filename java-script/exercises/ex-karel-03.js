// chess board pattern


function main() {
 

  putBeeper();

  clockWise();

  antiClockWise();

  clockWise();

  antiClockWise();

  turnRight();

  move();
  move();
  putBeeper();
  move();
  move();
  putBeeper();

  turnRight();

  move();
  move();
  putBeeper();
  move();
  move();

  turnRight();
  
  move();
  move();
  putBeeper();
  move();
  move();
  putBeeper();

  turnRight();
  move();
  move();
  putBeeper();

  turnRight();
  move();
  turnRight();

  move();

  putBeeper();

  turnAround();

  move();
  move();

  turnRight();

  move();
  move();

  putBeeper();
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
