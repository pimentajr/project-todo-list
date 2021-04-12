const taskList = document.getElementById('lista-tarefas');
const insertButtom = document.getElementById('criar-tarefa');
const tasks = document.querySelector('#lista-tarefas');
// let selectedTask = document.createElement('style');

function insertTask() {
  const taskContent = document.getElementById('texto-tarefa').value;
  const newTask = taskContent;
  document.getElementById('texto-tarefa').value = '';

  const newTaskToInsert = document.createElement('li');
  newTaskToInsert.innerHTML = newTask;
  newTaskToInsert.className = 'task';
  taskList.appendChild(newTaskToInsert);
}

function selectTask(e) {
  for (let index = 0; index < tasks.children.length; index += 1) {
    tasks.children[index].classList.remove('selectedTask');
  }
  e.target.classList.add('selectedTask');
}

function lineThrough(e) {
  if (e.target.classList.contains('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.className = 'completed';
  }
}

window.onload = () => {
  // Desafio 5 e 6
  insertButtom.addEventListener('click', insertTask);

  // Desafio 7
  tasks.addEventListener('click', selectTask);

  // Desafio 9
  tasks.addEventListener('dblclick', lineThrough);
};
