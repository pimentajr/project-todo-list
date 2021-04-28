//Função que retira da classe 'selecionado' uma tarefa previamente selecionada caso uma nova tarefa seja selecionada. 

function retirarClasse() {
    const tarefaSelecionada = document.querySelectorAll('.selecionado');
    let index = ' ';
    for (index = 0; index < tarefaSelecionada.length; index += 1) {
      tarefaSelecionada[index].classList.remove('selecionado');
    }
  }

  // Função que deixa o item selecionado e atribui ao elemento a classe 'selecionado'.

function selecionarTarefa(sTarefa) {
    retirarClasse();
    sTarefa.target.classList.toggle('selecionado');
  }

  // Função que ao dar duplo clique deixa a tarefa riscada, indicando que a mesma foi concluída.

function tarefaConcluida(cTarefa) {
    if (cTarefa.className === 'completed') {
      cTarefa.target.classList.remove('completed');
    } else {
      cTarefa.target.classList.toggle('completed');
    }
  }

// Função que é executada ao clique do botão 'apagar tarefas concluídas' apagando somente as tarefas marcadas como finalizadas.

function apagarTarefasFinalizadas() {
    const tarefasFinalizadas = document.querySelectorAll('.completed');
    let index = ' ';
    for (let index = 0; index < tarefasFinalizadas.length; index += 1) {
      tarefasFinalizadas[index].remove();
    }
  }  

// Função adicionar tarefas.

function adicionarTarefas() {
    const text = document.getElementById('texto-tarefa');
    const list = document.getElementById('lista-tarefas');
    const tarefa = document.createElement('li');
    tarefa.className = 'tarefas';
    tarefa.innerText = text.value;
    list.appendChild(tarefa);
    text.value = ' ';
    tarefa.addEventListener('click', selecionarTarefa);
    tarefa.addEventListener('dblclick', tarefaConcluida);
  }

// Função que é executada ao clique do botão 'apagar', limpando a lista de tarefas

function apagarTarefas() {
    const tarefas = document.querySelectorAll('.tarefas');
    if (tarefas.length !== 0) {
      list.innerHTML = ' ';
    }
  }

  // Função para salvar estado da lista de tarefas.

function salvarEstado() {
    localStorage.setItem('list', list.innerHTML);
  }

  // Função para carregar o estado salvo anteriormente.

function carregarEstado() {
    list.innerHTML = localStorage.getItem('list');
    const carregarLista = document.querySelectorAll('li');
    for (let index = 0; index < carregarLista.length; index += 1) {
      carregarLista[index].addEventListener('click', selecionarTarefa);
      carregarLista[index].addEventListener('dblclick', tarefaConcluida);
    }
  }
  // Função para remover apenas o item selecionado.

function removerSelecionado() {
    const itemSelecionado = document.querySelector('.selecionado');
    itemSelecionado.remove();
  }

// Função para mover o item selecionado para cima
function moverParaCima() {
    const itemSelecionado= document.querySelector('.selected');
    if (itemSelecionado && itemSelecionado.previousElementSibling !== null) {
      itemSelecionado.parentNode.insertBefore(itemSelecionado, itemSelecionado.previousElementSibling);
    }
  }
  
  // Função para mover o  item selecionado para baixo
  function moverParaBaixo() {
    const itemSelecionado = document.querySelector('.selected');
    if (itemSelecionado && itemSelecionado.nextSibling !== null) {
        itemSelecionado.parentNode.insertBefore(itemSelecionado.nextSibling, selectedItem);
    }
  }