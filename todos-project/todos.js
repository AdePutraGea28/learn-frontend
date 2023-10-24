// import newHtmlDocument from "./component/utils/createNewHtmlDocument.js";
import todoRow from "./component/todo-row.js";
import todos from "./component/model/todo-data.js";
import createNewTodo from "./component/input-todo.js";

const container = document.querySelector(".container");
const todosContainer = document.querySelector(".todos-container");

// appendChild input-todo into container
const containerFirstChild = container.firstChild.nextSibling;
container.insertBefore(createNewTodo(), containerFirstChild.nextSibling)

for(let i = 0; i < todos.length; i++){
    let selectedTodo = todos[i];
    todosContainer.appendChild(todoRow(selectedTodo.todo, selectedTodo.id));
    // console.log(selectedTodo);
}