const rootElement = document.getElementById("root");

// const containerNode = document.createElement("div");
const fieldSetNode = document.createElement("fieldset");
const legendNode = document.createElement("legend");
const formNode = document.createElement("form");
const h1Node = document.createElement("h1");
const usernameNodeInput = document.createElement("input");
const passwordNodeInput = document.createElement("input");
const submitNode = document.createElement("input");

// containerNode.setAttribute("class", "container");

// h1 content
const h1TextNode = document.createTextNode("Form Login");
h1Node.appendChild(h1TextNode)

// legend content
const legendTextNode = document.createTextNode("Login");
legendNode.appendChild(legendTextNode);

// username attribute
usernameNodeInput.setAttribute("type", "text");
usernameNodeInput.setAttribute("id", "username");
usernameNodeInput.setAttribute("name", "username");
usernameNodeInput.setAttribute("placeholder", "username");

// password attribute
passwordNodeInput.setAttribute("type", "password");
passwordNodeInput.setAttribute("id", "password");
passwordNodeInput.setAttribute("name", "password");
passwordNodeInput.setAttribute("placeholder", "password");

// btn-submit attribute
submitNode.setAttribute("type", "submit");
submitNode.setAttribute("value", "Submit");

// append input to form
formNode.appendChild(usernameNodeInput);
formNode.appendChild(passwordNodeInput);
formNode.appendChild(submitNode);

// appedn legend into fieldset
fieldSetNode.appendChild(legendNode);
fieldSetNode.appendChild(formNode)


// containerNode.appendChild(h1Node);
// containerNode.appendChild(formNode)

// // document.body.appendChild(containerNode);
// document.body.appendChild(h1Node)
// document.body.appendChild(fieldSetNode);

rootElement.appendChild(h1Node);
rootElement.appendChild(fieldSetNode)

















// console.log("hello")

// const node = document.createElement("h1");
// const content = document.createTextNode("Hello New");
// node.appendChild(content);

// const firstChildBody = document.body.firstChild;
// console.log(" =========",firstChildBody)

// document.body.insertBefore(node, firstChildBody)


// const rootElement = document.getElementById('root');
// rootElement.innerHTML = "Hello World"



// rootElement.setAttribute("onmouseover", "showAlert()");

// function showAlert() {
//     alert("hello")
// }


// // console.log(document.cookie)
// // console.log(document.doctype)
// // console.log(document.documentElement)
// // console.log(document.documentMode)
// // console.log(document.domain)

// console.log(document.cookie)
// document.cookie = "username:john"
// document.cookie = "lastname:doe"

// const cookies = document.cookie;
// console.log(cookies)