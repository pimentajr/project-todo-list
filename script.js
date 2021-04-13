http://www.learningaboutelectronics.com/Articles/How-to-retrieve-data-from-a-text-box-in-javascript.php#:~:text=To%20extract%20the%20information%20which,entered%20into%20this%20text%20box.
function addToList () {
  var task = document.querySelector('#texto-tarefa');
  var addTask = task.value;
  var orderList = document.getElementById('lista-tarefas');
  var node = document.createElement('li')
  node.innerHTML = addTask;
  orderList.appendChild(node);
  task.value = '';
}

const findList = document.querySelector('#lista-tarefas')
const countLines = document.getElementsByTagName('li');

// https://stackoverflow.com/questions/8739665/is-background-colornone-valid-css

function colorLine (event) {
  for (index = 0; index < countLines.length; index += 1) {
    countLines[index].style.backgroundColor = 'transparent';
  }
    event.target.style.backgroundColor = 'grey';
}
findList.addEventListener('click', colorLine);

findList.addEventListener('dblclick', completedTask);

function completedTask (event) {
  event.target.classList.toggle('completed');
}

findList.addEventListener('dblclick', completedTask);

function deleteAll () {
  while (countLines.length !== 'undefined') {
  findList.removeChild(findList.childNodes[0])
  }
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

// while (countLines.length !== 'undefined') {
//   li.parentNode.removeChild(li);
// }