const listWhite =
window.onload = 

function createItemInList() {
  // referencia para a manipulação do input 'https://www.w3schools.com/jsref/dom_obj_text.  asp'
  // limpa a barra de inserir texto
  function clearTextInput() {
    document.querySelector('#texto-tarefa').value = '';
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
      createLi.classList.add('uncompleted');
      locateLista.appendChild(createLi);
      // limpa a caixa de entrada 
      clearTextInput();
      function highLightSelected() {
        //remover destaque ao item selecionado
        function unselectLi() {
          const createLiArray = document.querySelectorAll('li');
          for ( let i = 0; i < createLiArray.length; i += 1) {
            createLiArray[i].addEventListener('click',function removebackground() {
              let itemListSelected = document.querySelector('.completed');
              itemListSelected.classList.remove('completed');
              createLiArray[i].classList.add('uncompleted');
          })
        }
        }
        unselectLi();
        //adiciona destaque ao item selecionado
        function selectLi() {
          const createLiArray = document.querySelectorAll('li');
          for ( let i = 0; i < createLiArray.length; i += 1) {
            createLiArray[i].addEventListener('click', function backgroundChange() {
              let itemListSelected = document.querySelector('.uncompleted');
              itemListSelected.classList.remove('uncompleted')
              createLiArray[i].classList.add('completed');
          })
        }
        }
        selectLi();
      }
      highLightSelected();

    }
    }
  );
}
createItemInList();
