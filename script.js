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
        tarefa.style.backgroundColor = 'white';
      }
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }

  // Risca tarefa quando clicada 2x
  for (const tarefa of tarefas) {
    tarefa.addEventListener('dblclick', (event) => {
      // Verifica se ja tem a classe completed
      if (event.target.className === '') {
        event.target.classList.add('completed');
      } else if (event.target.className === 'completed') {
        event.target.classList.remove('completed');
      }
    });
  }
});

const apagaTudo = document.querySelector('#apaga-tudo');
apagaTudo.addEventListener('click', () => {
  const lis = document.querySelectorAll('li');
  for (const li of lis) {
    // Recupera o elemento pai <ul> e remove seu elemento filho <li>
    li.parentNode.removeChild(li);
  }
});
