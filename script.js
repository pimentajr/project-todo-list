let taskList = document.getElementById('lista-tarefas');'';
let buttonList = document.getElementById('criar-tarefa');
let inputListText = document.getElementById('texto-tarefa');
let eraseTaskList = document.getElementById('apaga-tudo');
let eraseAlreadyDoneTasks = document.getElementById('remover-finalizados')
buttonList.addEventListener('click', function(){
  let criaLiTarefa = document.createElement('li');
  criaLiTarefa.innerText = inputListText.value;
  criaLiTarefa.className = 'listItem'
  taskList.appendChild(criaLiTarefa);
  inputListText.value = '';
});


taskList.addEventListener('click', function(event){
  let evento = event.target;
   let arrayLi = document.querySelectorAll('.listItem');
  for(let index = 0; index < arrayLi.length; index += 1){
    let posicaoLi = arrayLi[index];
    if(posicaoLi.classList !== 'selectedColor'){
      posicaoLi.classList.remove('selectedColor');
      evento.classList.add('selectedColor');
    }
  }
});

taskList.addEventListener('dblclick', function(event){
let evento = event.target;
if(evento.className.includes('completed')){
  evento.classList.remove('completed');
}else{
  evento.classList.add('completed');
}
})

eraseTaskList.addEventListener('click', function(){
  let arrayLi = document.querySelectorAll('.listItem');
  for(let index = 0; index < arrayLi.length; index += 1){
    taskList.removeChild(arrayLi[index]);
  }
});

eraseAlreadyDoneTasks.addEventListener('click', function(){
  let arrayLi = document.querySelectorAll('.listItem');
  for(let index = 0; index < arrayLi.length; index += 1){
    if(arrayLi[index].className.includes('completed')){
      taskList.removeChild (arrayLi[index]);
    }
  }
});