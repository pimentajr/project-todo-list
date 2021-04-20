const buttonadd = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const task = document.getElementById('texto-tarefa');
// requisito 5 
function addTask(event) {
  const item = document.createElement('li');
  item.className = 'item';
  taskList.appendChild(item);
  item.innerText = task.value;
  task.value = '';

}

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
buttonadd.addEventListener('click', addTask);
