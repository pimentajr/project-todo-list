const buttonCriar = document.querySelector('#criar-tarefa');
buttonCriar.addEventListener('click', () => {
const value = document.querySelector('#texto-tarefa');
const listeOl = document.querySelector('#lista-tarefas');
const newLi = document.createElement('li');
listeOl.appendChild('newLi');
newLi.classList.add('value-list');
newLi.innerText = valor.value;
valor.value = '';
})