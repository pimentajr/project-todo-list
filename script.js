const btnTasks = document.querySelector('#criar-tarefa');
const listOfTasks = document.querySelector('#lista-tarefas');
const inputText = document.querySelector('#texto-tarefa');

btnTasks.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = inputText.value;
  inputText.value = '';
  listOfTasks.appendChild(li);
  console.log(inputText.value);
});
