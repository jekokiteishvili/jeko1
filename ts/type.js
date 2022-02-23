var myname = "admin"; //რამდენი ტიპი შეგვიძლია განვუსაზღროთ
var num = 25;
// let myarr:[string, number] = ["123",24 ]
var myarr = ["123", 24]; //ყველა ტიპზე მუშაობს დაკონკრეტების გარეშე
var obj = {
    name: "jeko",
    age: 27
};
console.log(obj);
var Myuser = {
    role: true,
    created_at: "2022/02/22",
    isAdmin: function () {
        return "jeko";
    }
};
// function start(x:number , y:number):number {
//     return x * y
// }
// console.log(start(5,4))
function start(x, y, test) {
    return test;
}
;
console.log(start(5, 4, {
    role: true,
    created_at: "2022/02/22",
    isAdmin: function () {
        return "jeko";
    }
})); //ობიექტის გატანება
function generic(myage) {
    return myage;
}
var gen = generic("test");
console.log(gen);
var form = document.querySelector(".testform");
var btn = document.querySelector(".btn");
var input = document.querySelector("#testval");
btn.addEventListener('click', function (e) {
    e.preventDefault();
    var val = input;
    console.log(val.value);
});
