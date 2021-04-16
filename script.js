let button = document.getElementById('criar-tarefa');

button.addEventListener('click', function(event){
    let textInput = document.getElementById('texto-tarefa');
    let newTextList = textInput.value;
    textInput.value='';
    let lista = document.getElementById('lista-tarefas');
    let newListItem = document.createElement('li');
    newListItem.innerHTML = newTextList;
    lista.appendChild(newListItem);
   
});