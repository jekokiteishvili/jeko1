let fruit = [" apple ", " banana ", " strawberry ", " watermrlon "]
fruit.push("melons")
fruit.unshift("peach")
fruit.pop()
fruit.shift()
fruit.splice(3, 1, "orange")

let find = fruit.some(el =>{
    return el == "apple"
})

let finds = fruit.every(el =>{
    return el => 1
})
console.log(fruit)
console.log(find)
console.log(finds)

document.getElementById("text").innerHTML ="<h1>" + fruit; + "</h1>"

let auto = ["Ford", "Mustang", 5.4, ["V6", "V8"], {variant:"boss 302", variant2:"Shelby", variant3:"Saalen", year:["2018 , 2022"]}];

let years = auto[4].year[0].split(" ")

let text = auto[0] + " " + auto[1] + " გამოდის " + auto[2] + " " + auto[3][1]  + " ტიპის ძრავით, ასევე მისი მოდიფიკაციებია "  + auto[4].variant + " , " + auto[4].variant2 + " საუკეთესო მოდელები გამოდიოდა " + years[0] + " დან "  + (years[2] - 1 ) + " წლამდე.";

console.log(text)

document.getElementById("ford").innerHTML = text;



//მეორე დავალება

let students = [
    {
        name:"giorgi",
        avatar:"https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        age:20,
        registration:"2020/09/22",
        curse:"პროგრამირება",
        Attendance:100,
        stipendia:true,
    },

    {
        name:"levani",
        avatar:"https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        age:22,
        registration:"2020/09/22",
        curse:"იურიდიული",
        Attendance:100,
        stipendia:true,
    },

    {
        name:"lasha",
        avatar:"https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        age:25,
        registration:"2020/09/22",
        curse:"ბიზნესი",
        Attendance:90,
        stipendia:false,
    },

    {
        name:"giorgi",
        avatar:"https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        age:28,
        registration:"2020/09/22",
        curse:"პროგრამირება",
        Attendance:70,
        stipendia:true,
    },

    {
        name:"nika",
        avatar:"https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        age:26,
        registration:"2020/09/22",
        curse:"პროგრამირება",
        Attendance:100,
        stipendia:false,
    },

    {
        name:"luka",
        avatar: "https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        age:22,
        registration:"2020/09/22",
        curse:"ტურიზმი",
        Attendance:100,
        stipendia:true,
    },

    {
        name:"giorgi",
        avatar:"https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        age:20,
        registration:"2020/09/22",
        curse: "ინჟინერია",
        Attendance:100,
        stipendia: true,
    },

    {
        name:"dachi",
        avatar: "https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        age:19,
        registration:"2020/09/22",
        curse:"პროგრამირება",
        Attendance:100,
        stipendia:false,
    },

    {
        name:"temo",
        avatar:"https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        age:22,
        registration:"2020/09/22",
        curse:"არქიტექტურა",
        Attendance:80,
        stipendia:false,
    },

    {
        name:"giorgi",
        avatar:"https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        age:22,
        registration:"2020/09/22",
        curse:"პროგრამირება",
        Attendance:100,
        stipendia:false,
    },
]


function changedval(id){
    studentcard.innerHTML = '';
    let studentsfilter;
    if (id == 1){
        studentsfilter = students.filter(el =>{
            return el.age == 22;
        }) 
    }
     if(id == 2){
        studentsfilter = students.filter(el =>{
            return el.registration == "2020/09/22";
        }) 
    }
    if(id == 3){
        studentsfilter = students.filter(el =>{
            return el.curse == "პროგრამირება";
        }) 
    }
    if(id == 4){
        studentsfilter = students.filter(el =>{
            return el.Attendance == 100;
        }) 
    }
    if(id == 5){
        studentsfilter = students.filter(el =>{
            return el.stipendia == true;
        }) 
    }

    filterdata(studentsfilter);
}

function search (text){
    studentcard.innerHTML = '';
    let studentsfilter;

    studentsfilter = students.filter(el =>{
        return !el.name.search(text)
    })

    document.getElementById("filt").innerHTML = `მოიძებნა ${studentsfilter.length}ჩანაწერი`
    filterdata(studentsfilter);
}

function filterdata(studentsfilter){
    studentsfilter.forEach(element =>{
        let role;
        if (element.stipendia) {
           role = `<span class="badge bg-success">სტიპენდიანტი</span>`;
        }else{
           role = `<span class="badge bg-danger">არა სტიპენდიანტი</span>`;
        }
        if (element.Attendance == 100){
        atend = `<span class="badge bg-primary">წარმატებული</span>`;
    }else{
       atend = `<span class="badge bg-secondary"></span>`;
    }
        studentcard.innerHTML += `
       <div class="col-lg-3 mb-3"  <div class="card">
        <img src="${element.avatar}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">${element.age}</p>
          <p class="card-text">${element.registration}</p>
          <p class="card-text">${element.curse}</p>
          ${role}
          ${atend}
        </div>
        </div>
        </div>
       `
    })
}