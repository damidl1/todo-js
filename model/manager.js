class Manager{
    constructor(todoArray = []){
        this.todoArray = todoArray;
    }

    addToDo(todo){
        this.todoArray.push(todo);
    }

    orderTodosByTitle(){
      this.todoArray.sort((todo1, todo2) => todo1.compareByTitle(todo2));
    }

    orderTodosByDate(){
        this.todoArray.sort((todo1, todo2) => todo1.compareByDate(todo2));
    }


    deleteTodo(index){
        this.todoArray.splice(index, 1);
    }

    
    addTodoWithTitle(title){
       const newTodo = new Todo(title);
       this.addToDo(newTodo);
    }
}


// creare tasto cancella che richiama la funzione delete to do 
// creare input di tipo text e tasto aggiungi e nel momento che l'utente clicca aggiungi andrà a controllare se non è una stringa vuota e lo aggiunge alla lista dei todo