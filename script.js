function insertTitle() {
  const title = document.createElement('header');
  title.id = 'title';
  document.body.appendChild(title);
  const titleText = document.createElement('h1');
  titleText.id = 'title-text';
  titleText.textContent = 'Minha Lista de Tarefas';
  title.appendChild(titleText);
}

function insertParagraphToTitle() {
  const titleParagraph = document.createElement('p');
  titleParagraph.id = 'funcionamento';
  titleParagraph.textContent = 'Clique duas vezes em um item para marcá-lo como completo';
  title.appendChild(titleParagraph);
}

window.onload = function loadPage() {
  insertTitle();
  insertParagraphToTitle();
};
