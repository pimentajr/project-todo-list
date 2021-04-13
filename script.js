// cria lista de elementos;
const btnTasks = document.querySelector('#criar-tarefa');
const listOfTasks = document.querySelector('#lista-tarefas');
const inputText = document.querySelector('#texto-tarefa');
btnTasks.addEventListener('click', () => {
  const li = document.createElement('li');
  const taskItem = listOfTasks.childNodes;
  li.innerHTML = inputText.value;
  inputText.value = '';
  if (li.innerHTML === '') {
    alert('Adicone um item');
  } else {
    listOfTasks.appendChild(li);
  }
  li.addEventListener('click', (e) => {
    for (let i = 0; i < taskItem.length; i += 1) {
      taskItem[i].classList.remove('selected');
    }
    e.target.classList.add('selected');
  });
});
