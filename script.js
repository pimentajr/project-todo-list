window.onload = function() {

const addTask = document.getElementById('criar-tarefa');
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');

addTask.addEventListener('click', () => {
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
});

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

function deleteAllButton(){
  var apagarAll = document.createElement('BUTTON');
  var buttonName = document.createTextNode("Apaga tudo");
  apagarAll.id = "apaga-tudo";  
  apagarAll.appendChild(buttonName);   
  apagarAll.onclick = function() {
    let lista = document.getElementById('lista-tarefas');
    lista.innerHTML = "";
  }
  let menu = document.getElementById('menu');
  menu.appendChild(apagarAll);
}
deleteAllButton();


function selectTask() {
  document.querySelector('ol').addEventListener('dblclick', (e) => {
    if (e.target.tagName === 'LI')
      e.target.classList.toggle('checked');
  });
}
selectTask();

moveUpButton.addEventListener('click', () => {
  const itemList = document.getElementsByTagName('li');
  for (let index = 0; index < itemList.length; index += 1) {
    if (itemList[index].classList.value.includes('checked') && index !== 0) {
      const saveItemList = itemList[index].outerHTML;
      itemList[index].outerHTML = itemList[index - 1].outerHTML;
      itemList[index - 1].outerHTML = saveItemList;
    }
  }
});

moveDownButton.addEventListener('click', () => {
  const itemList = document.getElementsByTagName('li');
  for (let index = itemList.length - 1; index >= 0; index -= 1) {
    if (itemList[index].classList.value.includes('checked') && index !== (itemList.length - 1)) {
      const saveItemList = itemList[index].outerHTML;
      itemList[index].outerHTML = itemList[index + 1].outerHTML;
      itemList[index + 1].outerHTML = saveItemList;
    }
  }
});

var close = document.getElementsByClassName("close");
for (let index = 0; index < close.length; index += 1) {
  close[index].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
}