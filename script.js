// Adiciona itens à lista
// Para adição de enter na lista, foi consultada a documentação em W3Schools sobre ações usando o "Enter"
// Source: https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
function addToList() {
  let input = document.getElementById('texto-tarefa');
  let addButton = document.getElementById('criar-tarefa');
  let list = document.getElementById('lista-tarefas');

  //Usando click
  addButton.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = input.value;
    input.value = '';
    list.appendChild(li);
  });

  //Usando enter
  input.addEventListener('keyup', (event) => {
    if(event.keyCode === 13) {
      let li = document.createElement('li');
      li.innerText = input.value;
      input.value = '';
      list.appendChild(li);
    }
  });
}
addToList();