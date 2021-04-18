function colorChange(event) {
  const task = event.target;

  if (task.className === 'selected') {
    task.classList.remove('selected');
    return;
  }
  task.className = 'selected';
}

function taskAdder() {
  const taskToAdd = document.querySelector('#texto-tarefa').value;
  const createdElement = document.createElement('li');
  createdElement.append(taskToAdd);

  document.querySelector('#lista-tarefas').appendChild(createdElement);

  document.querySelector('#texto-tarefa').value = '';

  const taskSelected = document.querySelectorAll('li');
  for (let index = 0; index < taskSelected.length; index += 1) {
    taskSelected[index].addEventListener('click', colorChange);
  }
}

window.onload = () => {
  const addButton = document.querySelector('#criar-tarefa');
  addButton.addEventListener('click', taskAdder);
};
