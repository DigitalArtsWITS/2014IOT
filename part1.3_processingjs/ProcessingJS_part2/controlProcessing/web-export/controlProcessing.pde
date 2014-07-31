// global variables
int x = 0;
int speed = 2;

void setup(){
  size(500,500);
}

void draw(){
  background(0);
   
  // Add the current speed to the x location.
  x = x + speed;

  if ((x > width) || (x < 0)) {
    // If the object reaches either edge, multiply speed by -1 to turn it around.
    speed = speed * -1;
  }
  // Display circle at x location
  stroke(255);
  strokeWeight(10);
  fill(175);
  ellipse(x, height/2, 30,30);
}

