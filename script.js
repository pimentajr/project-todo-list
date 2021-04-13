const criarTarefa = document.getElementById('criar-tarefa')
const textoTarefa = document.getElementById('texto-tarefa')
const listTarefas = document.getElementById('lista-tarefas')

function getText() {
  const criaLista = document.createElement('li')
  listTarefas.appendChild(criaLista)
  if(textoTarefa.value !== '') {
    listTarefas.lastChild.innerText = textoTarefa.value
    textoTarefa.value = ''
  } else {
    listTarefas.lastChild.remove()
  }
}

function removeColor(e) {
  for (let index = 0; index < listTarefas.childNodes.length; index++) {
    listTarefas.childNodes[index].classList.remove('back-ground')
    
  }
}

function setListColor(e) {
  removeColor()
  if(e.target.innerText) {
    e.target.classList.add('back-ground')
  }
}

listTarefas.addEventListener('click', setListColor)
criarTarefa.addEventListener('click', getText)

// console.log(criarTarefa)
