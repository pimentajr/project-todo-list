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

//item 7 e 8

let listElement = document.getElementsByClassName('listClass');
function clickAndChangeColor(color){


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

//item 9

 function doubleClick(){

 	listTask.addEventListener('dblclick', function (event) {

		if (event.target.classList.contains('completed')) {
			event.target.classList.remove('completed');
		}
		else{
			event.target.classList.add('completed');
		}
	}); 

} 

doubleClick();


// item 10
let clearBot = document.querySelector('#apaga-tudo');

 function clear(){
	clearBot.addEventListener("click", function () {
		listTask.innerHTML= '';
	});
} 
clear();

// item 11