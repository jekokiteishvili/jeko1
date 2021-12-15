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
document.getElementById("string").innerHTML = myname

