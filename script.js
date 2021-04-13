document.getElementById('criar-tarefa').addEventListener('click', function() {
    let liCriada = document.createElement('li');
    liCriada.innerText = document.getElementById('texto-tarefa').value;
    document.getElementById('lista-tarefas').appendChild(liCriada);
    document.getElementById('texto-tarefa').value = ''
})
document.getElementById('lista-tarefas').addEventListener('click', function (event) {
    event.target.classList.toggle('selected');

})

document.getElementById('lista-tarefas').addEventListener('dblclick', function (event) {
    event.target.classList.toggle('completed');
})
