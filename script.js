const lista = document.getElementById('lista-tarefas');

function criacaoDeTarefas() {
  const input = document.getElementById('texto-tarefa');
  const inputValue = input.value;
  const item = document.createElement('li');
  item.innerText = inputValue;
  lista.appendChild(item);
  input.value = '';
}
