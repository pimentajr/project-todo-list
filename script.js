const addButton = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const orderedList = document.getElementById('lista-tarefas');

addButton.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML += inputText.value;
  orderedList.appendChild(li);
  inputText.value = null;
});

orderedList.addEventListener('click', () => {
  orderedList.style.backgroundColor = 'rgb(128, 128, 128)';
});
