const TASK_INPUT = document.querySelector('#texto-tarefa');
const ADD_TASK_BUTTON = document.querySelector('#criar-tarefa');
const TASK_LIST = document.querySelector('#lista-tarefas');
const REMOVE_ALL_TASKS_BUTTON = document.querySelector('#apaga-tudo');
const REMOVE_COMPLETED_TASKS_BUTTON = document.querySelector('#remover-finalizados');
const REMOVE_SELECTED_TASKS_BUTTON = document.querySelector('#remover-selecionado');

REMOVE_ALL_TASKS_BUTTON.addEventListener('click', () => {
  if (TASK_LIST.children.length) {
    TASK_LIST.innerHTML = '';
  }
});

REMOVE_SELECTED_TASKS_BUTTON.addEventListener('click', () => {
  [...TASK_LIST.children].find((child) => child.classList.contains('selected')).remove();
});

REMOVE_COMPLETED_TASKS_BUTTON.addEventListener('click', () => {
  const isTaskCompleted = (task) => task.classList.contains('completed');
  [...TASK_LIST.children].reduceRight((acc, child) => {
    if (isTaskCompleted(child)) child.remove();
    return 0;
  }, 0);
});

ADD_TASK_BUTTON.addEventListener('click', () => {
  const TASK_INPUT_VALUE = TASK_INPUT.value;
  const TASK = document.createElement('li');
  TASK.innerText = TASK_INPUT_VALUE;
  TASK_LIST.appendChild(TASK);
  TASK_INPUT.value = null;
  TASK_INPUT.focus();
});

[...TASK_LIST.children].forEach((child) => {
  console.log(1);
  child.addEventListener('click', () => {
    child.classList.toggle('completed');
  });
});

function resetSelectedChildren() {
  [...TASK_LIST.children].forEach((child) => {
    const CHILD = child;
    CHILD.style.backgroundColor = null;
    CHILD.classList.remove('selected');
  });
}

TASK_LIST.addEventListener('mousedown', (e) => {
  if (e.target !== this) {
    resetSelectedChildren();
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
    e.target.classList.add('selected');
  }
});

TASK_LIST.addEventListener('dblclick', (e) => {
  if (e.target !== this) {
    e.target.classList.toggle('completed');
  }
});
