const input = document.querySelector('#texto-tarefa');
const btnAdd = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

// Adiciona nova tarefa
function addTask(text) {
  if ((input.value !== '')) {
    const newTask = document.createElement('li');
    newTask.classList.add('task');
    // newTask.addEventListener('click', selectTask);
    // newTask.addEventListener('dblclick', toggleCompleted);
    newTask.innerText = text;
    taskList.appendChild(newTask);
  }
  input.focus();
  input.value = '';
}

btnAdd.addEventListener('click', () => {
  addTask(input.value);
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask(input.value);
  }
});

taskList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    const classSelected = document.querySelector('.selected');
    if (classSelected != null) {
      classSelected.classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
});
