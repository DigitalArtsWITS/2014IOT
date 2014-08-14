#include <aJSON.h>
aJsonStream serial_stream(&Serial);

void setup(void) {
 Serial.begin(9600);
 pinMode(9, OUTPUT); 
}

void loop(void) {
  
  //recieve commands
  while (serial_stream.available()) 
  {
    aJsonObject *msg = aJson.parse(&serial_stream);
    processMessage(msg);  //see api.ino
    aJson.deleteItem(msg);  
  } 

 int sensorvalue = analogRead(A0);

 Serial.print("{\"light\" : \"");
 Serial.print(sensorvalue);
 Serial.println("\" }"); 
 
 delay(50); //just here to slow down the output so it is easier to read
}


/* ================================================================== 

 Expects something like this over serial:
 
 {"brightness": "0.1"}
 {"request": "light"}
 {"brightness": "0.5", "request":"light"}

*/

void processMessage(aJsonObject *msg)
{

  aJsonObject *led = aJson.getObjectItem(msg, "led");
  if (led) {
    char* ledvaluestring = led->valuestring;
    float ledvaluefloat = atof(ledvaluestring); 
    int ledvalueint = ledvaluefloat;
    digitalWrite(9, ledvalueint);
  }
  
 

}

