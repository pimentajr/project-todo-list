function newTask() {
  const button = document.querySelector('#criar-tarefa');
  function addNewTask() {
    const list = document.querySelector('#lista-tarefas');
    const input = document.querySelector('#texto-tarefa');
    const itemList = document.createElement('li');
    itemList.innerText = input.value;
    input.value = '';
    list.appendChild(itemList);
  }
  button.addEventListener('click', addNewTask);
}

newTask();