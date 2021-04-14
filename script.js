const newDiv = document.querySelector('.new-box');

// cria botoes dos desafios - refatorar futuramente
const addButton = document.createElement('button');
addButton.id = 'criar-tarefa';
addButton.innerText = 'Adicionar item';
newDiv.appendChild(addButton);
const eraseButton = document.createElement('button');
eraseButton.id = 'apaga-tudo';
eraseButton.innerText = 'Remover todos os itens';
newDiv.appendChild(eraseButton);
const btnRemoveFinished = document.createElement('button');
btnRemoveFinished.id = 'remover-finalizados';
btnRemoveFinished.innerText = 'Remover itens finalizados';
newDiv.appendChild(btnRemoveFinished);

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

function changeBackgroundColor(event) {
  const getLi = document.querySelectorAll('li');
  const targetElement = event.target;

  for (let index = 0; index < getLi.length; index += 1) {
    getLi[index].classList.remove('selected');
  }
  createOl.classList.remove('selected');
  targetElement.classList.add('selected');
}

createOl.addEventListener('click', changeBackgroundColor);

// Desafio 9: Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item;
createOl.addEventListener('dblclick', (event) => {
  const eventTarget = event.target;
  eventTarget.classList.toggle('completed');
});

// Desafio 10: Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista;
const deleteItens = document.querySelector('#apaga-tudo');

deleteItens.addEventListener('click', () => {
  while (createOl.lastElementChild) {
    createOl.removeChild(createOl.lastElementChild);
  }
});

// Desafio 11: Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista;

btnRemoveFinished.addEventListener('click', () => {
  const getCompletedTasks = document.getElementsByClassName('completed');

  for (let index = 0; index < getCompletedTasks.length;) {
    createOl.removeChild(getCompletedTasks[index]);
  }
});
