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

  let completo = document.querySelector

listatarefa.addEventListener('dblclick',function(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed')
    event.target.removeAttribute("style")
  } else {
    event.target.classList.add('completed');
    event.target.style ="text-decoration: line-through solid rgb(0, 0, 0)";
  }
   })

 