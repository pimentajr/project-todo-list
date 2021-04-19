function Start() {
const newTask = document.getElementById("criar-tarefa");
const delTask = document.getElementById("remover-finalizados");
const delAll = document.getElementById("apaga-tudo");
delAll.addEventListener("click", delAll);
newTask.addEventListener("click", addTodo);
delTask.addEventListener("click", deleteItem);
}

function addTodo() {
  const inputText = document.getElementById('texto-tarefa').value;
  if (!inputText) {
    alert("Não pode estar em branco!");
    return;
  }
  const listTodo = document.getElementById('lista-tarefas');
  const newLi = document.createElement('li');
  newLi.innerText = inputText;

  newLi.addEventListener('click', (Event) => {
    const arrayLi = document.getElementsByTagName('li');
    for (let index = 0; index < arrayLi.length; index += 1) {
      arrayLi[index].classList.remove('selected');
    }
    Event.target.classList.add('selected');
  });

  newLi.addEventListener('dblclick', function(event){
    const isCompleted = Event.target.classList.contains('completed');
    if (isCompleted) {
      Event.target.classList.remove('completed');
    } else {
      Event.target.classList.add('completed');
    }
  });

  listTodo.appendChild(newLi);
  document.getElementById('texto-tarefa').value = '';
}

function delAll() {
  const olList = document.getElementById('lista-tarefas');
  olList.innerHTML = "";
}

function deleteItem() {
  const finished = document.getElementsByClassName('completed');
  const ol = document.getElementById('lista-tarefas');
  while (finished[0]) {
    if (!finished[0]) {
      return;
    }
    ol.removeChild(finished[0]);
  }
}

  window.onload = Start;
  