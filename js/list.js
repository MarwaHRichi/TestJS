const todoInput = document.getElementById("todoinput");
const todobutton = document.getElementById("todo-button");
const todoliste = document.getElementById("todo-list");


todobutton.addEventListener("click",addTodo);
//todoliste.addEventListener("click",editConfirm);
todoliste.addEventListener("click",DeleteItem); 
todoliste.addEventListener("click",EditItem); 

function addTodo(e) {
    e.preventDefault();
    //div
    const adddiv = document.createElement("div");
    adddiv.classList.add("todo");
    adddiv.setAttribute("id",todoInput.value);

    //li
    const newtodo = document.createElement("li");
    newtodo.innerHTML =todoInput.value;
    newtodo.classList.add("add-item");
    newtodo.style.listStyleType ="none";
    adddiv.appendChild(newtodo);

   ///button check /////////////////
    const CheckButton = document.createElement("button");
    CheckButton.innerHTML = '<i class="fas fa-check"></i>';
    CheckButton.classList.add("check-btn");
    adddiv.appendChild(CheckButton);

    //////////Button Remove///////////////
    const RemoveButton = document.createElement("button");
    RemoveButton.innerHTML = '<i class="far fa-trash-alt"></i>';
    RemoveButton.classList.add("remove-btn");
    adddiv.appendChild(RemoveButton);

//////////Button Edit////////////////////
    const editButton = document.createElement("button");
    editButton.innerHTML = '<i class="far fa-edit"></i>';
    editButton.classList.add("edit-btn");
    adddiv.appendChild(editButton);
    
   
    todoliste.appendChild(adddiv);

    const taches = JSON.parse(localStorage.getItem("taches"))||[];
    //console.log(todoInput);
      taches.push ({
         todoliste : todoInput.value,   
      });
      localStorage.setItem("taches", JSON.stringify(taches));
      todoInput.value = "";
      return {todoliste}   
}
////////////Confirmation de la modification///////////////

/*function editConfirm(event) {
   event.preventDefault();
   const item = event.target;
   const tododiv = item.parentElement;
   let taches = JSON.parse(localStorage.getItem("taches"))||[];
   taches.map(todo => {
      if (todo.todoliste == tododiv.parentNode.id) {
        todo.todoliste = todoInput.value;
      }
    });
    localStorage.setItem("taches", JSON.stringify(taches));
   }*/
    
/////////////Edit Item/////////////////////
function EditItem(e){
  e.preventDefault();
  const item = e.target;
 const tododiv = item.parentElement;
 item.classList.contains("edit");
  //let index
  let taches = JSON.parse(localStorage.getItem("taches"))||[];
  index = taches.indexOf(tododiv.parentNode.id);
  //index = todoliste.indexOf(tododiv.parentNode.id);
   todoInput.value = tododiv.previousElementSibling.innerText;
    //todoInput.value = tododiv.previousElementSibling;
    localStorage.setItem("taches", JSON.stringify(taches));
}



///////////DeleteItem///////////////
function DeleteItem(ev) {
   ev.preventDefault();
   const item = ev.target;
  const tododiv = item.parentElement;
      // console.log(tododiv.id);
   let taches = JSON.parse(localStorage.getItem("taches"))||[];
   taches = taches.filter(todo => todo.todoliste != tododiv.parentNode.id);
       tododiv.parentNode.remove();
       localStorage.setItem("taches", JSON.stringify(taches));  
}

