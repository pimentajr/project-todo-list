// adiciona tarefa a partir do click no botão
function addNewTask() {
  const insertTaskButton = document.querySelector('#criar-tarefa');
  let taskContent = document.querySelector('#texto-tarefa');

  insertTaskButton.addEventListener('click', function () {
    const taskList = document.querySelector('#lista-tarefas');
    const newTask = document.createElement('li');
    newTask.innerText = taskContent.value;
    taskList.appendChild(newTask);
    taskContent.value = '';
  })
}

addNewTask();