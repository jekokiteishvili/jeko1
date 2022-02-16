$(function () {
 
      if (localStorage.getItem("mode") == "dark") {
          $("body").addClass("darkmode");
      }else{
          $("body").removeClass("darkmode");
      };

  $(document).on("click", ".ball", function () {
    $("body").toggleClass("darkmode");
    if ($("body")[0].classList.contains("darkmode")) {
      localStorage.setItem("mode", "dark");
    }else{
      localStorage.setItem("mode", "light");
    }
  });
   

fetch('http://127.0.0.1:5500/data.json', {

  method: 'GET',
    
  headers: {
      'Content-Type': 'application/json'
     
    },

}).then(response=> response.json().then(data=>{
     
    data.forEach(element => {
      let div = `
    <div class="col-lg-4">  <div class="card"  >
 <img src="${element.img}" class="card-img-top" alt="...">
 <div class="card-body">
   <h5 class="card-title">${element.name}</h5>
 </div>
</div>
</div>
      `

      document.querySelector('.load').innerHTML += div;

   });
   

}));

let Users  = {
    id:5,
    admin:true,
    pass:"123123",
    username:"itstep",
    token:"jekojeko",
}

let JsonUser = JSON.stringify(Users);

let decode = JSON.parse(JsonUser);

document.querySelector('.myform').onsubmit = function(e){
    e.preventDefault();

let users  = user.value;
let pas  = pass.value;

if (pas === Users.pass && Users.username === users) {
       
    sessionStorage.setItem('token', Users.token);
    window.location.href = "auth/home.html";

 }  else{
     error.innerHTML = "მომხმარებელი ვერ მოიძებნა!"
 }
}

});