const list = document.querySelector('#lista-tarefas');
const inputV = document.querySelector('#texto-tarefa');

// Add Button
function createButton() {
  const classPai = document.querySelector('.button');
  const creatB = document.createElement('button');
  creatB.id = 'criar-tarefa';
  creatB.className = 'list';
  creatB.innerHTML = 'Adicionar Item a Lista';
  classPai.appendChild(creatB);
}

createButton();

const buttonADD = document.querySelector('#criar-tarefa');
// Função para pegar o valor do input e colocar dentro de uma li
buttonADD.addEventListener('click', () => {
  const creatLi = document.createElement('li');
  creatLi.innerHTML = inputV.value;
  list.appendChild(creatLi);
  inputV.value = '';
});

// add bg color.
list.addEventListener('click', (event) => {
  const liList = document.querySelectorAll('.selected');
  for (let index = 0; index < liList.length; index += 1) {
    liList[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
});
