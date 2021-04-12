// Requisito 5 e 6 - Botão para adicionar lista
const newTask = document.querySelector('#texto-tarefa');
const clickCreateTask = document.getElementById('criar-tarefa');
const listToAdd = document.getElementById('lista-tarefas');
const allList = document.querySelector('#lista-tarefas');
const grayColor = 'rgb(128, 128, 128)';

function addingTask() {
  clickCreateTask.addEventListener('click', () => {
    if (newTask.value === '') {
      alert('Campo Vazio');
    } else {
      const task = document.createElement('li');
      task.classList.add('item');
      task.innerText = newTask.value;
      listToAdd.appendChild(task);
    }
    newTask.value = '';
  });
}
addingTask();

// Requisito 7 e 8 - Colocar fundo cinza em itens clicados
function grayItem() {
  allList.addEventListener('click', (eventoDeOrigem1) => {
    const clickedItem = eventoDeOrigem1.target;
    const whiteList = document.querySelectorAll('.item');
    for (let index = 0; index < whiteList.length; index += 1) {
      whiteList[index].style.backgroundColor = 'white';
    }
    if (clickedItem.className === 'item') {
      clickedItem.style.backgroundColor = grayColor;
    }    
  });
}
grayItem();