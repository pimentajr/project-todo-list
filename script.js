let list = document.getElementById('lista-tarefas');
let createTask = document.querySelector('#criar-tarefa');
let clearTasks = document.querySelector('#apaga-tudo');
let clearCompleted = document.querySelector('#remover-finalizados');
let saveTasks = document.querySelector('#salvar-tarefas');
let removeSelected = document.querySelector('#remover-selecionado');
let input = document.querySelector('#texto-tarefa');
let lis =document.querySelector('.lis');
let upMove = document.getElementById('mover-cima');
let moveDown = document.getElementById('mover-baixo')

    createTask.addEventListener('click', () => {
    if (input.value === '') {
      alert('Insira uma tarefa')
    } else {
    let li = document.createElement('li');
    localStorage.setItem('input', input.value);
    li.innerText = localStorage.getItem('input');
    li.classList.add('lis')
    list.appendChild(li);
    input.value = '';
    }})

    list.addEventListener('dblclick',clearComp);
    list.addEventListener('click', selectedTask);

    function selectedTask(event){
     let list = document.querySelectorAll('.lis');
      list.forEach(element => {
          if(element.classList.contains('selected')){
              element.classList.remove('selected')
          }
      });
       event.target.classList.add('selected')
    }

    removeSelected.addEventListener('click',clearSelected);
    function clearSelected(){
        let selected = document.getElementsByClassName('lis');
        for(index = 0;index <selected.length; index +=1){
            if(selected[index].classList.contains('selected')){
                selected[index].parentNode.removeChild(selected[index])
            }
        }
    }
    
    upMove.addEventListener('click', upItem);
    function upItem(){
        let selected = document.querySelector('.selected');
            if(selected.previousSibling !==null){
                list.insertBefore(selected,selected.previousElementSibling);
            }
        }
    
    moveDown.addEventListener('click',downItem)
        function downItem(){
            let selected = document.querySelector('.selected');
            if (selected.nextSibling !==null){
                list.insertBefore(selected.nextSibling,selected)
            }
        }

        function clearComp(event){
            if(event.target.classList.contains('completed')){
                event.target.classList.remove('completed')
                event.target.classList.remove('selected')
            } else{
                event.target.classList.add('completed')
            }}
        
            clearCompleted.addEventListener('click', removeComp);
            function removeComp(){
                let selected = document.getElementsByClassName('completed');
                let count = 0;
               while(selected.length){
                selected[count].parentNode.removeChild(selected[count])
               }
            }

            clearTasks.addEventListener('click',removeAll);
            function removeAll(){
                let selected = document.getElementsByClassName('lis');
                let count = 0;
                while(selected.length){
                    selected[count].parentNode.removeChild(selected[count]);
                }
            }

            saveTasks.addEventListener('click',saveAll);
            function saveAll(){
                let selected = document.getElementsByClassName('lis');
                let count = 0;
                while(selected.length){ 
                }
            }