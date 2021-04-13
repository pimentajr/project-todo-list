const addListButton = document.getElementById('criar-tarefa');
const inputList = document.getElementById('texto-tarefa');
const orderedList = document.getElementById('lista-tarefas');

addListButton.addEventListener('click', () => {
  const elementLi = document.createElement('li');
  elementLi.innerText = inputList.value;
  orderedList.appendChild(elementLi);
  elementLi.classList.add('list');
  inputList.value = '';
});

function addBackground() {
  orderedList.addEventListener('click', (event) => {
    const selectedLi = document.querySelector('.selected');
    if (selectedLi != null) {
      document.querySelector('.selected').classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}
addBackground();
