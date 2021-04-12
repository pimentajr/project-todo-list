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
