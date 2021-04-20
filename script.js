// Requisitos 5 e 6
const list = document.getElementById('lista-tarefas');

function btnAddNewTask() {
  const newListItem = document.createElement('li');
  const taskText = document.getElementById('texto-tarefa');

  list.appendChild(newListItem).innerHTML = taskText.value;
  taskText.value = '';
}

const addNewTask = () => {
  const btnCreateTask = document.getElementById('criar-tarefa');
  btnCreateTask.addEventListener('click', btnAddNewTask);
};

addNewTask();

// Requisitos 7 e 8

function pintarCinza (event) {
      event.target.classList.add("seletor")

}


document.querySelector("ol").addEventListener("click", pintarCinza)

// Requisito 9

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

// Requisito 11
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

// Requisito 12
function salvamento() {
  const salvarLI = list.innerHTML;
  localStorage.listaSalva = salvarLI;
}

function carregarListaSalva() {
  if (localStorage.listaSalva) {
    list.innerHTML = localStorage.listaSalva;
  }
}

carregarListaSalva();

const btnSave = document.getElementById('salvar-tarefas');
btnSave.addEventListener('click', salvamento);

function pintarVermelho (event) {
  event.target.style.backgroundColor
}
