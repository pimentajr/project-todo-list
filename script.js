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

orderedList.addEventListener('click', (event) => {
  const eventTarget = event.target;
  const selectedItem = document.querySelector('.selected');

  if (selectedItem) {
    selectedItem.classList.remove('selected');
  }

  eventTarget.classList.add('selected');
});
