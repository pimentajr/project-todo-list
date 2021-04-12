let buttom = document.querySelector('#criar-tarefas')
let input = document.querySelector('#texto-tarefa')
let lista = document.querySelector('#lista-tarefas') 

function addList () {
buttom.addEventListener('click', function toDo(event) {
lista.appendChild(document.createElement('li')).innerHTML = input.value
})
}
addList()
