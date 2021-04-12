// Cria item de lista
function createTasks(textoTarefa, criarTarefa, listaTarefa) {
  criarTarefa.addEventListener('click', () => {
    if (textoTarefa.value) {
      let task = document.createElement('li');
      task.innerText = textoTarefa.value;
      listaTarefa.appendChild(task);
      textoTarefa.value = '';
    }
  });
}

// Altera a cor de fundo do item clicado
function changeBackgroundListColor(listaTarefa) {
  listaTarefa.addEventListener('click', (event) => {
    const listas = document.querySelectorAll('li');
    for (let index = 0; index < listas.length; index += 1) {
      listas[index].style.backgroundColor = '';
    }
    if (event.target.localName === 'li') {
      event.target.style.backgroundColor = `rgb(128, 128, 128)`;
    }
  });
}

// Marca a tarefa como completa
function completeTask(listaTarefa) {
  listaTarefa.addEventListener('dblclick', (event) => {
    if (event.target.localName === 'li') {
      if (event.target.className) {
        event.target.className = '';
      } else {
        event.target.className = 'completed';
      }
    }
  });
}

// Apaga todas as tarefas
function clearTaskList(apagaTudo, listaTarefa) {
  apagaTudo.addEventListener('click', () => {
    if (listaTarefa.innerText) {
      listaTarefa.innerText = '';
    }
  })
}

// Remove tarefas finalizadas
function clearCompleteTasks(removerFinalizados, listaTarefa) {
  removerFinalizados.addEventListener('click', () =>{
    let completedTasks = document.getElementsByClassName('completed');
    for (let index = 0; index < completedTasks.length;) {
      listaTarefa.removeChild(completedTasks[index]);
    }
  });
}

// Carregar meus arquivos ao carregar a página
window.onload = () => {
  const textoTarefa = document.getElementById('texto-tarefa');
  const criarTarefa = document.getElementById('criar-tarefa');
  const listaTarefa = document.getElementById('lista-tarefas');
  const apagaTudo = document.getElementById('apaga-tudo');
  const removerFinalizados = document.getElementById('remover-finalizados');
  createTasks(textoTarefa, criarTarefa, listaTarefa);
  changeBackgroundListColor(listaTarefa);
  completeTask(listaTarefa);
  clearTaskList(apagaTudo, listaTarefa);
  clearCompleteTasks(removerFinalizados, listaTarefa);
}