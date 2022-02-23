let myname:string  | number = "admin"; //რამდენი ტიპი შეგვიძლია განვუსაზღროთ
let num:number = 25;
// let myarr:[string, number] = ["123",24 ]
let myarr:any[] = ["123",24 ] //ყველა ტიპზე მუშაობს დაკონკრეტების გარეშე

let obj:{
    name:string,
    age:number,
} = {
    name:"jeko",
    age:27
}



console.log(obj)

interface User {
    role:boolean,
    created_at:any,
    isAdmin?():string,
    age?:number,
}

let Myuser:User = {
    role:true,
    created_at: "2022/02/22",
    isAdmin:function() {
        return "jeko"
    },
    // age:27, ? ნიშნით შეგვიძლია არასავალდებულო გავხადოთ
}

// function start(x:number , y:number):number {
//     return x * y
// }

// console.log(start(5,4))

function start(x:number , y:number, test:User):any {
    return test
};

console.log(start(5,4,  {
    role:true,
    created_at: "2022/02/22",
    isAdmin:function() {
        return "jeko"

 }}))    //ობიექტის გატანება

 function generic<g>(myage:g):g{
     return myage;
 }

 let gen:any = generic<string>("test")

 console.log(gen)

 let form = document.querySelector(".testform")
 let btn = document.querySelector(".btn")
 let input = document.querySelector("#testval")

 btn.addEventListener('click', function(e){
    e.preventDefault();
    let val = input as HTMLInputElement;
    console.log(val.value)
 })