const addTask = document.getElementById('criar-tarefa');
const listTasks = document.getElementById('lista-tarefas');

// Adiciona tarefa.
function addNewTalks() {
  addTask.addEventListener('click', () => {
    const textTalks = document.getElementById('texto-tarefa');
    const itenTasks = document.createElement('li');
    localStorage.setItem('inputNew', textTalks.value);
    itenTasks.innerText = localStorage.getItem('inputNew');
    listTasks.appendChild(itenTasks);
    textTalks.value = '';
  });
}
addNewTalks();

// Pinta item da lista, e remove cor do item da lista
function colorItemList() {
  listTasks.addEventListener('click', (event) => {
    const myEvent = event.target;
    const myItenlist = document.getElementsByTagName('li');
    if (myEvent.localName === 'li') {
      for (let index = 0; index < myItenlist.length; index += 1) {
        myItenlist[index].classList.remove('selected');
      }
      myEvent.classList.add('selected');
    }
  });
}
colorItemList();

// Risca item da lista.
function streakItemList() {
  listTasks.addEventListener('dblclick', (itemEvent) => {
    const newEvent = itemEvent.target;
    newEvent.classList.toggle('completed');
  });
}
streakItemList();
