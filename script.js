function addButton() {
  const idButton = document.getElementById('criar-tarefa');
  const inputTask = document.getElementById('texto-tarefa');
  const orderedList = document.getElementById('lista-tarefas');
  idButton.addEventListener('click', () => {
    const makeAList = document.createElement('li');
    makeAList.className = 'tasks';
    makeAList.innerText = inputTask.value;

    orderedList.appendChild(makeAList);
    inputTask.value = '';
  });
}
addButton();
