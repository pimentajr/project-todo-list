function colorChange(event) {
  const task = event.target;
  const selectedTasks = document.querySelector('.selected');

  if (task.classList === 'selected') {
    task.classList.remove('selected');
    return;
  }
  if (selectedTasks) {
    selectedTasks.classList.remove('selected');
  }
  task.classList.add('selected');
}

function completedTasks(event) {
  const task = event.target;
  console.log(task.classList);
  if (task.classList[0] === 'completed') {
    task.classList.remove('completed');
    return;
  }
  task.classList.add('completed');
}

function taskAdder() {
  const taskToAdd = document.querySelector('#texto-tarefa').value;
  if (taskToAdd) {
    const createdElement = document.createElement('li');
    createdElement.append(taskToAdd);
    document.querySelector('#lista-tarefas').appendChild(createdElement);
  }

  document.querySelector('#texto-tarefa').value = '';

  const allTask = document.querySelectorAll('li');
  for (let index = 0; index < allTask.length; index += 1) {
    allTask[index].addEventListener('click', colorChange);
    allTask[index].addEventListener('dblclick', completedTasks);
  }
}

window.onload = () => {
  const addButton = document.querySelector('#criar-tarefa');
  addButton.addEventListener('click', taskAdder);
};
