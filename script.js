const task = document.querySelector('#criar-tarefa');

task.addEventListener('click', () => {
  let captura = '';
  captura = document.querySelector('#texto-tarefa');
  const li = document.createElement('li');
  document.querySelector('#lista-tarefas').appendChild(li);
  li.innerHTML = captura.value;
  captura.value = '';
});

const ol = document.querySelector('ol');
ol.addEventListener('click', (evento) => {
  const eve = evento.target;
  const li = document.getElementsByTagName('li');
  for (let index = 0; index < li.length; index += 1) {
    li[index].classList.remove('select');
  }
  eve.classList.add('select');
});
