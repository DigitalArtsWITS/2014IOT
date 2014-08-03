Taxi myTaxi1;

void setup (){
  size(500,500);
  
  myTaxi1 = new Taxi();
}


void draw () {
  background(0);
  rectMode(CENTER);
  ellipseMode(CENTER);
  // call the display function for the taxi object
  myTaxi1.display(10, 10, 100, 50);
}

//name
class Taxi {
  //data
  int taxiX;
  int taxiY;
  int taxiW;
  int taxiH;
  int taxiSpeed;
  
  //constructor - used to make up the basics of the taxi
  Taxi(){
    taxiX = 100;
    taxiY = 100;
    taxiW = 100;
    taxiH = 50;
    taxiSpeed = 1;
  }
  
  //methods / functions
  void display (int tX, int tY, int tW, int tH){
    taxiX = tX;
    taxiY = tY;
    taxiW = tW;
    taxiH = tH;
    fill(255);
    rect(taxiX, taxiY, taxiW, taxiH);
    fill(127);
    ellipse(taxiX-taxiW/3, taxiY+taxiH/2, taxiW/4, taxiH/2);
    ellipse(taxiX+taxiW/3, taxiY+taxiH/2, taxiW/4, taxiH/2);
  }
  
}






