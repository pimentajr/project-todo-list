const button = document.querySelector('#criar-tarefa');
const texto = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');

function addList() {
  button.addEventListener('click', function () {
    const item = document.createElement('li');
    lista.appendChild(item);
    const novoItem = texto.value;
    item.innerText = novoItem;
    texto.value = '';
  });
}
addList();

function changeBackgroundColor() {
  lista.addEventListener('click', function (event) {
    let coloridos = document.getElementsByTagName('li');
    for (let index = 0; index < coloridos.length; index += 1) {
      coloridos[index].style.backgroundColor = 'white';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}
changeBackgroundColor();

/* function finishItem() {
  let listItem = document.getElementsByTagName('li');
  lista.addEventListener('dblclick', function () {
    for (let index = 0; index < listItem.length; index += 0) {
      if (listItem[index].style.backgroundColor = 'rgb(128, 128, 128)') {
        listItem[index].classList.add('completed');
      }
    }
})
}
finishItem(); */

function deleteList() {
  const deleteButton = document.querySelector('#apaga-tudo');
  deleteButton.addEventListener('click', function () {
    let elementos = document.querySelectorAll('li');
    for (let index = 0; index < elementos.length; index += 1) {
      elementos[index].remove();
    }
  })
}
deleteList();