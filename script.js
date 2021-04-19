window.onload = function() {
  const getList = document.getElementById('lista-tarefas')
  const getValue = localStorage.lista
  let lis = document.createElement('li')
  lis.innerHTML = getValue
  getList.appendChild(lis)
}

function createP() {
  /// função que cria o paragrafo do titulo
  const slctDiv = document.querySelector('#paragraph');
  const crtElement = document.createElement('p');
  const newCnt = 'Clique duas vezes em um item para marcá-lo como completo';
  crtElement.setAttribute('id', 'funcionamento');
  crtElement.innerText = newCnt;
  slctDiv.appendChild(crtElement);
}

createP();

function createLi() {
  /// funçao que cria a lista
  const slctDiv = document.getElementById('list');
  const crtElement = document.createElement('ol');
  crtElement.setAttribute('id', 'lista-tarefas');
  crtElement.setAttribute('onclick', 'infos()');
  crtElement.addEventListener('dblclick', dbclick);
  slctDiv.appendChild(crtElement);
}

createLi();

function createTask() {
  /// função que adiciona o item na lista
  const input = document.querySelector('#texto-tarefa');
  const textInput = input.value;
  const list = document.querySelector('#lista-tarefas');
  const createLi = document.createElement('li');
  createLi.classList.add('item');
  createLi.innerText = textInput;
  list.appendChild(createLi);
  input.value = '';
}

function infos() {
  /// função que seleciona o item na lista
  const clear = document.getElementsByClassName('selected');
  const lenght = clear.length;
  if (lenght >= 1) {
    document.querySelector('.selected').classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function dbclick() {
  /// função que marca como completo ou desmarca
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function clearList() {
  /// função que limpa a lista
  const list = document.querySelector('ol');
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function clearFinish() {
  /// função que limpa as tarefas completas
  const listF = document.querySelectorAll('.completed');
  const tamanho = listF.length;
  for (let i = 0; i < tamanho; i += 1) {
    listF[i].remove();
  }
}

function removeSelected() {
  /// função que remove o item selecionado
  const selecteds = document.querySelector('.selected');
  selecteds.remove();
}

function moveUp() {
  /// função que move o item seleciona acima
  const selectUp = document.querySelector('.selected');
  if (selectUp != null){
    if (selectUp.previousElementSibling){
      selectUp.parentNode.insertBefore(selectUp, selectUp.previousElementSibling)
    }
  } else {

  }
}

function moveDown() {
  /// função que move o item selecionado abaixo
  const selectDown = document.querySelector('.selected')
  if (selectDown != null){
    if (selectDown.nextElementSibling){
      selectDown.parentNode.insertBefore(selectDown.nextElementSibling, selectDown);
    }
  } else {

  }
}

function saveAll() {
  /// função que salva tudo localmente
  const getInfos = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('lista', getInfos);
}


