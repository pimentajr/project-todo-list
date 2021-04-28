const buttonAdd = document.getElementById('criar-tarefa');


function addTask() {
  const inputTask = document.getElementById('texto-tarefa');
  const newTask = document.createElement('li');
  newTask.innerText = inputTask.value;
  const taskList = document.getElementById('lista-tarefas');
  taskList.appendChild(newTask);
  inputTask.value = '';
}

buttonAdd.addEventListener('click', addTask);
