const inputValue = document.getElementById('texto-tarefa');
const jobButton = document.getElementById('criar-tarefa');
const jobListContainer = document.getElementById('lista-tarefas');

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
  let jobItems = document.getElementsByClassName('job');
  jobListContainer.addEventListener('click', (event) => {
    for (let index = 0; index < jobItems.length; index += 1) {
      if (jobItems[index].classList.contains('selected')) {
        jobItems[index].classList.remove('selected');
      }
    }
    let selectedItem = event.target;
    selectedItem.classList.add('selected');
  })
}
jobColor();

function jobDone() {
  jobListContainer.addEventListener('dblclick', (event) => {
    let selectedItem = event.target;
    if (selectedItem.classList.contains('completed')) {
      selectedItem.classList.remove('completed');
    } else {
      selectedItem.classList.add('completed')
    }
  })
}
jobDone();