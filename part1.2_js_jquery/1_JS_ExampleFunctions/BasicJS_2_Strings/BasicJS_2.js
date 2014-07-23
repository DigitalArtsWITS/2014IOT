/*
 * Important things about string variables,
 * We declare a single charaters as 'a' or 'A' - single quote marks.
 * A string is more than one charater "word" or "a sentence or words" - double quote marks.
 */


//Basic string usage functions in JS with string variables
function myString()
{
 var demo = document.getElementById( "demo" ) ;
 // declaring 3 string variables
 var s1 = "frogs" , s2 = "jumping like" , s3 = "dogs" ;
 // also a picture file name
 var picName = "myPic", picFile = "frogJump.jpg" ;
 // these are all the javascript "string" functions
 demo.innerHTML = s1.toUpperCase() ;
 demo.innerHTML += "<br>" + s1.toLowerCase() ;
 demo.innerHTML += "<br>" + s1.concat( s2 , s3 ) ;
 demo.innerHTML += "<br>" + s1 + " has " + s1.length + " characters" ;
 demo.innerHTML += "<br>" ;
 demo.innerHTML += "<br><img id='myPic'>" ; 
 document.images[ picName ].src = picFile ;
 // EQUATES TO...
 // document.images[ "myPic" ].src="poolballs.png"; 
}

//Working with sub strings in JS with string variables
function mySubString()
{
 var demo1 = document.getElementById( "demo1" ) ;
 // declaring one gaint string that then gets broken up and used as sub strings
 var dfn = "My frog likes water. Especially ponds. He likes jumping on lilies. The local gardener is mad. Control your frog he shouts." ;
 demo1.innerHTML = dfn.slice( 0 , 20 ) ; 			
 demo1.innerHTML += dfn.slice( 70 , 85 ) + "<br>" ;
 demo1.innerHTML += dfn.split( " " , 4 ) + "<br>" ; 	
 demo1.innerHTML += dfn.substring( 48 , 65 ) ; 		
 demo1.innerHTML += dfn.substring( 85 , 92 ) ; 
 demo1.innerHTML += dfn.substr( 111 , 129 ) ;		
}

// *NB "Event Style" for Javascript - based on 'event listener' - content loaded
document.addEventListener( "DOMContentLoaded" , myString , false ) ;
document.addEventListener( "DOMContentLoaded" , mySubString , false ) ;


// *NB All following are in non "Event Style"... looking for clicks on buttons in Html
//Finding the first index place of the string. 
function findfirst()
{
    var str = document.getElementById("p1").innerHTML;
    var pos = str.indexOf("locate");
    document.getElementById("demo2").innerHTML = pos;    
}

//Finding the last index place of the string.
function findlast(){
    var str = document.getElementById("p1").innerHTML;
    var pos = str.lastIndexOf("locate");
    document.getElementById("demo2").innerHTML = pos; 
}


//Replaces a string with another string - in every instance - keep clicking
function replaceString() {
    var str = document.getElementById("demo3").innerHTML; 
    var txt = str.replace("your","my");
    document.getElementById("demo3").innerHTML = txt;
}


//***Bonus, changes document elements - background color
function bgChange1(bg) {
    document.body.style.background = bg;
}

function bgChange2(bg) {
    document.body.style.background = bg;
}