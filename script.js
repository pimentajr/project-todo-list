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
        const toColor = event.toColor;
        const selectedColor = document.querySelector('.selected');
        if(selectColor) {
            selectColor.classList.remove('selected');
        }
       event.toColor.classList.add('selected');
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

//remove finalizados
function deleteAllTasks(e) {
  const removeFinished = e.target.classList;
  if(e.target.classList[2]=== 'completed') {
    e.target.classList.remove('completed');
  }else{
    e.target.classList.add('completed')
  }
}

moverUp.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected) {
    const father = selected.parentNode;
    if (selected.previousElementSibling) {
      father.insertBefore(selected, selected.previousElementSibling);
    }
  }
});

listeOl.addEventListener('click', selectColor)
listeOl.addEventListener('click', completingTask)
selectColor();
completingTask();
deleteTasks();
deleteAllTasks;