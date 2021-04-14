let addButton = document.querySelector('#criar-tarefa');

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


