const buttom = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas') ;

function addList() {
  buttom.addEventListener('click', function toDo() {
    lista.appendChild(document.createElement('li')).innerHTML = input.value
  });
}
addList();
