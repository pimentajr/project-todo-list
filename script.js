function newListItem() {
    let newLI = document.createElement('li');
    let newValue = document.getElementById('texto-tarefa').value;
    newLI.innerText = newValue;
    if (newValue === '') {
        alert('Adicione uma nova terafa!');
    } else {
        document.getElementById('lista-tarefas').appendChild(newLI);
    }
    document.getElementById('texto-tarefa').value = '';
}

let toDoList = document.querySelector('#lista-tarefas');
let countLines = document.getElementsByTagName('li');
toDoList.addEventListener('click', lineColor);

function lineColor(event) {
  for (index = 0; index < countLines.length; index += 1) {
    countLines[index].style.backgroundColor = 'transparent';
  }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)'
}
toDoList.addEventListener('dblclick', doneTask);

function doneTask(event) {
  let trace = event.target;
  let lineStrike = window.getComputedStyle(trace).getPropertyValue('  ');
  console.log(lineStrike);
  if (lineStrike === 'line-through solid rgb(0, 0, 0') {
    event.target.className = '';
  } else {
    event.target.className = 'completed'
  }
}

// let lista = document.querySelector('ol');
// list.addEventListener('dblclick', function(event) {
//   if (event.target.tagName === 'li') {
//     event.target.classList.toggle('checked');
//   }
// }, false);