const campoTexto = document.getElementById('texto-tarefa');
const botao = document.getElementById('criar-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');

function addTarefa() {

  const novaTarefa = document.createElement('li')
  novaTarefa.innerText = campoTexto.value;

  listaTarefa.appendChild(novaTarefa);

  campoTexto.value = '';
}

botao.addEventListener('click', addTarefa);

listaTarefa.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    const corSelecionada = document.querySelector('.corFundo');
    if (corSelecionada != null) {
      corSelecionada.classList.remove('corFundo');
    }
    event.target.classList.add('corFundo');
  }
})

listaTarefa.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed')
})

const botaoLimpar = document.getElementById('apaga-tudo')

function apagarLista() {
  //const listaTarefa = document.getElementById('lista-tarefas')
  while (listaTarefa.hasChildNodes()) {
  listaTarefa.removeChild(listaTarefa.firstChild);
  }  
}
botaoLimpar.addEventListener('click', apagarLista)