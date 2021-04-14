const textoTarefa = document.getElementById('texto-tarefa');
const buttonCriarTarefa = document.getElementById('criar-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');

buttonCriarTarefa.addEventListener('click', () => {
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = textoTarefa.value;
  listaDeTarefas.appendChild(novaTarefa);
  textoTarefa.value = '';
});

const mouseClick = document.querySelectorAll('#lista-tarefas');
mouseClick.document.addEventListener('click', () => {
  const colorOnClick = document.createElement('li');
  colorOnClick.style.background = rgb(128, 128, 128);
});
