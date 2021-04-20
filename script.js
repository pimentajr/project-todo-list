window.onload = function() {

  const addTask = document.getElementById('criar-tarefa');
  const inputText = document.getElementById('texto-tarefa');
  const orderedList = document.getElementById('lista-tarefas');
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
      li.setAttribute('id', 'itemList');
      li.innerHTML += inputText.value;
      orderedList.appendChild(li);
    }
    document.getElementById('texto-tarefa').value = null;
  });
  
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
  }