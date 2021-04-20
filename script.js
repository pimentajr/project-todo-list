//Botão para criar a tarefa
const buttonCreateTask = document.getElementById('criar-tarefa');
//Aqui é o input
let entry = document.getElementById('texto-tarefa');
//Para onde as tarefas vão
let tasklist = document.querySelector('#lista-tarefas');
// Classe que risca a frase
const scratch = document.querySelector('.completed');
//
const botaoLimpar = document.querySelector('#apaga-tudo')
//
const botaoLimparSelecionados = document.querySelector('#remover-finalizados')

let flag = 0;

function createTasks() {
  buttonCreateTask.addEventListener('click', () => {
    itemTask = document.createElement('li');
    itemTask.innerText = entry.value;
    tasklist.appendChild(itemTask);
    entry.value = '';
  });
}

//Requisito 7 e 8
// Clicar em um ítem da lista dá ao objeto a classe color, que altera o background para cinza
function backgroundColor() {
  tasklist.addEventListener('click', (event) => {
    //Guardando a classe em uma variavel para poder manipular
    const classColor = document.querySelector('.color');
    // Se color = true em algum elemento, então, remova a classe.
    if (classColor) {
      classColor.classList.remove('color');
    }
    event.target.classList.add('color'); // retorna o elemento que disparou o evento
  });
}

//Requisito 9, riscar e desriscar com um duplo clique
function riskWord() {
  tasklist.addEventListener('dblclick', function (event) {
    let li = event.target.closest('li');
    let nodes = Array.from(tasklist.children);
    let index = nodes.indexOf(li);
    if (flag === 0) {
      nodes[index].classList.add('completed');
      flag = 1;
    } else {
      nodes[index].classList.remove('completed');
      flag = 0;
    }
  });

//Requisito 10

botaoLimpar.addEventListener('click', function(e){
    let listaElementos = Array.from(tasklist.children)
    listaElementos.map(value => value.remove())
    console.log(listaElementos)
})

//Requisito 11
botaoLimparSelecionados.addEventListener('click', function(e){
    let listaElementos = Array.from(tasklist.children)
    listaElementos.map(value => value.classList.contains('completed') ? value.remove() : value)
})




  // Outra forma de fazer o requisito 9
  //tasklist.addEventListener('dblclick', (event) => {
  // const eventTarget = event.target;
  //if (eventTarget.classList.contains('completed')) {
  //  eventTarget.classList.remove('completed');
  // } else {
  //  eventTarget.classList.add('completed');
  // }
  //});
}

console.log(tasklist[0]);

console.log(tasklist);

createTasks();
backgroundColor();
riskWord();
clearAll();