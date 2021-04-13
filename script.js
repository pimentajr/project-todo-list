const title = document.createElement('header');
const titleText = document.createElement('h1');
const titleParagraph = document.createElement('p');

function insertTitle() {
  title.id = 'title';
  document.body.appendChild(title);
  titleText.id = 'title-text';
  titleText.textContent = 'Minha Lista de Tarefas';
  title.appendChild(titleText);
}

function insertParagraphToTitle() {
  titleParagraph.id = 'funcionamento';
  titleParagraph.textContent = 'Clique duas vezes em um item para marcá-lo como completo';
  title.appendChild(titleParagraph);
}

window.onload = function loadPage() {
  insertTitle();
  insertParagraphToTitle();
};
