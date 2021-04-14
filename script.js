function addItem() {
    
    let newTask = document.getElementById("texto-tarefa").value;
    
    let list = document.getElementById("lista-tarefas").innerHTML;
    
    list = list + "<li>" + newTask + "</li>";

    document.getElementById("lista-tarefas").innerHTML = list;

    document.getElementById("texto-tarefa").value = " ";

}
function Start() {
    
    const button = document.querySelector('#criar-tarefa');
    
    button.addEventListener('click', addItem);
    
}
  window.onload = Start;
  