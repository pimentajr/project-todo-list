let button = document.querySelector('#criar-tarefa');
let texto = document.querySelector('#texto-tarefa');
let lista = document.querySelector('#lista-tarefas');

function addList () {
	button.addEventListener('click', function() {
		let item = document.createElement('li');
		lista.appendChild(item);
		let novoItem = texto.value;
		item.innerText = novoItem;
	})
}
addList();
