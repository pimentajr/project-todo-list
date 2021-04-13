const div = document.getElementById('div');

// 7. 8.
function selectItem(event) {
  const selecItem = event.target;
  console.log('entrou em selectItem');
  const itens = document.getElementsByClassName('list-item');
  for (let index = 0; index < itens.length; index += 1) {
    itens[index].classList.remove('selected');
  }
  selecItem.classList.add('selected');
}

// 9.
function completedItem(event) {
  const completedListItem = event.target;
  if (completedListItem.className.includes('completed')) {
    completedListItem.classList.remove('completed');
  } else {
    completedListItem.classList.add('completed');
  }
}

// 5. 6.
function criarTarefa() {
  const listar = document.getElementById('lista-tarefas');
  const inputList = document.getElementById('texto-tarefa');
  if (inputList.value !== '') {
    const lItem = document.createElement('li');
    lItem.innerText = inputList.value;
    lItem.classList.add('list-item');
    listar.appendChild(lItem);
    inputList.value = '';
    lItem.addEventListener('click', selectItem);
    lItem.addEventListener('dblclick', completedItem);
  }
}
const buttonCriarTarefa = document.getElementById('criar-tarefa');
buttonCriarTarefa.addEventListener('click', criarTarefa);

// 4.
const oList = document.createElement('ol');
oList.setAttribute('id', 'lista-tarefas');
if (localStorage.lista !== undefined) {
  oList.innerHTML = localStorage.lista;
}
div.appendChild(oList);

// 14.
function removerSelecionado() {
  const selectedItem = document.getElementsByClassName('selected');
  if (selectedItem.length !== 0) {
    const index = 0;
    selectedItem[index].remove();
  }
}
const buttonRemoverSelecionado = document.createElement('button');
buttonRemoverSelecionado.setAttribute('id', 'remover-selecionado');
buttonRemoverSelecionado.innerText = '⨯';
buttonRemoverSelecionado.addEventListener('click', removerSelecionado);
div.appendChild(buttonRemoverSelecionado);

// 13.
function moverCima() {
  const selectedItem = document.getElementsByClassName('selected');
  const itensList = document.getElementsByClassName('list-item');
  const index = 0;
  if (selectedItem.length !== 0 && !(itensList[index].className.includes('selected'))) {
    const aboveElement = selectedItem[index].previousElementSibling;
    const bufferText = selectedItem[index].innerText;
    selectedItem[index].innerText = aboveElement.innerText;
    aboveElement.innerText = bufferText;
    aboveElement.classList.add('selected');
    const belowElement = selectedItem[index].nextElementSibling;
    belowElement.classList.remove('selected');
  }
}
const buttonMoverCima = document.createElement('button');
buttonMoverCima.setAttribute('id', 'mover-cima');
buttonMoverCima.innerText = '↑';
buttonMoverCima.addEventListener('click', moverCima);
div.appendChild(buttonMoverCima);

function moverBaixo() {
  const selectedItem = document.getElementsByClassName('selected');
  const itensList = document.getElementsByClassName('list-item');
  const lastIndex = itensList.length - 1;
  const index = 0;
  if (selectedItem.length !== 0 && !(itensList[lastIndex].className.includes('selected'))) {
    const belowElement = selectedItem[index].nextElementSibling;
    const bufferText = selectedItem[index].innerText;
    selectedItem[index].innerText = belowElement.innerText;
    belowElement.innerText = bufferText;
    belowElement.classList.add('selected');
    const aboveElement = selectedItem[index + 1].previousElementSibling;
    aboveElement.classList.remove('selected');
  }
}
const buttonMoverBaixo = document.createElement('button');
buttonMoverBaixo.setAttribute('id', 'mover-baixo');
buttonMoverBaixo.innerText = '↓';
buttonMoverBaixo.addEventListener('click', moverBaixo);
div.appendChild(buttonMoverBaixo);

// 11.
function removeFinalizado() {
  const listItem = document.getElementsByClassName('completed');
  for (let index = listItem.length - 1; index >= 0; index -= 1) {
    listItem[index].parentElement.removeChild(listItem[index]);
  }
}
const buttonRemoverFinalizados = document.createElement('button');
buttonRemoverFinalizados.setAttribute('id', 'remover-finalizados');
buttonRemoverFinalizados.innerText = 'Limpar Completos';
buttonRemoverFinalizados.addEventListener('click', removeFinalizado);
div.appendChild(buttonRemoverFinalizados);

// 10.
function apagarTudo() {
  const listItem = document.getElementsByClassName('list-item');
  for (let index = listItem.length - 1; index >= 0; index -= 1) {
    listItem[index].parentElement.removeChild(listItem[index]);
  }
}
const buttonApagarTudo = document.createElement('button');
buttonApagarTudo.setAttribute('id', 'apaga-tudo');
buttonApagarTudo.innerText = 'Limpar Lista';
buttonApagarTudo.addEventListener('click', apagarTudo);
div.appendChild(buttonApagarTudo);

// 12.
function salvarTarefas() {
  const listHTML = document.querySelector('#lista-tarefas').innerHTML;
  if (listHTML !== null) {
    localStorage.setItem('lista', listHTML);
  }
}
const buttonsalvarTarefas = document.createElement('button');
buttonsalvarTarefas.setAttribute('id', 'salvar-tarefas');
buttonsalvarTarefas.innerText = 'Salvar Lista';
buttonsalvarTarefas.addEventListener('click', salvarTarefas);
div.appendChild(buttonsalvarTarefas);
