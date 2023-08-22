const form = document.querySelector('#myForm');
const input = document.querySelector('#name');
const uList = document.querySelector('#nameList');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Submitted!");
    const name = input.value;
    const newLI = document.createElement("li");
    newLI.innerText = name;

    console.log(newLI);

    uList.append(newLI);

    input.value = "";
});