// Exercício 4 - Crio lista ordenada OL
const createListOl = document.createElement('ol');
createListOl.id = 'lista-tarefas';
const getContainerMaster = document.getElementById('container-master');
getContainerMaster.appendChild(createListOl);

// Exercício 5 e 6 - Adiciono na lista o elemento do Input, ao clicar no botão Adicionar
const getButton = document.getElementById('criar-tarefa');
getButton.addEventListener('click', () => {
  const getTextInput = document.getElementById('texto-tarefa');
  const createLi = document.createElement('li');
  createLi.innerText = getTextInput.value;
  createLi.className = 'no-background no-line';
  createListOl.appendChild(createLi);
  getTextInput.value = '';
});

// Exercício 7 e 8 - Clicar item lista altera cor de fundo
createListOl.addEventListener('click', (e) => {
  const getSelected = document.getElementsByClassName('selected');
  for (let i = 0; i < getSelected.length; i += 1) {
    getSelected[i].className = getSelected[i].className.replace('selected', 'no-background');
  }
  e.target.className = e.target.className.replace('no-background', 'selected');
});

// Exercício 9 - Double click coloca riscado
createListOl.addEventListener('dblclick', (e) => {
  if (e.target.className.indexOf('no-line') !== -1) { // se tiver no-line
    e.target.className = e.target.className.replace('no-line', 'completed');
  } else { // se tiver completed
    e.target.className = e.target.className.replace('completed', 'no-line');
  }
});

// Exercício 10 - Apagar toda a Lista
const getButtonApagar = document.getElementById('apaga-tudo');
getButtonApagar.addEventListener('click', () => {
  const getListItens = document.getElementsByTagName('li');
  const lengthList = getListItens.length;
  for (let i = lengthList - 1; i >= 0; i -= 1) {
    getListItens[i].remove();
  }
});

// Exercício 11 - Remover Finalizados
const getButtonFinalizados = document.getElementById('remover-finalizados');
getButtonFinalizados.addEventListener('click', () => {
  const getListFinalizados = document.getElementsByClassName('completed');
  const lengthList = getListFinalizados.length;
  for (let i = lengthList - 1; i >= 0; i -= 1) {
    getListFinalizados[i].remove();
  }
});

// Exercício 13 - Botões pra cima pra baixo
const getButtonCima = document.getElementById('mover-cima');
getButtonCima.addEventListener('click', () => {
  const elementosLista = document.getElementsByTagName('li');
  let classe = ''; let index = 0;
  for (let i = 0; i < elementosLista.length; i += 1) {
    classe = elementosLista[i].className;
    if (classe.indexOf('selected') !== -1) {
      index = i;
    }
  }
  if (index > 0) {
    const classItemSelected = elementosLista[index].className;
    const textItemSelected = elementosLista[index].innerHTML;
    const helpClass = elementosLista[index - 1].className;
    const helpText = elementosLista[index - 1].innerHTML;
    elementosLista[index - 1].className = classItemSelected;
    elementosLista[index - 1].innerHTML = textItemSelected;
    elementosLista[index].className = helpClass;
    elementosLista[index].innerHTML = helpText;
  }
});

const getButtonBaixo = document.getElementById('mover-baixo');
getButtonBaixo.addEventListener('click', () => {
  const elementosLista = document.getElementsByTagName('li');
  let classe = ''; let index = -1;
  for (let i = 0; i < elementosLista.length; i += 1) {
    classe = elementosLista[i].className;
    if (classe.indexOf('selected') !== -1) {
      index = i;
    }
  }
  if (index < elementosLista.length - 1 && index !== -1) {
    const classItemSelected = elementosLista[index].className;
    const textItemSelected = elementosLista[index].innerHTML;
    const helpClass = elementosLista[index + 1].className;
    const helpText = elementosLista[index + 1].innerHTML;
    elementosLista[index + 1].className = classItemSelected;
    elementosLista[index + 1].innerHTML = textItemSelected;
    elementosLista[index].className = helpClass;
    elementosLista[index].innerHTML = helpText;
  }
});

// Exercício 14
const buttonRemover = document.getElementById('remover-selecionado');
buttonRemover.addEventListener('click', () => {
  const elementosLista = document.getElementsByTagName('li');
  let index = -1; let classe = '';
  for (let i = 0; i < elementosLista.length; i += 1) {
    classe = elementosLista[i].className;
    if (classe.indexOf('selected') !== -1) {
      index = i;
    }
  }
  if (index !== -1) {
    elementosLista[index].remove();
  }
});

// Exercício 12
const buttonSalvar = document.getElementById('salvar-tarefas');
buttonSalvar.addEventListener('click', () => {
  const listItens = document.getElementsByTagName('li');
  const vetor = [];
  for (let i = 0; i < listItens.length; i += 1) {
    vetor.push({
      text: listItens[i].innerText,
      completed: listItens[i].classList.contains('completed'),
    });
  }
  const listJson = JSON.stringify(vetor);
  localStorage.setItem('taskList', listJson);
  console.log(vetor);
  console.log(listJson);
});

function addTask(text) {
  const newTask = document.createElement('li');
  newTask.innerText = text;
  createListOl.appendChild(newTask);
  return newTask;
}

function loadLista() {
  if (!Storage || !localStorage.taskList) {
    return;
  }
  const taskList = JSON.parse(localStorage.taskList);
  for (let i = 0; i < taskList.length; i += 1) {
    const newTask = addTask(taskList[i].text);
    if (taskList[i].completed) {
      newTask.classList.add('completed');
    }
  }
}
loadLista();
