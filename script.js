// cria lista de elementos;
const btnTasks = document.querySelector('#criar-tarefa');
const listOfTasks = document.querySelector('#lista-tarefas');
const inputText = document.querySelector('#texto-tarefa');
btnTasks.addEventListener('click', () => {
  const li = document.createElement('li');
  li.className = 'lista';
  li.innerHTML = inputText.value;
  inputText.value = '';
  if (li.innerHTML === '') {
    alert('Adicone um item');
  } else {
    listOfTasks.appendChild(li);
  }
});





