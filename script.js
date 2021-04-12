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
  newAssigment.className = ('assigments');
  return newAssigment;
}

function backGroundColorChangeOnClick() {
  let colorized
  const locateAssigments = document.querySelectorAll('.assigments');
  for (let hint = 0; hint < locateAssigments.length; hint += 1) {
    colorized = function colorizeAssigment() {
      for (let index = 0; index < locateAssigments.length; index += 1) {
        locateAssigments[index].style.backgroundColor = 'rgb(288, 288, 288)';
        locateAssigments[hint].style.backgroundColor = 'rgb(128, 128, 128)';
      }
    }
    locateAssigments[hint].addEventListener('click', colorized);
  }
}
backGroundColorChangeOnClick();

function buttonAssignmentCreat() {
  const locateButton = document.querySelector('#criar-tarefa');
  const textAssigment = document.querySelector('#texto-tarefa');
  function creatNewAssigment() {
    creatNewAssignmentOnList().innerHTML = textAssigment.value;
    textAssigment.value = '';
    backGroundColorChangeOnClick();
  }
  locateButton.addEventListener('click', creatNewAssigment);
}
buttonAssignmentCreat();
