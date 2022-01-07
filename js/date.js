let blogs = [
    {
        dasaxeleba: "HTML",
        agwera: "saswavlo",
        photo: "https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        dates: new Date('2021/12/9'),
        category:"",
        active: "true",
        views: 157,
    },

    {
        dasaxeleba: "scss",
        agwera: "saswavlo",
        photo: "https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        dates: new Date('2021/11/08') ,
        category:"",
        active: "true",
        views: 390,
    },

    {
        dasaxeleba: "javascript",
        agwera: "saswavlo",
        photo: "https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        dates: new Date(),
        category:"",
        active: "true",
        views: 569,
    },
   
] 

blogs.forEach(element => {

    let time;
    let today = new Date();
    let thisyear = `${today.getFullYear()} ${today.getMonth() +1} ${today.getDate()}` ;
   

    let dro = `${element.dates.getFullYear()} ${element.dates.getMonth() +1} ${element.dates.getDate()}` ;
    console.log(dro == thisyear)
    if (dro == thisyear) {
        time =`<span class="badge bg-success">დამატებულია დღეს</span>`;
    }else {
         time = `<span class="badge bg-primary"> ${dro} </span>`;
    }

    card.innerHTML += `
       <div class="col-lg-4 mb-3"  <div class="card">
        <img src="${element.photo}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.dasaxeleba}</h5>
          <p class="card-text">${element.agwera}</p>
          <p class="card-text">${element.active}</p>
          <p class="card-text">${element.views}</p>
          ${time}
        </div>
        </div>
        </div>
       `

});
