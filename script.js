const addTask = document.getElementById('criar-tarefa');
const listTasks = document.getElementById('lista-tarefas');

addTask.addEventListener('click', () => {
  const textTalks = document.getElementById('texto-tarefa');
  const itenTasks = document.createElement('li');
  itenTasks.className = 'myTasks';
  itenTasks.innerText = textTalks.value;
  listTasks.appendChild(itenTasks);
  textTalks.value = '';
});

listTasks.addEventListener('click', (event) => {
  const myEvent = event.target;
  for (let index = 0; index < listTasks.children.length; index += 1) {
    if (listTasks.children[index] !== myEvent) {
      listTasks.children[index].style.backgroundColor = 'white';
      listTasks.children[index].classList.remove('selected');
    }
  }
  myEvent.classList.add('selected');
  myEvent.style.backgroundColor = 'rgb(128, 128, 128)';
});
