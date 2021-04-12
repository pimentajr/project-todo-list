let botao = document.getElementById('criar-tarefa')
let listatarefa = document.getElementById('lista-tarefas')


botao.addEventListener('click',function(){
let novo = listatarefa.appendChild(document.createElement('li'))
let texto = document.querySelector('#texto-tarefa');
novo.insertAdjacentHTML('afterbegin',texto.value);
texto.value = '';
})

listatarefa.addEventListener('click',function(event) {
    let coloridos = document.getElementsByTagName('li');
    for (let index = 0; index < coloridos.length; index += 1) {
      coloridos[index].style.backgroundColor = 'white';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
