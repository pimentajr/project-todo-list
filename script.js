let botao = document.getElementById('criar-tarefa')
let listatarefa = document.getElementById('lista-tarefas')


botao.addEventListener('click',function(){
let novo = listatarefa.appendChild(document.createElement('li'))
let texto = document.querySelector('#texto-tarefa');
novo.insertAdjacentHTML('afterbegin',texto.value);
texto.value = '';
})