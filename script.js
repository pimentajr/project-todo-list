
const campoTexto = document.getElementById("texto-tarefa");

const listaTarefa = document.getElementById("lista-tarefas");

function addTarefa() {

  const novaTarefa = document.createElement('li')
  novaTarefa.innerText = campoTexto.value;

  listaTarefa.appendChild(novaTarefa);

  campoTexto.value = '';

}
const botao = document.getElementById("criar-tarefa");
botao.addEventListener('click', addTarefa);


