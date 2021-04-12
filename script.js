const inputValue = document.getElementById('texto-tarefa');
const jobButton = document.getElementById('criar-tarefa');
const jobList = document.getElementById('lista-tarefas');

function createJob() {
  jobButton.addEventListener('click', () => {
    let newJob = inputValue.value;
    let newItem = document.createElement('li');
    newItem.className = 'job';
    newItem.innerText = newJob;
    jobList.appendChild(newItem);
    inputValue.value = '';

  })
}
createJob();