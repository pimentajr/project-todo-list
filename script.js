// Cria as variáveis recorrentes
const createTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

// Cria um novo item da lista OL e limpa o campo de input
function createNewTask() {
  createTask.addEventListener('click', () => {
    let newTask = document.getElementById('texto-tarefa');
    const newLi = document.createElement('li');
    newLi.className = 'item'
    taskList.appendChild(newLi);
    newLi.innerText = newTask.value;
    newTask.value = '';
    newTask.focus()
  });
}
createNewTask();

// Ao clicar no item da lista, ele finca com fundo rgb(128,128,128)
function taskSelector() {
   taskList.addEventListener('click', (event) => {
    let items = document.querySelector('item');
    if (event.target.className === 'item') {
      event.target.style.backgroundColor = 'rgb(128,128,128)';
   }
  });
}
taskSelector();
