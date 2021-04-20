addTask = document.getElementById('criar-tarefa');
const selectTask = document.getElementById('lista-tarefas');
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');
const saveButton = document.querySelector('#salvar-tarefas');
const lista = document.querySelector('#lista-tarefas');

addTask.addEventListener('click', () => {
  const li = document.createElement('li');
  const inputValue = document.getElementById('texto-tarefa').value;
  const text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue === '') {
    alert('Campo vazio, informe uma tarefa!');
  }
  else {
    document.getElementById('lista-tarefas').appendChild(li);
  }
  document.getElementById('texto-tarefa').value = null;
});
function deleteAllButton() {
  const apagarAll = document.createElement('BUTTON');
  const buttonName = document.createTextNode('Apaga tudo');
  apagarAll.id = 'apaga-tudo';
  apagarAll.appendChild(buttonName);
  apagarAll.onclick = function () {
    const lista = document.getElementById('lista-tarefas');
    lista.innerHTML = '';
  }
  const menu = document.getElementById('menu');
  menu.appendChild(apagarAll);
}
deleteAllButton();

selectTask.addEventListener('dblclick', function(event) {
  let tasks = document.querySelectorAll('li');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].classList = 'noSelected';
    event.target.classList = 'selected'
      let taskSelected = document.querySelector('.selected');
      taskSelected.style.backgroundColor = 'rgb(128, 128, 128)'
    if (tasks[index].className === 'noSelected') {
      tasks[index].style.backgroundColor = 'white';
    } 
  }
});
function taskCompleted(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
selectTask.addEventListener('dblclick', taskCompleted);
moveUpButton.addEventListener('click', () => {
  const itemList = document.getElementsByTagName('li');
  for (let index = 0; index < itemList.length; index += 1) {
    if (itemList[index].classList.value.includes('selected') && index !== 0) {
      const saveItemList = itemList[index].outerHTML;
      itemList[index].outerHTML = itemList[index - 1].outerHTML;
      itemList[index - 1].outerHTML = saveItemList;
    }
  }
});
moveDownButton.addEventListener('click', () => {
  const itemList = document.getElementsByTagName('li');
  for (let index = itemList.length - 1; index >= 0; index -= 1) {
    if (itemList[index].classList.value.includes('selected') && index !== (itemList.length - 1)) {
      const saveItemList = itemList[index].outerHTML;
      itemList[index].outerHTML = itemList[index + 1].outerHTML;
      itemList[index + 1].outerHTML = saveItemList;
    }
  }
});

saveButton.addEventListener('click', () => {
  localStorage.setItem('lista-tarefas', lista.innerHTML);
});

const localSave = localStorage.getItem('lista-tarefas');
lista.innerHTML = localSave;