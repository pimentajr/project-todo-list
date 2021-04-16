const textoTarefa = document.getElementById('texto-tarefa');
const buttonCriarTarefa = document.getElementById('criar-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');

buttonCriarTarefa.addEventListener('click', () => {
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = textoTarefa.value;
  listaDeTarefas.appendChild(novaTarefa);
  textoTarefa.value = '';
 });

 function selectedItem(event) {
   removeSelected();
   const mouse = event.target;
   mouse.classList.toggle('selected');
 }
 listaDeTarefas.addEventListener('click', selectedItem);

 function removeSelected() {
   const itens = document.querySelectorAll('li');
   for (let index = 0; index < itens.length; index +=1) {
     const element = itens[index];
     element.classList.remove('selected');
   }
   
 }
