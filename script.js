const btnCriarTarefa = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const textoTarefa = document.querySelector('#texto-tarefa');

window.onload = function() {
  function createTarefa() {
    btnCriarTarefa.addEventListener('click', function() {
      const createLi = document.createElement('li');
      createLi.innerHTML = textoTarefa.value;
      listaTarefas.appendChild(createLi);
      textoTarefa.value = '';
    })
  }
  createTarefa();
}
