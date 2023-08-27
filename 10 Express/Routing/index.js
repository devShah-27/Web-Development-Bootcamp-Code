const express = require('express');
const app = express(); //save the express app into a variable

// console.dir(app);

app.get(('/'), (req, res) => {
    console.log("Hope page Requested!");
    res.send("Nothing to see here...");
});

//========================== generic route page ==============================
app.get('/r/:subreddit', (req, res) => {
    // console.log(req.params.subreddit);
    const subreddit = req.params.subreddit;

    console.log("Subreddit accessed...");
    res.send(`<h1> Welcome to the ${subreddit} subreddit </h1>`);
});

app.get('/r/:subreddit/:sortBy', (req, res) => {
    // console.log(req.params.subreddit);
    const subreddit = req.params.subreddit;
    const sortBy = req.params.sortBy;

    console.log("Subreddit sorted...");
    res.send(`<h1> Welcome to the ${subreddit} subreddit </h1> <p> Sorted by: ${sortBy} </p>`);
});

app.get('/r/:subreddit/comments/:postId', (req, res) => {
    // console.log(req.params.subreddit);
    const subreddit = req.params.subreddit;
    const postId = req.params.postId;

    console.log("Subreddit post accessed...");
    res.send(`<h1> Viewing PostId: ${postId} on the ${subreddit} subreddit </h1>`);
});
//============================================================================

app.get(('/cats'), (req, res) => {
    console.log("Cat Requested!!!");
    res.send("Meow!");
});

app.get(('/dogs'), (req, res) => {
    console.log("Dog Requested!!!");
    res.send("Woof!");
});

app.get('/search', (req, res) => {
    // console.log(req.query);
    // console.log("Query search...")
    const { q } = req.query;

    if(!q){
        res.send("Nothing found if nothing searched")
    }

    res.send(`<h1> Your result for ${q}</h1>`);
});

app.get('*', (req, res) => {
    console.log("Unknown url request");
    res.send("Path unknown! Check your url");
});

app.listen(3000, () => {
    console.log("Listening on port 3000...");
});

