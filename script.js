function addTask() {
  const button = document.getElementById('criar-tarefa');
  const task = document.getElementById('texto-tarefa');
  const taskList = document.querySelector('ol');
  button.addEventListener('click', () => {
    console.log('tes');
    const newTask = document.createElement('li');
    newTask.innerText = task.value;
    taskList.appendChild(newTask);
    task.value = '';
  });
}

addTask();
