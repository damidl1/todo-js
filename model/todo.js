class Todo{

    constructor(title, isCompleted = false, creationDate = new Date()){       // isCompleted false perchè parametro default, se non do niente è false
        this.title = title,
        this.isCompleted = isCompleted;
        this.creationDate = creationDate;
    }
    
    compareByTitle(todo){
      return this.title.localeCompare(todo.title);
    }

    compareByDate(todo){
        return todo.creationDate.getTime() - this.creationDate.getTime();  // per comparare le due date, ad esempio qui todo.CreationDate è dove abbiamo passato il parametro 
      }                                                                    // mentre this.creationDate è dove abbiamo chiamato la funzione
}