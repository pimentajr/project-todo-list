// 5.
function criarTarefa() {
  const oList = document.getElementById('lista-tarefas');
  const inputList = document.getElementById('texto-tarefa');
  const lItem = document.createElement('li');
  lItem.innerText = inputList.value;
  oList.appendChild(lItem);
  inputList.value = '';
}
const buttonCriarTarefa = document.getElementById('criar-tarefa');
buttonCriarTarefa.addEventListener('click', criarTarefa);
