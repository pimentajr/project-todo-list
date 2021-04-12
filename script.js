function addListItem() {
  const input = document.getElementById('texto-tarefa').value;
  console.log(input);
  document.getElementById('texto-tarefa').value = '';
  const ol = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  li.innerText = input;
  return ol.appendChild(li);
}

function addToDo() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', addListItem);
}

addToDo();
