

$(document).ready(function(){
    
    var cNote = document.getElementById('cAudio');
    var dNote = document.getElementById('dAudio');
    
    $('#c').mousedown(function(){
       cNote.currentTime = 0;
       cNote.play();
    });
    
    $('#d').mousedown(function(){
       dNote.currentTime = 0;
       dNote.play();
    });
    
});