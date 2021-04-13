document.getElementById('criar-tarefa').addEventListener('click', function() {
    let liCriada = document.createElement('li');
    liCriada.innerText = document.getElementById('texto-tarefa').value;
    document.getElementById('lista-tarefas').appendChild(liCriada);
    document.getElementById('texto-tarefa').value = ''
})
document.getElementById('lista-tarefas').addEventListener('click', function (event) {
    if (document.getElementsByClassName('selected').length > 0) {
        document.getElementsByClassName('selected')[0].classList.remove('selected');
        event.target.className = 'selected';
    } else {
        event.target.className = 'selected';
    }
})

document.getElementById('lista-tarefas').addEventListener('dblclick', function (event) {
    if (event.target.className === 'completed') {
        event.target.classList.remove('completed');
    } else {
        event.target.classList.add('completed');
    }
})