//Botão para criar a tarefa
const buttonCreateTask = document.getElementById('criar-tarefa');
//Aqui é o input
let entry = document.getElementById('texto-tarefa');
//Para onde as tarefas vão
let tasklist = document.getElementById('lista-tarefas');

function createTasks() {
    buttonCreateTask.addEventListener('click', () =>{
        itemTask = document.createElement('li')
        itemTask.innerText = entry.value
        tasklist.appendChild(itemTask)
        entry.value= ''

    });
}
createTasks()
