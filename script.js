function addListItem() {
  let button = document.getElementById('criar-tarefa');
  let input = document.getElementById('texto-tarefa');
  let list = document.getElementById('lista-tarefas');

  button.addEventListener('click', () => {
    let listItem = document.createElement('li');
    listItem.innerText = input.value;
    list.appendChild(listItem);
    input.value = '';
  });
}

addListItem();
