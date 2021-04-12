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
