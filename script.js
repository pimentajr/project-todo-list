function insertTitle() {
  const title = document.createElement('header');
  title.id = 'title';
  document.body.appendChild(title);
  const titleText = document.createElement('h1');
  titleText.id = 'title-text';
  titleText.textContent = 'Minha Lista de Tarefas';
  title.appendChild(titleText);
}

window.onload = function loadPage() {
  insertTitle();
};
