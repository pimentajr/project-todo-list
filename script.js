const buttonCriarTarefa = document.getElementById('criar-tarefa');
const listaDeTarefasOl = document.querySelector('#lista-tarefas');
const inputListaTarefa = document.querySelector('#texto-tarefa');

function createNewToDo(toDo) {
  const newLi = document.createElement('li');
  listaDeTarefasOl.appendChild(newLi);
  console.log(toDo)
  newLi.innerText = toDo;
}
function createListToDo() {
  createNewToDo(inputListaTarefa.value);
}

buttonCriarTarefa.addEventListener('click', createListToDo);
