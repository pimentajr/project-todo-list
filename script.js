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

// Ao clicar no item da lista, o último item selecionado perde a classe selected, e ele passa a ter essa classe
function taskSelector() {
  taskList.addEventListener('click', (event) => {
    const selectedItem = event.target;
    const previouSelectedItem = document.querySelector('.selected');
    if (previouSelectedItem) {
      previouSelectedItem.classList.remove('selected');
    }
    if (selectedItem.classList.contains('item')) {
      selectedItem.classList.add('selected');
    }
  });
}
taskSelector();

// Atribui a classe completed ao item que for clicado duas vezes
function riskItem() {
  taskList.addEventListener('dblclick', (event) => {
    const selectedItem = event.target;
    if (selectedItem.classList.contains('completed')) {
      selectedItem.classList.remove('completed');
    } else {
      selectedItem.classList.add('completed');
    }
  });
}
riskItem();

function clearTasks() {
  const clearButton = document.getElementById('apaga-tudo');
  clearButton.addEventListener('click', () => {
    taskList.innerHTML = '';
  })
}
clearTasks();
