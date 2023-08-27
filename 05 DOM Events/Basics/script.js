const btn = document.querySelector('#v2');

btn.onclick = function () {
    alert("You clicked the 2nd button!!!");
};

let enter = 1;
let out = 1;

function alertEnter() {
    console.log(`Over: ${enter}`);
    enter++;
};

function alertOut() {
    console.log(`Out: ${out}`);
    out++;
};

btn.onmouseenter = alertEnter;
btn.onmouseout = alertOut;


const btn2 = document.querySelector('#v3');
btn2.addEventListener('click', function () {
    alert("Executed using addEventListner() method!");
});
btn2.addEventListener('dblclick', function () {
    alert("Double click registered!");
});
