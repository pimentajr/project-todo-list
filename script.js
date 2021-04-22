const newTaskButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

// Botão para criar tarefa:
function addTask() {
  const newTaskItem = document.createElement('li');
  newTaskItem.innerText = document.getElementById('texto-tarefa').value;
  taskList.appendChild(newTaskItem);
  newTaskItem.className = 'task';

  document.getElementById('texto-tarefa').value = '';
}

newTaskButton.addEventListener('click', addTask);

// Função para selecionar a tarefa clicada:
function taskSelector(event) {
  const target = event.target
  const tasks = document.querySelectorAll('li');
  // primeiro remover outros selected
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].classList.remove('selected');
  }
  // definir o selected
  if (target.classList.contains('task')) {
    target.classList.add('selected');
  } 
  // falta colocar para quando clicar retirar o class selected
  
//   if (evento.classList.contains('itens-tarefa')
//   taskDone.classList.add('selected');
}

taskList.addEventListener('click', taskSelector);

// Função para riscar tarefa concluida:
function taskCompleted(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

taskList.addEventListener('dblclick', taskCompleted);

// Botão para limpar as tarefas feitas:
function removeTasksDone() {
  const tasksDone = document.querySelectorAll('li.completed');
  for (let index = 0; index < tasksDone.length; index += 1) {
    tasksDone[index].remove();
  }
}

document.querySelector('#remover-finalizados').addEventListener('click', removeTasksDone);

// Botão de reset:
function reset() {
  const tasks = document.querySelectorAll('li');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].remove();
  }
}

document.querySelector('#apaga-tudo').addEventListener('click', reset);

const saveTaskListBtn = document.querySelector('#salvar-tarefas');

//Botão salvar para mais
// function saveTaskContent() {
// //   const taskListContent = taskList.innerHTML;
// //   localStorage.setItem('saved task list', taskListContent);
// //   const taskListContent = [];
// //   for (let index = 0; index < taskList.children.length; index += 1) {
// //     taskListContent.push(taskList.children[index].innerHTML);
// //   }
// //   localStorage.setItem('listaSalva', taskListContent);
//   const taskListContent = [];
//   for (let index = 0; index < taskList.children.length; index += 1) {
//         taskListContent.push(taskList.children[index].innerHTML);
//       }
//     }

// function loadTaskListContent() {
//   const taskListContent = localStorage.getItem('listaSalva');
//   for (let index = 0; index < taskListContent.length; index += 1) {
//       const newTaskItem = document.createElement('li')
//       newTaskItem.innerHTML = taskListContent[index];
//       taskList.appendChild(newTaskItem);      
//   }
// }

// saveTaskListBtn.addEventListener('click', saveTaskContent);
// loadTaskListContent();
