$(function () {
  $('.ball').click(function (e) { 
    e.preventDefault();
    $('body').toggleClass('darkmode')
  
  });


  //append

  let sp = 0;
  $(".add").click(function (e) { 
    let vals = $('#curvalue').val();
    e.preventDefault();
    $('.inptuts').prepend(`<div class="row" id="rem${sp}">
    <div class="col-lg-6">
<input type="text" value="${vals}" class="form-control" >
    </div> 
    <div class="col-lg-6">
<button class="btn btn-danger remove" data-id="${sp}">წაშლა</button>
    </div> 
  </div>`);

  sp++;
  });


  $(document).on('click', '.remove', function(){
    let id = this.getAttribute('data-id');
    $('#rem'+id).remove();
  })
   
  let msg = "ბეჭვდის ეფექტი";


 
  let index = 0;
  setInterval(()=>{

    if (index < msg.length) {
       $('.tetx').append(`<span class="transi">${msg[index]}</span>`)
    }

    index++;
  }, 200)


  

    
 
  

     

    
    });
