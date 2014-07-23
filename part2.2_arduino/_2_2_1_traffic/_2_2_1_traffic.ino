// make it easier to know which colour LED is on which pin number
// we also use the PWM mins (~) so we can fade LEDs later too
int red    = 11;
int yellow = 10;
int green  = 9;

// setup() runs once automatically when the arduino recieves power.
void setup() {             
  //enable high current output on pins
  pinMode(red, OUTPUT);       
  pinMode(yellow, OUTPUT);     
  pinMode(green, OUTPUT);      
}

// loop() runs automatically after setup()
void loop() {
  digitalWrite(red,    HIGH);   //HIGH or 1
  digitalWrite(yellow, LOW );   //LOW  or 0
  digitalWrite(green,  LOW );       
  delay(1000);                  // wait for a second

  digitalWrite(red,    0);   
  digitalWrite(yellow, 1);   
  digitalWrite(green,  0);         
  delay(1000);                  // wait for a second
  
  digitalWrite(red,    0);   
  digitalWrite(yellow, 0);   
  digitalWrite(green,  1);         
  delay(1000);                  // wait for a second
}
