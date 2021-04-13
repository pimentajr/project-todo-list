//5 e 6
const criarTarefa = document.getElementById('criar-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');
const tarefa = document.getElementById('texto-tarefa')

criarTarefa.addEventListener('click', () => {
   const itemLista = document.createElement('li');
   itemLista.innerText = tarefa.value;
   listaTarefa.appendChild(itemLista);
   tarefa.value = '';
})

//7 e 8
function selectedItem() {
    listaTarefa.addEventListener('click', (event) => {
        const evTarget = event.target;
        const itemSelecionado = document.querySelector('.selected');
        if (itemSelecionado) {
            itemSelecionado.classList.remove('selected');
        } 
        evTarget.classList.add('selected');
    })
}

selectedItem();

//9
function removeComplete() {
    for (let i = 0; listaTarefa.children.length; i += 1) {
      listaTarefa.children[i].classList.remove('completed');
    }
}

function dbSelectedItem () {
    listaTarefa.addEventListener('dblclick', (event) => {
        const evTarget = event.target;
        if (evTarget.classList.contains('completed')) {
            removeComplete();
        }
            evTarget.classList.add('completed');
        console.log('duplo');
    })
}

dbSelectedItem();

//10
const apagar = document.getElementById('apaga-tudo');
function deleteAll () {
    apagar.addEventListener('click', () => {
      listaTarefa.innerHTML = '';
    })
}

deleteAll();