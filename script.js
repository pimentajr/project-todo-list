const list = document.getElementById('lista-tarefas');
const creatTaskButton = document.querySelector('#criar-tarefa');
const clearTasksButton = document.querySelector('#apaga-tudo');
const clearCompletedButton = document.querySelector('#remover-finalizados');
const saveTasksButton = document.querySelector('#salvar-tarefas');
const removeSelectedButton = document.querySelector('#remover-selecionado');

function creatList() {
  const input = document.querySelector('#texto-tarefa');
  const inputTask = input.value;
  if (inputTask !== '') {
    const newItem = document.createElement('li');
    newItem.innerHTML = inputTask;
    list.appendChild(newItem);
    input.value = '';
  }
}

function selectList(e) {
  for (let i = 0; i < list.children.length; i += 1) {
    if (list.children[i] !== e.target) {
      list.children[i].style.backgroundColor = 'white';
    }
  }
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function completTask(e) {
  e.target.classList.toggle('completed');
}