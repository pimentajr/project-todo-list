// 7. 8.
function selectItem(event) {
  const selectedItem = event.target;
  const itens = document.getElementsByClassName('listItem');
  for (let index = 0; index < itens.length; index += 1) {
    itens[index].style.backgroundColor = 'transparent';
  }
  selectedItem.style.backgroundColor = 'rgb(128, 128, 128)';
}

// 9.
function completedItem(event) {
  const completedListItem = event.target;
  completedListItem.classList.add('completed');
}

// 5. 6.
function criarTarefa() {
  const oList = document.getElementById('lista-tarefas');
  const inputList = document.getElementById('texto-tarefa');
  const lItem = document.createElement('li');
  lItem.innerText = inputList.value;
  lItem.classList.add('listItem');
  oList.appendChild(lItem);
  inputList.value = '';
  lItem.addEventListener('click', selectItem);
  lItem.addEventListener('dblclick', completedItem);
}
const buttonCriarTarefa = document.getElementById('criar-tarefa');
buttonCriarTarefa.addEventListener('click', criarTarefa);
