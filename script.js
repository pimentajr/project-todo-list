// Exercício 4 - Crio lista ordenada OL
const createListOl = document.createElement('ol');
createListOl.id = 'lista-tarefas';
const getContainerMaster = document.getElementById('container-master');
getContainerMaster.appendChild(createListOl);

// Exercício 5 e 6 - Adiciono na lista o elemento do Input, ao clicar no botão Adicionar
const getButton = document.getElementById('criar-tarefa');
getButton.addEventListener('click', () => {
  const getTextInput = document.getElementById('texto-tarefa');
  const createLi = document.createElement('li');
  createLi.innerText = getTextInput.value;
  createLi.className = 'no-background no-line';
  createListOl.appendChild(createLi);
  getTextInput.value = '';
});

// Exercício 7 e 8 - Clicar item lista altera cor de fundo
createListOl.addEventListener('click', (e) => {
  const getSelected = document.getElementsByClassName('selected');
  for (let i = 0; i < getSelected.length; i += 1) {
    getSelected[i].className = getSelected[i].className.replace('selected', 'no-background');
  }
  e.target.className = e.target.className.replace('no-background', 'selected');
});

// Exercício 9 - Double click coloca riscado
createListOl.addEventListener('dblclick', (e) => {
  if (e.target.className.indexOf('no-line') !== -1) { // se tiver no-line
    e.target.className = e.target.className.replace('no-line', 'completed');
  } else { // se tiver completed
    e.target.className = e.target.className.replace('completed', 'no-line');
  }
});

// Exercício 10 - Apagar toda a Lista
const getButtonApagar = document.getElementById('apaga-tudo');
getButtonApagar.addEventListener('click', () => {
  const getListItens = document.getElementsByTagName('li');
  const lengthList = getListItens.length;
  for (let i = lengthList - 1; i >= 0; i -= 1) {
    getListItens[i].remove();
  }
});

// Exercício 11 - Remover Finalizados
const getButtonFinalizados = document.getElementById('remover-finalizados');
getButtonFinalizados.addEventListener('click', () => {
  const getListFinalizados = document.getElementsByClassName('completed');
  const lengthList = getListFinalizados.length;
  for (let i = lengthList - 1; i >= 0; i -= 1) {
    getListFinalizados[i].remove();
  }
});
