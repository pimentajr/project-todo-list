const createTask = document.getElementById('criar-tarefa');
const listTask = document.getElementById('lista-tarefas');
const textTask = document.getElementById('texto-tarefa');

//Requisitos 05 e 06
createTask.addEventListener('click', () => {
  const createListItem = document.createElement('li');
  createListItem.innerText = textTask.value;
  listTask.appendChild(createListItem);
  textTask.value = '';
});

//Requisito 07 e 08 
const OL = document.getElementById('lista-tarefas');
OL.addEventListener('click', (event) => {
  const selectedLI = document.getElementsByClassName('selected');
  if (selectedLI.length !== 0) {
    selectedLI[0].classList.remove('selected');
    }
    event.target.classList.add('selected');
});

//Requisito 09 incompleto
function deleteSelectedItem() {
  listTask.addEventListener('dblclick', (event) => {
    const eventTarget = event.target;
    console.log(eventTarget);
    const riskedItem = document.querySelectorAll('.completed');
    if (eventTarget.classList.contains('completed')) {
      riskedItem[0].classList.remove('completed');
    }else
    eventTarget.classList.add('completed');
  });
}
deleteSelectedItem();
