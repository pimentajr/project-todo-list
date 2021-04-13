const button = document.getElementById('criar-tarefa');
const listaOrdenada = document.getElementById('lista-tarefas');

function criaLista() {
  const entradaDeTexto = document.getElementById('texto-tarefa');
  button.addEventListener('click', function () {
    const recebe = document.createElement('li');
    recebe.className = 'lista-marcador';
    recebe.innerHTML = entradaDeTexto.value;
    recebe.addEventListener('click', function (e){
      e.target.style.backgroundColor = 'rgb(128, 128, 128)';
      
    })
    listaOrdenada.appendChild(recebe);
    entradaDeTexto.value = null;
  });
}
criaLista();
