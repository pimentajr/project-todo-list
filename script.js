const listOfTasks = document.querySelector('#lista-tarefas');

function makeTask(textTask) {
  const task = document.createElement('li');

  task.innerText = textTask;
  task.classList.add('task');

  listOfTasks.appendChild(task);
}

function loadStorage() {
  if (localStorage.taskList) {
    listOfTasks.innerHTML = localStorage.taskList;
  }
}

window.onload = () => {
  loadStorage();
};

document.querySelector('#criar-tarefa').addEventListener('click', () => {
  const input = document.querySelector('#texto-tarefa');
  const text = input.value;

  makeTask(text);
  input.value = '';
});

document.querySelector('#apaga-tudo').addEventListener('click', () => {
  while (listOfTasks.firstElementChild) {
    listOfTasks.removeChild(listOfTasks.firstElementChild);
  }
});

document.querySelector('#remover-finalizados').addEventListener('click', () => {
  while (listOfTasks.querySelector('.completed')) {
    listOfTasks.removeChild(listOfTasks.querySelector('.completed'));
  }
});

// Font: https://stackoverflow.com/questions/19225682/can-i-save-innerhtml-of-an-element-to-html5-local-storage/19225883
document.querySelector('#salvar-tarefas').addEventListener('click', () => {
  localStorage.taskList = listOfTasks.innerHTML;
});

// Font: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/replaceChild
// Font: https://developer.mozilla.org/en-US/docs/Web/API/Node/isSameNode
// Font: https://stackoverflow.com/questions/21422337/append-element-as-sibling-after-element
// Font: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
document.querySelector('#mover-cima').addEventListener('click', () => {
  if (document.querySelector('.selected')) {
    const selected = document.querySelector('.selected');
    if (!selected.isSameNode(listOfTasks.firstChild)) {
      const oldPosition = listOfTasks.replaceChild(selected, selected.previousElementSibling);
      selected.insertAdjacentElement('afterend', oldPosition);
    }
  }
});

document.querySelector('#mover-baixo').addEventListener('click', () => {
  if (document.querySelector('.selected')) {
    const selected = document.querySelector('.selected');
    if (!selected.isSameNode(listOfTasks.lastChild)) {
      const oldPosition = listOfTasks.replaceChild(selected, selected.nextElementSibling);
      selected.insertAdjacentElement('beforebegin', oldPosition);
    }
  }
});

document.querySelector('#remover-selecionado').addEventListener('click', () => {
  if (document.querySelector('.selected')) {
    const selected = document.querySelector('.selected');
    listOfTasks.removeChild(selected);
  }
});

listOfTasks.addEventListener('click', (event) => {
  if (event.target.classList.contains('task')) {
    if (document.querySelector('.selected')) {
      document.querySelector('.selected').classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
});

listOfTasks.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) event.target.classList.remove('completed');
  else event.target.classList.add('completed');
});
