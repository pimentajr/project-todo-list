// Cria as variáveis recorrentes
const createTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
console.log(taskList);

// Cria um novo item da lista OL e limpa o campo de input
function createNewTask() {
  createTask.addEventListener('click', () => {
    let newTask = document.getElementById('texto-tarefa');
    const newLi = document.createElement('li');
    taskList.appendChild(newLi);
    newLi.innerText = newTask.value;
    newTask.value = '';
  });
}
createNewTask();
