// Adiciona tarefas
const button = document.querySelector('#criar-tarefa');
button.addEventListener('click', () => {
  const ol = document.querySelector('#lista-tarefas');
  const tarefa = document.createTextNode(
    document.querySelector('#texto-tarefa').value
  );
  const li = document.createElement('li');
  li.appendChild(tarefa);
  ol.appendChild(li);
  document.querySelector('#texto-tarefa').value = '';
});
