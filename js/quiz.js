let start = document.querySelector('.startquiz');
let quiz = document.querySelector('.quiz')

start.addEventListener('submit', function(e){
   e.preventDefault();
   let level = document.querySelector('select[name="level"]').value
   start.parentElement.parentElement.parentElement.classList.add('d-none')
   quiz.classList.remove('d-none')
})

let questions = [
    {
       title: `რამდენია 2+2?`,
       answers:[
           "4",
           "5",
       ],
       correct: 0,
       img:"https://static.macupdate.com/screenshots/28024/m/simple-math-screenshot.png?v=1568120637",
    },

    {
        title: `რომელ ფეხბურთელს აქვს ყველაზე მეტი გოლი გატანილი?`,
        answers:[
            "პელე",
            "რონალდუ",
            "მესი",
            "მარადონა",
        ],
        correct: 1,
        img:"https://th.bing.com/th/id/R.3bac3451c185e1e1759a4014f27732c9?rik=Dn6ggdWIgHGq5A&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f1%2f0%2fa%2f856442-beautiful-goal-wallpapers-1920x1280-ipad.jpg&ehk=VFyUvV99SJariqLOdhWN84JuUZMHeH9fNwbBe5IsEaE%3d&risl=&pid=ImgRaw&r=0",
     },

     {
        title: `რამდენია კობი ბრაიანტის საუკეთესო შედეგი ქულებში ერთ კონკრეტულ მატჩში?`,
        answers:[
            "30",
            "65",
            "70",
            "81",
        ],
        correct: 3,
        img:"https://i.ytimg.com/vi/RCDGAAFesK0/maxresdefault.jpg",
     },

     {
        title: `ვის აქვს ყველაზე მეტი ოქროს ბურთი მოგებული?`,
        answers:[
            "პლატინი",
            "რონალდუ",
            "მესი",
            "მარადონა",
        ],
        correct: 2,
        img:"https://th.bing.com/th/id/R.c7121d396649e14ae1742ed4cc2cb113?rik=16bUM%2fpRgRXnPQ&riu=http%3a%2f%2fimg.bfmtv.com%2fc%2f1256%2f708%2f548%2fc1b7eb3fa28d21d140e688b379d84.jpg&ehk=skkc7qri7RDoAOEt%2bDCeWzER5AGthekbQQYSE%2bWPJNw%3d&risl=&pid=ImgRaw&r=0",
     },

     {
        title: `ვის აქვს ყველაზე მეტი საჩემპიონო ბეჭედი NBA-ში?`,
        answers:[
            "ლებრონ ჯეიმსი",
            "მაიკლ ჯორდანი",
            "კობი ბრაიანტი",
            "ბილ რასელი",
        ],
        correct: 3,
        img:"https://static.popsport.com/sites/default/files/styles/article_full_thumb/public/2020-01/cover_30.png?itok=VuRJSdte",
     },

     { 
        title: `ვინ გახდა 2021 წლის formula 1-ის გამარჯვებული`,
        answers:[
            "მაიკლ შუმახერი",
            "ლუის ჰამილტონი",
            "ფერნანდო ალონსო",
            "მაქს ვერსტაპენი",
        ],
        correct: 3,
        img:"https://th.bing.com/th/id/OIP.qO9jLsb94eIHkBWcNgAASAHaE8?pid=ImgDet&rs=1",
     },

     {
        title: `რომელი ქართველი მებრძლია UFC-ში დაუმარცხებელი`,
        answers:[
            "გიგა ჭიკაძე",
            "ილია თოფურია",
            "მერაბ დვალიშვილი",
            "გია სურამელაშვილი",
        ],
        correct: 1,
        img:"https://th.bing.com/th/id/R.3299b14463c6f244f6d9acd6cf977f4d?rik=m%2fEKO1QZI%2bYp2g&pid=ImgRaw&r=0",
     },

    {
        title: `მესი თუ რონალდუ?`,
        answers:[
            "მესი",
            "რონალდუ",
        ],
        correct: 0,
        img:"https://static.papergeek.fr/2017/11/ronaldo-vs-messi.jpg",
     },
]

document.querySelector('.sum').innerText = questions.length

let corransw = 0
let wroansw = 0

questions.forEach((question, index)=>{

    let answers = '';

    question.answers.forEach((ans, id)=>{
      answers += `<div class="col-lg-6"> <p data-id="${index}" class="p-2 ${id == question.correct ? 'correct' : ""} bg-light text-center fw-bold">${ans} </p> </div>`
    })

 let questhtml = `
 <div class="row ansrow ${index == 0 ? 'curentques' : '' }" id="id${index}">
 <div class="col-lg-12">
 <img src="${question.img}" class=" d-block  img-fluid">
 <h5 class="m-4  fst-italic">${question.title}</h5>
 </div>
 ${answers}
 </div>
 `
 document.querySelector('#load').innerHTML += questhtml;

 let answ = document.querySelectorAll('.ansrow p');

 answ.forEach(el=>{
     el.addEventListener('click', function(){
         document.querySelector('.next').removeAttribute('disabled')
         let dataid = this.getAttribute('data-id');
         document.querySelector(`#id${dataid}`).classList.add('point')
         if (this.classList.contains('correct')){
             this.classList.replace('bg-light', 'bg-success');
             corransw++;
             document.querySelector('.corr').innerText = corransw
         }else{
            wroansw++;
            document.querySelector('.wro').innerText = wroansw
            this.classList.replace('bg-light', 'bg-danger');
            document.querySelector(`#id${dataid} .correct`).classList.replace('bg-light', 'bg-success');
         }
     })
 })
})

document.querySelector('.next').addEventListener('click', function(){
    let actviveques = document.querySelector('.curentques');
    let result = document.querySelector('.result')
    actviveques.classList.remove('curentques')
    if ( actviveques.nextElementSibling != null){
        actviveques.nextElementSibling.classList.add('curentques') 
    }else{
        this.remove();
        document.querySelector('#load').innerHTML = next
    }
  
    this.setAttribute('disabled', 'disabled')
})