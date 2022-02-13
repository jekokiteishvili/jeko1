
        $('.nav-link').click(function(e){
            e.preventDefault();
            let page = $(this).attr('href')
    
         $("#load").load(page)
      
        })

        $(document).on("click", "#home", function () {

            $.ajax({
                type: "Get",
                url: "http://127.0.0.1:5500/data.json",
                data: "data",
                dataType: "text",
                success: function (response) {
                   let date  = JSON.parse(response);
                   
                   for (const blog of date) {
                         let card = `
                         <div class="col-lg-4">
                         <div class="card">
          <img src="${blog.img}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">${blog.name}</p>
          </div>
        </div>
        </div>
                         `     
                         $("#load").prepend(card);
                   }
                }
            });
});
        $(document).on("click", ".drop", function () {
            $(".ul").toggleClass("dropped");
            $(".bi-caret-down-fill").toggleClass("bi-caret-up-fill");
        });
        $(".items").click(function (e) { 
            e.preventDefault();
            let html = $(this).html();
            console.log(html)
            $(".newli").removeClass('newli');
            $(this).addClass("newli");
            $(".drop").html(html);
            $(".drop").addClass("newbtn");
            $('.ul').removeClass("dropped");
        });


        