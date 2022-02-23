let myArr:number[] = [5, 18, 30,]

interface int {
    role:boolean,
    name:string,
    favsport:string[],
    Age:number,
    isAdmin?():any,
}

let Myint:int = {
    role:true,
    name:"jeko kiteishvili",
    favsport: [
        ` Football`,
        ` Basketball`,
        ` Formula1`,
        ` Tennis`
    ],
    Age:27,
    isAdmin:function() {
        let admin:any;
            admin =   `<span class="badge bg-success">${Myint.name} is Admin</span>`
        return admin;
        }
}


let card:string = `<div class="col-lg-4 mx-auto mt-5">
<div class="card rounded shadow">
<div class="card-body">
  <h5 class="card-title"> ${Myint.name}</h5>
  <h6 class="card-subtitle mb-2 text-muted"> ${Myint.Age}</h6>
  <p class="card-text">${Myint.favsport}</p>
  ${Myint.isAdmin()}
</div>
</div>
</div>`
let row = document.querySelector(".row") as HTMLElement;
row.innerHTML = card;
