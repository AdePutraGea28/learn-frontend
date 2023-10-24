import todos from "../model/todo-data.js";
import todoRow from "../todo-row.js";

function btnDelete(todoId) {
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";

    btnDelete.setAttribute("class", "btn-delete")
    btnDelete.setAttribute("id", todoId)
    btnDelete.addEventListener("click", deleteTodo)

    return btnDelete;
}

const deleteTodo = function(event) {
    event.preventDefault();
    let todoId = event.target.id;

    for(let i = 0; i < todos.length; i++){
        let selectedTodo = todos[i];
        if(selectedTodo.id === todoId) {
            todos.splice(i, 1)
        }
    }

    renderTodos(todoId) 
}

const renderTodos = (todoId) => {
    const selectDeletedElement = document.getElementsByClassName(todoId);
    selectDeletedElement[0].remove();
}

export default btnDelete;