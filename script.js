document.getElementById('criar-tarefa').addEventListener('click', function(event) {
  let li = document.createElement('li');
	let newTask = document.getElementById('texto-tarefa').value;
	li.innerText = newTask;
	document.getElementById('lista-tarefas').appendChild(li);
	document.getElementById('texto-tarefa').value = '';
})

document.getElementById('lista-tarefas').addEventListener('click', function(event) {
	let listItems = document.getElementsByTagName('li');
	if (listItems = event.target) {
		listItems.style.backgroundColor = 'rgb(128, 128, 128)';
	}
})


