const createTaskButton = document.getElementById('criar-tarefa');
const listTask = document.getElementById('lista-tarefas');
const textTask = document.getElementById('texto-tarefa');
const eraseTasksButton = document.getElementById('apaga-tudo');

createTaskButton.addEventListener ('click', function addTask() {
  const tagP = document.createElement('li');
  tagP.innerText = textTask.value;
  listTask.appendChild(tagP);
  textTask.value = '';
  tagP.addEventListener('click', function addClass() {
    tagP.classList.add('tasks-background-color');
  });
  eraseTasksButton.addEventListener('click', function rmvTasks() {
    listTask.removeChild(tagP);
  });
  tagP.addEventListener('dblclick', function addRisk() {
    tagP.classList.add('completed');
    tagP.addEventListener('dblclick', function rmvRisk() {
      tagP.classList.remove('completed');
    });
  });
});

//eraseTasksButton.addEventListener ('click', function rmvTask() {
//  const rmvtagP = document.removeEventListener
//  tagP.innerText = textTask.value;
//  listTask.appendChild(tagP);
//  textTask.value = '';
//  tagP.addEventListener('click', function addClass() {
//    tagP.classList.add('tasks-background-color');
//  });
