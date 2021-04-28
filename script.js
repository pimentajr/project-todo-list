 //Constantes declaradas.
 const text = document.getElementById('texto-tarefa');
 const list = document.getElementById('lista-tarefas');

 // Função adicionar tarefas.

function adicionarTarefas() {
  const tarefa = document.createElement('li');
  tarefa.className = 'tarefa';
  tarefa.innerText = text.value;
  list.appendChild(tarefa);
  text.value = ' ';
  tarefa.addEventListener('click', selecionarTarefa); 
  tarefa.addEventListener('dblclick', tarefaConcluida);
}

 // Função que deixa o item selecionado e atribui ao elemento a classe 'selecionado'.

function selecionarTarefa(sTarefa) {
  retirarClasse() ;
  sTarefa.target.classList.toggle('selecionado');
}

 //Função que retira da classe 'selecionado' uma tarefa previamente selecionada caso uma nova tarefa seja selecionada. 
function retirarClasse() {
  const tarefaSelecionada = document.querySelectorAll('.selecionado');
  let index = ' ';
  for (index = 0; index < tarefaSelecionada.length; index += 1) {
    tarefaSelecionada[index].classList.remove('selecionado');
}
}

// Função que ao dar duplo clique deixa a tarefa riscada, indicando que a mesma foi concluída.
function tarefaConcluida(cTarefa) {
    if (cTarefa.className === 'completed') {
      cTarefa.target.classList.remove('completed');
    } else {
      cTarefa.target.classList.toggle('completed');
}
}
