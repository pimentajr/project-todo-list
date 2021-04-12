// Cria item de lista
function createTasks(textoTarefa, criarTarefa, listaTarefa) {
  criarTarefa.addEventListener('click', () => {
    let task = document.createElement('li');
    task.innerText = textoTarefa.value;
    console.log(textoTarefa.value);
    listaTarefa.appendChild(task);
    textoTarefa.value = '';
  });
}

// Altera a cor de fundo do item clicado
function changeBackgroundListColor(listaTarefa) {
  listaTarefa.addEventListener('click', (event) => {
    if (event.target.localName === 'li') {
      event.target.style.backgroundColor = `rgb(128, 128, 128)`;
    }
  });
}

// Carregar meus arquivos ao carregar a página
window.onload = () => {
  const textoTarefa = document.getElementById('texto-tarefa');
  const criarTarefa = document.getElementById('criar-tarefa');
  const listaTarefa = document.getElementById('lista-tarefas');
  createTasks(textoTarefa, criarTarefa, listaTarefa);
  changeBackgroundListColor(listaTarefa);
}

