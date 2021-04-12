const section1 = document.getElementById('section-1');

function createInput(){
  const inputUser = document.createElement('input');
  inputUser.setAttribute('type','text');
  inputUser.id = 'texto-tarefa';

  section1.appendChild(inputUser);

}
createInput();

function createList(){
  let ol = document.createElement('ol');
  ol.id='lista-tarefas';
  
  section1.appendChild(ol);
}
createList();
