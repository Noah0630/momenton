const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
function filterFn(toDo) {
    return toDo.id ===1
}

let toDos = [];

function deleteTODO(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
        
    });
}

toDos = cleanToDos
saveToDos();

function  saveToDos() {
    localStorage.setItem(TODOS_LS, JSON, stringfy(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBnt = document.createElement("button");
    const span = document.createElement("span");
    const nweId = toDos.length +1;
    delBnt.value = "❌";
    delBnt.addEventListener(click,deleteTODO);
    span.innerText = text;
    li.appendChild(delBnt);
    li.appendChild(span);
    toDoList.appendChild(li);
    const toDobj= {
        text = text,
        id = newId
    };
    toDos.push(toDobj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach (function(toDo) {
            paintToDo(toDo.text);
        })

    } else {

        }
    }
    
    function init() {
        loadedToDos();
        toDoForm.addEventListener("submit,handleSubmit");
    }

init();