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

//   let x = el.clientX
//  let y = el.clientY
//  let ballx = ball.getBoundingClientRect().left;
//  let bally = ball.getBoundingClientRect().top;
//  let ballw = ball.getBoundingClientRect().width;
//  let ballh = ball.getBoundingClientRect().height;

//  let match = y > bally && y < (bally + ballh) && x > bally && x < (ballx + ballw);
 

//  if(match)  {
//   ball.classList.add("green")
//  }else{
//     ball.classList.remove("green")
//  }

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
