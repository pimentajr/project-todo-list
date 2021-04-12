function assignmentTextPlaceHolder() {
  const textHolder = document.createElement('input');
  const textHolderPlacement = document.querySelector('#section-interactive')
  textHolderPlacement.appendChild(textHolder);
  textHolder.id = 'texto-tarefa';
}
assignmentTextPlaceHolder()
