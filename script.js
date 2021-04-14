const newDiv = document.querySelector('.new-box');

// create button
const addButton = document.createElement('button');
addButton.id = 'criar-tarefa';
addButton.innerText = 'Adicionar';
newDiv.appendChild(addButton);

// Desafio 4
const createOl = document.createElement('ol');
createOl.id = 'lista-tarefas';
newDiv.appendChild(createOl);

// Desafio 5 e 6: para realizacao do desafio, tive auxilio dos colegas de turma Julio Filizzola e Rodolfo Ramos;
function createTask() {
  const inputItem = document.getElementById('texto-tarefa');

  addButton.addEventListener('click', () => {
    const newList = document.createElement('li');
    createOl.appendChild(newList);
    newList.innerHTML = inputItem.value;
    inputItem.value = '';
  });
}

createTask();

function changeColor(event) {
  const getLi = document.querySelectorAll('li');
  const targetElement = event.target;

  for (let index = 0; index < getLi.length; index += 1) {
    getLi[index].classList.remove('selected');
  }
  createOl.classList.remove('selected');
  targetElement.classList.add('selected');
}

createOl.addEventListener('click', changeColor);
