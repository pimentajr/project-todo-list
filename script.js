const button = document.getElementById('criar-tarefa');
button.addEventListener('click', addButton);

function addButton() {
  let olList = document.getElementById('lista-tarefas');
  let inputTextElement = document.getElementById('texto-tarefa');
  let inputText = inputTextElement.value;
  let createLi = document.createElement('li');
  createLi.innerText = inputText;
  olList.appendChild(createLi);
  inputTextElement.value = '';
}
