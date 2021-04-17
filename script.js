let textSelected ='';

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

let lista2 = document.getElementById('lista-tarefas');
let itemSelected = document.getElementsByClassName('selected');

lista2.addEventListener('click', function(event){
    if(event.target.innerHTML != textSelected && textSelected != ''){
        itemSelected[0].style.backgroundColor='white';
        itemSelected[0].className='';
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
        event.target.className = 'selected';
        textSelected = event.target.innerHTML; 
       
    }else{
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
        event.target.className = 'selected';
        textSelected = event.target.innerHTML;  
              
    }
});

let lista3 = document.getElementById('lista-tarefas');
let segundaVez = false;

lista3.addEventListener('dblclick', function(event){

    if(event.target.className == 'selected'){


        if(event.target.className != 'selected completed' && segundaVez == false){
            event.target.style.textDecoration = 'line-through solid rgb(0,0,0)';
            event.target.className = 'selected completed';   
            console.log('entroooo'); 
            segundaVez = true;        
        }else{
            event.target.style.textDecoration = '';
            event.target.className = 'selected';
            segundaVez=false;
        }

    }

});