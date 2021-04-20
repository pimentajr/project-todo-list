const taskAdded = document.getElementById('criar-tarefa');
const text = document.getElementById('texto-tarefa');
const listeOl = document.getElementById('lista-tarefas');
const resetEverything = document.getElementById('apaga-tudo')
const removeFinished = document.getElementById('remove-finalizados')
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
        const selectedColor = document.querySelector('.selected');
        if(selectColor) {
            selectColor.classList.remove('.selected');
        }
     
        event.target.classList.add('.selected');
        
  });
}     
selectColor();
    
function completingTask() {
listeOl.addEventListener('dblclick', (event) => {
    const aList = event.tarconst 
    buttonRemoveSelected = document.getElementById('remover-selecionado');
    get.classList;
    if(aList.contains('completed')) {
        aList.remove('completed');
    } else {
        aList.add('completed');
    }
  });
}
completingTask()

function deleteTasks() {
  resetEverything.addEventListener('click', () => {
    listeOl.innerHTML = ''
  });
}
deleteTasks()

//remove finalizados
function deleteAllTasks(e) {
  const removeFinished = e.target.classList;
  if(e.target.classList[2]=== 'completed') {
    e.target.classList.removeEventListener('completed');
  }else{
    e.target.classList.add('completed')
  }
}

deleteAllTasks()

listeOl.addEventListener('click', selectColor)
listeOl.addEventListener('dblclick', completingTask)

const buttonRemoveSelected = document.getElementById('remover-selecionado');


function removeSelected() {
  const selected = document.querySelector('.selected');
  selected.remove();
}
buttonRemoveSelected.addEventListener('click', removeSelected);