const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const ol = document.querySelector('#lista-tarefas');

button.addEventListener('click', () => {
  const value = input.value;
  input.value = '';
  const newLi = document.createElement('li');
  newLi.classList.add('tarefa');
  newLi.innerText = value;
  ol.appendChild(newLi);
});

ol.addEventListener('click', (event) => {
  const li = event.target;
  const greys = document.querySelectorAll('.grey');
  for (let i of greys) {
    i.classList.remove('grey');
  }
  li.classList.add('grey');
});

ol.addEventListener('dblclick', (event) => {
  const liLine = event.target;
  if (liLine.classList.contains('completed')) {
    liLine.classList.remove('completed');
  } else {
    liLine.classList.add('completed');
  }
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
  const savedLi = document.querySelectorAll('.tarefa');
  for (let i = 0; i < savedLi.length; i += 1) {
    localStorage.setItem(i, savedLi[i].innerText);
  }
});

for (let i = 0; i < localStorage.length; i += 1) {
  const liNew = document.createElement('li');
  liNew.classList.add('tarefa');
  liNew.innerText = localStorage.getItem(i);
  ol.appendChild(liNew);
}

