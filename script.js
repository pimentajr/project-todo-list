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
      listas[index].className = '';
    }
    if (event.target.localName === 'li') {
      event.target.style.backgroundColor = `rgb(128, 128, 128)`;
      event.target.className = 'selected';
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
  });
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

// 12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava
// O que será verificado:
// Será verificado que existe um elemento button com o id salvar-tarefas
// Será verificado que, quando a lista tiver vários elementos, alguns dos quais marcados como finalizados, um recarregamento da página mantém a lista exatamente como está.

// Salvar as tarefas no storage
function saveTasks(salvarTarefas) {
  salvarTarefas.addEventListener('click', () => {
    localStorage.clear()
    let lists = document.getElementsByTagName('li');
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
    let task = document.createElement('li');
    task.innerText = text;
    task.className = classCompleted;
    listaTarefa.appendChild(task);
}

// Carrega as tarefas do storage
function loadTasks(listaTarefa) {
  for (let index = 0; index < localStorage.length; index++) {
    let text = localStorage.getItem(`item${index}`).split(',');
    reCreateTasks(text[0], text[1], listaTarefa);
  }
}

// Subir de posição item da lista
function moveUp(moverCima, listaTarefa) {
  moverCima.addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    const upPosition = selected.previousElementSibling;
    console.log(upPosition);
    if(upPosition) {
      listaTarefa.insertBefore(selected, upPosition);
    }
  })
}

// Descer de posição item da lista
function moveDown(moverBaixo, listaTarefa) {
  moverBaixo.addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    const downPosition = selected.nextElementSibling;
    if(downPosition) {
      listaTarefa.insertBefore(selected, downPosition.nextElementSibling);
    }
  })
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
  createTasks(textoTarefa, criarTarefa, listaTarefa);
  changeBackgroundListColor(listaTarefa);
  completeTask(listaTarefa);
  clearTaskList(apagaTudo, listaTarefa);
  clearCompleteTasks(removerFinalizados, listaTarefa);
  saveTasks(salvarTarefas);
  loadTasks(listaTarefa);
  moveUp(moverCima, listaTarefa);
  moveDown(moverBaixo, listaTarefa)
}