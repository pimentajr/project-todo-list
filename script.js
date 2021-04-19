const buttonAdd = document.getElementById('criar-tarefa');
const buttonClear = document.getElementById('apaga-tudo');
const buttonCompleted = document.getElementById('remover-finalizados');
const buttonDown = document.getElementById('mover-baixo');
const buttonSave = document.getElementById('salvar-tarefas');
const buttonSelected = document.getElementById('remover-selecionado');
const buttonUp = document.getElementById('mover-cima');
const lista = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');

function insertItem(text, type) {
  const newItem = document.createElement('li');
  lista.appendChild(newItem);
  newItem.innerText = text;
  newItem.classList.add('list-item');
  if (type) {
    newItem.classList.add(type);
  }
}

function deleteList(array) {
  for (let i = 0; i < array.length; i += 1) {
    array[i].remove();
  }
}

function deleteItem(item) {
  const father = item.parentNode;
  father.removeChild(item);
}

function selectThis(e) {
  e.target.classList.add('selected');
  const selected = document.querySelectorAll('.selected');
  for (let i = 0; i < selected.length; i += 1) {
    if (selected[i] !== e.target) {
      selected[i].classList.remove('selected');
    }
  }
}

function taskComplete(e) {
  if (e.target.classList[1] === 'completed' || e.target.classList[2] === 'completed') {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
}

function onReturn() {
  if (localStorage.length !== 0) {
    for (let i = 0; i < localStorage.length; i += 1) {
      const valor = localStorage.getItem(`item${i}`);
      if (valor.match(/#$/)) {
        insertItem(valor.replace(/#$/, ''), 'completed');
      } else {
        insertItem(valor);
      }
    }
  }
}

buttonAdd.addEventListener('click', () => {
  insertItem(input.value);
  input.value = '';
});

buttonClear.addEventListener('click', () => {
  const allItems = document.querySelectorAll('.list-item');
  deleteList(allItems);
});

buttonCompleted.addEventListener('click', () => {
  const checkItems = document.querySelectorAll('.completed');
  deleteList(checkItems);
});

buttonSave.addEventListener('click', () => {
  localStorage.clear();
  const listed = document.querySelectorAll('.list-item');
  for (let i = 0; i < listed.length; i += 1) {
    const listedClasses = listed[i].classList;
    for (let n = 0; n < listedClasses.length; n += 1) {
      if (listedClasses[n] === 'completed') {
        localStorage.setItem(`item${i}`, `${listed[i].innerText}#`);
      } else {
        localStorage.setItem(`item${i}`, `${listed[i].innerText}`);
      }
    }
  }
});

buttonUp.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected) {
    const father = selected.parentNode;
    if (selected.previousElementSibling) {
      father.insertBefore(selected, selected.previousElementSibling);
    }
  }
});

buttonDown.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected) {
    const father = selected.parentNode;
    if (selected.nextElementSibling) {
      father.insertBefore(selected.nextElementSibling, selected);
    }
  }
});

buttonSelected.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  deleteItem(selected);
});

lista.addEventListener('click', selectThis);
lista.addEventListener('dblclick', taskComplete);
onReturn();
