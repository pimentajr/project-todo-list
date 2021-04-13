const taskList = document.getElementById('lista-tarefas');
const insertButtom = document.getElementById('criar-tarefa');
const tasks = document.getElementById('lista-tarefas');
const removeTasks = document.getElementById('apaga-tudo');
const removeCompletedTasks = document.getElementById('remover-finalizados');

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

function removeAllTasks() {
  tasks.innerHTML = '';
}
// usei como referência, o código utilizado pelo Victor Dias, no link https://github.com/tryber/sd-010-b-project-todo-list/pull/133/files

function removeFinishedTasks() {
  const finishedTasks = document.getElementsByClassName('completed');
  for (let index = 0; index < finishedTasks.length;) {
    tasks.removeChild(finishedTasks[index]);
  }
}
// Usei como referência, o código utilizado pelo Victor Faria, no link https://github.com/tryber/sd-011-project-todo-list/pull/4/files

window.onload = () => {
  // Desafio 5 e 6
  insertButtom.addEventListener('click', insertTask);

  // Desafio 7
  tasks.addEventListener('click', selectTask);

  // Desafio 9
  tasks.addEventListener('dblclick', lineThrough);

  // Desafio 10
  removeTasks.addEventListener('click', removeAllTasks);

  // Desafio 11
  removeCompletedTasks.addEventListener('click', removeFinishedTasks);
};
