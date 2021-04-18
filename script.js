const buttonAdd = document.getElementById('criar-tarefa');
const buttonClear = document.getElementById('apaga-tudo');
const buttonCompleted = document.getElementById('remover-finalizados');
const lista = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');

buttonAdd.addEventListener('click', () => {
  const novoItem = document.createElement('li');
  lista.appendChild(novoItem);
  novoItem.classList.add('list-item');
  novoItem.innerText = input.value;
  input.value = "";
})

buttonClear.addEventListener('click', () => {
  const allItems = document.querySelectorAll('.list-item');
  console.log(allItems);
  for (let i = 0; i < allItems.length; i += 1) {
    console.log(allItems[i]);
    allItems[i].remove();
  }
})

function selectThis(e) {
  e.target.classList.add('selected');
  const selected = document.querySelectorAll('.selected');
  for (let i = 0; i < selected.length; i += 1) {
    if (selected[i] !==  e.target) {
      selected[i].classList.remove('selected');
    }
  } 
}

function taskComplete(e) {
  const targetClass = e.target.classList;
  if (e.target.classList[2] === 'completed') {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed')
  }
}

lista.addEventListener('click', selectThis);
lista.addEventListener('dblclick', taskComplete);
