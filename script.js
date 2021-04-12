// Cria as variáveis recorrentes 
let createTask = document.getElementById('criar-tarefa');
let taskList = document.getElementById('lista-tarefas');
console.log(taskList);

function createNewTask() {
  createTask.addEventListener('click', () => {
    let newTask = document.getElementById('texto-tarefa').value;
    let newLi = document.createElement('li');
    taskList.appendChild(newLi);
    newLi.innerText = newTask;
  })
}
createNewTask();
