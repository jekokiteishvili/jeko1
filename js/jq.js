$(function () {
    $('.body').slideUp();

    $('.open').click(function () { 
        $('.open').slideUp()
       $('.animate').animate({
           "height":"650px",
           "width":"100%",
       }, 800, function(){
        $('.body').slideDown();
       })
        
    });

    $('.closed').click(function () { 
        $('.body').slideUp(); 
        $('.animate').animate({
            "height":"",
            "width":"",
        }, 800, function(){
       
          $('.open').slideDown()
        })
    });
        
    });
