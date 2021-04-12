const inputText = document.getElementById('texto-tarefa');
const btnCreatTf = document.getElementById('criar-tarefa');
const setListOl = document.getElementById('lista-tarefas');
const btnClear = document.getElementById('apaga-tudo');
const btnRemove = document.getElementById('remover-finalizados');
const btnSave = document.getElementById('salvar-tarefas');

function addItenList() {
	const creatLi =  document.createElement('li');
	creatLi.classList = 'itlist';
	creatLi.innerText = inputText.value;
	setListOl.appendChild(creatLi);
	inputText.value = '';
}

btnCreatTf.addEventListener('click', addItenList);

function listClick(event) {
	if (event.type === 'click') {
		const slectListAll = document.querySelectorAll('.active');
		slectListAll.forEach((elem) => {
			elem.classList.remove('active');
		});
		event.target.classList.add('active'); 
	} else {
		if(event.target.classList[1] === 'active') {
			event.target.classList.add('completed'); 
		} else {
			event.target.classList.remove('completed'); 
		}
	}
}

setListOl.addEventListener('click', listClick);

setListOl.addEventListener('dblclick', listClick);

btnClear.addEventListener('click', () => {
	setListOl.innerHTML = '';
});

btnRemove.addEventListener('click', () => {
	const removComplet = document.querySelectorAll('.completed');
	removComplet.forEach((elem) => {
		elem.remove();
	});
});
