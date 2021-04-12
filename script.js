const getInput = document.querySelector('#texto-tarefa');
const getButton = document.querySelector('#criar-tarefa');
const getLista = document.querySelector('#lista-tarefas')
const getLiItems = getLista.childNodes;

//funcao botao criar tarefa
getButton.addEventListener('click', function () {
  const createLi = document.createElement('li');
  createLi.innerText = getInput.value;
  getLista.appendChild(createLi);
  getInput.value = '';
});
//funcao selecionar tarefa e mudar a cor dela
getLista.addEventListener('click', function (event) {
  const getLiItems = getLista.childNodes;
  for (let i = 0; i < getLiItems.length; i += 1) {
    getLiItems[i].style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
})
//funcao doubleclick para riscar item
getLista.addEventListener('dblclick', function (event) {
  if (event.target.className === 'completed') {
    event.target.className = '';
  } else {
    event.target.className = 'completed';
  }
})
