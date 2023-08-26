const button = document.querySelector('#change');
const sec = document.querySelector('#sec2');

button.addEventListener('click', (e) => {
    sec.style.backgroundColor = "green";
    e.stopPropagation();
})