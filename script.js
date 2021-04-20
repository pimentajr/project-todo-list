const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa');

function taskAdd() {
  let newTask = document.createElement('li');
  newTask.innerText = document.getElementById('texto-tarefa').value;
  listaTarefas.appendChild(newTask);
  document.getElementById('texto-tarefa').value = '';
}
criarTarefa.addEventListener('click', taskAdd);

listaTarefas.addEventListener('click', function(event) {
  let tarefas = document.querySelectorAll('li')
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefas[i].classList = 'noSelected';

    event.target.classList = 'selected'

      let taskSelected = document.querySelector('.selected');
      taskSelected.style.backgroundColor = 'rgb(128, 128, 128)'
    
    if (tarefas[i].className === 'noSelected') {
      tarefas[i].style.backgroundColor = 'white';
    } 
  }
});