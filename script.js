// cria lista de elementos;
const btnTasks = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');
const inputText = document.querySelector('#texto-tarefa');

// give selected to a testk
function selectedTask(event) {  
  const li = event.target;
  const list = ol.childNodes;
  for (let i = 0; i < list.length; i += 1) {
    list[i].classList.remove('selected');
  }
  li.classList.add('selected');
}

// give completed to a task
function completedTask(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

// create Lists;
btnTasks.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = inputText.value;
  inputText.value = '';
  if (li.innerHTML === '') {
    alert('Adicone um item');
  } else {
    li.addEventListener('click', selectedTask);
    li.addEventListener('dblclick', completedTask);
    ol.appendChild(li);
  }
});
