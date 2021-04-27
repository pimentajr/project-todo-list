let addToDoButton = document.getElementById('criar-tarefa');
let toDoContainer = document.getElementById('lista-tarefas');
let inputField = document.getElementById('texto-tarefa');
let eraseList = document.getElementById('apaga-tudo');
let removeEnded = document.getElementById('remover-finalizados');
let removeSelected = document.getElementById('remover-selecionado');

function selectItem(event) {
    let selectOne = document.querySelector('.grayRGB');
    if (selectOne !== null) {
        selectOne.classList.remove('grayRGB');
    }
    event.target.classList.add('grayRGB');
}

function completeTask(event) {
    if(event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
    } else {
        event.target.classList.add('completed');
    }
}

addToDoButton.addEventListener('click', function(){
    
    let listItem = document.createElement('li');
    listItem.classList.add('paragraph-styling');
    listItem.setAttribute('id', "list-item");
    listItem.innerText = inputField.value;
    toDoContainer.appendChild(listItem);
    inputField.value = "";
    
    listItem.addEventListener('dblclick', completeTask);
    listItem.addEventListener('click', selectItem);
   
});

eraseList.addEventListener('click',function(e){
   toDoContainer.innerHTML = '';
});


removeEnded.addEventListener('click',function(e) {
    document.querySelectorAll('.completed').forEach(function(a){
        a.remove()
        })
 });
 

 removeSelected.addEventListener('click',function(e) {
    document.querySelectorAll('.grayRGB').forEach(function(a){
        a.remove()
        })
 });

//codigo que me estudei: https://www.youtube.com/watch?v=n3X7m0GzFRY&ab_channel=CodingMindBrasil