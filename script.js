let button = document.getElementById('criar-tarefa');
button.addEventListener('click', addButton);

function addButton() {
  // pegando os elementos
  const olList = document.getElementById('lista-tarefas');
  const inputTextElement = document.getElementById('texto-tarefa');
  // pegando o valor (texto) que está dentro do input
  const inputText = inputTextElement.value;
  // criando LI
  let createLi = document.createElement('li');
  createLi.classList.add('listItem');
  // atribuindo o INNERTEXT para o olList
  createLi.innerText = inputText;
  createLi.addEventListener('click', changeColor);

  olList.appendChild(createLi);
  // limpando o elemento:
  inputTextElement.value = '';
}

function changeColor(event) {
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}
