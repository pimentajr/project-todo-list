function colorChange(event) {
  const task = event.target;
  const selectedTasks = document.querySelector('.selected');

  if (task.className === 'selected') {
    task.classList.remove('selected');
    return;
  }
  if (selectedTasks) {
    selectedTasks.classList.remove('selected');
  }
  task.className = 'selected';
}

function taskAdder() {
  const taskToAdd = document.querySelector('#texto-tarefa').value;
  const createdElement = document.createElement('li');
  createdElement.append(taskToAdd);

  document.querySelector('#lista-tarefas').appendChild(createdElement);

  document.querySelector('#texto-tarefa').value = '';

  const allTask = document.querySelectorAll('li');
  for (let index = 0; index < allTask.length; index += 1) {
    allTask[index].addEventListener('click', colorChange);
  }
}

window.onload = () => {
  const addButton = document.querySelector('#criar-tarefa');
  addButton.addEventListener('click', taskAdder);
};
