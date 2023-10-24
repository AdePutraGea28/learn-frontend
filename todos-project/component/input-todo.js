import btnAdd from "./button-component/btn-add.js";

function createNewTodo() {
    const inputContainer = document.createElement("div");
    const input = document.createElement("input");
    const form = document.createElement("form");

    inputContainer.setAttribute("class", "input-container");

    form.setAttribute("id", "todo-form");
    // form.setAttribute("action")

    input.setAttribute("class", "todo-input");
    input.setAttribute("name", "todo-input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Type New Todo");

    form.appendChild(input);
    form.appendChild(btnAdd());

    inputContainer.appendChild(form);

    // inputContainer.appendChild(input);
    // inputContainer.appendChild(btnAdd())

    return inputContainer;
}

function validateInput(event) {
    console.log("upppppp")
}

export default createNewTodo;