function createP(){
  var slctDiv = document.querySelector('#paragraph')
  var crtElement = document.createElement('p')
  var newCnt = 'Clique duas vezes em um item para marcá-lo como completo'
  crtElement.setAttribute('id', 'funcionamento')
  crtElement.innerText = newCnt
  slctDiv.appendChild(crtElement)
}

createP()

function createLi(){
  var slctDiv = document.getElementById('list')
  var crtElement = document.createElement('ol')
  crtElement.setAttribute('id', 'lista-tarefas')
  slctDiv.appendChild(crtElement)
}

createLi()

function createTask(){
  var input = document.querySelector('#texto-tarefa')
  var textInput = input.value;
  var list = document.querySelector('#lista-tarefas')
  var createLi = document.createElement('li')
  createLi.innerText = textInput
  list.appendChild(createLi)
  input.value = ''
}
