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
  const clickedItem = event.target;
  // Listar elementos li
  let liCollection = document.getElementsByTagName('li');
  // caminahndo na lista de tarefas
  for (let index = 0; index < liCollection.length; index++) {
    // verifica se algum item possui backGround cinza 
    if (liCollection[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      // alterando para branco
      liCollection[index].style.backgroundColor = 'white';
      liCollection[index].classList.remove('selected');
    }
  }
  // item clicado pinta de cinza
  clickedItem.style.backgroundColor = 'rgb(128, 128, 128)';
  clickedItem.classList.add('selected');
})


// evento para reconhecer duplo clickedItem
taskList.addEventListener('dblclick', () => {
  let dblClickedItem = event.target;
  // alternar entre completo e não completo atravez do duplo click
  dblClickedItem.classList.toggle('completed');
})

// Apagar lista atravez do button
const clearList = document.getElementById('apaga-tudo');
clearList.addEventListener('click', () => {
  // declara novamente quem é taskList  
  const taskList2 = document.getElementById('lista-tarefas');
  // remove elementos da lista um por um
  let itens = taskList2.getElementsByTagName('li');
  while (itens.length > 0) {
    taskList2.removeChild(itens[0]);
  }
});
const clearCompleted = document.getElementById('remover-finalizados');
clearCompleted.addEventListener('click', () => {
  const taskList3 = document.getElementById('lista-tarefas');
  let itens2 = taskList3.getElementsByTagName('li');
  while (document.querySelector('.completed')) {
    document.querySelector('.completed').remove();
  }
});
// remover selecionados
const removeSelected = document.getElementById('remover-selecionado');
removeSelected.addEventListener('click', () => {
  document.querySelector('.selected').remove();
})

// Salvar tarefas
const saveTask = document.getElementById('salvar-tarefas');
saveTask.addEventListener('click', () => {
  let savedTasks = document.getElementsByTagName('li');
  for (let i = 0; i < savedTasks.length; i++) {
    localStorage.setItem(i,savedTasks[i].innerHTML);
  }
});

window.onload = () => {
  const listOnLoad = document.getElementById('lista-tarefas');
  let listChildOnLoad = document.createElement('li');
  for(let i = 0; i < localStorage.length;i++){
    console.log('passou aqui')
    listChildOnLoad = document.createElement('li');
    listChildOnLoad.innerHTML = localStorage[i];
    listOnLoad.appendChild(listChildOnLoad);
  }
}