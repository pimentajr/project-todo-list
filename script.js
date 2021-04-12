// referencia para a manipulação do input 'https://www.w3schools.com/jsref/dom_obj_text.asp'
let buttonTaskCreate = document.querySelector('#criar-tarefa');
buttonTaskCreate.addEventListener('click', function () {

    // procura pelo que foi digitado no input
    let inputCamp = document.getElementById('texto-tarefa').value;

    // procura pela lista ordenada 
    let locateLista = document.querySelector('#lista-tarefas');

    // cria uma linha para a lista 
    if (inputCamp !== ''){
        let createLi = document.createElement('li');
        createLi.innerText = inputCamp;
        locateLista.appendChild(createLi);
        clearTextInput();
    }
});

// limpa a barra de inserir texto
function clearTextInput() {
    document.querySelector('#texto-tarefa').value = '';
}