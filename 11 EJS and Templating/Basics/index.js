const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));  //sets the default path of views relative to this file (index.js)

app.get('/', (req, res) => {
    // res.send("Hello World");
    res.render('home');
});

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Luffy', 'Violet', 'Sam', 'Marco', 'Cheddar', 'Monty', 'Homie'
    ]
    res.render('cats', { cats });
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit });
})

app.get('/random', (req, res) => {
    // res.send("Hello World");
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { rand: num });
});


app.listen(3000, () => {
    console.log('Listening to port 3000...');
});