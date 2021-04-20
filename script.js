const tarefa = document.getElementById('texto-tarefa');
const botao = document.getElementById('criar-tarefa');
const toDoList = document.getElementById('lista-tarefas');
function listaDeTarefas() {
  if (tarefa.value !== '') {
    const tarefas = document.createElement('li');
    tarefas.innerText = tarefa.value;
    tarefa.value = '';
    toDoList.appendChild(tarefas);
  }
}
botao.addEventListener('click', listaDeTarefas);
