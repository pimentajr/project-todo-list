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

let removeFinishedTasks = document.getElementById('remover-finalizados');
removeFinishedTasks.addEventListener('click', () => {
  let clearList = document.querySelectorAll('.completed');
  for (let index = 0; index < clearList.length; index += 1) {
    clearList[index].remove();
  }
});

function clearAll() {
  let clearButton = document.querySelector('#apaga-tudo');
  clearButton.addEventListener('click', () => {
    let taskList = document.getElementById('lista-tarefas');
    taskList.innerHTML = '';
  });
}
 clearAll();

function saveTasks() {
  let saveList = document.getElementById('salvar-tarefas');
  saveList.addEventListener('click', () => {
    console.log('tesste');
    let listToSave = document.querySelector('#lista-tarefas').innerHTML;
    localStorage.setItem('tasks', `${listToSave}`);
  });
}
saveTasks();
