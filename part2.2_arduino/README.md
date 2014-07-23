![Imgur](http://i.imgur.com/VIKVCOf.png)

### Part 2.2 - Arduino & Serial Coms 
**Led by: Rouan van der Ende**  

Class Outline
=============

You will learn how to use an arduino to control and react to electronic signals by blinking LED lights, and measuring input using sensors. 

You will also learn how to send commands and recieve data over the serial port so that you can interact with your circuit from a computer or external device.

At the end of this class you should be able to build a simple arduino device and interact with it both in the real world and from a computer. This counts 50% of part 2 total.

Class
=====

Download and unzip arduino software from http://arduino.cc/

Install drivers if needed for your OS

**2.2.1**

Use the arduino to build a simple 3 light circuit similar to a road traffic signal.

![Imgur](http://i.imgur.com/PoEUpxa.jpg)  
Image made with (fritzing)[http://fritzing.org/]

**2.2.2**

Use the arduino to measure light intensity or a potentiometer knob and make this affect the speed of light switching.

**2.2.3**

Download and install the aJson library from https://github.com/interactive-matter/aJson 

Set up the arduino to send and recieve JSON formatted data. 

	For example:

	Arduino sends 		{"brightness":"1023", "knob": "123"}   
	Arduino recieves	{"LED1": "1.0", "LED2": "0.5", "LED3": "0.25"}   

**2.2.4**

Install the node.js serialport module from https://github.com/voodootikigod/node-serialport

Test simple communication between nodejs and arduino.
