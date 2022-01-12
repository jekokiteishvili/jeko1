let toggl = document.querySelector('#basic-addon1');
let togglinp = document.querySelector('#myinp');
let icon = document.querySelector('.bi');
let sma = document.querySelector('small');
let spa = document.querySelector('span');

toggl.addEventListener('click', function(){

    if(icon.classList[1] == "bi-eye-slash-fill"){
        icon.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
    }else{
        icon.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    }

    if (togglinp.type =="password") {
        togglinp.type = 'text'
    }else{
        togglinp.type = 'password'
    }

})


togglinp.addEventListener('keyup', function(){

  let values = this.value;
  sma.removeAttribute('class')
  spa.removeAttribute('class')
  

  if(values == ''){
     sma.innerText = 'ველის შევსება სავალდებულოა!'
     sma.classList.add('text-warning');
  }else if(values.length > 0 && values.length < 8){
    sma.innerText = 'min. 8 characters with at last one capital letter, a number and a cpecial character'
    sma.classList.add('text-danger');
    spa.classList.add('text-danger');
   
    
   
  }else{
    sma.innerText = 'your password passed!'
    sma.classList.add( 'text-primary');
    spa.classList.add( 'text-primary');
    
  }
})



//meore davaleba


let circl = document.querySelectorAll('.circle');

let color;

let body = document.querySelector("body");
circl.forEach(el =>{
    el.addEventListener("click", function(){
        color = el.style.backgroundColor;
        body.style.backgroundColor = color
        
    });
})

