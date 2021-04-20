const tarefaInput = document.getElementById('texto-tarefa');
const botaoAdd = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const taskList = document.getElementsByClassName('item');

function criarTarefa() {
  if (tarefaInput.value === '') {
    return false;
  }
  // Criando um novo elemento
  const newItem = document.createElement('li');
  // TENTANDO ADD CLASSE
  newItem.classList.add('item');
  // adicionando o valor do input ao elemento criando
  newItem.textContent = tarefaInput.value;
  // limpando input
  tarefaInput.value = '';
  //  listaTarefas é pai de newItem
  listaTarefas.appendChild(newItem);
}

function isSelected(event) {
  for (let i = 0; i < taskList.length; i += 1) {
    taskList[i].classList = 'noSelected';
    event.target.classList = 'selected';
    const taskSelected = document.querySelector('.selected');
    taskSelected.style.backgroundColor = 'rgb(128, 128, 128)';
    if (taskList[i].className === 'noSelected') {
      taskList[i].style.backgroundColor = 'white';
    }
  }
}
botaoAdd.addEventListener('click', criarTarefa);
taskList.addEventListener('click', isSelected);
