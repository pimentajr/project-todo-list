const section1 = document.getElementById('section-1');


function createInput(){
  const inputUser = document.createElement('input');
  inputUser.setAttribute('type','text');
  inputUser.setAttribute('value','');
  inputUser.id = 'texto-tarefa';

  section1.appendChild(inputUser);

}
createInput();

function buttonCreateItem(nameButton){
  let button = document.createElement('button');
  button.id = 'criar-tarefa';
  button.innerText = nameButton;

  section1.appendChild(button);

  button.addEventListener('click',function(){
    let inputUser = document.getElementById('texto-tarefa');
    let list = document.createElement('li');
    list.className = 'list-item';
    list.innerText = inputUser.value;
        
    let ol = document.getElementById('lista-tarefas');
    ol.appendChild(list);

    inputUser.value = '';     
  })
}
buttonCreateItem('Adicionar');

function createList(){
  let ol = document.createElement('ol');
  ol.id='lista-tarefas';
  
  section1.appendChild(ol);
}
createList();

function select(){
  let boxItems = document.getElementById('lista-tarefas');

  boxItems.addEventListener('click',function(event){

    let listItems = document.querySelectorAll('.list-item');

    for(let index = 0; index < listItems.length; index += 1) {
      listItems[index].classList.remove('select')
    } event.target.classList.add('select');
  })
}
select();
