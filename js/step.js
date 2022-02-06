$(function () {
    $('.steps').click(function(){
        $("#stepsec").find('.steps.active').removeClass('active');
        $(this).addClass('active');

        let fin = this.getAttribute('data-fill')

        $('.small.act-p').removeClass('act-p');
        $('.small').eq(fin).addClass('act-p');
    
        $('.forpar.active').removeClass('active');
        $('.forpar').eq(fin).addClass('active');

        $("#stepsec").find('.back').removeClass("d-none")
    })

 
    $(document).on("click", ".move", function(){
         $("#stepsec").find('.back').removeClass("d-none")
         let nxt = this.getAttribute('data-btn')
         console.log(nxt)
             $('.steps.active').removeClass('active');
             $('.steps').eq(nxt).addClass('active');

             $('.small.act-p').removeClass('act-p');
             $('.small').eq(nxt).addClass('act-p');
         
             $('.forpar.active').removeClass('active');
             $('.forpar').eq(nxt).addClass('active');
    })
});