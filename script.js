// Requisito 3
function createInput() {
  const section = document.createElement('section');
  document.body.appendChild(section);
  const input = document.createElement('input');
  section.appendChild(input);
  input.id = "texto-tarefa";
}
createInput();

// Requisito 4
function createOlList() {
  const ol = document.createElement('ol');
  ol.id = "lista-tarefas";
}
createOlList();
