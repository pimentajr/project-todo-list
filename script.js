const textoTarefa = document.querySelector('input#texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
const lista = document.querySelector('ol#lista-tarefas');
lista.innerHTML = localStorage.getItem('list');

criarTarefa.addEventListener('click', () => {
  const item = document.createElement('li');
  item.classList.add('lista-itens');
  item.appendChild(document.createTextNode(textoTarefa.value));
  lista.appendChild(item);
  textoTarefa.value = '';
  
  lista.addEventListener('click', (event) => {
    const evento = event.target;
    const selTarefa = document.querySelector('.selected');
    if (selTarefa) {
      selTarefa.classList.remove('selected');
    }
    evento.classList.add('selected');
  });
});
