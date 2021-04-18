let itemS = []; // Array a ser atualizado com os <li> que vão sendo criados ou removidos. Isso ajuda as funções terem a mesma referência. 

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
		for (let index=0; index <itemS.length ; index += 1) { // Limpa backgroundColor de todos items.
			itemS[index].style.backgroundColor = ''; 
		}
		clicado.style.backgroundColor = 'rgb(128, 128, 128';
	});
}

function dblClick() {
	const ol = document.getElementById('lista-tarefas');
	ol.addEventListener('dblclick', function(event) {
		let clicado = event.target;
		clicado.classList.toggle('completed'); 
	});
}

function apagarTudo() {
	const bt = document.getElementById('apaga-tudo');
	var ol = document.getElementById('lista-tarefas');
	bt.addEventListener('click', function() {
		for (let index=0; index <itemS.length ; index += 1) {
			let li = itemS[index];
			ol.removeChild(li);
		}
		itemS = []; // Esvazia o array de referência de <li>. Mas acho que um "itemS.splice(index,1)"" dentro do FOR também resolveria.	
	});
}

function start() {
  criar();
	selecionar();
	dblClick();
	apagarTudo();
	// removerFinalizados();
}

window.onload = start;