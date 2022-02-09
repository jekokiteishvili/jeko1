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

    //praqtika

    $('.absbtn').click(function (e) { 
        e.preventDefault();
        $('body').addClass('backdrop')
        $('.absbtn i').replaceWith('<i class="bi bi-x-lg"></i>');

        $(this).animate({
            "width":"450px",
            "border-radius":"4px"
        }, 800, function(){
            $(this).animate({
            "height":"550px",
            "border-radius":"4px"
            },1000, function(){
                $('.absbtn form').css({
                    "transform": "translateY(10%)",
                    "transition": "all .4s",
                    "opacity":"1"
                })
            })
        })
    });

//     $(document).on('click', function(e){
//       if(e.target.claslist[0] == "backdrop" || e.target.claslist[1] == "bi-x-lg"){
//           $('.absbtn i').replaceWith('<i class="bi bi-pencil-fill"></i>');
//           $('body').removeClass('backdrop');
//           $('.absbtn').animate({
//             "width":"50px",
//             "border-radius":"50%"
//         }, 800, function(){
//             $('.absbtn').animate({
//             "height":"50px",
//             "border-radius":"4px"
//             },1000, function(){
//                 $('.absbtn form').css({
//                     "transform": "translateY(-100%)",
//                     "transition": "all .4s",
//                     "opacity":"0"
//                 })
//             })
//         })
//       }
//     })


// klasebis minicheba 

//let get = $('.smform').html() // mtliani kontenti modis

 $('.smform').submit(function(e){
    e.preventDefault();
    let get = $('.myc').val();

    $('.myc').addClass('mineclass') //კლასის დამატება
    $('.myc').removeClass('mineclass') //კლასის წაშლა
    let checklas = $('.myc').hasClass('mineclass') //აქვს თუ არა ეს კლასი

//     let conf = confirm('დადასტურების შემტხვევაში წაიშლება ინფორმაცია'); //დადასტურება
// if(conf){
//     $(this).empty()
// }


  //$(this).append(`<input type="text" class="myc" value="${get}">`) // ამატებს ახალ ელემენტს ბოლოში
  //  $(this).prepend(`<input type="text" class="myc" value="${get}">`) // ამატებს ახალ ელემენტს  თავში

//   $('.myc').before('<label>asadsfsvsf</label>') //ამატებს ახალ ელემენტს სელექტორის ზევით
//   $('.myc').after('<label>asadsfsvsf2</label>')  //ამატებს ახალ ელემენტს სელექტორის დაბლა

 //   $('.myc').remove()//ელემენტის წაშლა
 //   $(this).empty()// შლის კონტენტს

})


$('.switchs').click(function (e) { 
    e.preventDefault();
    $('.col-lg-4').toggleClass('col-lg-12')
    let text = $(this).text();
    if(text == "list"){
    $(this).text("grid");   
    }
    else{
        $(this).text("list");
    }
});



  //მშობლები
  
  // $("#mycontent").parent().css('background-color', "red"); მშობლის დასელექტება
  //  $("#mycontent").parents(".container"); წინაპრების დასელექტება
 //   $("#mycontent").parentsUntil("body") წინაპრების დასელექტება კონკრეტულ სელექტორამდე
//    $("#mypars").children(".row2") გვისელექტებს შვილობილ ტეგს
// $("#mycontent").next().css('color', 'green') // ქვედა მეზობელი (პირველი)
// $("#mycontent").prev().css('color', 'blue') // ზედა მეზობელი (პირველი)
// $("#mycontent").prevAll().css('color', 'blue') // ზედა მეზობელი (ყველა)
// $("#mycontent").nextAll().css('color', 'green') // ქვედა მეზობელი (ყველა)
//$("#mypars").find('p').css('color', 'red') // ეძებს ელემენტის შიგნით 
//  $(".col-lg-4").filter(function(index){
//     return $(this).text().length > 10
//  }).css('color', 'red') // გვიბრუნებს ელემენტებს გადაცემული პირობის მიხედვით
// $("#mypars .col-lg-4").first().css('color', 'red'); // პირველი ელემენტი
// $("#mypars .col-lg-4").last().css('color', 'red'); //  ბოლო ელემენტი
// $("#mypars .col-lg-4").eq(3).css('color', 'yellow'); // ელემენტი ინდექსით

console.log($("#mypars .col-lg-4").first());



//atributebi

// let src  = $('.formconten img').attr('src')

// $('.formconten img').attr({'src':'img/may.png', 'alt':'ტესტი'}) // 2 ატრიბუტს ვატანთ ერთდროულად

// $('.formconten img').attr('src', function( i, val ) {
//         console.log(i, val)
//      return val + "/img/2";
//       }) //ყველა ელემენტს ანიჭებს იმჯ2ს


//       //ზომები

//     let sizez = $("#stepsec").width( ); // გვიბრუნებს ელემენტის width (content) 
//     let sizez = $("#stepsec").innerWidth( ); // გვიბრუნებს ელემენტის width (padding) 
//     let sizez = $("#stepsec").outerWidth( );  //  გვიბრუნებს ელემენტის width (full) 
//     let sizez = $("#stepsec").scrollTop();
//     console.log(sizez);
//     იგივე გვაქვს heightzec





 });





