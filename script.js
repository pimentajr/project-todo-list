const taskAdded = document.getElementById('criar-tarefa');
const text = document.getElementById('texto-tarefa');
const listeOl = document.getElementById('lista-tarefas');
const generalErase = document.getElementById('apaga-tudo')
const removeFinished = document.getElementById('remove-finalizados')

taskAdded.addEventListener('click', () => {
    const newLi = document.createElement('li');
newLi.innerText = text.value
listeOl.appendChild(newLi);
text.value = ''

})
function selectColor() {
    listeOl.addEventListener('click', (event) => {
        const toColor = event.toColor;
        const selectedColor = document.querySelector('.selected');
        if(selectColor){
            selectColor.classList.remove('selected');
        }else{
       toColor.classList.add('selected');
        }
    })
}
selectColor()