const ol = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
const buttonAddTodo = document.getElementById('criar-tarefa');

buttonAddTodo.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerText = input.value;
  ol.appendChild(li);
  input.value = '';
  input.focus();
});

ol.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.add('selected');
  }
});
