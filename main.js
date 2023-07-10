
const todos = DataServices.getData();

const manager = new Manager(todos);

// function render() {

    

//     const todoContainer = document.getElementById('todo-container');
    
//     todoContainer.innerHTML = '';

//     for (const todo of manager.todoArray){
        
//         const div = document.createElement('div');
//         div.classList.add('todo-card');
//         if (todo.isCompleted){
//             // div.classList.add('todo-completed');

//             div.style.borderColor = 'lime';  // se non vogliamo creare una classe possiamo manipolare direttamente così
//         } 
            
        
    
//         const titleStrong = document.createElement('strong');
//         const titleNode = document.createTextNode(todo.title);

        
//         titleStrong.appendChild(titleNode);
//         div.appendChild(titleStrong);

//         const dateSpan = document.createElement('span');
//         const dateNode = document.createTextNode(todo.creationDate.toISOString());


//         dateSpan.appendChild(dateNode);
//         div.appendChild(dateSpan);

//         const completeBtn = document.createElement('button');
//         const completeNode = document.createTextNode( todo.isCompleted ? 'da completare' : 'completato');  // operatore ternario per scegliere se un task è completato o da completare
//         completeBtn.addEventListener('click', () => {
//                                      todo.isCompleted = !todo.isCompleted;  // per associare la funzione che al clic del bottone completa il todo
//                                      render();           // !todo.isCompleted per dire che è diverso da completato
//         });
        
//         completeBtn.appendChild(completeNode);
//         div.appendChild(completeBtn);

//         todoContainer.appendChild(div);
        

//     }
// }

// render();






// function orderByTitle() {
   
//     manager.orderTodosByTitle();
//     render();    // chiamiamo render nelle funzioni perchè ogni volta che modifichiamo dei dati vogliamo ridisegnare la pagina web

// }


// function orderByDate(){

//   manager.orderTodosByDate();
//   render();

// }



// altro modo per creare elementi con js 

function render2() {
    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerHTML = '';

    for (let i = 0; i < manager.todoArray.length; i++ ) {
        
        const todo = manager.todoArray[i];

        let additionalClass = '';
        if (todo.isCompleted){
            additionalClass = 'todo-completed';
        }

        const template = `<div class="todo-card ${additionalClass}">
                          <strong>${todo.title}</strong>
                          <span>${todo.creationDate.toISOString()}</span>
                          <button id="complete-btn${i}">completato</button>
                        </div>`;
                                                                   // per dire che vogliamo la classe todo-completed se isCompleted è vero
    //   const template = `<div class="todo-card ${todo.isCompleted ? 'todo-completed' : ''}">
    //                       <strong>${todo.title}</strong>
    //                       <span>${todo.creationDate.toISOString()}</span>
    //                     </div>`;
                        // scriviamo html brasato come se stessimo scrivendo in html e gli diamo una classe
        todoContainer.innerHTML += template;   // riproduciamo la struttura sopra scrivendo direttamente noi gli elementi html              
     
 
    }

    for (let i = 0; i < manager.todoArray.length; i++) {
        const todo = manager.todoArray[i];
        const completeBtn = document.getElementById('complete-btn' + i);
        completeBtn.addEventListener('click', () => {
            todo.isCompleted = !todo.isCompleted;
            render2();
        });
        
    }
}

render2();

function orderByTitle() {
   
    manager.orderTodosByTitle();
    render2();    

}


function orderByDate(){

  manager.orderTodosByDate();
  render2();

}






//1) aggiungere il tasto cancella su ogni todo
//2) aggiungere la possibilità di aggiungere todo alla lista tramite una input e un bottone aggiungi 