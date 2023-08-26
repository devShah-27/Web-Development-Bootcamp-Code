const changeColor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
};

async function rainbow() {
    await changeColor("violet", 1000);
    console.log("Violet applied");

    await changeColor("indigo", 1000);
    console.log("Indigo applied");

    await changeColor("blue", 1000);
    console.log("Blue applied");

    await changeColor("green", 1000);
    console.log("Green applied");
    
    await changeColor("yellow", 1000);
    console.log("Yellow applied");

    await changeColor("orange", 1000);
    console.log("Orange applied");

    changeColor("red", 1000);
    console.log("Red applied");
}