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
  const list2 = document.querySelector('#lista-tarefas');

    listeOl.addEventListener('click', (colorChange) =>{  
        const toColor = document.querySelector('li');
        const selectedColor = colorChange.target;
        if(selectedColor.className === 'item') {
            selectColor.className += '.selected';
          }
     console.log(toColor)
    });
              
}     
selectColor();
    
function completingTabask() {
listeOl.addEventListener('dblclick', (event) => {
    const aList = event.target.classList;
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

