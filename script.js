let botao = document.getElementById('criar-tarefa')
let listatarefa = document.getElementById('lista-tarefas')


botao.addEventListener('click',function(){
let novo = listatarefa.appendChild(document.createElement('li'))
let texto = document.getElementById('texto-tarefa').value;
novo.insertAdjacentHTML('afterbegin',texto);
texto.value = '';
})