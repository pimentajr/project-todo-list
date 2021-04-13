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

// Desafio 5
function createTask() {
  const inputItem = document.getElementById('texto-tarefa');

  addButton.addEventListener('click', (event) => {
    const newList = document.createElement('li');
    createOl.appendChild(newList);
    newList.innerHTML = inputItem.value;
    inputItem.value = ''
    console.log(newList)
  })
}

createTask();