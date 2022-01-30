$(function () {
   
    // (document.querySelector('h1')).innerText = "kontentis shecvla"   js

    //  $('h1.mine1').text('kontentis shecvla')  // jq
    // $('h1').html("<p>kontentis shecvla</p>") // p ტეგებში გადაყავს

    // $('h1').click(function(){
    //     $(this).html('kontentis shecvla')
    // })
  
    // $('h1').hover(function(){
    //     $(this).html('kontentis shecvla')
    // }, function(){
    //     $(this).html('kontenti')  // toglis magvari efeqti
    // })
   
    $('h1').click(function(){
        $(this).css({
            "color":"red",
            "padding":"20px",
        }, 1200)
    })


    // $(".hide").click(function () { 
       
    //     $('#green').hide(500, function(){
    //         $('#green').show(700);
    //     });
        
    // });

    // $(".show").click(function () { 
       
    //     $('#green').show(700);
        
    // });
   
    // $(".toggle").click(function () { 
       
    //     $('#green').toggle(700);
    // });

    //ოპასიტით გაქრობა გამოჩენა 

    $(".hide").click(function (e) { 
        $('#green').fadeOut(700);
        
    });

    $(".show").click(function (e) { 
        $('#green').fadeIn(700);
        
    });
    
    // $(".toggle").click(function (e) { 
    //     $('#green').fadeToggle(700);
        
    // });


    // სლაიდისმაგვარი

    // $(".hide").click(function () { 
    //     $('#green').slideUp(700);
        
    // });

    // $(".show").click(function () { 
    //     $('#green').slideDown(700);
        
    // });

    // $(".toggle").click(function () { 
    //     $('#green').slideToggle(700);
        
    // });

    $(".togl").click(function () { 
        $('#text').fadeToggle(700, function(){
           alert('end')
        });
        
    });
//call back უსასრულოდ შეგვიძლია

    // $('.animate').animate({ 
      
    //    "height":"150px",
    //     "width": "400px",
    //    " margin-left":"250px",
    // }, 800, function(){
    //     $('.animate').animate({
    //         "margin-left":"450px"
    //     }, 2000)
    // });

    $('.animateform').slideUp();

    $('.animate p').click(function () { 
        $('.animate p').slideUp()
       $('.animate').animate({
           "height":"450px",
           "width":"350px",
       }, 800, function(){
        $('.animateform').slideDown();
       })
        
    });

    $("animate div").click(function () { 
       
        $('.animateform').slideUp(); 
        $('.animate').animate({
            "height":"50px",
            "width":"50px",
        }, 800, function(){
       
          $('.animate p').slideDown()
        })
    });


});