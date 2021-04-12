const inputArea = document.getElementById('texto-tarefa')
const button = document.querySelector('#criar-tarefa')
const list = document.querySelector('#lista-tarefas')

inputArea.addEventListener('change', function(event){
  let text = event.target.value
  inputArea.value = text
})

button.addEventListener('click', function(){
  const newLi = document.createElement('li')
  newLi.innerText = inputArea.value
  list.appendChild(newLi)
  inputArea.value = ''
})