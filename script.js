const inputText = document.getElementById('texto-tarefa');
const btnCreatTf = document.getElementById('criar-tarefa');
const setListOl = document.getElementById('lista-tarefas');
const btnClear = document.getElementById('apaga-tudo');
const btnRemove = document.getElementById('remover-finalizados');
const btnSave = document.getElementById('salvar-tarefas');
const btnRmovSelect = document.getElementById('remover-selecionado');
const movUp = document.getElementById('mover-cima');
const movDown = document.getElementById('mover-baixo');

function addItenList() {
  const creatLi = document.createElement('li');
  creatLi.classList = 'itlist';
  creatLi.innerText = inputText.value;
  setListOl.appendChild(creatLi);
  inputText.value = '';
}

btnCreatTf.addEventListener('click', addItenList);

function listClick(event) {
  if (event.type === 'click') {
    const slectListAll = document.querySelectorAll('.active');
    slectListAll.forEach((elem) => {
      elem.classList.remove('active');
    });
    event.target.classList.add('active');
  } else if (event.type === 'dblclick') {
    if (event.target.classList[1] === 'active') {
      event.target.classList.add('completed');
    } else {
      event.target.classList.remove('completed');
    }
  }
}

setListOl.addEventListener('click', listClick);

setListOl.addEventListener('dblclick', listClick);

btnClear.addEventListener('click', () => {
  setListOl.innerHTML = '';
});

btnRemove.addEventListener('click', () => {
  const removComplet = document.querySelectorAll('.completed');
  removComplet.forEach((elem) => {
    elem.remove();
  });
});

btnSave.addEventListener('click', () => {
  localStorage.setItem('list', setListOl.innerHTML);
});

function loadLocalstorage() {
  setListOl.innerHTML = localStorage.getItem('list');
}

loadLocalstorage();

btnRmovSelect.addEventListener('click', () => {
  const removComplet = document.querySelectorAll('.active');
  removComplet.forEach((elem) => {
    elem.remove();
  });
});

movUp.addEventListener('click', () => {
  const movUpLi = document.querySelector('.active');
  if (movUpLi !== setListOl.firstChild && movUpLi) {
    setListOl.insertBefore(movUpLi, movUpLi.previousSibling);
  }
});

movDown.addEventListener('click', () => {
  const movDownLi = document.querySelector('.active');
  if (movDownLi !== setListOl.lastChild && movDownLi) {
    setListOl.insertBefore(movDownLi.nextSibling, movDownLi);
  }
});
