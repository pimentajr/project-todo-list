const button = document.getElementById('criar-tarefa');
const listaOrdenada = document.getElementById('lista-tarefas');

function criaLista() {
  const entradaDeTexto = document.getElementById('texto-tarefa');
  button.addEventListener('click', function () {
    const recebe = document.createElement('li');
    recebe.innerHTML = entradaDeTexto.value;
    listaOrdenada.appendChild(recebe);
    entradaDeTexto.value = null;
  });
}
criaLista();

function selecionaTarefa() {
  listaOrdenada.addEventListener('click', function (e) {
    const eTarget = e.target;
    const tarefaSelecionada = document.querySelector('.selecionado');
    if (tarefaSelecionada) {
      tarefaSelecionada.classList.remove('selecionado');
    }
    eTarget.classList.add('selecionado');
  });
}
selecionaTarefa();

function tarefaCompletada() {
  listaOrdenada.addEventListener('dblclick', function (e) {
    const eTarget = e.target;
    if (eTarget.classList === 'completed') {
      eTarget.classList.remove('completed');
    } else {
      eTarget.classList.add('completed');
    }
  });
}
tarefaCompletada();

const apagaTudo = document.querySelector('#apaga-tudo');
function apagaLista() {
  apagaTudo.addEventListener('click', function () {
    listaOrdenada.innerHTML = null;
  });
}
apagaLista();
