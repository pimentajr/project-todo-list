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
const previousButoon = document.getElementById('mover-cima');
const nextButoon = document.getElementById('mover-baixo');
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
  let itemList = document.querySelectorAll('.item');
  for(let element of itemList) {
    element.id = '';
  }
  event.target.id = 'selected';
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

// 13 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas
// Esse mover pra cima e pra baixo pode ser feito com enxsublin ou previews.
// O que faz aparentar o selecionado é a class selected. Fazer o comando mover o selected para o seu irmao proximo ou anterior

// O que será verificado:
//Será verificado que, dado que diversos elementos foram acrescentados à lista, movimentá-los de formas diversas os deixa nas posições esperadas
// Pega o elemento selecionadoe mover ele para cima com previous element e para baixo com next.
// primeiro pega elemento selecionado. 
const selectedElement = document.getElementsByClassName('selected');

//Será verificado que, caso algum elemento esteja finalizado, este status deve persistir ainda que se mova o elemento

//Será verificado que, caso nenhum elemento esteja selecionado, clicar nos botões não altera a lista

/* Será verificado que um elemento que esteja selecionado deve se manter selecionado mesmo depois de movido
verifica se ele tem alguem depois deleteThroughLine. Se sim colocar ele depois desse algume. Se não null */
//Caso especial! Será verificado que, caso se tente subir o elemento no topo da lista ou, caso se tente descer o último elemento da lista, esta não deve ser alterada