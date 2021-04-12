const header = document.createElement('header');
header.innerHTML = '<strong>Minha Lista de Tarefas</strong>';
document.body.appendChild(header);

const paragraph = document.createElement('p');
paragraph.id = 'funcionamento';
paragraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
document.body.appendChild(paragraph);

const input = document.createElement('input');
input.id = 'texto-tarefa';
input.type = 'text';
document.body.appendChild(input);

const lista = document.createElement('ol');
lista.id = 'lista-tarefas';
document.body.appendChild(lista);

const button = document.createElement('button');
button.id = 'criar-tarefa';
button.innerHTML = 'To Do';
document.body.appendChild(button);

const selectList = document.querySelector('#lista-tarefas');
const selectButton = document.querySelector('#criar-tarefa');
const selectInput = document.getElementById('texto-tarefa');

function generateListItems() {
  selectButton.addEventListener('click', () => {
    const inputTask = selectInput.value;
    const createTask = document.createElement('li');
    createTask.innerHTML = inputTask;
    selectList.appendChild(createTask);
    createTask.className = 'item-lista';
    selectInput.value = '';
  });
}
generateListItems();

function selectTasks() {
  selectList.addEventListener('click', (selectItems) => {
    const eventTarget = selectItems.target;
    const selectItem = document.querySelectorAll('li');
    selectItem.forEach((element) => element.classList.remove('selected'));
    eventTarget.classList.add('selected');
  });
}
selectTasks();
