
// functions that output the reponse for mouse clicks
function clickResponse() { this.innerHTML += "Click detected<hr>" ; }
function doubleclickResponse() { this.innerHTML += "Double-click detected<br>" ; }
function mousedownResponse() { this.innerHTML += "Mouse button down<br>" ; }
function mouseupResponse() { this.innerHTML += "Mouse button up<br>" ; }

// functions that output the reponse for key events
function keydownResponse(){  panel1.innerHTML += "<br>Key Pressed: " ;  }
function keyupResponse(){ panel1.innerHTML += "<br>Key Released" ;  }

// key response to particular letter
function keypressResponse( e )
{ 
 var keynum = (window.event) ? event.keyCode : e.which;
 panel1.innerHTML += String.fromCharCode(keynum) ;
}

// function that calls the response based on the event
function init()
{
  var panel = document.getElementById( "panel" ) ;
  //mouse function calls
  panel.innerHTML = "Click Here &gt;<br>" ;
  panel.onclick = clickResponse ;
  panel.ondblclick = doubleclickResponse ;
  panel.onmouseup = mouseupResponse ;
  panel.onmousedown = mousedownResponse ;
  //key function calls
}
// adding the event listner to the document and looking for "init()" function 
document.addEventListener( "DOMContentLoaded" , init , false ) ;

//init2 only for the keys events
function init2()
{
 panel1=document.getElementById("panel1");
 panel1.innerHTML="Press a key..." ;
 
 document.onkeydown=keydownResponse;
 document.onkeyup=keyupResponse; 
 document.onkeypress=keypressResponse; 

}
// adding the event listner to the document and looking for "init2()" function 
document.addEventListener( "DOMContentLoaded" , init2 , false ) ;