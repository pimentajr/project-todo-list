const list = document.getElementById('lista-tarefas');

function addListItem() {
  const button = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');

  button.addEventListener('click', () => {
    const listItem = document.createElement('li');
    listItem.className = 'tarefa';
    listItem.innerText = input.value;
    list.appendChild(listItem);
    input.value = '';
  });
}

function removeSelect() {
  for (let i = 0; i < list.children.length; i += 1) {
    list.children[i].classList.remove('selected');
    list.children[i].style.backgroundColor = document.body.style.backgroundColor;
  }
}

function selectItem() {
  list.addEventListener('click', (e) => {
    removeSelect();
    if (e.target.className !== 'tarefa selected') {
      e.target.classList.add('selected');
      e.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  });
}

function removeComplete() {
  for (let i = 0; i < list.children.length; i += 1) {
    list.children[i].classList.remove('completed');
  }
}

function completeItem() {
  list.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('completed')) {
      removeComplete();
    } else if (e.target.className !== 'tarefa completed') {
      e.target.classList.add('completed');
    }
  });
}

function removeEverything() {
  const button = document.getElementById('apaga-tudo');

  button.addEventListener('click', () => {
    list.innerHTML = '';
  });
}

function removeCompleted() {
  const button = document.getElementById('remover-finalizados');

  button.addEventListener('click', () => {
    for (let i = 0; i < list.children.length; i += 1) {
      if (list.children[i].classList.contains('completed')) {
        list.removeChild(list.children[i]);
      }
    }
  });
}

addListItem();
selectItem();
completeItem();
removeEverything();
removeCompleted();
