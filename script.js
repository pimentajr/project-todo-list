const ol = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
const buttonAddTodo = document.getElementById('criar-tarefa');
const buttonClearAll = document.getElementById('apaga-tudo');

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
