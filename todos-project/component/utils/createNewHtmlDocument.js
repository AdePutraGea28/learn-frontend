function newHtmlDocument(rootElement) {
    const iframeNode = document.createElement('iframe');
    const newDoc = document.implementation.createHTMLDocument("New Todo Page");
    const h1 = document.createElement("h1");

    const h1TextNode = document.createTextNode("Ini adalah Halaman Membuat Todo Baru");
    h1.appendChild(h1TextNode);

    // rootElement.appendChild(h1);
    iframeNode.appendChild(h1)
    rootElement.appendChild(iframeNode);  
    // const newRoot = rootElement.appendChild(h1);
    // console.log(newRoot)
    // return newRoot;
}

export default newHtmlDocument;