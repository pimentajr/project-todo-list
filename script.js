const inputTarefa = document.getElementById('texto-tarefa');
const listOL = document.getElementById('lista-tarefas');
const addButton = document.getElementById('criar-tarefa');
const removeAllBtn = document.getElementById('apaga-tudo');
const delCompleted = document.getElementById('remover-finalizados');

const completedsArray = [];
let lastSelected;

function insertNewListItem() {
  const newLi = document.createElement('li');
  newLi.innerText = inputTarefa.value;
  listOL.appendChild(newLi);
  inputTarefa.value = '';
}

// Req 7 e 8
function selectLi(event) {
  const targetAtual = event.target;

  if (targetAtual !== lastSelected) {
    targetAtual.classList.add('selected');
    if (lastSelected !== undefined) {
      lastSelected.classList.remove('selected');
    }
  }
  lastSelected = targetAtual;
}

// Req 9
function completedTask(event) {
  const targetAtual = event.target;
  if (targetAtual.classList[0] === 'completed' || targetAtual.classList[1] === 'completed') {
    targetAtual.classList.remove('completed');
    completedsArray.splice(completedsArray.length - 1, 1);
  } else {
    targetAtual.classList.add('completed');
    completedsArray.push(targetAtual);
  }
}

// Req 11
function rmvCompletedTasks() {
  for (let i = 0; i < completedsArray.length; i += 1) {
    completedsArray[i].remove();
  }
}

// Req 10
function clearList() {
  listOL.innerHTML = '';
}

window.onload = () => {
  addButton.addEventListener('click', insertNewListItem);
  removeAllBtn.addEventListener('click', clearList);
  delCompleted.addEventListener('click', rmvCompletedTasks);
  listOL.addEventListener('click', selectLi);
  listOL.addEventListener('dblclick', completedTask);
};
