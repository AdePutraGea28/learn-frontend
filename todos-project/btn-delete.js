function btnDelete() {
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";

    btnDelete.setAttribute("class", "btn-delete")

    return btnDelete;
}

export default btnDelete;