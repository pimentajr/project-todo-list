function createP() {
  /// função que cria o paragrafo do titulo
  let slctDiv = document.querySelector('#paragraph');
  let crtElement = document.createElement('p');
  let newCnt = 'Clique duas vezes em um item para marcá-lo como completo';
  crtElement.setAttribute('id', 'funcionamento');
  crtElement.innerText = newCnt;
  slctDiv.appendChild(crtElement);
}

createP();

function createLi() {
  /// funçao que cria a lista
  var slctDiv = document.getElementById('list');
  var crtElement = document.createElement('ol');
  crtElement.setAttribute('id', 'lista-tarefas');
  crtElement.setAttribute('onclick', 'infos()');
  crtElement.addEventListener('dblclick', dbclick);
  slctDiv.appendChild(crtElement);
}

createLi();

function createTask() {
  /// função que adiciona o item na lista
  var input = document.querySelector('#texto-tarefa');
  var textInput = input.value;
  var list = document.querySelector('#lista-tarefas');
  var createLi = document.createElement('li');
  createLi.classList.add('item');
  createLi.innerText = textInput;
  list.appendChild(createLi);
  input.value = '';
}

function infos() {
  /// função que seleciona o item na lista
  let clear = document.getElementsByClassName('selected');
  let lenght = clear.length;
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
  var list = document.querySelector('ol');
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function clearFinish() {
  /// função que limpa as tarefas completas
  var listF = document.querySelectorAll('.completed');
  var tamanho = listF.length;
  for (let i = 0; i < tamanho; i += 1) {
    listF[i].remove();
  }
}

function removeSelected() {
  /// função que remove o item selecionado
  var selecteds = document.querySelector('.selected');
  selecteds.remove();
}

// if(listF.length){
//   listF[listF.length-1].remove();
// }

// crtElement.setAttribute('onclick', 'infos()')
// crtElement.addEventListener('dblclick', dbclick)

// var cont = 0
// var listSelector = document.getElementsByTagName('li')
// for (let iten = 0; iten < listSelector.length; itens += 1){
//   cont += 1
// }
