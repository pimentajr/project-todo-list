let itemS = [];

function criar() {
	const bt = document.getElementById('criar-tarefa');
  const ol = document.getElementById('lista-tarefas');
  const inputText = document.getElementById('texto-tarefa');

  bt.addEventListener('click', function() {
    let item = document.createElement('li');
		itemS.push(item);
    item.innerText = inputText.value;
    ol.appendChild(item);
    inputText.value = '';
  });
}

function selecionar() {
	const ol = document.getElementById('lista-tarefas');
	ol.addEventListener('click', function(event){
		let clicado = event.target;

		for (let index=0; index <itemS.length ; index += 1) {
			itemS[index].style.backgroundColor = 'yellow';
			clicado.style.backgroundColor = 'rgb(128, 128, 128';
		}
	});
}

function start() {
  criar();
	selecionar();
}

window.onload = start;