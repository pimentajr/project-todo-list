function tags(elemento) {
  return document.createElement(elemento);
}
const ol = document.getElementById('lista-tarefas');
const entrada = document.getElementById('texto-tarefa');
let li = tags('li');
const limparTudo = document.getElementById('apagatudo');

function tarefaConcluida(event) {
  event.target.classList.toogle('completed');
}

function adicionaCor(event) {
  for (let index = 0; index < ol.length; index += 1) {
    ol.children[index].setAttribute('class', '');
  }
  event.target.setAttribute('class', 'itens');
}

function criarLi() {
  li = tags('li');
  li.appendChild(document.createTextNode(entrada.value));
  li.addEventListener('click', adicionaCor);
  li.addEventListener('dblclick', tarefaConcluida);
  ol.appendChild(li);
  entrada.value = '';
}

function adicionar() {
  if (entrada.value !== '') {
    criarLi();
  }
}
adicionar();

function selecionaClasse(event) {
  while (ol.firstChild) {
    ol.removeChild(ol.lastChild);
  }
  const atribuiClasse = document.querySelectorAll('.itens');
  for (let index = 0; index < atribuiClasse.length; index += 1) {
    atribuiClasse[index].classList.remove('itens');
  }
  event.target.classList.add('itens');
}
li.addEventListener('click', selecionaClasse);

// eslint-disable-next-line no-unused-vars
function limpaTudo() {
  while (ol.children.length > 0) {
    ol.children[0].remove();
  }
  limparTudo.addEventListener('click', limpaTudo);
}

// eslint-disable-next-line no-unused-vars
function remover() {
  for (let index = 0; index < ol.children.length; index += 1) {
    ol.children[index].remove();
  }
  limparTudo.addEventListener('click', remover);
}

window.onload = function carregar() {
  while (li > 0) {
    ol.children.style.backgroundColor = 'green';
  }
};
