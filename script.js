const criarTarefa = document.getElementById('criar-tarefa')
const textoTarefa = document.getElementById('texto-tarefa')
const listTarefas = document.getElementById('lista-tarefas')

function getText() {
  if(textoTarefa.value !== '') {
    const criaLista = document.createElement('li')
    listTarefas.appendChild(criaLista)
    criaLista.innerText += textoTarefa.value
    textoTarefa.value = ''
  }
}

criarTarefa.addEventListener('click', getText)

// console.log(criarTarefa)
