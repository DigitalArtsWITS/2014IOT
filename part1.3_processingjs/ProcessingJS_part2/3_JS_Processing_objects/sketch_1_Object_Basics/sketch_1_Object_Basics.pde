Taxi myTaxi1;
Taxi myTaxi2;

void setup (){
  size(500,500);
  
  myTaxi1 = new Taxi(100, 100, 200, 50);
  myTaxi2 = new Taxi(width/2, 300, 100, 50);
  
}

void draw () {
  background(0);
  rectMode(CENTER);
  ellipseMode(CENTER);
  // call the display function for the taxi object
  myTaxi1.display();
  myTaxi1.move(2);
  myTaxi2.display();
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
  Taxi(int tX, int tY, int tW, int tH){
    taxiX = tX;
    taxiY = tY;
    taxiW = tW;
    taxiH = tH;
    taxiSpeed = 1;
  }
  
  //methods / functions
  void display(){
    fill(255);
    rect(taxiX, taxiY, taxiW, taxiH);
    fill(127);
    ellipse(taxiX-taxiW/3, taxiY+taxiH/2, taxiW/4, taxiH/2);
    ellipse(taxiX+taxiW/3, taxiY+taxiH/2, taxiW/4, taxiH/2);
  }
  
  void move(int tSpeed){
    taxiSpeed = tSpeed;
    if(taxiX < width){
    taxiX = taxiX + taxiSpeed;
    } else {
      taxiX = 0;
    }
  }
  
}






