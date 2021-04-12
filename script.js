http://www.learningaboutelectronics.com/Articles/How-to-retrieve-data-from-a-text-box-in-javascript.php#:~:text=To%20extract%20the%20information%20which,entered%20into%20this%20text%20box.
function addToList () {
  var task = document.querySelector('#texto-tarefa');
  var addTask = task.value;
  var orderList = document.getElementById('lista-tarefas');
  var node = document.createElement('li')
  node.innerHTML = addTask;
  orderList.appendChild(node);
  task.value = '';
}
