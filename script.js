const inputValue = document.getElementById('texto-tarefa');
const jobButton = document.getElementById('criar-tarefa');
const jobListContainer = document.getElementById('lista-tarefas');
const clearButton = document.getElementById('apaga-tudo');
const jobItems = document.getElementsByClassName('job');
const finishedJobs = document.getElementById('remover-finalizados');
const storageButton = document.getElementById('salvar-tarefas');
const upButton = document.getElementById('mover-cima');
const downButton = document.getElementById('mover-baixo');
const removeSelecItem = document.getElementById('remover-selecionado');

function createJob() {
  jobButton.addEventListener('click', () => {
    const newJob = inputValue.value;
    const newItem = document.createElement('li');
    newItem.className = 'job';
    newItem.innerText = newJob;
    jobListContainer.appendChild(newItem);
    inputValue.value = '';
  });
}
createJob();

function jobColor() {
  jobListContainer.addEventListener('click', (event) => {
    for (let index = 0; index < jobItems.length; index += 1) {
      if (jobItems[index].classList.contains('selected')) {
        jobItems[index].classList.remove('selected');
      }
    }
    const selectedItem = event.target;
    selectedItem.classList.add('selected');
  });
}
jobColor();

function jobDone() {
  jobListContainer.addEventListener('dblclick', (event) => {
    const selectedItem = event.target;
    if (selectedItem.classList.contains('completed')) {
      selectedItem.classList.remove('completed');
    } else {
      selectedItem.classList.add('completed');
    }
  });
}
jobDone();

function clearJobs() {
  clearButton.addEventListener('click', () => {
    jobListContainer.innerHTML = '';
  });
}
clearJobs();

function removeFinishedJobs() {
  finishedJobs.addEventListener('click', () => {
    for (let index = jobItems.length - 1; index > 0; index -= 1) {
      if (jobItems[index].classList.contains('completed')) {
        const deleteItem = jobItems[index];
        jobItems[0].parentNode.removeChild(deleteItem);
      }
    }
  });
}
removeFinishedJobs();

function storeJobs() {
  storageButton.addEventListener('click', () => {
    localStorage.list = jobListContainer.innerHTML;
  });
}
storeJobs();

function retrieveJobs() {
  if (localStorage.list) {
    jobListContainer.innerHTML = localStorage.list;
  }
}
retrieveJobs();

/*function upJob() {
  upButton.addEventListener('click', () => {
    let selectedItem = document.querySelector('.selected');
    jobListContainer.replaceChild(selectedItem, selectedItem.previousSibling);
  })
}
upJob();
*/

function removeSelected () {
  removeSelecItem.addEventListener('click', () => {
    for (let index = 0; index < jobItems.length; index += 1) {
      if (jobItems[index].classList.contains('selected')) {
        jobListContainer.removeChild(jobItems[index]);
      }
    }
  })
}
removeSelected();
