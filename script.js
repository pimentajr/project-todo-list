const taskList = 'lista-tarefas';
const listItems = document.getElementById(taskList);

function createTask() {
  const button = document.getElementById('criar-tarefa');

  button.addEventListener('click', ) {
    const inputUser = document.getElementById('texto-tarefa');
    const list = document.createElement('li');
    list.className = 'list-item';
    list.innerText = inputUser.value;

    listItems.appendChild(list);

    inputUser.value = '';
  };
}
createTask();