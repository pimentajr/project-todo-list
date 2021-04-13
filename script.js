const button = document.getElementById('criar-tarefa');

const orderedList = document.getElementById('lista-tarefas');

const createItemList = document.createElement('li');
createItemList.id = 'item-list';
orderedList.appendChild(createItemList)

createItemList.appendChild(value);

const input = document.getElementById('texto-tarefa');

function getText() {
    let valueItem = input.value;

    console.log(valueItem)
}

button.addEventListener('click', getText);