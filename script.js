const createTaskButton = document.getElementById('criar-tarefa');
const taskText = document.getElementById('texto-tarefa');
const listTask = document.getElementById('lista-tarefas');

createTaskButton.addEventListener('click', () => {
  if ((taskText.value !== '')) {
    const addListElement = document.createElement('li');
    addListElement.innerText = taskText.value;
    listTask.appendChild(addListElement);
    taskText.value = '';
  }
  taskText.focus();
});

listTask.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    const classSelected = document.querySelector('.selected');
    if (classSelected != null) {
      classSelected.classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
});

listTask.addEventListener('dblclick', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
  }
});

const clearTaskList = document.getElementById('apaga-tudo');
clearTaskList.addEventListener('click', () => {
  const clearList = listTask.querySelectorAll('li');
  for (let index = 0; index < clearList.length; index += 1) {
    clearList[index].remove();
  }
});
