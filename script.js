const task = document.querySelector('#criar-tarefa');

  task.addEventListener('click', () => {
		let captura = '';
    captura = document.querySelector('#texto-tarefa');
    const li = document.createElement('li');
    document.querySelector('#lista-tarefas').appendChild(li);
    li.innerHTML = captura.value;
		captura.value = '';
  });
