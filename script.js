const button = document.querySelector('#criar-tarefa');
const texto = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');

function addList() {
	button.addEventListener('click', function() {
	  const item = document.createElement('li');
	  lista.appendChild(item);
	  const novoItem = texto.value;
	  item.innerText = novoItem;
		texto.value = '';
  });
}
addList();
