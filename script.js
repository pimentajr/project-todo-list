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

list.addEventListener('click', function(event){
  let listItem = document.querySelectorAll('li')
  for(let index = 0; index < listItem.length; index +=1){
    listItem[index].removeAttribute('id')
  }
  const li = event.target
  li.setAttribute('id', 'list-color')
})

list.addEventListener('dblclick', function(event){
  const li = event.target
  if(li.classList.contains('completed')){
    li.classList.remove('completed')
  } else{
    li.classList.add('completed')
  }
})

const buttonErase = document.querySelector('#apaga-tudo')

buttonErase.addEventListener('click', function(){
  let listItem = document.querySelectorAll('li')
  for(let index =0; index < listItem.length; index+=1){
    list.removeChild(listItem[index])
  }
})

const buttonRemoveDone = document.querySelector('#remover-finalizados')

buttonRemoveDone.addEventListener('click', function(){
  let listItem = document.querySelectorAll('li')
  for(let index =0; index < listItem.length; index+=1){
    if(listItem[index].classList.contains('completed')){
      list.removeChild(listItem[index])
    }
  } 
})