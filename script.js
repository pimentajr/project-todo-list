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

let apagarLista = document.getElementById('apaga-tudo');
let itensApagar = document.getElementsByTagName('li');
apagarLista.addEventListener('click', function(){
    const apagar = itensApagar.length;
    for(let i=apagar-1;i>=0;i--){
        itensApagar[i].remove();
    }
});

let removerFinalizados = document.getElementById('remover-finalizados');
let itensRemover = document.getElementsByTagName('li');
removerFinalizados.addEventListener('click', function(){
    const remover = itensRemover.length;
    console.log('creuuuu:' + remover);
    for(let i=remover-1;i>=0;i--){
        console.log('entrou for');
        console.log('Cor item' + itensRemover[i].style.textDecoration)
        if(itensRemover[i].style.textDecoration === 'line-through solid rgb(0, 0, 0)'){
            console.log('entrou iffffff');
            itensRemover[i].remove();
        }
    }
});


