// telling processing to look for Javascript
interface JavaScript {
  void showXY(int x, int y);
}

// binding the javascript to the name
void bindJavaScript(JavaScript js){
  javascript = js;
}

// naming the javascript
JavaScript javascript;


void setup(){
  size(500,500);
  noLoop();
  background(0,0,50);
}

void draw(){
  fill(0,0,50,40);
  rectMode(CORNER);
  noStroke();
  rect(0,0,width, height);
 
}

void mouseMoved() {
  rectMode(CENTER);
  stroke(255);
  strokeWeight(2);
  rect(mouseX, mouseY, 20, 20);
  redraw();
  
  // these are really important in case we run an error
  if(javascript!= null){
  javascript.showXY(mouseX, mouseY);
  }
}








