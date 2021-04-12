// Cria as variáveis recorrentes
const taskList = document.getElementById('lista-tarefas');
const buttonArea = document.getElementById('btn-area');
const createTask = document.getElementById('criar-tarefa');

// Cria um novo item da lista OL e limpa o campo de input
function createNewTask() {
  createTask.addEventListener('click', () => {
    const newTask = document.getElementById('texto-tarefa');
    const newLi = document.createElement('li');
    newLi.className = 'item';
    taskList.appendChild(newLi);
    newLi.innerText = newTask.value;
    newTask.value = '';
    newTask.focus();
  });
}
createNewTask();

// Ao clicar no item da lista, ele passa a ter a class selected, e o último item selecionado perde essa classe
function taskSelector() {
  taskList.addEventListener('click', (event) => {
    if (event.target.className === 'item') {
      const previousSelectedItem = document.querySelector('.selected');
      if (previousSelectedItem) previousSelectedItem.classList.remove('selected');
      const selectedItem = event.target;
      selectedItem.classList.add('selected');
    }
  });
}
taskSelector();
