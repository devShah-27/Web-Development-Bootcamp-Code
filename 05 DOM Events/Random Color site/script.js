const body = document.querySelector('body');
const colorCode = document.querySelector("#colorCode");
const btn = document.querySelector("#generate");

function changeBG() {
    let rvalue = Math.floor(Math.random() * 256);
    let gvalue = Math.floor(Math.random() * 256);
    let bvalue = Math.floor(Math.random() * 256);
    body.style.backgroundColor = `rgb(${rvalue}, ${gvalue}, ${bvalue})`;
    colorCode.innerHTML = `rgb(${rvalue}, ${gvalue}, ${bvalue})`;
}

btn.addEventListener('click', changeBG);