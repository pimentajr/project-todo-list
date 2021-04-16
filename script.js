/**
 * Cria elemento li contendo o texto (string) recedido e adiciona a classe 'task'
 */
function createTask(text) {
  const task = document.createElement('li');
  task.classList.add('task');
  task.innerHTML = text;
  return task;
}
/**
 * Adiciona valor do input (tarefa) à lista de tarefas
 */
function addTask() {
  const listItems = document.getElementById('lista-tarefas');
  const input = document.getElementById('texto-tarefa');
  if (input.value === '') {
    alert('Digite uma tarefa.');
  } else {
    const task = createTask(input.value);
    listItems.appendChild(task);
    input.value = '';
  }
}

function taskClassSelected(event) {
  const selected = document.querySelectorAll('.selected');
  for (let index = 0; index < selected.length; index += 1) {
    selected[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function taskClassCompleted(event) {
  const task = event.target;
  task.classList.toggle('completed');
}

function deleteList() {
  const items = document.querySelectorAll('.task');
  for (let index = 0; index < items.length; index += 1) {
    items[index].remove();
  }
}

function removeCompleted() {
  const completed = document.querySelectorAll('.completed');
  for (let index = 0; index < completed.length; index += 1) {
    completed[index].remove();
  }
}

window.onload = function init() {
  const addButton = document.querySelector('#criar-tarefa');
  addButton.addEventListener('click', addTask);
  const listItems = document.getElementById('lista-tarefas');
  listItems.addEventListener('click', taskClassSelected);
  listItems.addEventListener('dblclick', taskClassCompleted);
  const deleteButton = document.querySelector('#apaga-tudo');
  deleteButton.addEventListener('click', deleteList);
  const removeCompletedButton = document.querySelector('#remover-finalizados');
  removeCompletedButton.addEventListener('click', removeCompleted);
};
