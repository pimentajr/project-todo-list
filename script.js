// 7. 8.
function changeColor(event) {
  const selectedItem = event.target;
  const itens = document.getElementsByClassName('listItem');
  console.log(itens);
  for (let index = 0; index < itens.length; index += 1) {
    itens[index].style.backgroundColor = 'transparent';
  }
  console.log(selectedItem.style.backgroundColor);
  selectedItem.style.backgroundColor = 'rgb(128, 128, 128)';
}

// 5. 6.
function criarTarefa() {
  const oList = document.getElementById('lista-tarefas');
  const inputList = document.getElementById('texto-tarefa');
  const lItem = document.createElement('li');
  lItem.innerText = inputList.value;
  lItem.classList.add('listItem');
  oList.appendChild(lItem);
  inputList.value = '';
  lItem.addEventListener('click', changeColor)
}
const buttonCriarTarefa = document.getElementById('criar-tarefa');
buttonCriarTarefa.addEventListener('click', criarTarefa);
