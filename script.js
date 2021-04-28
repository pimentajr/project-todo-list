const btnCreateTask = document.querySelector('#criar-tarefa');
const inputTask = document.querySelector('#texto-tarefa');
const olTask = document.querySelector('#lista-tarefas');

btnCreateTask.addEventListener('click', () => {
  const liTask = document.createElement('li');
  liTask.innerText = inputTask.value;
  olTask.appendChild(liTask);
  inputTask.value = '';
});

function selectedItemList() {
  olTask.addEventListener('click', (event) => {
    const eventTarget = event.target;
    const selectItem = document.querySelector('.selected');
    if (selectItem) {
      selectItem.classList.remove('selected');
    }
    eventTarget.classList.add('selected');
  });
}
selectedItemList();

function dbclickRisk() {
  olTask.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  })
}
dbclickRisk();