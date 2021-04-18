// Carregando itens salvos (localStorage) na page
const taskList = document.getElementById('lista-tarefas');
taskList.innerHTML = localStorage.getItem('list');

// ex 12 bonus (2/2)
// Função que limpa input
function clearInput(input) {
  let inputValue = input;
  if (inputValue.value !== '') {
    inputValue.value = '';
  }
}

// Função que altera o background da li selecionada
function changeBackground(eventt) {
  const itemList = document.querySelectorAll('.item');
  for (const element of itemList) {
    element.id = '';
  }
  eventt.target.id = 'selected';
}

// Função que risca linha
function throughLine(event) {
  event.target.classList.toggle('completed');
}

// Adicionando eventos para itens recuperados do localStorage
for (let index = 0; index < taskList.childElementCount; index += 1) {
  taskList.childNodes[index].addEventListener('click', changeBackground);
  taskList.childNodes[index].addEventListener('dblclick', throughLine);
}

// Função para colocar input na lista
function inputTask() {
  const inputValue = document.getElementById('texto-tarefa').value;
  const itenList = document.createElement('li');
  itenList.className = 'item';
  itenList.addEventListener('click', changeBackground);
  itenList.addEventListener('dblclick', throughLine);
  itenList.innerText = inputValue;
  taskList.appendChild(itenList);
  /* const mainProject = document.getElementById('main');
  mainProject.appendChild(taskList); */
  clearInput(document.getElementById('texto-tarefa'));
}

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', inputTask);

// ex10
// Função para apagar li
function removeList() {
  // Consulta ao https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
  taskList.textContent = '';
}

const clearButton = document.getElementById('apaga-tudo');
clearButton.addEventListener('click', removeList);

// ex11
// Função que remove itens riscados
// desenvolvida com consulta na pagina https://stackoverflow.com/questions/40114681/remove-all-elements-in-the-html-collection
function deleteThroughLine() {
  const listItenThroughLine = document.getElementsByClassName('completed');
  for (let index1 = listItenThroughLine.length - 1; index1 >= 0; index1 -= 1) {
    listItenThroughLine[index1].parentNode.removeChild(
      listItenThroughLine[index1]
    );
  }
}

const removeThroughLine = document.getElementById('remover-finalizados');
removeThroughLine.addEventListener('click', deleteThroughLine);

// 12 - bonus (1/2)
// Consultado o codigo do colega Cesar Bhering para desenvolver funcionalidade.
function saveList() {
  localStorage.setItem('list', taskList.innerHTML);
}

const saveButoon = document.getElementById('salvar-tarefas');
saveButoon.addEventListener('click', saveList);

// 13
const previousButoon = document.getElementById('mover-cima');
const nextButoon = document.getElementById('mover-baixo');

function upList() {
  const selectedElement = document.getElementById('selected');
  if (selectedElement === null) {
    return null;
  }
  if (selectedElement === selectedElement.parentNode.firstChild) {
    return null;
  }
  selectedElement.parentNode.insertBefore(
    selectedElement, selectedElement.previousElementSibling);
}

function downList() {
  const selectedElement = document.getElementById('selected');
  if (selectedElement === null) {
    return null;
  }
  if (selectedElement === selectedElement.parentNode.lastChild) {
    return null;
  }
  selectedElement.parentNode.insertBefore(
    selectedElement, selectedElement.nextElementSibling.nextElementSibling);
}

previousButoon.addEventListener('click', upList);
nextButoon.addEventListener('click', downList);

// 14 - Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado
const removeSelectedButton = document.getElementById('remover-selecionado');
function removeSelected() {
  const selectedElement = document.getElementById('selected');
  selectedElement.parentNode.removeChild(selectedElement);
}

removeSelectedButton.addEventListener('click', removeSelected);
