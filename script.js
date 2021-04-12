function addToList() {
  let input = document.getElementById('texto-tarefa');
  let addButton = document.getElementById('criar-tarefa');
  let list = document.getElementById('lista-tarefas');

  addButton.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = input.value;
    input.value = '';
    list.appendChild(li);
  });
}
addToList();