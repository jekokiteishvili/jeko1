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

    $('.switchs').click(function (e) { 
        e.preventDefault();
        $('.col-lg-4').toggleClass('col-lg-12'),
        $('.col-lg-1').toggleClass('col-lg-4')
    
        $('.a1').toggleClass('d-none');
        $('.a2').toggleClass('d-none');
    });
    
    
    })
        
    });


