const dadJoke = require('give-me-a-joke');
const colors = require('colors');

dadJoke.getRandomDadJoke((joke) => {
    console.log(joke.trap.rainbow);
});


// console.dir(dadJoke);
// console.dir(rainbow);