function changeBgcOfTask(element) {
  if (document.querySelectorAll('li').length > 1) {
    for (let index = 0; index < document.querySelectorAll('li').length; index += 1) {
      document.querySelectorAll('li')[index].style.backgroundColor = 'white';
      document.querySelectorAll('li')[index].id = '';
    }
    // const lastSelectedTask = document.querySelector('#selected-task');
    // lastSelectedTask.style.backgroundColor = 'white';
    // lastSelectedTask.id = '';
    const taskSelected = element.target;
    taskSelected.id = 'selected-task';
    taskSelected.style.backgroundColor = 'rgb(128,128,128)';
  } else {
    const taskSelected = element.target;
    taskSelected.id = 'selected-task';
    taskSelected.style.backgroundColor = 'rgb(128,128,128)';
  }
}

function addTask() {
  const element = document.createElement('li');
  element.innerText = document.querySelector('#texto-tarefa').value;
  document.querySelector('#lista-tarefas').appendChild(element);
  document.querySelector('#texto-tarefa').value = '';
  for (let index = 0; index < document.querySelectorAll('li').length; index += 1) {
    document.querySelectorAll('li')[index].addEventListener('click', changeBgcOfTask);
  }
}
document.querySelector('#criar-tarefa').addEventListener('click', addTask);
