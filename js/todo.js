let addtask = document.querySelector('#addtask');
let id = 0

addtask.addEventListener('submit', function(e){
    e.preventDefault();

    let text = document.querySelector('.form-control');
    let sma = document.querySelector('small');
    let type = this.getAttribute('data-type');
    let taskid = this.getAttribute('data-todo');

    let task =
    `<div class="row mb-2 bg-light p-2 text-info" id="del${id}">
    <div class="col-lg-10">
    <p id ="updttext${id}">${text.value}</p>
    </div>
    <div class="col-lg-2">
    <button type="button" data-text="${text.value}" data-id="${id}" class="btn btn-success"><i class="bi bi-pencil-fill"></i></button>
    <button type="button" data-id="${id}" class="btn btn-danger"><i class="bi bi-trash"></i></button>
    </div>
    </div>`

    if(type == "add"){
    text.value = "";
    taskapp.innerHTML += task;
    sma.innerText = `${id + 1} task`
    id ++;  
    }

    
    if(type == "edit"){
        
       document.querySelector('#updttext' + taskid).innerText = text.value; 
       document.querySelector(`button[data-id="${taskid}"]`).setAttribute('data-text',text.value); 
       text.value = "";
       addtask.setAttribute('data-type', 'add');
        }

    let removebtn = document.querySelectorAll('.btn-danger');

    removebtn.forEach(els => {
       let dataid = els.getAttribute('data-id');
       els.addEventListener('click', function(){
          if(document.querySelector('#del' +dataid) !=null){
            document.querySelector('#del' +dataid).remove();
         
           sma.innerText = `${id - 1} task`
           id --; 
        }
       })
    })

    let editbtn = document.querySelectorAll('.btn-success');

    editbtn.forEach(el => {
        let dataid = el.getAttribute('data-id');
        let dataText = el.getAttribute('data-text');
        el.addEventListener('click', function(){
           text.value = dataText
           addtask.setAttribute('data-type', 'edit');
           addtask.setAttribute('data-todo', dataid);
        })
     })

})

function delate(ids){
    document.querySelector('#del' +ids).remove();
}

