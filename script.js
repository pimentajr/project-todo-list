document.getElementById('criar-tarefa').addEventListener('click', function() {
    let liCriada = document.createElement('li');
    liCriada.innerText = document.getElementById('texto-tarefa').value;
    document.getElementById('lista-tarefas').appendChild(liCriada);
    document.getElementById('texto-tarefa').value = ''
})
document.getElementById('lista-tarefas').addEventListener('click', function (event) {
    if (document.getElementsByClassName('selected').length > 0) {
        document.getElementsByClassName('selected')[0].classList.remove('selected');
        event.target.classList.toggle('selected');
    } else {
        event.target.classList.toggle('selected');
    }
})

document.getElementById('lista-tarefas').addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
})

document.getElementById('apaga-tudo').addEventListener('click', function() {
    while (document.getElementById('lista-tarefas').firstChild) {
        document.getElementById('lista-tarefas').removeChild(document.getElementById('lista-tarefas').firstChild);
    }
})

document.getElementById('remover-finalizados').addEventListener('click', function () {
    while (document.querySelectorAll('.completed'))
        document.getElementById('lista-tarefas').removeChild(document.querySelectorAll('.completed')[0])
    
    
    
})