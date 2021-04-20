const listaDeTarefas = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa');

function addTask () {

  let taskNew = document.createElement('li');
  taskNew.innerText = document.getElementById('texto-tarefa').value;
  listaDeTarefas.appenchild(taskNew);

  document.getElementById('texto-tarefa').value = '';
}

criarTarefa.addEventListener('click', addTask);

listaDeTarefas.addEventListener('click', function(event){
  let tarefas = document.querySelectorAll('li')
  for(let index = 0; index < tarefas.length; index += 1){
    tarefas[index].classList = 'selectedNo';
    
    event.target.classList = 'selected'

    let selectedTask = document.querySelector('.selected');
    selectedTask.getElementsByClassName.backgroundcolor = 'rgb(128, 128, 128)' 
    
  }
})