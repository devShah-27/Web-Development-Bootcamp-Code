const input = document.querySelector("#input");
const output = document.querySelector('#enteredText')

input.addEventListener('keydown', function (e) {
    console.log(e.key);
    let keyPress = e.key
    output.innerText = keyPress;
});