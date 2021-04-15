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
const listItems = document.getElementById('lista-tarefas');

function select(){
  
  let boxItems = document.getElementById('lista-tarefas');
  
  boxItems.addEventListener('click',function(event){
    let listItems = document.querySelectorAll('.list-item');

    for(let index = 0; index < listItems.length; index += 1) {
      listItems[index].classList.remove('select');
    } event.target.classList.add('select');
  })
}
select();

function finished(){
  
  let boxItems = document.getElementById('lista-tarefas');

  boxItems.addEventListener('dblclick', function(event){

       if(event.target.classList.contains('completed') === true) {
        event.target.classList.remove('completed'); 
      } else {
        event.target.classList.add('completed');
      }
  })
}
finished();

function buttonClear(clearName){

  let button = document.createElement('button');
  button.id = 'apaga-tudo';
  button.innerText = clearName;
  section1.appendChild(button);

  button.addEventListener('click',function(){
 
    let items = document.querySelectorAll('.list-item');

    for(let index = 0; index < items.length; index += 1) {
      items[index].parentNode.removeChild(items[index]);
    }
  })
}

buttonClear('Limpar Lista');

function buttonFinished(finishedName){
  let buttonF = document.createElement('button');
  buttonF.id = 'remover-finalizados';
  buttonF.innerText = finishedName;
  section1.appendChild(buttonF);

  buttonF.addEventListener('click',function(){
    let finishedItems = document.querySelectorAll('.completed');
    for(let index = 0; index < finishedItems.length; index +=1){
      finishedItems[index].parentNode.removeChild(finishedItems[index]);
    }
  })
}
buttonFinished('Remover Finalizados');

function buttonSave(saveName){
  let buttonSave = document.createElement('button');
  buttonSave.id = 'salvar-tarefas';
  buttonSave.innerText = saveName;
  section1.appendChild(buttonSave)

  buttonSave.addEventListener('click',function(){

    localStorage.setItem('lista-tarefas',listItems.innerHTML);
  })
  const saved = localStorage.getItem('lista-tarefas');
  listItems.innerHTML = saved;
}
buttonSave('Salvar Tarefas');

function buttonCima(){
  let moverCima = document.createElement('button');
  moverCima.id = 'mover-cima';
  moverCima.innerText = 'Mover Para Cima';
  section1.appendChild(moverCima);
}
buttonCima();

function buttonBaixo(){
  let moverBaixo = document.createElement('button');
  moverBaixo.id = 'mover-baixo';
  moverBaixo.innerText = 'Mover Para Baixo';
  section1.appendChild(moverBaixo);
}
buttonBaixo();


