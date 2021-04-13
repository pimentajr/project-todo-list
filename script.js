function insertTitle() {
  const body = document.body;
  const title = document.createElement('header');
  title.id = 'title';
  body.appendChild(title);
  const titleText = document.createElement('h1');
  titleText.id = 'title-text';
  titleText.textContent = 'Minha Lista de Tarefas';
  title.appendChild(titleText);
}

window.onload = function loadPage() {
  insertTitle();
};