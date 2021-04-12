function addTask() {
  const userInput = document.getElementById('texto-tarefa').value
  let typed = userInput
  const listTask = document.getElementById('lista-tarefas');
  let task = document.createElement('li');
  task.classList.add('tarefa');
  listTask.appendChild(task);
  task.innerHTML = typed;
  document.getElementById('texto-tarefa').value = '';
}

function clickButtonTask() {
  const buttonTask = document.getElementById('criar-tarefa');
  buttonTask.addEventListener('click', addTask);
} 




window.onload = function load() {

clickButtonTask();  
}
