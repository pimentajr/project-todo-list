// http://www.learningaboutelectronics.com/Articles/How-to-retrieve-data-from-a-text-box-in-javascript.php#:~:text=To%20extract%20the%20information%20which,entered%20into%20this%20text%20box.
function addToList() {
  const task = document.querySelector('#texto-tarefa');
  const addTask = task.value;
  const orderList = document.getElementById('lista-tarefas');
  const node = document.createElement('li');
  node.innerHTML = addTask;
  orderList.appendChild(node);
  task.value = '';
}

const findList = document.querySelector('#lista-tarefas');
const countLines = document.getElementsByTagName('li');

// https://stackoverflow.com/questions/8739665/is-background-colornone-valid-css

function colorLine(event) {
    for (let index = 0; index < countLines.length; index += 1) {
    countLines[index].classList.remove ('selected');
  }
  event.target.classList.add ('selected');
}

findList.addEventListener('click', colorLine);

function completedTask(event) {
  event.target.classList.toggle('completed');
}

findList.addEventListener('dblclick', completedTask);

// https://www.w3schools.com/jsref/met_node_removechild.asp
function deleteAll() {
  while (countLines.length > 0) {
    findList.removeChild(findList.childNodes[0]);
  }
  localStorage.clear();
}

function deleteDoneTask() {
  const completedTask = document.getElementsByClassName('completed');
  while (completedTask.length > 0) {
    findList.removeChild(completedTask[0]);
  }
}
// https://www.w3schools.com/jsref/prop_win_localstorage.asp
// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload
function saveTasks() {
  localStorage.setItem('tasks', findList.innerHTML);
}

window.onload = function () {
  const savedList = localStorage.getItem('tasks');
  findList.innerHTML = savedList;
};

// function moveUp() {
  
// }

// function moveDown() {

// }

function removeSelected() {
  const selectedLine = document.querySelector('.selected');
  findList.removeChild(selectedLine);
}
// function completedTask (event) {
//   const trace = event.target;
//   const lineEffect = window.getComputedStyle(trace).getPropertyValue('text-decoration');
//   if (lineEffect === 'line-through solid rgb(0, 0, 0)') {
//     event.target.className = '';
//   } else {
//     event.target.className = 'completed';
//   }
// }
// findList.addEventListener('dblclick', completedTask);
