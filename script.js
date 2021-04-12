const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');
const saveList = document.querySelector('#salvar-tarefas');
const clear = document.querySelector('#apaga-tudo');
const clearFinalized = document.querySelector('#remover-finalizados');
const removeSaved = document.querySelector('#remover-salvos');
const moveUp = document.querySelector('#mover-cima');
const moveDown = document.querySelector('#mover-baixo');
const removeSelected = document.querySelector('#remover-selecionado');

ol.innerHTML = localStorage.getItem('lista');

button.addEventListener('click', () => {
  const valor = input.value;
  input.value = '';
  const newLi = document.createElement('li');
  newLi.classList.add('tarefa');
  newLi.innerText = valor;
  ol.appendChild(newLi);
});

ol.addEventListener('click', (event) => {
  const li = event.target;
  const greys = document.querySelectorAll('.grey');
  for (let i = 0; i < greys.length; i += 1) {
    greys[i].classList.remove('grey');
  }
  li.classList.add('grey');
  ol.classList.remove('grey');
});

ol.addEventListener('dblclick', (event) => {
  const liLine = event.target;
  if (liLine.classList.contains('completed')) {
    liLine.classList.remove('completed');
  } else {
    liLine.classList.add('completed');
  }
  ol.classList.remove('completed');
});

clear.addEventListener('click', () => {
  const allLi = document.querySelectorAll('.tarefa');
  for (let i = 0; i < allLi.length; i += 1) {
    allLi[i].remove();
  }
});

clearFinalized.addEventListener('click', () => {
  const finalizedLi = document.querySelectorAll('.completed');
  for (let i = 0; i < finalizedLi.length; i += 1) {
    finalizedLi[i].remove();
  }
});

saveList.addEventListener('click', () => {
  localStorage.setItem('lista', ol.innerHTML);
});

removeSaved.addEventListener('click', () => {
  localStorage.clear();
});

moveDown.addEventListener('click', () => {
  const selectedDown = document.querySelector('.grey');
  if (selectedDown !== null) {
    const nextElement = selectedDown.nextSibling;
    if (nextElement) {
      selectedDown.insertAdjacentElement('beforebegin', nextElement);
    }
  }
});

moveUp.addEventListener('click', () => {
  const selectedUp = document.querySelector('.grey');
  if (selectedUp !== null) {
    const previousElement = selectedUp.previousSibling;
    if (previousElement) {
      selectedUp.insertAdjacentElement('afterend', previousElement);
    }
  }
});

removeSelected.addEventListener('click', () => {
  document.querySelector('.grey').remove();
});
