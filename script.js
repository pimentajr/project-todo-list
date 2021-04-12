function assignmentTextPlaceHolder() {
  const textHolder = document.createElement('input');
  const textHolderPlacement = document.querySelector('#section-interactive');
  textHolderPlacement.appendChild(textHolder);
  textHolder.id = 'texto-tarefa';
}
assignmentTextPlaceHolder();

function assigmentList() {
  const listHolder = document.createElement('ol');
  const listHolderPlacement = document.querySelector('#list-section');
  listHolderPlacement.appendChild(listHolder);
  listHolder.id = 'lista-tarefas';
}
assigmentList();

function buttonCreat() {
  const buttonHolder = document.createElement('button');
  const buttonHolderPlacement = document.querySelector('#section-interactive');
  buttonHolder.id = 'criar-tarefa';
  buttonHolder.innerHTML = 'newAssigment';
  buttonHolderPlacement.appendChild(buttonHolder);
}
buttonCreat();

function creatNewAssignmentOnList() {
  const locateList = document.querySelector('#lista-tarefas');
  const newAssigment = document.createElement('li');
  locateList.appendChild(newAssigment);
  newAssigment.className = 'assigment'
  return newAssigment;
}

function buttonAssignmentCreat() {
  const locateButton = document.querySelector('#criar-tarefa');
  const textAssigment = document.querySelector('#texto-tarefa');
  function creatNewAssigment() {
    creatNewAssignmentOnList().innerHTML = textAssigment.value;
    textAssigment.value = ''
  }
  locateButton.addEventListener('click', creatNewAssigment);
}
buttonAssignmentCreat();
