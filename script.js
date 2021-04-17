function taskAdder() {
  const taskToAdd = document.querySelector('#texto-tarefa').value;
  const createdElement = document.createElement('li');
  createdElement.append(taskToAdd);

  document.querySelector('#lista-tarefas').appendChild(createdElement);

  document.querySelector('#texto-tarefa').value = '';
}

window.onload = () => {
  const addButton = document.querySelector('#criar-tarefa');
  addButton.addEventListener('click', taskAdder);
};
