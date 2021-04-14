const input = document.getElementById('texto-tarefa');
const addButton = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const liItems = document.getElementsByTagName('li');
const clearAllButton = document.getElementById('apaga-tudo');
const finishedButton = document.getElementById('remover-finalizados');
const saveTasks = document.getElementById('salvar-tarefas');
const removeSelectedButton = document.getElementById('remover-selecionado');
const buttonUp = document.getElementById('mover-cima');
const buttonDown = document.getElementById('mover-baixo');
list.innerHTML = localStorage.getItem('savedTasks');

// Adiciona itens à lista
// Para adição de enter na lista, foi consultada a documentação em W3Schools sobre ações usando o "Enter"
// Source: https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
function addToList() {
  addButton.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = input.value;
    input.value = '';
    list.appendChild(li);
  });
  // Usando enter
  input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      const li = document.createElement('li');
      li.innerText = input.value;
      input.value = '';
      list.appendChild(li);
    }
  });
}
addToList();

// Muda cor de fundo ao clicar em um item da lista, mas somente um fica selecionado (requisito 8).
function changeBackgroundColor() {
  list.addEventListener('click', (event) => {
    for (let index = 0; index < liItems.length; index += 1) {
      liItems[index].classList.remove('selecionado');
    }
    event.target.classList.add('selecionado');
  });
}
changeBackgroundColor();

// Risca o texto
function addSerrated() {
  list.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}
addSerrated();

// Apaga tudo
function clearAll() {
  clearAllButton.addEventListener('click', () => {
    list.innerHTML = '';
  });
}
clearAll();

// Apaga selecionados
function clearSelected() {
  finishedButton.addEventListener('click', () => {
    const completedList = document.querySelectorAll('.completed');
    for (let i = 0; i < completedList.length; i += 1) {
      completedList[i].remove();
    }
  });
}
clearSelected();

// Salva tarefas
function saveList() {
  saveTasks.addEventListener('click', () => {
    const tasks = document.getElementById('lista-tarefas').innerHTML;
    localStorage.setItem('savedTasks', `${tasks}`);
  });
}
saveList();

function moveUpDown() {
  buttonDown.addEventListener('click', () => { 
    let li = document.querySelectorAll('li');
    console.log(li);
    for (index = 0; index < li.length; index += 1) {
      if (li[index].classList.contains('selecionado') && li[index].nextSibling !== null) {
        list.insertBefore(li[index].nextSibling, li[index]);
      }
    }
  });
}
  buttonUp.addEventListener('click', () => {
    let li = document.querySelectorAll('li');
    for (index = 0; index < li.length; index += 1){
      if (li[index].classList.contains('selecionado') && li[index].previousSibling !== null) {
        list.insertBefore(li[index], li[index].previousSibling);
      }
    }
  });
moveUpDown();

/** Remove tarefa selecionada */
function removeSelectedTask () {
  let task = document.getElementsByClassName('selecionado');
  removeSelectedButton.addEventListener('click', () => {
    console.log('amém');
    task[0].remove();
  });
}
removeSelectedTask();
