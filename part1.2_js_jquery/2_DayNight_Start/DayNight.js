//alert("here"); //testing


 $( document ).ready( function() {
    
    $('#orb').click(function(){
        
        if ($(this).hasClass('sun')) {
            $(this).removeClass('sun').addClass('moon');
            $('#sky').removeClass('day').addClass('night');
        } else {
             $(this).removeClass('moon').addClass('sun');
             $('#sky').removeClass('night').addClass('day');
        }
       
    });
    
});

