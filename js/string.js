let url = "https://jekokiteishvili.github.io/jeko1/ofice.html";
let img = "https://pixy.org/src/20/201310.jpg"
let text = "Some quick example text to build on the card title and make up the bulk of the card's content."
let myname = `<div class = "col-lg-4" <div class="card">
<img src="${img}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">${text}</p>
  <a href="${url}" class="btn btn-primary">Go somewhere</a>
</div>
</div>
</div>`
document.getElementById("text").innerHTML = myname


let mystring = "მე ვსწავლობ front-end web პროგრამირებას"

console.log(mystring.slice(12, -18));

console.log(mystring.search("front-end"));

console.log(mystring.includes("web"));

console.log(mystring.startsWith("web"));

console.log(mystring.replace("front-end","back-end"));

console.log(mystring.toUpperCase());

console.log(mystring.trim().length);

let array = mystring.split(" ");
console.log(array);


