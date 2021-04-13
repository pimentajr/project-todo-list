const getInput = document.querySelector('#texto-tarefa');
const getButton = document.querySelector('#criar-tarefa');
const getLista = document.querySelector('#lista-tarefas');

// funcao botao criar tarefa
getButton.addEventListener('click', function () {
  const createLi = document.createElement('li');
  createLi.innerText = getInput.value;
  getLista.appendChild(createLi);
  getInput.value = '';
});

// funcao selecionar tarefa e mudar a cor dela
getLista.addEventListener('click', function (event) {
  const getLiItems = getLista.childNodes;
  for (let i = 0; i < getLiItems.length; i += 1) {
    getLiItems[i].id = '';
  }
  event.target.id = 'selected';
});

// funcao doubleclick para riscar item
getLista.addEventListener('dblclick', function (event) {
  if (event.target.className === 'completed') {
    event.target.className = '';
  } else {
    event.target.className = 'completed';
  }
});

// funcao botao que apaga lista
const dltButton = document.querySelector('#apaga-tudo');
dltButton.addEventListener('click', function () {
  getLista.innerText = '';
});

// funcao botao que apaga riscados
const dltCmpltButton = document.querySelector('#remover-finalizados');
dltCmpltButton.addEventListener('click', function () {
  const getComplets = document.querySelectorAll('.completed');
  for (let i = 0; i < getComplets.length; i += 1) {
    getLista.removeChild(getComplets[i]);
  }
});

// funcao botao que apaga selecionados
const dltSlctdButton = document.querySelector('#remover-selecionado');
dltSlctdButton.addEventListener('click', function() {
  const getSelecteds = document.querySelectorAll('#selected');
  for (let i = 0; i < getSelecteds.length; i += 1) {
    getLista.removeChild(getSelecteds[i]);
  }
})





