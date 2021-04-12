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
  crtElement.setAttribute('onclick', 'infos()')
  crtElement.addEventListener('dblclick', dbclick)
  slctDiv.appendChild(crtElement)
}

createLi()

function createTask(){
  var input = document.querySelector('#texto-tarefa')
  var textInput = input.value;
  var list = document.querySelector('#lista-tarefas')
  var createLi = document.createElement('li')
  createLi.className = 'item'
  createLi.innerText = textInput
  list.appendChild(createLi)
  input.value = ''
}

function infos(){
  let clear = document.getElementsByClassName('selected')
  let lenght = clear.length
  if (lenght >= 1){
    document.querySelector('.selected').className = 'item'
  }
  if (event.target.className === 'item completed'){
    event.target.className = 'item completed selected'
  } else {
    event.target.setAttribute('class','item selected')
    document.querySelector('.selected')
  }
}

function dbclick(){
  if (event.target.className === 'item completed'){
    event.target.className = 'item'
  } else {
    event.target.className = 'item completed'
  }
}



// var cont = 0
// var listSelector = document.getElementsByTagName('li')
// for (let iten = 0; iten < listSelector.length; itens += 1){
//   cont += 1
// }
