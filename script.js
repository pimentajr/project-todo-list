const buttonadd = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const task = document.getElementById('texto-tarefa');
// requisito 5 
buttonadd.onclick = function addTask () {
 const item = document.createElement('li');
 item.className = 'item';
 taskList.appendChild(item);
 item.innerText = task.value;
 task.value = '';  
}
  
  
  
  
