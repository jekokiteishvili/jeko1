let product = {
    weight:"10",
    quantity:"5",
    price:"200 GEL",
    img:"https://th.bing.com/th/id/OIP.Mb6pNN2u0QHgBzBtowMUkQHaHa?pid=ImgDet&rs=1",

    check:function(){
        if(this.quantity == 0){
          return `<span class="badge bg-danger">მარაგი ამოიწურა</span`;
        } 
           return `<span class="badge bg-success">მარაგშია</span`; 
      }
  
    }
  mycard.innerHTML = `<div class="card" ">
  <img src="${product.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.weight}</h5>
    <p class="card-text">${product.price}</p>
    ${product.check()}
  </div>
</div>`

let key = Object.keys(product);
console.log(key);
let val = Object.values(product);
console.log(val);
let all = Object.entries(product);
console.log(all);

product.weight = 20
console.log(product.weight)