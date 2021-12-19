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
    myfunc("https://jekokiteishvili.github.io/jeko1/ofice.html","https://th.bing.com/th/id/R.5bc6a94ca0114ea56198bccc0a2b0d98?rik=eDteuVFFJ12iYg&pid=ImgRaw&r=0","lorem ipsum lorem ipsum", "text2"); 

    function namravli(val = "weight", count){
        let price = 17.55;
        
        let resul = count * price;
    
        return resul.toFixed();
    }
    console.log(namravli("weight", 18.66))

    function namravli2(val = "hweight", count){
        let price = 17.55;
        
        let resul = count * price;
    
        return resul.toFixed(1);
    }
    console.log(namravli2("weight", 18.66))

    function namravli3(val = "hweight", count){
        let price = 17.55;
        
        let resul = count * price;
    
        return resul.toFixed(2);
    }
    console.log(namravli3("weight", 18.66))

   

        function temp(fahren){
            let cels = (fahren-32) * 5/9;
        
            return cels.toFixed(2);
        }
        let answer = temp(100)
        
        console.log(answer)
        document.getElementById("temp").innerHTML = "<h1>" + answer; + "</h1>";
     