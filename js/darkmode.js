$(function () {
  $('.ball').click(function (e) { 
    e.preventDefault();
    $('body').toggleClass('darkmode')
  
  });


  //append

  $('.apform').submit(function (e) { 
    e.preventDefault();
    let get = $('.inp').val();
   console.log(get)
    $(this).append(`<input type="text" class="inp p-2 mt-2 " value="${get}">
   <button class="btn btn-danger p-2 remove">Remove</button>`)
   
    
    //  $(this).remove()

    
  });

});
