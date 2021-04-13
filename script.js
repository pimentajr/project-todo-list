//5
const criarTarefa = document.getElementById('criar-tarefa');
const listaTarefa = document.getElementById('lista-tarefas');
const tarefa = document.getElementById('texto-tarefa')

criarTarefa.addEventListener('click', () => {
   const itemLista = document.createElement('li');
   itemLista.innerText = tarefa.value;
   listaTarefa.appendChild(itemLista);
   tarefa.value = '';
})
