const textoTarefa = document.querySelector('input#texto-tarefa'); //.value 
const criarTarefa = document.getElementById('criar-tarefa');
const lista = document.querySelector('ol#lista-tarefas');
lista.innerHTML = localStorage.getItem('list');

criarTarefa.addEventListener('click', function gerar() {
  let item = document.createElement('li');
  item.classList.add('lista-itens');
  item.appendChild(document.createTextNode(textoTarefa.value));
  lista.appendChild(item);
  textoTarefa.value = '';
  
  item.addEventListener('click', function(event) {
    item.style.backgroundColor = 'gray';
  });
});
