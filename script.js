const taskButton = document.getElementById('criar-tarefa');
taskButton.addEventListener('click', () => {
  const newItem = document.getElementById('texto-tarefa').value;
  const list = document.getElementById('lista-tarefas');
  const listChild = document.createElement('li');
  listChild.innerHTML = newItem;
  list.appendChild(listChild);
  document.getElementById('texto-tarefa').value = '';
});

const taskList = document.getElementById('lista-tarefas');
taskList.addEventListener('click', () => {
let clickedItem = event.target;
clickedItem.style.backgroundColor = 'rgb(128, 128, 128)';
})
