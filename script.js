const listaDeTarefas = document.querySelector('#lista-tarefas');
const grayRgb = 'rgb(128, 128, 128)';
function elementFromInput() {
  const inputText = document.getElementById('texto-tarefa');
  const listTask = listaDeTarefas;
  const createdIl = document.createElement('li');
  createdIl.innerText = inputText.value;
  listTask.appendChild(createdIl);
  const newInputText = inputText;
  newInputText.value = '';
}
function addElementTable() {
  const clickComand = document.getElementById('criar-tarefa');
  clickComand.addEventListener('click', elementFromInput);
}
function toColorIten(element) {
  const itensFromList = document.getElementsByTagName('li');
  const selectedItem = element.target;
  if (selectedItem.style.backgroundColor === grayRgb) {
    selectedItem.style.backgroundColor.innerText = '';
  } else {
    for (let index = 0; index < itensFromList.length; index += 1) {
      itensFromList[index].style.backgroundColor = '';
    }
    selectedItem.style.backgroundColor = grayRgb;
  }
}
function markElement(element) {
  const selectedItem = element.target;
  if (selectedItem.classList[0] === 'completed') {
    selectedItem.classList.remove('completed');
  } else {
    selectedItem.classList.add('completed');
  }
}
function selectListItens() {
  const listItens = listaDeTarefas;
  listItens.addEventListener('click', toColorIten);
  listItens.addEventListener('dblclick', markElement);
}
function eraseList() {
  const parentyList = listaDeTarefas;
  parentyList.innerHTML = '';
}
function deleteList() {
  const buttonDeletelist = document.getElementById('apaga-tudo');
  buttonDeletelist.addEventListener('click', eraseList);
}
function deleteItens() {
  const concludeItenstoDelete = document.getElementsByClassName('completed');
  for (let index = concludeItenstoDelete.length - 1; index >= 0; index -= 1) {
    concludeItenstoDelete[index].parentElement.removeChild(concludeItenstoDelete[index]);
  }
}
function concludeItens() {
  const removeConcludeBotton = document.querySelector('#remover-finalizados');
  removeConcludeBotton.addEventListener('click', deleteItens);
}
function saveItens() {
  const allItens = listaDeTarefas.children;
  let allListItens = '';
  for (let index = 0; index < allItens.length; index += 1) {
    if (allItens[index].className === 'completed') {
      allListItens += `${allItens[index].outerText}¢`;
    } else {
      allListItens += `${allItens[index].outerText}§`;
    }
  }
  sessionStorage.setItem('liList', `${allListItens}`);
}
function endLiNormal(inputElement, auxVariable) {
  const allItens = listaDeTarefas;
  let auxVar = auxVariable;
  if (inputElement === '§') {
    const getLi = document.createElement('li');
    getLi.innerText = auxVariable;
    allItens.appendChild(getLi);
    auxVar = '';
  } else if (inputElement === '¢') {
    const getLi = document.createElement('li');
    getLi.innerText = auxVariable;
    getLi.classList.add('completed');
    allItens.appendChild(getLi);
    auxVar = '';
  } else {
    auxVar += inputElement;
  }
  return auxVar;
}
function setItens() {
  const varSession = sessionStorage.liList;
  if (varSession !== undefined) {
    let auxVariable = '';
    for (let index = 0; index < sessionStorage.liList.length; index += 1) {
      auxVariable = endLiNormal(sessionStorage.liList[index], auxVariable);
    }
  }
  const salvaTarefas = document.getElementById('salvar-tarefas');
  salvaTarefas.addEventListener('click', saveItens);
}
function changeItens(inputElement, index, auxClas, parameter) {
  if (inputElement[index - parameter].classList[0] === 'completed') {
    inputElement[index].classList.remove('completed');
    inputElement[index].classList.add('completed');
  } else {
    inputElement[index].classList.remove('completed');
  }
  const backColor1 = inputElement[index];
  backColor1.style.backgroundColor.innerText = '';
  if (auxClas) {
    inputElement[index - parameter].classList.remove('completed');
    inputElement[index - parameter].classList.add('completed');
  } else {
    inputElement[index - parameter].classList.remove('completed');
  }
  const backColor2 = inputElement[index - parameter];
  backColor2.style.backgroundColor = grayRgb;
}
function toMoveUp() {
  const listTask = listaDeTarefas.children;
  for (let index = 1; index < listTask.length; index += 1) {
    if (listTask[index].style.backgroundColor === grayRgb) {
      const aux = listTask[index].outerText;
      const auxClas = (listTask[index].classList[0] === 'completed');
      changeItens(listTask, index, auxClas, 1);
      listTask[index].innerText = listTask[index - 1].outerText;
      listTask[index].classList.innerText = '';
      listTask[index - 1].innerText = aux;
    }
  }
}
function moveUp() {
  const buttonToUp = document.getElementById('mover-cima');
  buttonToUp.addEventListener('click', toMoveUp);
}
function toMoveDown() {
  const listTask = listaDeTarefas.children;
  for (let index = listTask.length - 2; index >= 0; index -= 1) {
    if (listTask[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      const aux = listTask[index].outerText;
      const auxClas = (listTask[index].classList[0] === 'completed');
      changeItens(listTask, index, auxClas, -1);
      listTask[index].innerText = listTask[index + 1].outerText;
      listTask[index].classList.innerText = '';
      listTask[index + 1].innerText = aux;
    }
  }
}
function moveDown() {
  const buttonToDown = document.getElementById('mover-baixo');
  buttonToDown.addEventListener('click', toMoveDown);
}
function deleteSelected() {
  const itensFromList2 = document.getElementsByTagName('li');
  for (let index = 0; index < itensFromList2.length; index += 1) {
    if (itensFromList2[index].style.backgroundColor === grayRgb) {
      itensFromList2[index].parentElement.removeChild(itensFromList2[index]);
    }
  }
}
function removeSelected() {
  const deleteSelectetMember = document.getElementById('remover-selecionado');
  deleteSelectetMember.addEventListener('click', deleteSelected);
}
function loadWindow() {
  addElementTable();
  selectListItens();
  deleteList();
  concludeItens();
  setItens();
  moveUp();
  moveDown();
  removeSelected();
}

window.onload = loadWindow;
