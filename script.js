const buttom = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');
const clearButtom = document.querySelector('#apaga-tudo');
const removeCompleted = document.querySelector('#remover-finalizados');

function addList() {
  buttom.addEventListener('click', () => {
    lista.appendChild(document.createElement('li')).innerHTML = input.value;
    input.value = '';
  });
}

function backGroundGray() {
  lista.addEventListener('click', (event) => {
    const click = event.target;
    const li = document.getElementsByTagName('li');
    for (let index = 0; index < li.length; index += 1) {
      li[index].classList.remove('selected');
      if (lista.children){
        click.classList.add('selected');
      }
      
    }
  });
}

function completedList() {
  lista.addEventListener('dblclick', (event) => {
    const dbclick = event.target.classList.contains('completed');
    if (dbclick) { 
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
    
  });
}

function clearList() {
  clearButtom.addEventListener('click', () => {
    let lis = document.querySelectorAll('li');
    for (let index = 0; index < lis.length; index += 1) {
      lis[index].remove('li');
    }
  });
}

function completedRemove() {
removeCompleted.addEventListener('click', () => {
  let lis = document.querySelectorAll('.completed');
  for (let index = 0; index < lis.length; index += 1) {
    if (lis[index].classList.contains('completed')) {
      lis[index].remove('li')
    }
  }
})
}

completedRemove();
clearList();
completedList();
backGroundGray();
addList();
