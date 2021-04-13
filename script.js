// 5 - 
document.getElementById('criar-tarefa').addEventListener('click', function(event) {
  let li = document.createElement('li');
	let newTask = document.getElementById('texto-tarefa').value;
	li.innerText = newTask;
	document.getElementById('lista-tarefas').appendChild(li);
	document.getElementById('texto-tarefa').value = '';
})

// Insights de alguns PRs dos colegas <3
// 7, 8 
document.getElementById('lista-tarefas').addEventListener('click', function(event) {
	let liItems = document.getElementsByTagName('li');
	for (let index = 0; index < liItems.length; index += 1) {
		liItems[index].classList.remove('pickedItem');
	}
	event.target.classList.add('pickedItem');
});