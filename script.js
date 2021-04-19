const addTaskInput = document.getElementById('texto-tarefa');
const addTaskButton = document.getElementById('criar-tarefa');

const taskList = document.getElementById('lista-tarefas');

function addTask(text) {
  taskList.insertAdjacentHTML('beforeend', 
  `<li class="task">${text}</li>`
  );
}

function clearInput() {
  addTaskInput.value = '';
  addTaskInput.focus();
}

addTaskButton.addEventListener('click', () => {
  addTask(addTaskInput.value);
  clearInput();
});

addTaskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask(addTaskInput.value);
    clearInput();
  }
})