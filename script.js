const listaDeTarefas = document.querySelector('#lista-tarefas');
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
  for (let index = 0; index < itensFromList.length; index += 1) {
    itensFromList[index].style.backgroundColor = '';
  }
  const selectedItem = element.target;
  selectedItem.style.backgroundColor = 'rgb(128, 128, 128)';
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
    console.log(allListItens);
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
function loadWindow() {
  addElementTable();
  selectListItens();
  deleteList();
  concludeItens();
  setItens();
}

window.onload = loadWindow;
