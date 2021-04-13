const botao = document.getElementById('criar-tarefa');
const listatarefa = document.getElementById('lista-tarefas');
const apagatudo = document.getElementById('apaga-tudo')

botao.addEventListener('click', function createtext() {
let novo = listatarefa.appendChild(document.createElement('li'))
let texto = document.querySelector('#texto-tarefa');
novo.insertAdjacentHTML('afterbegin',texto.value);
texto.value = '';
})

listatarefa.addEventListener('click', function colorido(event) {
  let lista = document.getElementsByTagName('li');
    for (let index = 0; index < lista.length; index += 1) {
      lista[index].style.backgroundColor = 'white';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });

listatarefa.addEventListener('dblclick',function sublinha(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed')
    event.target.removeAttribute("style")
  } else {
    event.target.classList.add('completed');
    event.target.style ="text-decoration: line-through solid rgb(0, 0, 0)";
  }
   })

   apagatudo.addEventListener('click', function clearall() {
    listatarefa.innerHTML = '';
  })
 