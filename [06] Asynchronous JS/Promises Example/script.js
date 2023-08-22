const changeColor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
};

changeColor('red', 1000)
    .then(() => changeColor('Orange', 1000))
    .then(() => changeColor('Yellow', 1000))
    .then(() => changeColor('Green', 1000))
    .then(() => changeColor('Blue', 1000))
    .then(() => changeColor('Indigo', 1000))
    .then(() => changeColor('Violet', 1000))
