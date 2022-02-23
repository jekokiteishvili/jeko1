class User {
    constructor(name, email,  data, style, select){
    this.name = "jeko kiteishvili"
    this.email = "jeko@gmail.com"
   
    this.data = "20/02/2022"
    this.style = style
    this.select= select
    
    }
  

    usercolor(){
    
        for (const styleobj in this.style) {
           
                const val = this.style[styleobj];
                const prop = styleobj;
           document.querySelector(this.select).style[prop] = val;
        }
    
    
      }

      
    
    }
    let user = new User('admin2', "password");
    console.log()
//     document.querySelector('.row').innerText = user;

//     fetch('http://127.0.0.1:5500/data.json', {

//   method: 'GET',
    

// }).then(response=> response.json().then(data=>{
     
//     data.forEach(el => {
//       let User2 = new User(el.img, el.name ,el.email ,el.data )
//       let div = `
//       <div class="col-lg-4">  <div class="card"  >
//       <img src="${el.img}" class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">${el.name}</h5>
//       </div>
//      </div>
//      </div>
//            `

//       document.querySelector('.cards').innerHTML += div;

//    });
// }));