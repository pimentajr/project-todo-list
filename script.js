let addToDoButton = document.getElementById('criar-tarefa');
let toDoContainer = document.getElementById('lista-tarefas');
let inputField = document.getElementById("texto-tarefa");

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('li');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})