
const lista = document.getElementById('lista-tarefas');

function addTaskList() {
  const newItem = document.createElement('li');
  const task = document.getElementById('texto-tarefa');
  lista.appendChild(newItem).innerHTML = task.value;
  task.value = '';
}

const addTask = () => {
  const createTaskList = document.getElementById('criar-tarefa');
  createTaskList.addEventListener('click', addTaskList);
};

addTask();

