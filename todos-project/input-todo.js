import btnAdd from "./btn-add.js";

function createNewTodo() {
    const inputContainer = document.createElement("div");
    const input = document.createElement("input");

    inputContainer.setAttribute("class", "input-container");

    input.setAttribute("class", "todo-input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Type New Todo");

    inputContainer.appendChild(input);
    inputContainer.appendChild(btnAdd())


    return inputContainer;
}

export default createNewTodo;