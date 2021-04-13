const createTask = document.getElementById('criar-tarefa');
const listTask = document.getElementById('lista-tarefas');
const textTask = document.getElementById('texto-tarefa');

createTask.addEventListener('click', () => {
    const createListItem = document.createElement('li');
    createListItem.innerText = textTask.value;
    listTask.appendChild(createListItem);
    textTask.value = '';
})