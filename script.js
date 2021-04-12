function addTask() {
  const button = document.getElementById('criar-tarefa');
  const task = document.getElementById('texto-tarefa');
  const taskList = document.querySelector('ol');
  button.addEventListener('click', () => {
    const newTask = document.createElement('li');
    newTask.innerText = task.value;
    taskList.appendChild(newTask);
    task.value = '';
  });
}

addTask();

function selectTask() {
  const taskList = document.querySelector('ol');
  taskList.addEventListener('click', (event) => {
    const task = document.getElementsByTagName('li');
    for (let i = 0; i < task.length; i += 1) {
      task[i].classList.remove('selected');
    }
    const taskSelected = event.target;
    taskSelected.classList.add('selected');
  });
}

selectTask();
