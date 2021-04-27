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
  // createLi.className = 'item-list';
  createListOl.appendChild(createLi);
  getTextInput.value = '';
});

// Exercício 7 - Clicar item lista altera cor de fundo
createListOl.addEventListener('click', (e) => {
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
});
