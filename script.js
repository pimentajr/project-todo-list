const lista = document.getElementById('lista-tarefas');

function addTaskList() {
  const newItem = document.createElement('li');
  const task = document.getElementById('texto-tarefa');
  lista.appendChild(newItem).innerHTML = task.value;
  task.value = '';
}

const addTask = () => {
  const createTaskList = document.getElementById('criar-tarefa');
  createTaskList.addEventListener('click', addTaskList);
};
addTask();

function backGround() {
  lista.addEventListener('click', (event) => {
    const selecionado = document.querySelector('.selected');

    if (selecionado != null) {
      selecionado.classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}
backGround();

function tarefaFinalizada() {
  lista.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}
tarefaFinalizada();

