const lista = document.getElementById('lista-tarefas');

function adicioneNovaTarefa() {
  const novoItemLista = document.createElement('li');
  const textoTarefa = document.getElementById('texto-tarefa');

  lista.appendChild(novoItemLista).innerHTML = textoTarefa.value;
  textoTarefa.value = '';
}


