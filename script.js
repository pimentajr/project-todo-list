const title = document.createElement('header');
const titleText = document.createElement('h1');
const titleParagraph = document.createElement('p');
const mainContent = document.createElement('main');
const taskEntry = document.createElement('input');

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

function createsMainContent() {
  mainContent.id = 'main-content';
  document.body.appendChild(mainContent);
}

function createsTaskEntry() {
  taskEntry.id = 'texto-tarefa';
  taskEntry.type = 'text';
  taskEntry.placeholder = 'Digite aqui a nova tarefa';
  mainContent.appendChild(taskEntry);
}

window.onload = function loadPage() {
  insertTitle();
  insertParagraphToTitle();
  createsMainContent();
  createsTaskEntry();
};
