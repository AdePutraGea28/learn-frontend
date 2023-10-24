function btnAdd() {
    const btnAdd = document.createElement("button");
    btnAdd.textContent = "Add";

    btnAdd.setAttribute("class", "btn-add")
    return btnAdd
}

export default btnAdd;