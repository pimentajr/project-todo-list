function newTask() {
  const li = document.createElement('li');
  li.className = "checked";
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

function deleteAllButton()
{
     var apagar = document.createElement('BUTTON');
     var buttonName = document.createTextNode("Apaga tudo");
     apagar.id = "apaga-tudo";  
     apagar.appendChild(buttonName);   
     apagar.onclick = function()
     {
        let lista = document.getElementById('lista-tarefas');
        console.log(lista);
        lista.innerHTML = "";
     }
     let menu = document.getElementById('menu');
     menu.appendChild(apagar);    
     
}

deleteAllButton();
