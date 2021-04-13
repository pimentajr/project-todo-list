const addTask = document.getElementById("criar-tarefa");
addTask.addEventListener("click", addNewTasks);

function addNewTasks() {
  const listTasks = document.getElementById("lista-tarefas");
  const textTalks  = document.getElementById("texto-tarefas");
  let itenTasks = document.createElement('li');
  listTasks.appendChild(itenTasks);
}
addNewTasks();