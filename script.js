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
    list.children[i].className = 'tarefa';
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

addListItem();
selectItem();
