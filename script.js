const ordenedList = document.querySelector('#lista-tarefas');
// console.log(ordenedList);
const buttonNewJob = document.querySelector('#criar-tarefa');
// console.log(buttonNewJob);


// botão para criar um novo item na lista
buttonNewJob.addEventListener('click', function() {
  const newItemList = document.createElement('li');
  newItemList.className = 'Item-List';
  const textItem = document.querySelector('#texto-tarefa');
  // console.log(textItem.value);
  newItemList.innerText = textItem.value;
  ordenedList.appendChild(newItemList);
  textItem.value = '';
});

// Colocar fundo cinza em um item clicado
ordenedList.addEventListener('click', function(event) {
  const itensList = document.querySelectorAll('.clicked');
  for (let index = 0; index < itensList.length; index += 1){
    itensList[index].classList.remove('clicked');
  }
  event.target.classList.add('clicked');
  console.log(event.target);
});
