function newTask() {
  const li = document.createElement('li');
  const inputValue = document.getElementById('texto-tarefa').value;
  const text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue === '') {
    alert("Campo vazio, informe uma tarefa!");
  }
  else {
    document.getElementById('lista-tarefas').appendChild(li);
  }
  document.getElementById('texto-tarefa').value = "";
  var span = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (let index = 0; index < close.length; index++) {
    close[index].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

var myNodelist = document.getElementsByTagName("li");

for (let index = 0; index < myNodelist.length; index++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[index].appendChild(span);
}

var close = document.getElementsByClassName("close");

for (let index = 0; index < close.length; index++) {
  close[index].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}