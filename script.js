// Adiciona itens à lista
// Para adição de enter na lista, foi consultada a documentação em W3Schools sobre ações usando o "Enter"
// Source: https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
function addToList() {
  const input = document.getElementById('texto-tarefa');
  const addButton = document.getElementById('criar-tarefa');
  const list = document.getElementById('lista-tarefas');
  addButton.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = input.value;
    input.value = '';
    list.appendChild(li);
  });
  // Usando enter
  input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      const li = document.createElement('li');
      li.innerText = input.value;
      input.value = '';
      list.appendChild(li);
    }
  });
}
addToList();
