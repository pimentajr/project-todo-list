let taskList = document.getElementById('lista-tarefas');
let btnMoveUp = document.getElementById('mover-cima');
let btnMoveDown = document.getElementById('mover-baixo');
let btnRemoveItem = document.getElementById('remover-selecionado');

// 5 - 
document.getElementById('criar-tarefa').addEventListener('click', criaTarefa)
function criaTarefa(event) {
	let li = document.createElement('li');
	let newTask = document.getElementById('texto-tarefa').value;
	li.innerText = newTask;
	document.getElementById('lista-tarefas').appendChild(li);
	document.getElementById('texto-tarefa').value = '';
}

// Insights de alguns PRs dos colegas <3
// 7, 8 
let liItems = document.getElementsByTagName('li');
taskList.addEventListener('click', escolhidos)
function escolhidos(event) {
	for (let index = 0; index < liItems.length; index += 1) {
		liItems[index].classList.remove('pickedItem');
	}
	event.target.classList.add('pickedItem');	
};

// 9 -
taskList.addEventListener('dblclick', completadas)
function completadas(event) {			
	if (event.target.classList.contains('completed')) {
		event.target.classList.remove('completed');				
	}	else {
	event.target.classList.add('completed');
	console.log(event.target)
}
}

// 10 -
document.getElementById('apaga-tudo').addEventListener('click', limpaLista)
function limpaLista(event) {
	while (taskList.lastChild) {
		taskList.removeChild(taskList.lastChild);
	}
};

// 11 - NAO TA FUNCIONANDO
document.getElementById('remover-finalizados').addEventListener('click', removeCompletedTasks);
function removeCompletedTasks(event) {
	while (taskList.lastChild.classList.contains('completed')) {
		taskList.removeChild(taskList.lastChild);
	}	
}

// 12 - Também com insights dos colegas.
document.getElementById('salvar-tarefas').addEventListener('click', salvaLista);
function salvaLista() {	
	localStorage.setItem('list', taskList.innerHTML);		
}
taskList.innerHTML = localStorage.getItem('list');

// 13 - Little help:
https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
btnMoveUp.addEventListener('click', moveUp)
function moveUp() {		
	let pickedItem = document.querySelector('.pickedItem')	
	if (pickedItem && pickedItem.previousElementSibling) {
		pickedItem.insertAdjacentElement('afterend', pickedItem.previousSibling);
	}		
}
// https://www.w3schools.com/jsref/met_node_insertbefore.asp
btnMoveDown.addEventListener('click', moveDown)
function moveDown() {
	let pickedItem = document.querySelector('.pickedItem')
	if (pickedItem && pickedItem.nextElementSibling) {
		taskList.insertBefore(pickedItem.nextElementSibling, pickedItem);
	}	
}

// 14 -
btnRemoveItem.addEventListener('click', function() {	
	let pickedItem = document.querySelector('.pickedItem')
	taskList.removeChild(pickedItem);	
}) 