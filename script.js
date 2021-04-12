const jobList = document.getElementById('lista-tarefas');
let taskNameInput = document.getElementById('texto-tarefa');
const btnCreateTask = document.getElementById('criar-tarefa');

//Adiciona a task ao clicar no botao.
function addTask(string) {
  const taskToBeAdded = document.createElement('li');
  taskToBeAdded.innerText = taskNameInput.value;
  jobList.appendChild(taskToBeAdded);
  taskNameInput.value = '';
}


btnCreateTask.addEventListener('click', addTask);