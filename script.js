// 5 e 6
const criarTarefa = document.getElementById('criar-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');
const tarefa = document.getElementById('texto-tarefa');
criarTarefa.addEventListener('click', () => {
  const itemLista = document.createElement('li');
  itemLista.innerText = tarefa.value;
  listaTarefa.appendChild(itemLista);
  tarefa.value = '';
});

// 7 e 8
function selectedItem() {
  listaTarefa.addEventListener('click', (event) => {
    const evTarget = event.target;
    const itemSelecionado = document.querySelector('.selected');
    if (itemSelecionado) {
      itemSelecionado.classList.remove('selected');
    }
    evTarget.classList.add('selected');
  });
}

selectedItem();

// 9
function dbSelectedItem() {
  listaTarefa.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed'); 
    }
  });
}

dbSelectedItem();

// 10
const apagar = document.getElementById('apaga-tudo');
function deleteAll() {
  apagar.addEventListener('click', () => {
    listaTarefa.innerHTML = '';
  });
}

deleteAll();

// 11
const apagarFinal = document.getElementById('remover-finalizados');
const complete = document.getElementsByClassName('completed');
function deleteFinal() {
  apagarFinal.addEventListener('click', () => {
    console.log(complete);
      for (let i = complete.length - 1; i >= 0; i -= 1) {
        complete[i].remove();
      }
  });
}

deleteFinal();
