let tarefaInput = document.getElementById('texto-tarefa');
let botaoAdd = document.getElementById('criar-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');

function criarTarefa() {
  if (tarefaInput.value === '') {
        return false;
    }
  // Criando um novo elemento
    let newItem = document.createElement('li');
    // adicionando o valor do input ao elemento criando
    newItem.textContent = tarefaInput.value;
    // limpando input
    tarefaInput.value = '';
    //  listaTarefas é pai de newItem
    listaTarefas.appendChild(newItem);
}

// add evento de click, passando a função acima
botaoAdd.addEventListener('click', criarTarefa);

