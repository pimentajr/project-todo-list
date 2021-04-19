const orderedList = document.getElementById('lista-tarefas');

function addButton() {
  const idButton = document.getElementById('criar-tarefa');
  const inputTask = document.getElementById('texto-tarefa');
  idButton.addEventListener('click', () => {
    const makeAList = document.createElement('li');
    makeAList.className = 'tasks';
    makeAList.innerText = inputTask.value;

    orderedList.appendChild(makeAList);
    inputTask.value = '';
  });
}
addButton();

orderedList.addEventListener('click', (oneClick) => {
  const eventTarget = oneClick.target;
  const selectedItem = document.querySelector('.selected');

  if (selectedItem) {
    selectedItem.classList.remove('selected');
  }

  eventTarget.classList.add('selected');
});

orderedList.addEventListener('dblclick', (doubleClick) => {
  const doubleClickTarget = doubleClick.target;
  if (doubleClickTarget.classList.contains('completed')) {
    doubleClickTarget.classList.remove('completed');
  } else {
    doubleClickTarget.classList.add('completed');
  }
});
