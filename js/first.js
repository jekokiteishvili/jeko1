// let mycolor = "green";

// document.getElementById("output").innerHTML = "<h1>" + mycolor; + "</h1>";

// console.log(mycolor)



let undfinde = undefined;

let numb = 55; 

let string = "I am string";

let array = [1, 2, 3, "jeko"];

let object = {
    saxeli: "jeko",
    gvari: "kiteishvili",
   
};

let bool = true;
let bool2 = false;

let funct = function () {};

console.log(10 == 10)

console.log(typeof(bool));



document.getElementById("text").innerHTML ="<h1>" + string; + "</h1>"



//stringebi

let mystring = "მე ვსწავლობ front-end web პროგრამირებას"

console.log(mystring.length) // სიმბოლოების რაოდენობა
console.log(mystring.slice(2, 11))  //ამოჭრა
console.log(mystring.search("front-end")) //ეძებს სტრინგში არსებულ სიტყვა/სიმბოლოებს
console.log(mystring.includes("web")) //სტრინგში არის თუ არა ეს სიტყვა/სიმბოლო
console.log(mystring.startsWith("web")) //სტრინგი იწყება თუ არა ამ სიტყვით
console.log(mystring.replace("front-end","back-end")) //ჩანაცვლება პირველი სიტყვების/სიმბოლოების
console.log(mystring.replaceAll("front-end","back-end")) //ჩანაცვლება ყველა სიტყვების/სიმბოლოების
console.log(mystring.toUpperCase()) //სტრინგი დიდი ასოებით 
console.log(mystring.trim().length) //შლის სიცარიელეებს დასაწყისში და დასასრულში 
//სტრინგისგან ვქმნით მასივს
let myarray = mystring.split(" ");
console.log(myarray) 

//ცვლადის გატანება ტემპლეიტ სინტაქსით
let name = "ჯეკო";
let myname = `მე მქვია ${name}`
// document.getElementById("string").innerHTML = myname

//numbers

//ციფრის დამგვალება 2ვალუტა  3წონა
let price = 5.30;
let weight = 1.600;
let num = price * weight 
console.log(num.toFixed(2)); 

//let sum = number(price) + number(weight); //სტრინგი გადაყავს ნამბერში


//ფუნქციები

//ფუნქციის შექმნა გამოძხება
// function myfunc(){
//     let url = "https://jekokiteishvili.github.io/jeko1/ofice.html";
// let img = "../img/R.jpg"
// let text = "Some quick example text to build on the card title and make up the bulk of the card's content."
// let myname = `<div class = "col-lg-4" <div class="card">
// <img src="${img}" class="card-img-top" alt="...">
// <div class="card-body">
//   <h5 class="card-title">Card title</h5>
//   <p class="card-text">${text}</p>
//   <a href="${url}" class="btn btn-primary">Go somewhere</a>
// </div>
// </div>
// </div>`
// document.getElementById("text").innerHTML = myname
// }

// myfunc();  

//ფუნქციის გამოყენება კოდის დაზოგვა
function myfunc(url, img, text, selector){
let myname = `<div class = "col-lg-4" <div class="card">
<img src="${img}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">${text}</p>
  <a href="${url}" class="btn btn-primary">Go somewhere</a>
</div>
</div>
</div>`
document.getElementById(selector).innerHTML = myname
}

myfunc("https://jekokiteishvili.github.io/jeko1/ofice.html","../img/R.jpg","Some quick example text to build on the card title and make up the bulk of the card's content.", "text"); 
myfunc("https://jekokiteishvili.github.io/jeko1/ofice.html","../img/image.png","lorem ipsum lorem ipsum", "text2"); 

//

function convertor(val = "GEL", count){
    let USD = 3.150;
    
    let resul = count / USD;

    return resul.toFixed(3);
}

console.log(convertor("GEL", 25))

// function convertor(val = "USD", count){
//     let USD = 3.150;
//     let EUR = 3.50
//     let resul;

//     if(val == "USD"){
//       resul = count / USD; 
//     }

//     if(val == "EUR"){
//       resul = count / EUR; 
//      }

//     return resul.toFixed(2), val;
// }

// console.log(convertor("USD", 25))



//obieqtebi

// let user = {
//   name:"admin",
//   email:"admin@info.ge",
//   role:1,
// }
// console.log(user.name);


let user = {
  name:"admin",
  img:"https://clipground.com/images/admin-logo-3.png",
  email:"admin@info.ge",
  role:1,
  checkadmin:function(){
    if(this.role == 1){
      return true;
    }
    return false;
  },
}

user.role = 2; //ფროფერთის შეცვლა

 let key = Object.keys(user); //მარცხენა მხარის ანუ ფროფერთების დაბეწდვა
let val = Object.values(user); //მარჯვენა მხარე ანუ მნიშვნელობეის დაბეჭდვა
let all = Object.entries(user);//ყველასი ერთად დაბეჭდვა
console.log(all);
console.log(key,val);//მარცხენა მარჯვენა
console.log(user);
console.log(user.checkadmin());
console.log(user.role)

// let user = {
//   name:"admin",
//   email:"admin@info.ge",
//   role:1,
// }
// console.log(user.name);


//მასივებიი

let number = [1,2,3,4,5]
number.push("new member")//მასივში ახალი ელემენტის ჩამატება ბოლოში
number.unshift("new member")//მასივში ახალი ელემენტის ჩამატება თავში
number.pop() //ბოლო ელემენტი წაშლა
number.shift()//პირველი ელემენტის წაშლა
//number.splice(3, 1) //წაშლა, პირველი პარამეტრი რამდენი დატოვოს მეორე რამდენი მოჭრას
number.splice(3, 1 ,20) // დატოვებს პირველ სამს წაშლის მეოთხეს და ჩსვამს 20ს
number.sort() //სორტირება
number.reverse() //შებრუნებული სორტირება
console.log(number) 

//ზრდადობის მიხედვით სწორად დალაგება
let arstr = number.sort(mysort)
function mysort(a, b){
  return a - b
}
console.log(arstr)

//ეძებს პირველ ელემენტს გადაცემული პირობის მიხედვით
// let findel = number.find(el =>{
//   return el > 2
// })
// console.log(findel)

//ეძებს ელემენტებს გადაცემული პირობის მიხედვით, ქმნის ახალ მასივს
// let findel = number.filter(el =>{
//   return el == "2"
// })
// console.log(findel)

//თუ რომელიმე წევრი აკმაყოფილებს პირობას
// let findel = number.some(el =>{
//   return el == "2"
// })
// console.log(findel)

//თუ ყველა წევრი აკმაყოფილებს პირობას
let findel = number.every(el =>{
  return el == "2"
})
console.log(findel)

// console.log(number[0])//პირველი ელემენტის გამოძახება

//array methods

number.forEach(el =>{
  console.log(el == 0);
})

number.map(el =>{
  console.log(el * 2);
})

for (let i = 0; i < array.length; i++) {
  
  console.log(number[i])
}



//პრაქტიკა

let Users = [
  {
    name: "admin",
    email: "admin@gmail.com",
    isAdmin: true,
    phone: 555203040,
    avatar: "img/Layer 8.png",
    age: 25
  },

  {
    name: "admin2",
    email: "admin@gmail.com",
    isAdmin: false,
    phone: 555203040,
    avatar: "img/Layer 8.png",
    age: 35
  },

  {
    name: "admin3",
    email: "admin@gmail.com",
    isAdmin: true,
    phone: 555203040,
    avatar: "img/Layer 8.png",
    age: 75
  },

  {
    name: "admin4",
    email: "admin@gmail.com",
    isAdmin: false,
    phone: 555203040,
    avatar: "img/Layer 8.png",
    age: 45
  },
]





  function changedval(id){
    admincard.innerHTML = '';
    let Userfilter;
    if (id==1) {
      Userfilter = Users.filter(el =>{
        return el.isAdmin == true
      })
    }else if(id == 2){
      Userfilter = Users.filter(el =>{
        return el.isAdmin == false
      })
    }else{
      Userfilter == Users;
    }

    function search(text){
      admincard.innerHTML = '';
      let Userfilter;

      Userfilter = Users.filter(el =>{
        return !el.name.search (text)
      })
    }

    Userfilter.forEach(element => {
  let role;
  if (element.isAdmin) {
     role = `<span class="badge bg-success">ადმინ</span`;
  }else{
     role = `<span class="badge bg-danger">მომხმარებელი</span`;
  }

admincard.innerHTML += `
   <div class="col-lg-4 mb-3"  <div class="card">
    <img src="${element.avatar}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">${element.age}</p>
      <a href="" class="btn btn-primary">${element.phone}</a>
      ${role}
    </div>
    </div>
    </div>
   `
});

  }



  //date


  let d = new Date();
  // let day = d.getDay();
  // let month = d.getMonth() + 1;
  // let year = d.getFullYear()

  let startdata = Date.parse('2021/12/20') - Date.parse('2021/12/1');

  let day = startdata / (1000*60*60*24);

  console.log(day)

  setInterval(() => {
    let d = new Date();
    years.innerHTML = d.getFullYear() +"/";
    month.innerHTML = d.getMonth() + 1 +"/";
    day.innerHTML = d.getDate() +"/";
    hour.innerHTML = d.getHours() +"/";
    minute.innerHTML = d.getMinutes() +"/";
    second.innerHTML = d.getSeconds();

  }, 1000);



 //


  