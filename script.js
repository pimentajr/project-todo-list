const TASK_INPUT = document.querySelector('#texto-tarefa');
const ADD_TASK_BUTTON = document.querySelector('#criar-tarefa');
const TASK_LIST = document.querySelector('#lista-tarefas');
const TASK_LIST_CHILDREN = TASK_LIST.children;

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
  [...TASK_LIST_CHILDREN].forEach((child) => {
    const CHILD = child;
    CHILD.style.backgroundColor = null;
  });
}

TASK_LIST.addEventListener('click', (e) => {
  if (e.target !== this) {
    resetSelectedChildren();
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});

TASK_LIST.addEventListener('dblclick', (e) => {
  if (e.target !== this) {
    e.target.classList.toggle('completed');
  }
});
