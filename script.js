	
let addTask = document.getElementById('criar-tarefa');
let listTask =  document.getElementById('lista-tarefas');
let textNewTask = document.getElementById('texto-tarefa')

function addTasks(){
	addTask.addEventListener('click', function() {

		let newElement = document.createElement('li');
		newElement.innerText = textNewTarefa.value;
		listTarefas.appendChild(newElement);
		textNewTarefa.value = '';

	});
}
addTask();

function clickAndChangeColor(color){

	listTask.addEventListener('click', (event) => {
		event.target.style.backgroundColor = color;
	});
} 

clickAndChangeColor ('rgb(128, 128, 128)');
