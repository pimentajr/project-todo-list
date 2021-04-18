let listTask =  document.getElementById('lista-tarefas');

function addTasks(){
	let input = document.getElementById('texto-tarefa');
	let newElement = document.createElement('li');
	newElement.className = 'listClass';
	newElement.innerText = input.value;
	listTask.appendChild(newElement);
	input.value = '';

}

let bot = document.getElementById('criar-tarefa');
bot.addEventListener('click', addTasks)

//item 7
function clickAndChangeColor(color){

	let listElement = document.getElementsByClassName('listClass');
	listTask.addEventListener('click', function(event) {

		for(let index=0; index < listElement.length ; index += 1){
			//atribuir nenhuma cor aos itens da lista
			listElement[index].style.backgroundColor = null;
			if(listElement){
				event.target.style.backgroundColor = color;
			}
		}
	
	});
} 

clickAndChangeColor('rgb(128, 128, 128)');


