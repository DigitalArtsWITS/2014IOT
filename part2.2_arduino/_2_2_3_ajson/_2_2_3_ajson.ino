#include <aJSON.h>
aJsonStream serial_stream(&Serial);

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

// ==========================================================================

// loop() runs automatically after setup()
void loop() {
  
  //handles incoming commands
  while (serial_stream.available()) 
  {
    aJsonObject *msg = aJson.parse(&serial_stream);
    processMessage(msg);   //parse and execute, see processMessage() function below
    aJson.deleteItem(msg); //clears memory
  } 
    
  int sensorValue = analogRead(A0);
  // print out the value you read:
  // {"light":123}
  Serial.print("{\"light\":");
  Serial.print(sensorValue);
  Serial.println("}");

  delay(10);        // delay in between reads for stability
}

// ==========================================================================

void processMessage(aJsonObject *msg)
{
  
  // Expects something like this over serial: {"brightness": "0.1"}
  aJsonObject *brightness = aJson.getObjectItem(msg, "brightness");
  if (brightness) {
    char* brightnessValueText = brightness->valuestring;    // gets string value
    float brightnessValueFloat = atof(brightnessValueText); // converts ascii string to floating point value ex."0.1" to 0.1
    analogWrite(11, brightnessValueFloat*255);              // analogWrite uses PWM to pulse pin at varying speeds. 0-255
  }  

}


