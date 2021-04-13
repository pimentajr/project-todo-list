// 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

const text = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const create = document.getElementById('criar-tarefa');

function addTasks(string) {
  const tasks = document.createElement('li');
  tasks.innerText = text.value;
  list.appendChild(tasks);
  text.value = '';
}
create.addEventListener('click', addTasks);

