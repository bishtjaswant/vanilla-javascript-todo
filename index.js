document.addEventListener("DOMContentLoaded", dom)

function dom(e) {
    document.getElementById('addbtn').addEventListener('click', function (e) {
        e.preventDefault();
        let input = document.getElementById("task");
        if (input.value != '') {

            addTodo(input.value);
            input.value = '';
        } else {
            alert('task value can not be empty');
        }
    })
}


function  addTodo(value){ 
    let ul= document.querySelector("ul");
      let li=  document.createElement('li');
      li.innerHTML=`
      <span class="todoitemclass">${value}</span>
      <button name="check" class="actionbtn"   > <i   class="fas fa-check-square"></i> </button>
      <button name="delete" class="actionbtn"   > <i  class="fas fa-trash"></i> </button>
      `;
       li.classList.add('listitemadd');
      ul.appendChild(li)
 }


document.querySelector("ul").addEventListener('click', eventHandlerCheckOrDelete);


function eventHandlerCheckOrDelete(e) {
    if(e.target.name=='check'){
        let pare =  e.target.parentNode;
        if ( pare.style.textDecoration=="line-through") {
            pare.style.textDecoration='none';
        } else {
            pare.style.textDecoration="line-through"
        }
    }
    if(e.target.name=='delete'){
        let pare = e.target.parentNode;
        pare.remove(); 
      
    }
    
}



















/*
function addTodo(value) {
    console.log('value-',value);
    // add toto to ls
    let todos = localStorage.getItem('todos');
    if (todos == null) {
        todosobj = [];
    } else {
        todosobj = JSON.parse(todos);
    }

    todosobj.push(value);
    localStorage.setItem("todos", JSON.stringify(todosobj));
    //alert("Todo added")

    // get toto from lc and  render toddo to DOM
    getAndRender();;
}

getAndRender();
function getAndRender() {
    let todosList = localStorage.getItem('todos');
        if(todosList !=null){
           let list= JSON.parse(localStorage.todos);
            let ul =  document.querySelector('ul');
           list.forEach(element => {
            let li= document.createElement('li');
            li.className='listitem';
            li.innerText= element;
            ul.appendChild(li);
           });
        }
}*/