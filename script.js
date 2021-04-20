function newTask() {
  const li = document.createElement('li');
  const inputValue = document.getElementById('texto-tarefa').value;
  const text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue === '') {
    alert('Campo vazio, informe uma tarefa!');
  } 
  else {
    document.getElementById('lista-tarefas').appendChild(li);
  }
  document.getElementById('texto-tarefa').value = "";
  creatButtonClosed(li)
}

function creatButtonClosed(li) {
  var span = document.createElement('button');
  var txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);
  for (let index = 0; index < close.length; index += 1) {
    close[index].onclick = function() {
      var div = this.parentElement;
      div.parentNode.removeChild(div);
    }
  }
}

function addButtonClosed() {
  var myNodelist = document.getElementsByTagName("li");
  for (let index = 0; index < myNodelist.length; index += 1) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[index].appendChild(span);
  }
}
addButtonClosed();

var close = document.getElementsByClassName("close");
for (let index = 0; index < close.length; index += 1) {
  close[index].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function deleteAllButton(){
    var apagar = document.createElement('BUTTON');
  var buttonName = document.createTextNode("Apaga tudo");
  apagar.id = "apaga-tudo";  
  apagar.appendChild(buttonName);   
  apagar.onclick = function() {
    let lista = document.getElementById('lista-tarefas');
    lista.innerHTML = "";
  }
  let menu = document.getElementById('menu');
  menu.appendChild(apagar);
}
deleteAllButton();

function selectTask() {
  document.querySelector('ol').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI')
      e.target.classList.toggle('checked');
  });
}
selectTask();