let decr = document.querySelector("#decr");
let reset = document.querySelector("#reset");
let incr = document.querySelector("#incr");




decr.addEventListener("click", function(){
  
    let numb = document.querySelector("#num");
    numb.innerText --;
    if (numb.innerText < 0){
        numb.classList.add('text-danger');
    }
    
})

incr.addEventListener("click", function(){
    let numb = document.querySelector("#num");
    numb.innerText ++;
  if (numb.innerText > 0){
      numb.classList.add('text-success');
  }
})

reset.addEventListener("click", function(){
    let numb = document.querySelector("#num");
    numb.innerText = 0;
})




let menuopen = document.querySelector('.mybtn');
let menucontent = document.querySelector('.drop');
let closes = document.querySelector('.mybtn2')

menuopen.addEventListener("click", function(){
     menucontent.classList.toggle("show");
    

     if (menuopen.innerText == "open"){
        menuopen.innerText = "close"
      }else{
        menuopen.innerText = "open"
      }

    });

    // closes.addEventListener("click", function(){
    //     modalcontent.classList.remove("show")
    //   })

