let addButton = document.querySelector('#criar-tarefa');
let delButton = document.querySelector('#apaga-tudo');

let olTaskList = document.querySelector('#lista-tarefas');

let input1 = document.querySelector('#texto-tarefa');

addButton.addEventListener('click', function () {
  let inputValue = input1.value;
  let newTask = document.createElement('li');
  newTask.innerHTML = inputValue;
  newTask.className = 'task';
  olTaskList.appendChild(newTask);
  input1.value = '';
})

let tasks = document.querySelector('ol');

function selectTask(event) {
  for (let index = 0; index < tasks.children.length; index += 1) {
      tasks.children[index].style.backgroundColor = '';
    }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}
tasks.addEventListener('click', selectTask);

let click = 0;
function completed(event) {
  if (click == 0) {
    event.target.classList.add('completed');
    click = 1;
  } else {
    event.target.classList.remove('completed');
    click = 0;
  }

}
tasks.addEventListener('dblclick', completed);

function deleteAll() {
  tasks.innerHTML = '';
}
delButton.addEventListener('click', deleteAll)

