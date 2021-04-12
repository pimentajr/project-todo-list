//const div = document.getElementById('div');

// 7. 8.
function selectItem(event) {
  const selectedItem = event.target;
  const itens = document.getElementsByClassName('list-item');
  for (let index = 0; index < itens.length; index += 1) {
    itens[index].style.backgroundColor = 'transparent';
  }
  selectedItem.style.backgroundColor = 'rgb(128, 128, 128)';
}

// 9.
function completedItem(event) {
  const completedListItem = event.target;
  if (completedListItem.className === 'list-item completed') {
    completedListItem.classList.remove('completed');
  } else {
    completedListItem.classList.add('completed');
  }
}

// 5. 6.
function criarTarefa() {
  const oList = document.getElementById('lista-tarefas');
  const inputList = document.getElementById('texto-tarefa');
  const lItem = document.createElement('li');
  lItem.innerText = inputList.value;
  lItem.classList.add('list-item');
  oList.appendChild(lItem);
  inputList.value = '';
  lItem.addEventListener('click', selectItem);
  lItem.addEventListener('dblclick', completedItem);
}
const buttonCriarTarefa = document.getElementById('criar-tarefa');
buttonCriarTarefa.addEventListener('click', criarTarefa);

// 10.
function apagarTudo() {
  const listItem = document.getElementsByClassName('list-item');
  for (let index = listItem.length - 1; index >= 0; index -= 1) {
    listItem[index].parentElement.removeChild(listItem[index]);
  }
}
const buttonApagarTudo = document.getElementById('apaga-tudo');
buttonApagarTudo.addEventListener('click', apagarTudo);

// 11.
function removeFinalizado() {
  const listItem = document.getElementsByClassName('completed');
  console.log(listItem);
  for (let index = listItem.length - 1; index >= 0; index -= 1) {
    listItem[index].parentElement.removeChild(listItem[index]);
  }
}
const buttonRemoverFinalizados = document.getElementById('remover-finalizados');
buttonRemoverFinalizados.addEventListener('click', removeFinalizado);
