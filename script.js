const list = document.querySelector('#list')
const olTodos = document.querySelector('#lista-tarefas');
const doButton = document.querySelector('#criar-tarefa');
const removeAllButton = document.querySelector('#apaga-tudo');
const removeAllCompleted = document.querySelector('#remover-finalizados');

const createrElement = (el, cl, value) => {
  let newTask = document.createElement(el);
  newTask.className = 'task';
  newTask.innerText = value;
  newTask.addEventListener('click', (event) => {
    const taskTarget = event.target;
    for (let index = 0; index < olTodos.children.length; index += 1) {
      olTodos.children[index].classList.remove('selected');
    }
    taskTarget.classList.toggle('selected');
  });
  newTask.addEventListener('dblclick', (event) => {
    const taskTarget = event.target;
    taskTarget.classList.toggle('completed');
  })

  return newTask;
};

doButton.addEventListener('click', () => {
  let inputWithValue = document.querySelector('#tarefa');
  // olTodos.insertBefore(createrElement('li', 'task', inputWithValue), olTodos.firstChild);
  olTodos.appendChild(createrElement('li', 'task', inputWithValue.value));
  inputWithValue.value = null;
})

removeAllButton.addEventListener('click', () => {
  olTodos.remove();
})

removeAllCompleted.addEventListener('click', () => {
  let completedTasks = document.getElementsByClassName('completed');
  console.log(completedTasks.length)
  for (let i = completedTasks.length - 1; i >= 0; i -= 1) {
    completedTasks[i].remove();

  }
  console.log(completedTasks)
})