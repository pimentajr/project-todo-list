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
      locateLista.appendChild(createLi);
      clearTextInput();
      function selectLi() {
        createLi.addEventListener('click', function backgroundChange() {
          createLi.classList = 'item-list';
          
        })
      }
      selectLi();
    }
  });
}
createItemInList();


  const itemList = document.querySelector('.item-list');
    
  

