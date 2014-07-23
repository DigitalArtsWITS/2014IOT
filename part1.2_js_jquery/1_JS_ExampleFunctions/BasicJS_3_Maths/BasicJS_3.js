var floatEx = 2.5;
var intEx = 2;

//function that generates a random number
function randomFunction()
{
    var demo1 = document.getElementById("demo1") ;
    // generates value between 0 & 1, we multipy this by 10
    var myFloat = Math.random() * 10;
    demo1.innerHTML = "raw float: " + myFloat
    
    // this is a float so we truncate it
    + "<br>Ceiling: " +Math.ceil( myFloat ) 
    + "<br>Floor: " + Math.floor( myFloat ) 
    + "<br>Round+: " + Math.round( myFloat ) 
    + "<br>Round-: " + Math.round( -myFloat ) ;
    
}

function mathFunction()
{
 var demo2 = document.getElementById( "demo2" ) ;
 var sq = Math.pow( floatEx , intEx ) ; // 5 to the power 2 (5x5).
 var cb = Math.pow( 4 , 3 ) ; // 4 to the power 3 (4x4x4).
 demo2.innerHTML = "Largest Positive: " + Math.max( sq , cb ) ;
 demo2.innerHTML += "<br>Smallest Positive: " + Math.min( sq , cb ) ;
}
document.addEventListener( "DOMContentLoaded" , mathFunction , false ) ;


//function that adds or subtracts a value
function basicsum(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }
    
    document.getElementById('qty').value = new_qty;
    return new_qty;
}
