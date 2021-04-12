const buttom = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');

function addList() {
  buttom.addEventListener('click', ()=> {
    lista.appendChild(document.createElement('li')).innerHTML = input.value;
    input.value = '';
  });
}

function backGroundGray() {
lista.addEventListener('click', (event)=> {
let click = event.target
click.classList.add('gray')
console.log(click)
})
}

backGroundGray()
addList();
