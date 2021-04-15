/** Constantes necessárias (botões e etc) */
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

/** Para adição de enter na lista, foi consultada a documentação em W3Schools sobre ações usando o "keyup"
 * Source: https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp */
function addToList() {
  addButton.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = input.value;
    input.value = '';
    list.appendChild(li);
  });
  /** Event usando enter */
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

/** Muda cor de fundo ao clicar em um item da lista, mas somente um fica selecionado (requisito 8). */
function changeBackgroundColor() {
  list.addEventListener('click', (event) => {
    for (let index = 0; index < liItems.length; index += 1) {
      liItems[index].classList.remove('selecionado');
    }
    event.target.classList.add('selecionado');
  });
}
changeBackgroundColor();

/** Risca o texto */
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

/** Apaga tudo */
function clearAll() {
  clearAllButton.addEventListener('click', () => {
    list.innerHTML = '';
  });
}
clearAll();

/** Apaga selecionados */
function clearSelected() {
  finishedButton.addEventListener('click', () => {
    const completedList = document.querySelectorAll('.completed');
    for (let i = 0; i < completedList.length; i += 1) {
      completedList[i].remove();
    }
  });
}
clearSelected();

/** Salva tarefas */
function saveList() {
  saveTasks.addEventListener('click', () => {
    const tasks = document.getElementById('lista-tarefas').innerHTML;
    localStorage.setItem('savedTasks', `${tasks}`);
  });
}
saveList();

/** Para resolver este requisito, foi usada a função .insertBefore para trocar a posição dos itens.
 * Source: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
 * Com ajuda do colega Alberto Candido eu consegui fazer os comandos de mover cima/baixo */
function moveUpDown() {
  buttonDown.addEventListener('click', () => {
    const li = document.querySelectorAll('li');
    for (let index = 0; index < li.length; index += 1) {
      if (li[index].classList.contains('selecionado') && li[index].nextSibling !== null) {
        list.insertBefore(li[index].nextSibling, li[index]);
      }
    }
  });
}
buttonUp.addEventListener('click', () => {
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('selecionado') && li[index].previousSibling !== null) {
      list.insertBefore(li[index], li[index].previousSibling);
    }
  }
});
moveUpDown();

/** Remove tarefa selecionada */
function removeSelectedTask() {
  const task = document.getElementsByClassName('selecionado');
  removeSelectedButton.addEventListener('click', () => {
    task[0].remove();
  });
}
removeSelectedTask();
