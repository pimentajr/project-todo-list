function newListItem() {
    let newLI = document.createElement('li');
    let newValue = document.getElementById('texto-tarefa').value;
    newLI.innerText = newValue;
    if (newValue === '') {
        alert('Adicione uma nova terafa!');
    } else {
        document.getElementById('lista-tarefas').appendChild(newLI);
    }
    document.getElementById('texto-tarefa').value = '';

}