let bodyElem = document.body;
let bodyChilds = bodyElem.childNodes;
const li = bodyChilds[1].childNodes;

for (let text of li){
    console.log(text);
}

console.log(li.length)

let a = document.body.firstElementChild.textContent

console.log(Array.of(a))



