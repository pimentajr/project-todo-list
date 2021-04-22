const title = document.createElement('header');
title.innerText = 'Minha Lista de Tarefas';
document.body.appendChild (title)

const paragrafo = document.createElement('p');
paragrafo.innerText = 'Clique duas vezes para marca-lo como completo';
paragrafo.id = 'funcionamento';
document.body.appendChild(paragrafos)

function createTextInput (){
  const div = document.createElement('div');
 document.body.appendChild(div);
 const creatInput = document.createElement('input');
  creatInput.setAttribute('type', 'text');
  creatInput.id = 'texto-tarefa';
div.appendChild(input)
}
createTextInput();
