window.onload = function() {
    for (let index = 0; index < localStorage.length; index +=1 ) {
       let keyValue = localStorage.getItem(JSON.stringify(index))
       let liCriadaOnload = document.createElement('li');
       liCriadaOnload.innerText = keyValue;
       document.getElementById('lista-tarefas').appendChild(liCriadaOnload);
    }
}
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

function deleteCompleted() {
    for (let index = document.querySelectorAll('li').length -1; index >= 0; index -= 1) {
        if (document.querySelectorAll('li')[index].className.includes('completed')) {
            document.querySelectorAll('li')[index].remove();
        }
    }
}

document.getElementById('remover-finalizados').addEventListener('click', deleteCompleted)

function deleteSelected() {
    const selected = document.querySelector('.selected');
    selected.remove();
}

document.querySelector('#remover-selecionado').addEventListener('click', deleteSelected);

function saveList() {
    const liList = document.querySelectorAll('li');
    for (let index = 0; index < liList.length; index += 1) {
        let keyString = JSON.stringify(index);
        let valueString = liList[index].innerText;
        localStorage.setItem(keyString, valueString);
    }
}

document.querySelector('#salvar-tarefas').addEventListener('click', saveList);