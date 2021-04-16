//  !Referencia para a manipulação do input 'https://www.w3schools.com/jsref/dom_obj_text.asp'
//  !Referencia para o uso de toggle 'https://www.w3schools.com/howto/howto_js_toggle_class.asp'

// *criação de constantes
// -apagar
const createTask = document.querySelector('#texto-tarefa');
const buttonTaskCreator = document.querySelector('#criar-tarefa');
const listOfTasks = document.querySelector('#lista-tarefas');
const cleanButton = document.querySelector('#apaga-tudo');
const cleanCompletedButton = document.querySelector('#remover-finalizados');
// -apagar

// -apagar

//  *Cria um item na lista
function createTaskItem() {
  const taskAdd = document.createElement('li');
  if (createTask.value !== '') {
    taskAdd.innerText = createTask.value;
    // -apagar
    listOfTasks.appendChild(taskAdd);
    // -apagar
  }
}

//  *limpa a barra de inserir texto
function clearTextInput() {
  createTask.value = '';
}

// -apagar linha
//  *da destaque ao item selecionado
//  !Referencia para a criação'https://github.com/tryber/sd-011-project-todo-list/pull/52'
function selectedTask(event) {
  const listSelected = document.getElementsByClassName('selected');
  for (let index = 0; index < listSelected.length; index += 1) {
    listSelected[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

// *marca os itens já realizados com um traço horizontal
function lineCompleted(event) {
  event.target.classList.toggle('completed');
}

// -apagar
// -apagar
// -apagar
//  *Limpa todos os itens da lista 
function cleanAll() {
  const list = document.querySelectorAll('li');
  for (let index = 0; index < list.length; index += 1) {
    list[index].remove();
  }
}

// todo: *Limpa todos os itens que já foram realizados
function cleanAllCompleted() {
  const completedTask = document.querySelectorAll('.completed');
  for (let i = 0; i < completedTask.length; i += 1) {
    completedTask[i].remove();
  }
}

// -apagar
// *Realiza todas as ações addEventListener
function readAddEventListener() {
  listOfTasks.addEventListener('click', selectedTask);
  listOfTasks.addEventListener('dblclick', lineCompleted);
  buttonTaskCreator.addEventListener('click', createTaskItem);
  buttonTaskCreator.addEventListener('click', clearTextInput);
  cleanButton.addEventListener('click', cleanAll);
  cleanCompletedButton.addEventListener('click', cleanAllCompleted);
}
readAddEventListener();
