const addButton = document.querySelector('#criar-tarefa');
addButton.addEventListener('click', function () {
let taskList = document.querySelector('#lista-tarefas')
let inputText = document.querySelector('#texto-tarefa').value
let listElement = document.createElement('li')
listElement.innerText = inputText
taskList.appendChild(listElement)
document.querySelector('#texto-tarefa').value = ''
})