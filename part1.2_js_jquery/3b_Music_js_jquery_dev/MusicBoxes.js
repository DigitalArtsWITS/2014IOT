//alert("here"); //testing

$(document).ready(function() {
    var cNote = document.getElementById('cAudio');
    
    $('#c').mousedown(function(){
    cNote.currentTime = 0;
    cNote.play();
    });
});

