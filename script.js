const buttonadd = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const task = document.getElementById('texto-tarefa');
// requisito 5 
function addTask() {
  const item = document.createElement('li');
  item.className = 'item';
  taskList.appendChild(item);
  item.innerText = task.value;
  task.value = '';
}

buttonadd.addEventListener('click', addTask);
// requisito 7 e 8
function selectTask() {
  const task = document.querySelector('#lista-tarefas');
  const items = document.getElementsByTagName('li');
  task.addEventListener('click', (event) => {
    const selected = event.target;
    for (let index = 0; index < items.length; index += 1) {
      items[index].style.backgroundColor = '';
    }
    selected.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}

selectTask();
//9
function concludedTask() {
  taskList.addEventListener('dblclick',(event)=> {
    const conclued = event.target;
    if(conclued.classList.contains('completed')) {
      conclued.classList.remove('completed');
    } else {
      conclued.classList.add('completed');
    }
  })
}
concludedTask();


