const taskButton = document.getElementById('criar-tarefa');
taskButton.addEventListener('click', () => {
  const newItem = document.getElementById('texto-tarefa').value;
  const list = document.getElementById('lista-tarefas');
  const listChild = document.createElement('li');
  listChild.innerHTML = newItem;
  list.appendChild(listChild);
  document.getElementById('texto-tarefa').value = '';
});

// Salvando lista de tarefas (ol) na variavel taskList
const taskList = document.getElementById('lista-tarefas');
// Adicionando evento para saber se algum item na lista de tarefas foi clicado
taskList.addEventListener('click', () => {
  // guardando em clickedItem o item que foi clicado
  let clickedItem = event.target;
  // Listar elementos li
  let liCollection = document.getElementsByTagName('li');
  // caminahndo na lista de tarefas
  for (let index = 0; index < liCollection.length; index++) {
    // verifica se algum item possui backGround cinza 
    if (liCollection[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      // alterando para branco
      liCollection[index].style.backgroundColor = 'white';
    }
  }
  // item clicado pinta de cinza
  clickedItem.style.backgroundColor = 'rgb(128, 128, 128)';
})


// evento para reconhecer duplo clickedItem
taskList.addEventListener('dblclick', () => {
  let dblClickedItem = event.target;
  if (dblClickedItem.classList[0] === 'completed') {
    dblClickedItem.classList.remove('completed');    
  } else {
    dblClickedItem.classList.add('completed');
  }
})
