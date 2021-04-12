// Cria item de lista
function createTasks(textoTarefa, criarTarefa, listaTarefa) {
  criarTarefa.addEventListener('click', () => {
    let task = document.createElement('li');
    task.innerText = textoTarefa.value;
    listaTarefa.appendChild(task);
    textoTarefa.value = '';
  });
}

// Altera a cor de fundo do item clicado
function changeBackgroundListColor(listaTarefa) {
  listaTarefa.addEventListener('click', (event) => {
    const listas = document.querySelectorAll('li');
    for (let index = 0; index < listas.length; index += 1) {
      listas[index].style.backgroundColor = '';
    }
    if (event.target.localName === 'li') {
      event.target.style.backgroundColor = `rgb(128, 128, 128)`;
    }
  });
}

// Marca a tarefa como completa
function completeTask(listaTarefa) {
  listaTarefa.addEventListener('dblclick', (event) => {
    if (event.target.localName === 'li') {
      if (event.target.className) {
        event.target.className = '';
      } else {
        event.target.className = 'completed';
      }
    }
  });
}

// Carregar meus arquivos ao carregar a página
window.onload = () => {
  const textoTarefa = document.getElementById('texto-tarefa');
  const criarTarefa = document.getElementById('criar-tarefa');
  const listaTarefa = document.getElementById('lista-tarefas');
  createTasks(textoTarefa, criarTarefa, listaTarefa);
  changeBackgroundListColor(listaTarefa);
  completeTask(listaTarefa);
}

// 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item
// Pontos importantes sobre este requisito:
// * Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through".
// * Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas.
// O que será verificado:
// Será verificado que, antes da ação ser disparada, o elemento adicionado à lista não tem nem a classe completed nem o estilo line-through solid rgb(0, 0, 0).
// Será verificado que a ação pedida é disparada mediante duplo clique no elemento da lista e que os elementos da lista completos tem em si a classe completed e a propriedade text-decoration com o valor line-through solid rgb(0, 0, 0)
// Será verificado que, com um segundo duplo clique, um elemento completo deixa de sê-lo