let tarefas = document.querySelectorAll('li');

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

  // Muda fundo da tarefa quando clicada
  tarefas = document.querySelectorAll('#lista-tarefas li');
  for (const tarefa of tarefas) {
    tarefa.addEventListener('click', (event) => {
      // Antes de atribuir selected, desatribui de todas as li's
      for (const tarefa of tarefas) {
        tarefa.className = '';
      }
      event.target.classList.add('selected');
    });
  }

  // Risca tarefa quando clicada 2x
  for (const tarefa of tarefas) {
    tarefa.addEventListener('dblclick', (event) => {
      event.target.classList.add('completed');
    });
  }
});
