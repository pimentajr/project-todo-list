const buttonAdd = document.getElementById('criar-tarefa');

buttonAdd.addEventListener('click', () => {
  console.log("oie");
  const lista = document.getElementById('lista-tarefas');
  const novoItem = document.createElement('li');
  lista.appendChild(novoItem);
})