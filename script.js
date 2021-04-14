// Cria div mãe;

const divMain = document.createElement('div');
divMain.id = 'div-main';
document.body.appendChild(divMain);

// Cria cabeçalho;

const header = document.createElement('header');
header.innerText = 'Minha Lista de Tarefas';
header.id = 'cabecalho';
header.style = 'font-family: Old Standard TT';
divMain.appendChild(header);

// Cria título;

const paragraph = document.createElement('p');
paragraph.id = 'funcionamento';
paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
divMain.appendChild(paragraph);

// Cria div para abrigar o input de informações;

const divInput = document.createElement('div');
divInput.id = 'inputs';
divMain.appendChild(divInput);

// Cria input;

const input = document.createElement('input');
input.id = 'texto-tarefa';
input.type = 'text';
divInput.appendChild(input);

// Cria botão;

const button = document.createElement('button');
button.id = 'criar-tarefa';
button.innerText = 'Criar Tarefa';
divInput.appendChild(button);

const orderList = document.createElement('ol');
orderList.id = 'lista-tarefas';
divInput.appendChild(orderList);

const createTask = document.getElementById('criar-tarefa');

createTask.addEventListener('click', () => {
  const listItem = document.createElement('li');
  listItem.style = 'font-family: Old Standard TT';
  listItem.innerText = input.value;
  input.value = '';
  orderList.appendChild(listItem);
});

function click() {
  orderList.addEventListener('click', (event) => {
    const selectedItem = document.querySelector('.selected');
    if (selectedItem) {
      selectedItem.classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}
click();

function doubleClick() {
  orderList.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}
doubleClick();

// Cria div para abrigar outros botões;

const divInputs2 = document.createElement('div');
divInputs2.id = 'other-buttons';
divMain.appendChild(divInputs2);

const apagaTudo = document.createElement('button');
apagaTudo.id = 'apaga-tudo';
apagaTudo.innerText = 'Apaga Tudo';
divInputs2.appendChild(apagaTudo);

function deleteAll() {
  apagaTudo.addEventListener('click', (evento) => {
    const listaOrdenada = document.querySelectorAll('li');
    for (let index = 0; index < listaOrdenada.length; index += 1) {
      if (orderList[index].classList.contains('completed')) {
        evento.target.remove(listaOrdenada);
      }
    }
  });
}
deleteAll();
