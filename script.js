function newListItem() {
    let newLI = document.createElement('li');
    let newValue = document.getElementById('texto-tarefa').value;
    newLI.innerText = newValue;
    if (newValue === '') {
        alert('Adicione uma nova terafa!');
    } else {
        document.getElementById('lista-tarefas').appendChild(newLI);
    }
    document.getElementById('texto-tarefa').value = '';
}
let toDoList = document.getElementById('lista-tarefas');
toDoList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    const countLine = document.querySelector('.selected');
    if (countLine != null) {
      countLine.classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
});

toDoList.addEventListener('dblclick', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
  }
});

// const clearTaskList = document.getElementById('apaga-tudo');
// clearTaskList.addEventListener('click', () => {
//   const clearList = listTask.querySelectorAll('LI');
//   for (let index = 0; index < clearList.length; index += 1) {
//     clearList[index].remove();
//   }
// });
const removeFinishedTasks = document.getElementById('remover-finalizados');
removeFinishedTasks.addEventListener('click', () => {
  const clearList = document.querySelectorAll('.completed');
  for (let index = 0; index < clearList.length; index += 1) {
    clearList[index].remove();
  }
});