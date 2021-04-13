const taskList = document.getElementById('lista-tarefas');
const btnAdd = document.getElementById('criar-tarefa');

const formList = document.getElementById('texto-tarefa');

function addLi(textForm) {
  const item = document.createElement('li');
  item.innerText = `${textForm}`;
  taskList.appendChild(item);
  formList.value = '';
  formList.focus();
}

function printSelectedItem(event) {
  const changeBg = event.target;
  if (document.querySelector('.selected') === null) {
    changeBg.classList.add('selected');
  }
}

btnAdd.addEventListener('click', () => {
  addLi(formList.value);
});

taskList.addEventListener('click', printSelectedItem);
