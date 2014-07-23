
// Comments are different in JS, this is for a line.
/*
this is
for a block
*/

//calls an alert popUp in which you can place text - uncomment this code and run it, see what happens...
//alert("hello world");

//Function that puts information into an element with a particular #id.
/*
* type is "function,
* name of function is "myChanging",
* the "()" is an area where we can pass information to the function.
*/
function myChanging() {
    /* "document" looks at the html page
     * "getElementById" is a javascript function that looks for the id we give it in "()"
     * "innerHTML" - means place what ever is after the "=" this in the HTML
     * Then we point to a string that we want places in the HTML element associated with that id" */
    document.getElementById("demo1").innerHTML = "Became a Little More Interesting";
}

//Function that calls the "confirm" popUp and uses a the placeholder variable x to put the chosen ID
function myConfirm() {
    // variable 'x', acts as a place holder for the outcome outcome we want
    var x;
    // this is a basic conditional statement, looking at which button you press on the confirm and chooses one of two outcomes
    if (confirm("Press a button!") == true) {
        x = "You pressed OK!";
    } else {
        x = "You pressed Cancel!";
    }
    // places the string associated to the variable "x" into the element associated with demo2
    document.getElementById("demo2").innerHTML = x;
}

//Function that calls the "prompt" popUp and uses a the "person" placeholder variable for the prompt itself.
// Do you see how this is different from the last one?
function myPrompt() {
    // variable 'person' places information into the prompt 
    var person = prompt("Please enter your name", "Mouse Face");
    
    // != means not  // null means 'empty' so if "it is not empty" then...
    if (person != null) {    //what does this mean
        document.getElementById("demo3").innerHTML =
        // it adds together the string - see week 7, no. 2 for more on strings
        "Hello " + person + "! How are you today?";
    }
}



