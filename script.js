// 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

// 6 - Ordene os itens da lista de tarefas por ordem de criação

const text = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const create = document.getElementById('criar-tarefa');
const items = document.getElementsByTagName('li');

function addTasks() {
  const tasks = document.createElement('li');
  tasks.innerText = text.value;
  list.appendChild(tasks);
  text.value = '';
}
create.addEventListener('click', addTasks);

// 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)
// 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo

function addBackgroundColor(event) {
  list.addEventListener('click', (event) => {
    for (index = 0; index < items.length; index += 1) {
      items[index].classList.remove('selecionado');
    }
    event.target.classList.add('selecionado');
  })
}
addBackgroundColor();
