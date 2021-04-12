const inputValue = document.getElementById('texto-tarefa');
const jobButton = document.getElementById('criar-tarefa');
const jobListContainer = document.getElementById('lista-tarefas');
const clearButton = document.getElementById('apaga-tudo');
const jobItems = document.getElementsByClassName('job');
const finishedJobs = document.getElementById('remover-finalizados');

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
        let deleteItem = jobItems[index];
        jobItems[0].parentNode.removeChild(deleteItem);
      }
    }
  });
}
removeFinishedJobs();
