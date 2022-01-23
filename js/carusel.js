let left = document.querySelector('.arr.left');
let right = document.querySelector('.arr.right');
let allslider = document.querySelectorAll('.item');

// შემდეგი სლაიდი
right.addEventListener('click', function(){

    let allswitchs = document.querySelectorAll('.slswith');
    let activeswit = document.querySelector('.slswith.active');

    let active = document.querySelector('.item.active');
    active.classList.remove('active');
    activeswit.classList.remove('active');
    if (active.nextElementSibling !== null) {
        active.nextElementSibling.classList.add('active');
        activeswit.nextElementSibling.classList.add('active')
    }else{
        allslider[0].classList.add('active');
        allswitchs[0].classList.add('active')
    }

})

// წინა სლაიდი
left.addEventListener('click', function(){
    let active = document.querySelector('.item.active');
    active.classList.remove('active');
    if (active.previousElementSibling !== null) {
        active.previousElementSibling.classList.add('active');
    }else{
        allslider[allslider.length -1].classList.add('active')
    }

})

allslider.forEach((switcher, index)=>{
  let swis = document.createElement('span');
  index == 0 ? swis.classList.add('slswith' , 'active') :  swis.classList.add('slswith')
  swis.setAttribute('data-index', index);
  document.querySelector('.switchers').appendChild(swis);


  let switchs = document.querySelectorAll('.slswith');
  switchs.forEach(sws=>{
    sws.addEventListener('click', function(){
        let active = document.querySelector('.item.active');
        document.querySelector('.slswith.active').classList.remove('active');
        this.classList.add('active')
        let dataindex = this.getAttribute('data-index');
        active.classList.remove('active');
        allslider[dataindex].classList.add('active');
    })
  })

})