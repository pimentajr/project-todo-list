// cria lista de elementos;
const btnTasks = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');
const inputText = document.querySelector('#texto-tarefa');

// create Lists;
btnTasks.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = inputText.value;
  inputText.value = '';
  if (li.innerHTML === '') {
    alert('Adicone um item');
  } else {
    li.addEventListener('click', selectedTask);
    ol.appendChild(li);
  }
});


//give selected to a testk
function selectedTask(event) {
  console.log(event.target);
}