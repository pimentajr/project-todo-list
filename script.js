//  !Referencia para a manipulação do input 'https://www.w3schools.com/jsref/dom_obj_text.asp'
//  !Referencia para o uso de toggle 'https://www.w3schools.com/howto/howto_js_toggle_class.asp'

// *criação de constantes 
const selectedItens = document.querySelectorAll('.task');
const createTask = document.querySelector('#texto-tarefa');
const buttonTaskCreator = document.querySelector('#criar-tarefa');
const listOfTasks = document.querySelector('#lista-tarefas');
const cleanButton = document.querySelector('#apaga-tudo');
const cleanCompletedButton = document.querySelector('#remover-finalizados');
const completedTask = document.querySelectorAll('.completed');
const itemListSelected = document.querySelector('.selected');

let returnClassCompleted;

//  *Cria um item na lista
function createTaskItem() {
  const taskAdd = document.createElement('li');
  if (createTask.value !== '') {
    taskAdd.innerText = createTask.value;
    taskAdd.classList.add('task');
    //taskAdd.addEventListener('click', changeBackground);
    listOfTasks.appendChild(taskAdd);
    return;
  }
}

//  *limpa a barra de inserir texto
function clearTextInput() {
  createTask.value = '';
}


//  *da destaque ao item selecionado
//  !Referencia para a criação'https://github.com/tryber/sd-011-project-todo-list/pull/52'
function selectedTask(event) {
  let listSelected = document.getElementsByClassName('selected');
  for (let index = 0; index < listSelected.length; index += 1) {
      listSelected[index].classList.remove('selected');
  }
  event.target.className = 'selected';
  event.target.classList.add('selected');
}

// todo: marca os itens já realizados com um traço horizontal
// function completedTask() {
//   for (let i = 0; i < locateSelectedItens.length; i +=1) {
//     locateSelectedItens[i].classList.toggle('completed');
//     locateSelectedItens[i].addEventListener('dblclick', completedTask)
//   }

// }


//  *Limpa todos os itens da lista 
function cleanAll() {
  let list = document.querySelectorAll('li');
  for (let i = 0; i < list.length; i +=1) {
    list[i].remove();
  }   
}
    
// todo: *Limpa todos os itens que já foram realizados
  // function cleanAllCompleted() {
  //   for (let i = 0; i < completedTask.length; i +=1) {
  //     completedTask[i].remove();
  //   }
  // }
    
    
// *Realiza todas as ações addEventListener
function readAddEventListener() {    
  listOfTasks.addEventListener ("click", selectedTask);
  buttonTaskCreator.addEventListener('click', createTaskItem);
  buttonTaskCreator.addEventListener('click', clearTextInput);
  cleanButton.addEventListener('click', cleanAll);
  //cleanCompletedButton.addEventListener('click', cleanAllCompleted); 
}
readAddEventListener();
    