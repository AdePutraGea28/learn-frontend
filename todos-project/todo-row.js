import btnDelete from "./btn-delete.js";
import btnUpdate from "./btn-update.js";

function todoRow(todoNameContent, id) {
    const todo = document.createElement("div");
    const todoName = document.createElement("div");

    todoName.textContent = todoNameContent;
    todoName.setAttribute("class", "todo-name")

    todo.setAttribute("class", `todo ${id}`)

    todo.appendChild(todoName);
    todo.appendChild(btnDelete());
    todo.appendChild(btnUpdate());

    return todo;
}

export default todoRow;