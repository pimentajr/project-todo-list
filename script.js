function addTask() {
  const getInput = document.querySelector('#texto-tarefa');
  const getOl = document.querySelector('#lista-tarefas');
  const getBtn = document.querySelector('#criar-tarefa');

  getBtn.addEventListener('click', () => {
    const createLi = document.createElement('li');
    if (getInput.value !== '') {
      createLi.innerText = getInput.value;
      createLi.className = 'list';
      createLi.style.backgroundColor = 'white';
      getOl.appendChild(createLi);
    }
    if (getInput.value) {
      getInput.value = '';
    }
  });
}
addTask();

function change() {
  const getList = document.querySelector('#lista-tarefas');
  getList.addEventListener('click', (event) => {
    const e = event.target;
    // console.log(getList);
    console.log(e.style.backgroundColor);
    if (e.style.backgroundColor !== 'rgb(128, 128, 128)') {
      e.style.backgroundColor = 'rgb(128, 128, 128)';
      // console.log(e);
    }
  });
}
change();
