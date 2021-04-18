function Start() {
const todoList = [];
const todoListElement = document.querySelector("#lista-tarefas");
const newTask = document.querySelector("#criar-tarefa");
const delTask = document.getElementById("#remover-finalizados");
newTask.addEventListener("click", addTodo);
delTask.addEventListener("click", deleteItem);

function addTodo() {
  const todoText = document.getElementById("texto-tarefa").value;
  if (todoText == "") { 
  alert("Tarefa não pode estar em Branco");
  } else {
    const todoObject = {
    id: todoList.length,
    todoText: todoText,
    isDone: false,
    };
  todoList.unshift(todoObject);
  displayTodos();
  }
}
function doneTodo(todoId) {
  const selectedTodoIndex = todoList.findIndex((item) => item.id == todoId);
  todoList[selectedTodoIndex].isDone
    ? (todoList[selectedTodoIndex].isDone = false)
    : (todoList[selectedTodoIndex].isDone = true);
  displayTodos();
}

//----TO DELETE AN ITEM; FROM THE LIST
function deleteItem(x) {
  todoList.splice(todoList.findIndex((item) => item.id == x),1);
  displayTodos();
}
//---------DISPLAYING THE ENTERED ITEMS ON THE SCREEN------
function displayTodos() {
  todoListElement.innerHTML = "";
  document.getElementById("texto-tarefa").value = " ";

  todoList.forEach((item) => {
    const listElement = document.createElement("li");
    const delBtn = document.createElement("i");

    listElement.innerHTML = item.todoText;
    listElement.setAttribute("data-id", item.id);

    delBtn.setAttribute("data-id", item.id);

    if (item.isDone) {listElement.classList.add("checked");}
    listElement.addEventListener("click", function (e) {
      const selectedId = e.target.getAttribute("data-id");
      doneTodo(selectedId);});
    delBtn.addEventListener("click", function (e) {
      const delId = e.target.getAttribute("data-id");
      deleteItem(delId);});
    todoListElement.appendChild(listElement);
    listElement.appendChild(delBtn);
  });
}
//---------------------------------------------------------------------------------------------
const todoObjectList = [];
class Todo_Class {
    constructor(item){
        this.olElement = item;
    } 
    add() {
        const todoInput = document.querySelector("texto-tarefa").value;
        if (todoInput == "") {
            alert("A tarefa não pode estar em branco!") 
        } else {
            const todoObject = {
                id : todoObjectList.length,
                todoText : todoInput,
                isDone : false,
            }
        todoObjectList.unshift(todoObject);
        this.display();
        document.querySelector("texto-tarefa").value = '';
        }
    }

    done_undone(x) {
        const selectedTodoIndex = todoObjectList.findIndex((item)=> item.id == x);
        console.log(todoObjectList[selectedTodoIndex].isDone);
        todoObjectList[selectedTodoIndex].isDone == false ? todoObjectList[selectedTodoIndex].isDone = true : todoObjectList[selectedTodoIndex].isDone = false;
        this.display();
    }
    deleteElement(z) {
        const selectedDelIndex = todoObjectList.findIndex((item)=> item.id == z);
        todoObjectList.splice(selectedDelIndex,1);
        this.display();
    }
    display() {
        this.olElement.innerHTML = "";
        todoObjectList.forEach((object_item) => {
            const liElement = document.createElement("li");
            const delBtn = document.createElement("i");
            liElement.innerText = object_item.todoText;
            liElement.setAttribute("data-id", object_item.id);
            delBtn.setAttribute("data-id", object_item.id);
            liElement.appendChild(delBtn);
            delBtn.addEventListener("click", function(e) {
                const deleteId = e.target.getAttribute("data-id");
                myTodoList.deleteElement(deleteId);
            })
            liElement.addEventListener("click", function(e) {
                const selectedId = e.target.getAttribute("data-id");
                myTodoList.done_undone(selectedId);
            })
            if (object_item.isDone) {
                liElement.classList.add("checked");
            }
            this.ulElement.appendChild(liElement);
        })
    }
} 
const listSection = document.querySelector("#lista-tarefas");

myTodoList = new Todo_Class(listSection);

}
  window.onload = Start;
  