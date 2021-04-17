//window.onload = function(){

  let addTarefas = document.getElementById('criar-tarefa');
	let listTarefas =  document.getElementById('lista-tarefas');
	let textNewTarefa = document.getElementById('texto-tarefa')
	let newElement = document.createElement('li');

  addTarefas.addEventListener('click', function(){
		
		newElement.innerText = textNewTarefa.value;
		listTarefas.appendChild(newElement);
		textNewTarefa.value = '';

  });

//}