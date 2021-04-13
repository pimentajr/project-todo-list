const input = document.getElementById('texto-tarefa');
const addButton = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const itemsOfList = document.getElementsByTagName('li');

// Adiciona itens à lista
// Para adição de enter na lista, foi consultada a documentação em W3Schools sobre ações usando o "Enter"
// Source: https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
function addToList() {
  addButton.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = input.value;
    input.value = '';
    list.appendChild(li);
  });
  // Usando enter
  input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      const li = document.createElement('li');
      li.innerText = input.value;
      input.value = '';
      list.appendChild(li);
    }
  });
}
addToList();

// Muda cor de fundo ao clicar em um item da lista, mas somente um fica selecionado (requisito 8).
function changeBackgroundColor() {
  list.addEventListener('click', (event) => {
    for (let index = 0; index < itemsOfList.length; index += 1) {
      itemsOfList[index].classList.remove('selecionado');
    }
    event.target.classList.add('selecionado');
  });
}
changeBackgroundColor();

// Risca o texto
function addSerrated() {
  list.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}
addSerrated();
