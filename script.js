/**
 * Cria elemento li contendo o texto (string) recedido e adiciona a classe 'task'
 */
function createTask(text) {
  const task = document.createElement('li');
  task.classList.add = 'task';
  task.innerHTML = text;
  return task;
}
/**
 * Adiciona valor do input (tarefa) à lista de tarefas
 */
function addTask() {
  const list = document.getElementById('lista-tarefas');
  const input = document.getElementById('texto-tarefa');
  if (input.value === '') {
    alert('Digite uma tarefa.');
  } else {
    const task = createTask(input.value);
    list.appendChild(task);
    input.value = '';
  }
}

window.onload = function init() {
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', addTask);
};
