const createTask = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');



// limpando o input
function clearInput() {
    inputText.value = '';
}
// adicionando nova li
function newTask () {
  const li = document.createElement('li');
  let text = inputText.value;
  li.classList.add('listItem');
  taskList.appendChild(li);
  li.innerHTML = text;
}



// createTask.addEventListener('click', newTask);
createTask.addEventListener('click', clearInput);
