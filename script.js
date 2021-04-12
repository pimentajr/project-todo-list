const createTask = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

// limpando o input
function clearInput() {
    inputText.value = '';
}
// adicionando nova li
function newTask() {
  const li = document.createElement('li');
  const text = inputText.value;
  li.classList.add('listItem');
  taskList.appendChild(li);
  li.innerHTML = text;
}
// selecionando item da lista
function selectedSwitch(event) {
  document.querySelectorAll('.listItem')[0].classList.remove('selected');
  const eventTarget = event.target;
  eventTarget.className += ' selected';
}

taskList.addEventListener('click',selectedSwitch);


createTask.addEventListener('click', newTask);
createTask.addEventListener('click', clearInput);
