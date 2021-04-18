const list = document.getElementById('lista-tarefas');

function botaoNovaTarefa() {
  const novoItemLista = document.createElement('li');
  const textoTarefa = document.getElementById('texto-tarefa');

  list.appendChild(novoItemLista).innerHTML = textoTarefa .value;
  textoTarefa .value = '';
}

const adicionarNovaTarefa = () => {
  const botaoCriarTarefa = document.getElementById('criar-tarefa');
  botaoCriarTarefa.addEventListener('click', botaoNovaTarefa);
};

adicionarNovaTarefa();

function textLine() {
    list.addEventListener('dblclick', (event) => {
      event.target.classList.toggle('completed');
    });
  }
  
  textLine();
  
  function clearAll() {
    const btnClear = document.getElementById('apaga-tudo');
    btnClear.addEventListener('click', () => {
      while (list.firstChild) {
        list.removeChild(list.firstChild);
      }
    });
  }
  
  clearAll();

  
  function deleteFinished() {
    const btnDeleteFinished = document.getElementById('remover-finalizados');
    btnDeleteFinished.addEventListener('click', () => {
      const finished = document.querySelectorAll('.completed');
  
      for (let index = 0; index < finished.length; index += 1) {
        list.removeChild(finished[index]);
      }
    });
  }
  
  deleteFinished();

