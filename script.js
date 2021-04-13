// ex 5
// No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.
// Criando lo para ex 4
const taskList = document.getElementById('lista-tarefas');

// Pegando o main do DOM
const mainProject = document.getElementById('main');

// Botões
const button = document.getElementById('criar-tarefa');
const clearButton = document.getElementById('apaga-tudo');
const removeThroughLine = document.getElementById('remover-finalizados');
const saveButoon = document.getElementById('salvar-tarefas');

// Carregando o conteudo do localStorage na page
// PEgar o local storage
// Atribuir a lista
taskList.innerHTML = localStorage.getItem('list');

// ex 12 bonus (2/2)
// Função que limpa input 
function clearInput(input) {
  if (input.value !== '') {
    input.value = '';
  }
}

// Função que altera o background da li selecionada
function changeBackground(event) {
  const listSelected = document.getElementsByClassName('selected');
  for (let index = 0; index < listSelected.length; index += 1) {
    listSelected[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

// Função que risca linha 
function throughLine(event) {
  event.target.classList.toggle('completed');
}

// Função para colocar input na lista
function inputTask() {
  const inputValue = document.getElementById('texto-tarefa').value;
  const itenList = document.createElement('li');
  itenList.id = 'itenList';
  itenList.addEventListener('click', changeBackground);
  itenList.addEventListener('dblclick', throughLine);
  itenList.innerText = inputValue;
  taskList.appendChild(itenList);
  mainProject.appendChild(taskList);
  clearInput(document.getElementById('texto-tarefa'));
}
button.addEventListener('click', inputTask);

// ex10
// Função para apagar li
function removeList() {
  // Consulta ao https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
  taskList.textContent = '';
}
clearButton.addEventListener('click', removeList);

// ex11
// Função que remove itens riscados
// desenvolvida com consulta na pagina https://stackoverflow.com/questions/40114681/remove-all-elements-in-the-html-collection
function deleteThroughLine() {
  const listItenThroughLine = document.getElementsByClassName('completed');
  for (let index1 = listItenThroughLine.length - 1; index1 >= 0; index1 -= 1) {
    listItenThroughLine[index1].parentNode.removeChild(listItenThroughLine[index1]);
  }
}
removeThroughLine.addEventListener('click', deleteThroughLine);

// 12 - bonus (1/2)
// Consultado o codigo do colega Cesar Bhering para desenvolver funcionalidade.
function saveList() {
  localStorage.setItem('list', taskList.innerHTML);
}
saveButoon.addEventListener('click', saveList);
