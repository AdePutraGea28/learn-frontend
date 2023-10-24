import todos from "../model/todo-data.js";
import todoRow from "../todo-row.js";

function btnAdd() {
    const btnAdd = document.createElement("button");
    btnAdd.textContent = "Add";

    btnAdd.setAttribute("class", "btn-add");
    btnAdd.setAttribute("type", "submit");
    btnAdd.addEventListener('click', insertTodo)
    return btnAdd
}

const insertTodo = (event) => {
    event.preventDefault();
    const value = document.querySelector('[name=todo-input]');
    const data = value.value;

    if(data.length < 3) {
        alert("input tidak boleh kosong")
        return
    }
    const todosContainer = document.querySelector(".todos-container");
    const uuid = crypto.randomUUID();
    const newTodo = {
        id: uuid,
        todo: data
    }

    todos.push(newTodo)
    todosContainer.appendChild(todoRow(newTodo.todo, newTodo.id));
    return
}

export default btnAdd;