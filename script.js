const taskAdded = document.getElementById('criar-tarefa');
const text = document.getElementById('texto-tarefa');
const listeOl = document.getElementById('lista-tarefas');
const resetEverything = document.getElementById('apaga-tudo')
const removeFinished = document.getElementById('remove-finalizados')

taskAdded.addEventListener('click', () => {
    const newLi = document.createElement('li');
newLi.innerText = text.value
listeOl.appendChild(newLi);
text.value = ''

})

function selectColor() {
    listeOl.addEventListener('click', (event) =>{  
        const toColor = event.toColor;
        const selectedColor = document.querySelector('.selected');
        if(selectColor) {
            selectColor.classList.remove('selected');
        }
       toColor.classList.add('selected');
  });
}     
    
function completingTask() {
listeOl.addEventListener('dblclick', (event) => {
    const aList = event.target.classList;
    if(aList.contains('completed')) {
        aList.remove('completed');
    } else {
        aList.add('completed');
    }
  });
}


function deleteTasks() {
    resetEverything.addEventListener('click', () => {
      listeOl.innerHTML = ''
  });
}

function deleteAllTasks() {
  removeFinished.addEventListener('click', () => {
    for(index = 0; completed.length -1; index -= 1){
     completed[index].remove();
    }
});
}

selectColor();
completingTask();
deleteTasks();
deleteAllTasks;