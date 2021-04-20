let addToDoButton = document.getElementById('criar-tarefa');
let toDoContainer = document.getElementById('lista-tarefas');
let inputField = document.getElementById("texto-tarefa");
let eraseList = document.getElementById("apaga-tudo")

addToDoButton.addEventListener('click', function(){
    
    var paragraph = document.createElement('li');
    paragraph.classList.add('paragraph-styling');
    paragraph.setAttribute("id", "list-item");
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    
    paragraph.addEventListener('dblclick', function(){
        paragraph.classList.add('linha');
    });
    paragraph.addEventListener('click', function(){
        paragraph.classList.add('grayRGD')
    });
   
})

});

function selecionarTarefa() {
  lista.addEventListener('click', (event) => {
    const acao = event.target;
    const itemSelecionado = document.querySelector('.selected');
    if (itemSelecionado) {
      itemSelecionado.classList.remove('selected');
    }
    acao.classList.add('selected');
  });
}
selecionarTarefa();

function tarefaFinalizada() {
  lista.addEventListener('dblclick', (event) => {
    const acao = event.target;
    if (acao.classList.contains('completed')) {
      acao.classList.remove('completed');
    } else {
      acao.classList.add('completed');
    }
  });
}
tarefaFinalizada();


function deleteAllList() {
  const deleteTudo = document.getElementById('apaga-tudo');

  deleteTudo.addEventListener('click', () => {
    const itemLista = document.querySelectorAll('.itemLista');
    for (let index = 0; index < itemLista.length; index += 1) {
      lista.removeChild(itemLista[index]);
    }
  });
}

deleteAllList();

function deleteSelecionados() {
  const delSelecao = document.getElementById('remover-finalizados');

  delSelecao.addEventListener('click', () => {
    const itemLista = document.querySelectorAll('.completed');
    for (let index = 0; index < itemLista.length; index += 1) {
      lista.removeChild(itemLista[index]);
    }
  });
}

deleteSelecionados();

//codigo que me estudei: https://www.youtube.com/watch?v=n3X7m0GzFRY&ab_channel=CodingMindBrasil