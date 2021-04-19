const campoDigitacao = document.querySelector('#texto-tarefa');
const botao = document.querySelector('#criar-tarefa');
const lista = document.querySelector('#lista-tarefas');

const paiTres = document.querySelector('.seção3');
const button = document.createElement('button');
button.id = 'apaga-tudo';
button.innerText = 'Limpar Tudo';
paiTres.appendChild(button);

const buttonEnd = document.createElement('button');
buttonEnd.id = 'remover-finalizados';
buttonEnd.innerText = 'Limpar Seleção';
paiTres.appendChild(buttonEnd);

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

// Requisito 7:

// function selecionarLista() {
//   const itemLista = document.createElement('li');
//   itemLista.addEventListener('click', (events) => {
//     events.target.style.backgroundColor = 'rgb(128, 128, 128)';
//   });
// }

// selecionarLista();

// Requisito 10:
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
