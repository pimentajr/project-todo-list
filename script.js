const lista = document.getElementById('lista-tarefas');

function grifaItem() {
  const items = document.querySelectorAll('li');
  items.forEach((item) => {
    item.addEventListener('click', () => item.classList.add('gray'));
  });
}
function criacaoDeTarefas() {
  const input = document.getElementById('texto-tarefa');
  const inputValue = input.value;
  const item = document.createElement('li');
  item.innerText = inputValue;
  lista.appendChild(item);
  input.value = '';
  grifaItem();
}
function apagaTudo() {
  lista.innerHTML = '';
}
