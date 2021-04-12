window.onload = function () {
  const insertButtom = document.getElementById('criar-tarefa');
  // const tasks = document.getElementsByClassName('task');
  const tasks = document.querySelector('#lista-tarefas');
  let taskList = document.getElementById('lista-tarefas');  

  // Desafio 5 e 6
  insertButtom.addEventListener('click', function(){
    let taskContent = document.getElementById('texto-tarefa').value;
    let newTask = taskContent;
    document.getElementById('texto-tarefa').value = '';
    
    let newTaskToInsert = document.createElement('li');
    newTaskToInsert.innerHTML = newTask;
    newTaskToInsert.className = 'task';
    taskList.appendChild(newTaskToInsert);

    console.log(tasks); // Depois apagar!
  })

  // Desafio 7

  tasks.addEventListener('click', function(e) {
    for (let index = 0; index < tasks.children.length; index += 1){
      tasks.children[index].classList.remove('selectedTask');
    }
    e.target.classList.add('selectedTask');
  })

  // Desafio 9
  tasks.addEventListener('dblclick', function(f) {
    if (f.target.classList.contains('completed')) {
      f.target.classList.remove('completed')
    } else {
      f.target.className = 'completed';
    }
  })


}
