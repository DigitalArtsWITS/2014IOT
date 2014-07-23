/* An Exercise - Using what you have learnt + Conditional Statments in Javascript - Tegan Bristow
 *
 * As seen in BasicsJS no. 1 - we can test something against a condition in order to make a decision
 * Here is the basic structure of the if statment
 *
 * if(testing case is true){
      do the right thing;
    } 
    
* Or we can choose between two outcomes, to make a choice between one outcome vs anouther
*
* if(testing case is true){
      do the right thing;
    } else {
      do the other thing;
    }
  
* Or me can have two (or more) test cases with seperate but related outcomes. By related I mean they should be looking at the same variable.
* if(testing case is true){
      do the right thing;
    } else if (seconf testing case is true){
      do the other thing;
    }

* (below I did three outcomes, if you are wanting more than this, try using the "switch/case structure")
*
* Exercise:
* Finish this piece of code, adding your own conditional statement for #panel1 and #panel2 ...make a story out of it.
* You can use just the 'if' statement or the 'if else, but each panel should be different.
* Try some of the tricks you learnt, ie. changing the BG color as in BasicJS no. 2 or using alerts and prompts, or looking for string's.
*/

// functions that output the reponse for key events. This makes a break between each keydown.
function keydownResponse(){  panel.innerHTML += "<br>" ;  }

// key response to particular letter entered
function keypressResponse( e )
{
// this variable will change based on my outcome. My default is this..
 var myAnswer = "Seriously?";
 // this variable sets "keynum" to the keycode on the keyboard
 var keynum = (window.event) ? event.keyCode : e.which;
 
 // this is the condition statment - each test statment jsut converst the keyCode from a number to the actual letter (re. ASCII)
 if (String.fromCharCode(keynum) == 'A' ) {
  myAnswer = "Well aren't you a smarty pants."
 } else if (String.fromCharCode(keynum) == 'B') {
  myAnswer = "Thought so..."
 } else if (String.fromCharCode(keynum) == 'C') {
  myAnswer = "Ever heard of try harder?"
 } else {
   myAnswer = myAnswer;
 }
 // outputs the answer to the panel
 panel.innerHTML += myAnswer;
}

//init looking for the key events in #panel, also writes the first text into it
function init()
{
 panel=document.getElementById("panel");
 panel.innerHTML="Are you getting an A, B or C in this course?" ;
 
 // calls the two keypress functions I wrote, when the "document" recieves a "onkeydown or onkeypress" event notificaiton.
 document.onkeydown=keydownResponse; 
 document.onkeypress=keypressResponse; 

}
// adding the event listner to the document and looking for "init()" function 
document.addEventListener( "DOMContentLoaded" , init , false ) ;