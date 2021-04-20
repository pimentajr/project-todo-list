let taskButton = document.getElementById('criar-tarefa');
taskButton.addEventListener('click', ()=>{
  let newItem = document.getElementById('texto-tarefa').value;
  const list = document.getElementById('lista-tarefas');
  let listChild = document.createElement('li');
  listChild.innerHTML = newItem;
  list.appendChild(listChild);
  document.getElementById('texto-tarefa').value = '';
})

