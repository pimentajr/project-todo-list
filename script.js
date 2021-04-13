const taskList = document.getElementById('lista-tarefas');
const btnAdd = document.getElementById('criar-tarefa');
const btnClearAll = document.getElementById('apaga-tudo');

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
  } else {
    document.querySelector('.selected').classList.remove('selected');
    changeBg.classList.add('selected');
  }
}

function taskDone(event) {
  const done = event.target;
  if (done.className !== 'completed' && done.className === 'selected') {
    done.className = 'completed';
  } else {
    done.classList.remove('completed');
  }
}

function clearList() {
  const clear = document.getElementById('lista-tarefas');
  while (clear.lastElementChild) {
    clear.removeChild(clear.lastElementChild);
  }
}

btnAdd.addEventListener('click', () => {
  addLi(formList.value);
});

taskList.addEventListener('click', printSelectedItem);
taskList.addEventListener('dblclick', taskDone);
btnClearAll.addEventListener('click', clearList);
