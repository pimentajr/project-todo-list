const newHeader = document.getElementsByTagName('header')[0];


const createOl = document.createElement('ol');
const addButton = document.createElement('button');
createOl.id = 'lista-tarefas';
addButton.id = 'criar-tarefa';
console.log(createOl);
console.log(addButton);

addButton.addEventListener('click', () => {
  const createList = document.createElement('li');

});
