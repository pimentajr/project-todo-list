const textInput = document.querySelector('#texto-tarefa');
const addButton = document.querySelector('#criar-tarefa');
const myOl = document.querySelector('#lista-tarefas');

addButton.addEventListener('click', () => {
  const valueText = document.createTextNode(textInput.value);
  const newLi = document.createElement('li');
  myOl.appendChild(newLi);
  newLi.appendChild(valueText);
  textInput.value = '';
});
