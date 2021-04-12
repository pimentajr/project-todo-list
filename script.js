const addListButton = document.getElementById('criar-tarefa');
const inputList = document.getElementById('texto-tarefa');
const orderedList = document.getElementById('lista-tarefas');

addListButton.addEventListener('click', () => {
  const elementLi = document.createElement('li');
  elementLi.innerText = inputList.value;
  orderedList.appendChild(elementLi);
  inputList.value = '';
});
