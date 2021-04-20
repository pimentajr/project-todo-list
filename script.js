let addToDoButton = document.getElementById('criar-tarefa');
let toDoContainer = document.getElementById('lista-tarefas');
let inputField = document.getElementById("texto-tarefa");

addToDoButton.addEventListener('click', function(){
    
    var paragraph = document.createElement('li');
    paragraph.classList.add('paragraph-styling');
    paragraph.setAttribute("id", "list-item");
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    
    paragraph.addEventListener('dblclick', function(){
        paragraph.classList.add('linha');
        paragraph.classList.remove('linha');
    })
    paragraph.addEventListener('click', function(){
        paragraph.classList.add('grayRGD')
    })
    

})

//codigo que me estudei: https://www.youtube.com/watch?v=n3X7m0GzFRY&ab_channel=CodingMindBrasil