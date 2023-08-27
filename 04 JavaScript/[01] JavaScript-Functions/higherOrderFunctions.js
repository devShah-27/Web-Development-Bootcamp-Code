function callTwice(func) {
    func();
    func();
};

function rollDie() {
    let num = Math.floor(Math.random() * 6) + 1;
    console.log(num);
};

//callTwice(rollDie()) will execute the function immediately which will pass a number to callTwice instead of the actual function.

callTwice(rollDie);