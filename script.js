// referencia para a manipulação do input 'https://www.w3schools.com/jsref/dom_obj_text.asp'
// limpa a barra de inserir texto
function clearTextInput() {
  document.querySelector('#texto-tarefa').value = '';
}

// remover destaque ao item selecionado
function unselectLi() {
  const createLiArray = document.querySelectorAll('li');
  for ( let i = 0; i < createLiArray.length; i += 1) {
    createLiArray[i].addEventListener('click', function removebackground() {
      const itemListSelected = document.querySelector('.selected');
      if (itemListSelected !== null) {
        itemListSelected.classList.remove('selected');
      }
    })
  }
}

// adiciona destaque ao item selecionado
function selectLi() {
  const createLiArray = document.querySelectorAll('li');
  for ( let i = 0; i < createLiArray.length; i += 1) {
    createLiArray[i].addEventListener('click', function backgroundChange() {
      createLiArray[i].classList.add('selected');
    })
  }
}

const buttonTaskCreate = document.querySelector('#criar-tarefa');
buttonTaskCreate.addEventListener('click', function buttonAction() {
// procura pelo que foi digitado no input
const inputCamp = document.getElementById('texto-tarefa').value;
// procura pela lista ordenada
const locateLista = document.querySelector('#lista-tarefas');
// cria uma linha para a lista
if (inputCamp !== ''){
  const createLi = document.createElement('li');
  createLi.innerText = inputCamp;
  locateLista.appendChild(createLi);
  // limpa a caixa de entrada 
  clearTextInput();
  unselectLi();
  selectLi();

  function lineCompleted() {
    let locateSelectedItens = document.querySelectorAll('li');
    for(let i = 0; i < locateSelectedItens.length; i += 1){
      locateSelectedItens[i].addEventListener('dblclick', function dubleClickAction() {
          // testar o toggle 'https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_class'
          locateSelectedItens[i].classList.toggle('completed');
      })

    }
  }
  lineCompleted();
}
});

let cleanButton = document.querySelector('#apaga-tudo');
cleanButton.addEventListener('click', function cleanListButton(){
  let locateOl = document.querySelector('ol');
  locateOl.innerHTML = null;
})
