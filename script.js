const newDiv = document.querySelector('.new-box');

// Desafio 4
const createOl = document.createElement('ol');
createOl.id = 'lista-tarefas';
newDiv.appendChild(createOl);
console.log();

// Desafio 5
const addButton = document.createElement('button');
addButton.id = 'criar-tarefa';
addButton.innerText = 'Adicionar';

function inputButton() {
  const inputItem = document.getElementById('texto-tarefa');
  newDiv.appendChild(addButton);

}

inputButton();