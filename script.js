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

//7
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
