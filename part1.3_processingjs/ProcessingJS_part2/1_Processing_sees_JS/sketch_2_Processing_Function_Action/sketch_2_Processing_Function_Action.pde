/*
This is the basics of a function
Global variables are really important in this when passing information between main program and the function
1.In this sketch replace 2 in the function with "speed" and pass it to the function.
2.Set a limit for the car so does not go off screen, but starts at 0 when it reaches the end.
3.Write a new function for the car as a shape called "void display()". 
*/

int carX = 20;
int carY = 20;
int carSize = 100;

void setup(){
  size(500,500);
}

void draw(){
  fill(255);
  rect(carX, carY, carSize, carSize/2);
  move();
}

void move(){
  carX = carX + 2;
}
