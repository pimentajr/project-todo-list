// Cria item de lista
function createTasks(textoTarefa, criarTarefa, listaTarefa) {
  criarTarefa.addEventListener('click', () => {
    if (textoTarefa.value) {
      const task = document.createElement('li');
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
      listas[index].id = '';
    }
    if (event.target.localName === 'li') {
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
      event.target.id = 'selected';
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
      // eslint-disable-next-line no-param-reassign
      listaTarefa.innerText = '';
    }
  });
}

// Remove tarefas finalizadas
function clearCompleteTasks(removerFinalizados, listaTarefa) {
  removerFinalizados.addEventListener('click', () => {
    const completedTasks = document.getElementsByClassName('completed');
    for (let index = 0; index < completedTasks.length;) {
      listaTarefa.removeChild(completedTasks[index]);
    }
  });
}

// Salvar as tarefas no storage
function saveTasks(salvarTarefas) {
  salvarTarefas.addEventListener('click', () => {
    localStorage.clear();
    const lists = document.getElementsByTagName('li');
    for (let index = 0; index < lists.length; index += 1) {
      if (lists[index].className === 'completed') {
        localStorage.setItem(`item${index}`, `${lists[index].innerText}, completed`);
      } else {
        localStorage.setItem(`item${index}`, `${lists[index].innerText}`);
      }
    }
  });
}

// ReCria Lista de tarefas
function reCreateTasks(text, classCompleted, listaTarefa) {
  const task = document.createElement('li');
  task.innerText = text;
  task.className = classCompleted;
  listaTarefa.appendChild(task);
}

// Carrega as tarefas do storage
function loadTasks(listaTarefa) {
  for (let index = 0; index < localStorage.length; index += 1) {
    const text = localStorage.getItem(`item${index}`).split(',');
    reCreateTasks(text[0], text[1], listaTarefa);
  }
}

// Subir de posição item da lista
function moveUp(moverCima, listaTarefa) {
  moverCima.addEventListener('click', () => {
    const selected = document.querySelector('#selected');
    if (selected) {
      const upPosition = selected.previousElementSibling;
      console.log(upPosition);
      if (upPosition) {
        listaTarefa.insertBefore(selected, upPosition);
      }
    }
  });
}

// Descer de posição item da lista
function moveDown(moverBaixo, listaTarefa) {
  moverBaixo.addEventListener('click', () => {
    const selected = document.querySelector('#selected');
    if (selected) {
      const downPosition = selected.nextElementSibling;
      if (downPosition) {
        listaTarefa.insertBefore(selected, downPosition.nextElementSibling);
      }
    }
  });
}

// Remover task selecionada
function removeTaskSelected(removerSelecionado, listaTarefa) {
  removerSelecionado.addEventListener('click', () => {
    const selected = document.querySelector('#selected');
    listaTarefa.removeChild(selected);
  });
}

// Carregar meus arquivos ao carregar a página
window.onload = () => {
  const textoTarefa = document.getElementById('texto-tarefa');
  const criarTarefa = document.getElementById('criar-tarefa');
  const listaTarefa = document.getElementById('lista-tarefas');
  const apagaTudo = document.getElementById('apaga-tudo');
  const removerFinalizados = document.getElementById('remover-finalizados');
  const salvarTarefas = document.getElementById('salvar-tarefas');
  const moverCima = document.getElementById('mover-cima');
  const moverBaixo = document.getElementById('mover-baixo');
  const removerSelecionado = document.getElementById('remover-selecionado');
  createTasks(textoTarefa, criarTarefa, listaTarefa);
  changeBackgroundListColor(listaTarefa);
  completeTask(listaTarefa);
  clearTaskList(apagaTudo, listaTarefa);
  clearCompleteTasks(removerFinalizados, listaTarefa);
  saveTasks(salvarTarefas);
  loadTasks(listaTarefa);
  moveUp(moverCima, listaTarefa);
  moveDown(moverBaixo, listaTarefa);
  removeTaskSelected(removerSelecionado, listaTarefa);
};
