const ol = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
const buttonAddTodo = document.getElementById('criar-tarefa');
const buttonClearAll = document.getElementById('apaga-tudo');
const buttonClearChecked = document.getElementById('remover-finalizados');
const buttonClearSelected = document.getElementById('remover-selecionado');

buttonAddTodo.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerText = input.value;
  ol.appendChild(li);
  input.value = '';
  input.focus();
});

ol.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const selectedItem = document.querySelector('.selected');
    if (selectedItem !== null) {
      selectedItem.classList.remove('selected');
    }
    e.target.classList.add('selected');
  }
});

ol.addEventListener('dblclick', (e) => {
  const task = e.target;
  if (task.tagName === 'LI') {
    if (task.classList.contains('completed')) {
      task.classList.remove('completed');
    } else {
      task.classList.toggle('completed');
    }
  }
});

buttonClearAll.addEventListener('click', () => {
  ol.innerHTML = '';
});

buttonClearChecked.addEventListener('click', () => {
  const li = document.querySelectorAll('.completed');
  for (let index = 0; index < li.length; index += 1) {
    li[index].remove();
  }
});

buttonClearSelected.addEventListener('click', () => {
  const liSelected = document.querySelector('.selected');
  ol.removeChild(liSelected);
})
