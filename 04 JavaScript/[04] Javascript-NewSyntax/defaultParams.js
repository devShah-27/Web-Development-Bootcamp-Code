//old way
function rollDie(numSides) {
    if (numSides === undefined) {
        numSides = 6;
    }
    return Math.floor(Math.random() * 6) + 1;
};

console.log(rollDie());


//new way
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(4));
console.log(multiply(4,5));