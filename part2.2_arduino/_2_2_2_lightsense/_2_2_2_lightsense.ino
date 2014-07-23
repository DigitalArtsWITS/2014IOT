// make it easier to know which colour LED is on which pin number
// we also use the PWM mins (~) so we can fade LEDs later too
int red    = 11;
int yellow = 10;
int green  = 9;

// setup() runs once automatically when the arduino recieves power.
void setup() {             
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
  
  //enable high current output on pins
  pinMode(red, OUTPUT);       
  pinMode(yellow, OUTPUT);     
  pinMode(green, OUTPUT);      
}

// loop() runs automatically after setup()
void loop() {
  // read the input on analog pin 0:
  int sensorValue = analogRead(A0);  
  
  // print out the value you read:
  Serial.println(sensorValue);

  // LOW?
  if (sensorValue < 341) {
    digitalWrite(red,    1);   
    digitalWrite(yellow, 0 );   
    digitalWrite(green,  0 );           
  }

  // MEDIUM?
  if ((340 < sensorValue) && (sensorValue < 680)) {
    digitalWrite(red,    0);   
    digitalWrite(yellow, 1);  
    digitalWrite(green,  0);           
  }  
  
  // HIGH?
  if (680 < sensorValue) {
    digitalWrite(red,    0);   
    digitalWrite(yellow, 0);   
    digitalWrite(green,  1);           
  }     

  delay(10);        // delay in between reads for stability
}
