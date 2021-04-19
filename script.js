// fazer com que o botão remova o texto do input e adicione à lista:
const campoDigitacao = document.querySelector('#texto-tarefa');
// console.log(typingField);
const botao = document.querySelector('#criar-tarefa');
// console.log(botao);
const lista = document.getElementById('lista-tarefas');

// Requisito 5 e 6:

function adicionarTarefa() {
  botao.addEventListener('click', () => {
    const itemLista = document.createElement('li');
    itemLista.className = 'itemLista';
    itemLista.innerText = campoDigitacao.value;
    lista.appendChild(itemLista);
    campoDigitacao.value = '';
  });
}

adicionarTarefa();

// // Requisito 7:

// function selecionarLista(evento) {
//   const itemSelecionado = document.querySelector('.selected');

//   if (itemSelecionado !== null) {
//     itemSelecionado.classList.remove('selected');
//   }

//   evento.target.classList.add('selected');
// }

// selecionarLista();
