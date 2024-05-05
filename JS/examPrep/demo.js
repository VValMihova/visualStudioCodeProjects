// function createElement(type, textContent, classes, id, parrent, useInnerHTML) {
//     const element = document.createElement(type);
//
//     if (useInnerHTML && textContent) {
//         element.innerHTML = textContent;
//     } else if (textContent) {
//         element.textContent = textContent;
//     }
//
//     if (classes && classes.length > 0) {
//         element.classList.add(classes);
//     }
//
//     if (id) {
//         element.setAttribute("id", id);
//     }
//
//     if (parrent) {
//         parrent.appendChild(element);
//     }
//
//     return element;
// }
//
// const li = createElement("li", "lqlq", null, null, null, null);

for (let i = 10; i > 3; i-=2) {
    console.log(i)
}
console.log(Number(true))