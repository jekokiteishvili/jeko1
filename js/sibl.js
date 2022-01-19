let cont = document.querySelectorAll('.w-100');
let home = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestias dolorem mollitia placeat ipsam autem nostrum optio illo dicta, at similique nemo in alias ex praesentium ad facere iure atque.`
let about = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestias dolorem mollitia placeat ipsam autem nostrum optio illo dicta, at similique nemo in alias ex praesentium ad facere iure atque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestias dolorem mollitia placeat ipsam autem nostrum optio illo dicta, at similique nemo in alias ex praesentium ad facere iure atque.`
let contact = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestias dolorem mollitia placeat ipsam autem nostrum optio illo dicta, at similique nemo in alias ex praesentium ad facere iure atque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestias dolorem mollitia placeat ipsam autem nostrum optio illo dicta, at similique nemo in alias ex praesentium ad facere iure atque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestias dolorem mollitia placeat ipsam autem nostrum optio illo dicta, at similique nemo in alias ex praesentium ad facere iure atque.`


cont.forEach(el => {
    el.addEventListener("click", function(){
        let type = this.getAttribute('data-id');
        let active = document.querySelector('.active');
        
        if (type == 1){
            el.parentElement.nextElementSibling.innerText = home;
        }else if (type == 2){
            el.parentElement.nextElementSibling.innerText = about;
        }else{
            el.parentElement.nextElementSibling.innerText = contact;
        } 
       
    });
});

