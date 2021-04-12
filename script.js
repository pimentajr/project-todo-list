const inputValue = document.getElementById('texto-tarefa');
const jobButton = document.getElementById('criar-tarefa');
const jobList = document.getElementById('lista-tarefas');

function createJob() {
  jobButton.addEventListener('click', () => {
    const newJob = inputValue.value;
    const newItem = document.createElement('li');
    newItem.className = 'job';
    newItem.innerText = newJob;
    jobList.appendChild(newItem);
    inputValue.value = '';
  });
}
createJob();

function jobColor() {
  jobList.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  })
}
jobColor();