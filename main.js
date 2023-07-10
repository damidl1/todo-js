
const todos = DataServices.getData();

const manager = new Manager(todos);

function render() {

    

    const todoContainer = document.getElementById('todo-container');
    
    todoContainer.innerHTML = '';

    for (const todo of manager.todoArray){
        
        const div = document.createElement('div');
        div.classList.add('todo-card');
        if (todo.isCompleted){
            // div.classList.add('todo-completed');

            div.style.borderColor = 'lime';  // se non vogliamo creare una classe possiamo manipolare direttamente così
        } 
            
        
    
        const titleStrong = document.createElement('strong');
        const titleNode = document.createTextNode(todo.title);

        
        titleStrong.appendChild(titleNode);
        div.appendChild(titleStrong);

        const dateSpan = document.createElement('span');
        const dateNode = document.createTextNode(todo.creationDate.toISOString());


        dateSpan.appendChild(dateNode);
        div.appendChild(dateSpan);

        todoContainer.appendChild(div);
        

    }
}

render();


function orderByTitle() {
   
    manager.orderTodosByTitle();
    render();    // chiamiamo render nelle funzioni perchè ogni volta che modifichiamo dei dati vogliamo ridisegnare la pagina web

}


function orderByDate(){

  manager.orderTodosByDate();
  render();

}