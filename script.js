//Botão para criar a tarefa
const buttonCreateTask = document.getElementById('criar-tarefa');
//Aqui é o input
let entry = document.getElementById('texto-tarefa');
//Para onde as tarefas vão
let tasklist = document.querySelector('#lista-tarefas');

function createTasks() {
    buttonCreateTask.addEventListener('click', () =>{
        itemTask = document.createElement('li')
        itemTask.innerText = entry.value
        tasklist.appendChild(itemTask)
        entry.value= ''
    });
}

//Requisito 7 e 8
// Clicar em um ítem da lista dá ao objeto a classe color, que altera o background para cinza
function backgroundColor() {
    //Criação do evento
    tasklist.addEventListener('click', (event) => {
        //Guardando a classe em uma variavel para poder manipular
      const classColor = document.querySelector('.color');
      // Se color = true em algum elemento, então, remova a classe.
      if(classColor){
        classColor.classList.remove('color');
      }
      event.target.classList.add('color'); // retorna o elemento que disparou o evento
    });
  
  
  }
  

console.log(tasklist)

createTasks()
backgroundColor()
