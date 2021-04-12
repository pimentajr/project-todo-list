function assignmentTextPlaceHolder() {
  const textHolder = document.createElement('input');
  const textHolderPlacement = document.querySelector('#section-interactive');
  textHolderPlacement.appendChild(textHolder);
  textHolder.id = 'texto-tarefa';
}
assignmentTextPlaceHolder();

function assigmentList() {
  const listHolder = document.createElement('ol')
  const listHolderPlacement = document.querySelector('#section-interactive');
  listHolderPlacement.appendChild(listHolder);
  textHolder.id = 'lista-tarefas'
}
assigmentList();