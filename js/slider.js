let ball = document.querySelector(".ball")


document.addEventListener('click', function(el){
 
  let ball = document.querySelector(".ball")
  let pos = el.target
  
  if(pos == ball){
      ball.classList.add('green');
  }else{
    ball.classList.remove("green")
  }
  
})
 
// document.addEventListener('click', function(el){
//  let pos = document.querySelector('.ball').getBoundingClientRect();
//  let x = el.clientX
//  let y = el.clientY

//  if(x == pos || y == pos)  {
//   ball.classList.add("green")
//  }else{
//     ball.classList.remove("green")
//  }

// console.log(x == pos || y == pos)

// })



let nav = document.querySelector(".mynav");

document.addEventListener('scroll', function(){
    let scry = window.scrollY;
    console.log(scry);
    if(scry >= 390){
        nav.classList.add("active")
    }else{
        nav.classList.remove("active");
    }
})
