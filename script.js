const taskAdded = document.getElementById('criar-tarefa');
const text = document.getElementById('texto-tarefa');
const listeOl = document.getElementById('lista-tarefas');
const resetEverything = document.getElementById('apaga-tudo')
const removeFinished = document.getElementById('remover-finalizados')
const moverUp = document.getElementById('mover-cima')
const moverDown = document.getElementById('mover-baixo')
// correta
taskAdded.addEventListener('click', () => {
    const newLi = document.createElement('li');
newLi.innerText = text.value
listeOl.appendChild(newLi);
text.value = ''

})

function selectColor() {
    listeOl.addEventListener('click', (event) =>{  
        const toColor = event.target;
        const selectedColor = document.querySelectorAll('li');
        for(let index = 0; index < selectedColor.length; index += 1) { 
          selectedColor[index].classList.remove('selected');
        }
             toColor.classList.add('selected');
        });
}     
selectColor();
    
function completingTask() {
listeOl.addEventListener('dblclick', (event) => {
  const aList = event.target;
  aList.classList.toggle('completed');
})
}    
completingTask()

function deleteTasks() {
  resetEverything.addEventListener('click', () => {
    listeOl.innerHTML = ''
  });
}
deleteTasks()

//remove finalizados
function deleteAllTasks() {
  const removeFinished = document.querySelector('#remover-finalizados');
  removeFinished.addEventListener('click', () => {
const completeds = document.querySelectorAll('.completed');
completeds.forEach((removeitem)=>removeitem.remove());
  });
  }
deleteAllTasks()

// listeOl.addEventListener('click', selectColor)
//listeOl.addEventListener('dblclick', completingTask)
 
//salvar tarefas
function salvarTarefas() {
  const btnSaveTask = document.querySelector('#salvar-tarefas');
  btnSaveTask.addEventListener('click', () => {
    localStorage.setItem('Document', listeOl.innerHTML);
  });
  listeOl.innerHTML = localStorage.getItem('Document');
}
salvarTarefas()
