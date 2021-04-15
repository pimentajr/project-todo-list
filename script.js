const createTask = document.getElementById('criar-tarefa');
const listTask = document.getElementById('lista-tarefas');
const textTask = document.getElementById('texto-tarefa');
// const createListItem = document.createElement('li');

//Requisitos 05 e 06
createTask.addEventListener('click', () => {
  const createListItem = document.createElement('li');
  createListItem.innerText = textTask.value;
  listTask.appendChild(createListItem);
  textTask.value = '';
});

//Requisito 07 e 08 
const OL = document.getElementById('lista-tarefas');
OL.addEventListener('click', (event) => {
  const selectedLI = document.getElementsByClassName('selected');
  if (selectedLI.length !== 0){
    console.log(selectedLI);
    selectedLI[0].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });


  //Requisito 08 teste
  // const getLI = getOL.appendChild;
  // getLI.addEventListener('click', (event) => {
  //   event.target.style.backgroundColor = '';
  //   event.target.style.backgroundColor = 'rgb(128, 128, 128';
  // });
 




// Requisito 07 Modo que deu certo
// const getOL = document.getElementById('lista-tarefas');
// getOL.addEventListener('click', (event) => {
//   event.target.style.backgroundColor = 'rgb(128, 128, 128';
//   });
