function criar () {
    let bt = document.getElementById('criar-tarefa');
    let ol = document.getElementById('lista-tarefas');
    

    let inputText = document.getElementById('texto-tarefa');
    bt.addEventListener('click', function (event){
        let item = document.createElement('li');
        item.innerText = inputText.value;
        ol.appendChild(item);
        inputText.value = '';
    })
}

function start () {
    criar();   
}

window.onload = start;

