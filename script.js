const taskList = document.getElementById('lista-tarefas');
const btnAdd = document.getElementById('criar-tarefa');

const formList = document.getElementById('texto-tarefa');

function addLi(textForm) {
  const item = document.createElement('li');
  item.innerText = `${textForm}`;
  taskList.appendChild(item).classList.add('task-list');
  formList.value = '';
  formList.focus();
}

function printSelectedItem(event) {
  const changeBg = event.target;
  changeBg.style.backgroundColor = 'rgb(128, 128, 128)';
}

btnAdd.addEventListener('click', () => {
  addLi(formList.value);
});

taskList.addEventListener('click', printSelectedItem);
