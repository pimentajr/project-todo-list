const TASK_INPUT = document.querySelector('#texto-tarefa');
const ADD_TASK_BUTTON = document.querySelector('#criar-tarefa');
const TASK_LIST = document.querySelector('#lista-tarefas');

ADD_TASK_BUTTON.addEventListener('click', () => {
  const TASK_INPUT_VALUE = TASK_INPUT.value;
  const TASK = document.createElement('li');
  TASK.innerText = TASK_INPUT_VALUE;
  TASK_LIST.appendChild(TASK);
  TASK_INPUT.value = null;
});

const obj = { a: 1, b: 2 };

for (let i = 0; i < 10; i += 1) {
  console.log(obj[i]);
}
