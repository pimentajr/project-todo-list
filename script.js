const taskList = document.getElementById('lista-tarefas');
const insertButtom = document.getElementById('criar-tarefa');
const tasks = document.querySelector('#lista-tarefas');

function insertTask () {
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

function lineThrough (f) {
  if (f.target.classList.contains('completed')) {
    f.target.classList.remove('completed');
  } else {
    f.target.className = 'completed';
  }
}


window.onload = function () {
  // Desafio 5 e 6
  insertButtom.addEventListener('click', insertTask);

  // Desafio 7
  tasks.addEventListener('click', selectTask);

  // Desafio 9
  tasks.addEventListener('dblclick', lineThrough);
}
