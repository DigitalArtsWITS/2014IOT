
void setup(){
  size(500,500);
  //noLoop();
  background(0,0,50);
  stroke(255,0,0);
  strokeWeight(10);
  fill(255);
  //ellipse(width/2, height/2 ,100,100);
  textSize(45);
  text("", 100,100);
}

void draw(){
 
 
}

void drawText(String txt) {
  background(#000033);
  // get the width for the text
  float txtWidth = textWidth(txt);
  // place the text centered on the drawing area
  text(txt, (width-txtWidth)/2, height/2);
}



