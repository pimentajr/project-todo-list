const addButton = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const orderedList = document.getElementById('lista-tarefas');

addButton.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML += inputText.value;
  orderedList.appendChild(li);
  inputText.value = null;
  const temp = orderedList.childNodes;
  for (let i = 0; i < temp.length; i += 1) {
    temp[i].addEventListener('click', (event) => {
      const itemTarget = event.target;
      itemTarget.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
});
