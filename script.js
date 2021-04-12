function addListItem() {
  const button = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');

  button.addEventListener('click', () => {
    const listItem = document.createElement('li');
    listItem.className = 'tarefa';
    listItem.innerText = input.value;
    list.appendChild(listItem);
    input.value = '';
  });
}

function removeSelect() {
  const list = document.getElementById('lista-tarefas');

  for (let i = 0; i < list.children.length; i += 1) {
    list.children[i].className = 'tarefa';
  }
}

function selectItem() {
  const body = document.body;
  const list = document.getElementById('lista-tarefas');

  list.addEventListener('click', () => {
    for (let i = 0; i < list.children.length; i += 1) {
      list.children[i].addEventListener('click', () => {
        removerSelecao();
        if (list.children[i].className !== 'tarefa selected') {
          list.children[i].classList.add('selected');
        }
      });

      if (list.children[i].className === 'tarefa') {
        list.children[i].style.backgroundColor = body.style.backgroundColor;
      } else if (list.children[i].className === 'tarefa selected'){
        list.children[i].style.backgroundColor = 'rgb(128, 128, 128)'
      }
    }
  });
}

addListItem();
listItemClick();
