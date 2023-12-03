function loadTodo(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data))
}

function displayTodos(todos){
    
    const todoContainer = document.getElementById('todo-container')
    for(const todo of todos){
        console.log(todo);
        const div = document.createElement('div');
        div.innerHTML = `
        <h2>User-${todo.userId}</h2>
        <h4>Title-${todo.title}</h4>
        
        
        `;
        todoContainer.appendChild(div)
    }
}
loadTodo()