// Cria um Header
function addHeader() {
  let header = document.createElement('header')
  header.id = 'header'
  document.body.appendChild(header)
  let title = document.createElement ('h1')
  title.innerText = 'Minha Lista de Tarefas'
  document.querySelector('#header').appendChild(title)
}
addHeader();
