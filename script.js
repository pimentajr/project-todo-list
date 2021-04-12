// ex 5
// No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.
// Criando lo para ex 4
let taskList = document.createElement('ol');
taskList.id ='lista-tarefa'
// Pegando o main do DOM
const mainProject = document.getElementById('main');

// pegar botão
let button = document.getElementById('criar-tarefa');
// Criar uma função que adiciona um elemento na tela



// Função para colocar input na lista
function inputTask() {
  // pegar o valor do input no dom 
  let inputValue = document.getElementById('texto-tarefa').value;
  // depois criamos o elemento que irá ser cada iten da lista, a tag li
  let itenList = document.createElement('li');
  // Agora precisamos adicionar o conteudo do input na tag li
  itenList.innerText = inputValue;
  // Agora é necessario vincular a li na tag ol
  taskList.appendChild(itenList);
  // Adiciona a lista no main
  mainProject.appendChild(taskList);
}
// Apos tudo ser transformado em uma função devemos adicionar essa função ao evento click no botão Adicionar

// Adicionar eventLetener no botão para que ele reaja ao click acionando a função que pega o input e coloca em uma lista


// ver como apagar input depois do click
// Fazer a função adicionando elementos a lista (push ou add) de modo que não sobreescreva o elemento.
// Pesquisar como adicionar caixinha pacha check no elemento lista
