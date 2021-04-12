const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');
const saveList = document.querySelector('#salvar-tarefas');
const clear = document.querySelector('#apaga-tudo');
const clearFinalized = document.querySelector('#remover-finalizados');
const removeSaved = document.querySelector('#remover-salvos');

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
  for (let i of allLi) {
    i.remove();
  }
});

clearFinalized.addEventListener('click', () => {
  const finalizedLi = document.querySelectorAll('.completed');
  for (let i of finalizedLi) {
    i.remove();
  }
});

saveList.addEventListener('click', () => {
  localStorage.setItem('lista', ol.innerHTML);
});

removeSaved.addEventListener('click', () => {
  localStorage.clear();
});
