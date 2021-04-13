const createTask = document.querySelector('#criar-tarefa');
const listTask = document.querySelector('#lista-tarefas');
const textTask = document.querySelector('#texto-tarefa');

createTask.addEventListener('click', () => {
    const createListItem = document.querySelector('li');
    createListItem.innerText = textTask.value;
    listTask.appendChild(createListItem);
    textTask.value = '';
})