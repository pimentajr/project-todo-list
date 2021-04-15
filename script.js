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
const saveItens = document.createElement('button');
saveItens.id = 'salvar-tarefas';
saveItens.innerText = 'Salvar Tarefas';
newDiv.appendChild(saveItens);

// Desafio 4
const createOl = document.createElement('ol');
createOl.id = 'lista-tarefas';
newDiv.appendChild(createOl);

const getOl = document.getElementById('lista-tarefas');

// Desafio 5 e 6: para realizacao do desafio, tive auxilio dos colegas de turma Julio Filizzola e Rodolfo Ramos;
function createTask() {
  const inputItem = document.getElementById('texto-tarefa');

  addButton.addEventListener('click', () => {
    const newList = document.createElement('li');
    getOl.appendChild(newList);
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
  getOl.classList.remove('selected');
  targetElement.classList.add('selected');
}

getOl.addEventListener('click', changeBackgroundColor);

// Desafio 9: Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item;
getOl.addEventListener('dblclick', (event) => {
  const eventTarget = event.target;
  eventTarget.classList.toggle('completed');
});

// Desafio 10: Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista;
const deleteItens = document.querySelector('#apaga-tudo');

deleteItens.addEventListener('click', () => {
  while (getOl.lastElementChild) {
    getOl.removeChild(getOl.lastElementChild);
  }
});

// Desafio 11: Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista;

btnRemoveFinished.addEventListener('click', () => {
  const getCompletedTasks = document.getElementsByClassName('completed');

  for (let index = 0; index < getCompletedTasks.length;) {
    getOl.removeChild(getCompletedTasks[index]);
  }
});

// Desafio 12:  Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava;

function buttonSave() {
  saveItens.addEventListener('click', () => {
    localStorage.setItem(getOl, getOl.innerHTML);
  });
  const saved = localStorage.getItem(getOl);
  getOl.innerHTML = saved;
}

buttonSave();
