const title = document.createElement('header');
const titleText = document.createElement('h1');
const titleParagraph = document.createElement('p');
const mainContent = document.createElement('main');
const inputSection = document.createElement('section');
const taskEntry = document.createElement('input');
const listSection = document.createElement('section');
const ordenedList = document.createElement('ol');

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

function createsInputSection() {
  inputSection.id = 'input-section';
  mainContent.appendChild(inputSection);
}

function createsTaskEntry() {
  taskEntry.id = 'texto-tarefa';
  taskEntry.type = 'text';
  taskEntry.placeholder = 'Digite aqui a nova tarefa';
  inputSection.appendChild(taskEntry);
}

function createListSection() {
  listSection.id = 'list-section';
  mainContent.appendChild(listSection);
}

function createOrdenedList() {
  ordenedList.id = 'lista-tarefa';
  listSection.appendChild(ordenedList);
}

window.onload = function loadPage() {
  insertTitle();
  insertParagraphToTitle();
  createsMainContent();
  createsInputSection();
  createsTaskEntry();
  createListSection();
  createOrdenedList();
};
