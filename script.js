// 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

// 6 - Ordene os itens da lista de tarefas por ordem de criação

const text = document.getElementById('texto-tarefa');
const list = document.getElementById('lista-tarefas');
const create = document.getElementById('criar-tarefa');
const items = document.getElementsByTagName('li');
const eraser = document.getElementById('apaga-tudo');
const remove = document.getElementById('remover-finalizados');
const saver = document.getElementById('salvar-tarefas');

function addTasks() {
  const tasks = document.createElement('li');
  tasks.innerText = text.value;
  list.appendChild(tasks);
  text.value = '';
}
create.addEventListener('click', addTasks);

// 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)
// 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo

function addBackgroundColor() {
  list.addEventListener('click', (event) => {
    for (index = 0; index < items.length; index += 1) {
      items[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}
addBackgroundColor();

// 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item

function scratch() {
  list.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed') === true) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}
scratch();

// 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista

function removeList() {
  eraser.addEventListener('click', () => {
    list.innerHTML = '';
  });
}
removeList();

// 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista:

function removeItem() {
  remove.addEventListener('click', () => {
    const complete = document.querySelectorAll('.completed');
      for (let index2 = 0; index2 < complete.length; index2 += 1) {
        complete[index2].remove();
    }
  });
}
removeItem();

// 12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava:

function saveTasks() {
saver.addEventListener('click', () => {
  localStorage.setItem('saveTasks', list.innerHTML);
});

const saver2 = localStorage.getItem('saveTasks');
if (saver2) {
  list.innerHTML = saver2
}
}
saveTasks();

// 13 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas

function moveUp () {
  let up = document.getElementById('mover-cima');
  up.addEventListener('click', () => {
    for (let index3 = 0; index3 < items.length; index3 += 1) {
      if (items[index3].classList.contains('selected') && items[index3].previousElementSibling !== null) {
        const indexItems = items[index3]
        list.insertBefore(indexItems, indexItems.previousSibling);
      }
    }
  })
}
moveUp();

function moveDown () {
  let down = document.getElementById('mover-baixo');
  down.addEventListener('click', () => {
    for (let index4 = 0; index4 < items.length; index4 += 1) {
      if (items[index4].classList.contains('selected') && items[index4].nextElementSibling !== null) {
        const indexItems2 = items[index4]
        list.insertBefore(indexItems2.nextElementSibling, indexItems2);
        break;
      }
    }
  })
}
moveDown();
