// ex 5
// No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.
// pegar input no dom como metodo para adicionar o input a um objeto que eu possa manipular em formato de lista.
let inputValue = document.getElementById('texto-tarefa').value;
// pegar botão
let button = document.getElementById('criar-tarefa');
// Criar uma função que adiciona um elemento na tela
// primeiro pego o  main
const mainProject = document.getElementById('main');
// feito isso inicio a construção da função. Primeiro pegar o elemento ol do dom
const taskList = document.getElementById('lista-tarefas');
// depois criamos o elemento que irá ser cada iten da lista, a tag li
let itenList = document.createElement('li');
// Agora precisamos adicionar o conteudo do input na tag li
itenList.innerText = inputValue;
// Agora é necessario vincular a li na tag ol

// Feito o vinculo agora é necessario transformar tudo em uma função.

// Apos tudo ser transformado em uma função devemos adicionar essa função ao evento click no botão Adicionar

// Adicionar eventLetener no botão para que ele reaja ao click acionando a função que pega o input e coloca em uma lista


// ver como apagar input depois do click
// Fazer a função adicionando elementos a lista (push ou add) de modo que não sobreescreva o elemento.
// Pesquisar como adicionar caixinha pacha check no elemento lista
