const express = require('express');
const app = express(); //save the express app into a variable

// console.dir(app);

app.use((req, res) => {
    console.log("Incoming Request...");
    // console.dir(req);
    // res.send("Hey there! We got your request");
    // res.send("<h1> Hey there! We got your request </h1>");
    res.send({ color: 'red' });  
})

app.listen(3000, () => {
    console.log("Listening on port 3000...");
})

