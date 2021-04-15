const orderList = document.getElementById('lista-tarefas');
const buttonAdd = document.getElementById('criar-tarefa');
function addToList() {
  const list = document.getElementById('texto-tarefa'); // onde é digitado a tarefa
  const listValue = list.value; // .value mostra que sera pego o conteudo dentro do input
  const itemList = document.createElement('li'); // cria uma tag li
  if (listValue === '') {// se o list value estiver vazio e a pessoa tentar enviar, recebera o alerta
    alert('Escreva uma Tarefa'); // nao aparece mais pois ao iniciar nao estou chamando a função
  } else {
    itemList.innerHTML = listValue; // itemlist irá receber o que foi digitado
    orderList.appendChild(itemList); // o itemList é filho do Ol
    list.value = ''; // após o itemList receber o que foi digitado a caixinha retorna vazia;
  }
}
buttonAdd.addEventListener('click', addToList);

// requisitos 7 e 8
function changeColor(evento) {
  if(evento.target.tagName === 'LI') { // ira ocorrer nos elementos com a tag li
    for (let index = 0; index < orderList.children.length; index +=1 ) {
       orderList.children[index].classList.remove('selected'); // remove a classe selected dos itens ,quando o target é adicionado
    }
    evento.target.classList.add('selected');
  }
} 
orderList.addEventListener('click', changeColor);

// requisito 9
function lineItem(event3) {
  if(event3.target.classList.contains('completed')) { // verifica se o target possui a classe completed
    event3.target.classList.remove('completed'); // se tiver sera removido a classe completed
} else {
    event3.target.classList.add('completed'); // se for clicado e nao tiver a classe completed ela sera adicionada
  }
}
orderList.addEventListener('dblclick', lineItem);

// /*https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while */
// requisito 10
const buttonDelete = document.getElementById('apaga-tudo'); // chama o botão de delete
function removeItens() {
  while (orderList.children.length > 0) { // enquanto essa condição for verdadeira a condição sera avaliada;
    orderList.children[0].remove();  // vai passando pela orderList e vai removendo o item na posição zero;
  }
}
buttonDelete.addEventListener('click', removeItens); // ao clicar no buttonDelete a função sera executada;

// requisito 11
const removeFinished = document.getElementById('remover-finalizados');
function removeFinishedItens() {
  const completedItens = document.querySelectorAll('.completed');
  for (let index = 0; index < completedItens.length; index += 1) {
        orderList.removeChild(completedItens[index]);
    }
}
removeFinished.addEventListener('click', removeFinishedItens);
