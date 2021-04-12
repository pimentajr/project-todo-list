const input = document.querySelector('#texto-tarefa');
const btnAdd = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

// Adiciona nova tarefa
function addTask(text) {
  const newTask = document.createElement('li');
  newTask.classList.add('task');
  // newTask.addEventListener('click', selectTask);
  // newTask.addEventListener('dblclick', toggleCompleted);
  newTask.innerText = text;
  taskList.appendChild(newTask);
}

btnAdd.addEventListener('click', () => {
  addTask(input.value);
  input.focus();
  input.value = '';
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask(input.value);
    input.focus();
    input.value = '';
  }
});
