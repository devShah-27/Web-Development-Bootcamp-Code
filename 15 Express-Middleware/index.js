const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"));

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.use("/dogs", (req, res, next) => {
  console.log("Dogs fired");
  next();
});

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "theSecret") {
    next();
  }
  res.send("Nope! You need a password");
};

// app.use((req, res, next) => {
//   console.log("-------------- Middleware I made!!! -------------------");
//   return next();
// });
// app.use((req, res, next) => {
//   console.log("-------------- Middleware I made, again!!! -------------------");
//   return next();
// });

app.get("/", (req, res) => {
  console.log(`Request Date: ${req.requestTime}`);
  res.send("Home Page!");
});

app.get("/dogs", (req, res) => {
  res.send("Woff Woff");
});

app.get("/secret", verifyPassword, (req, res) => {
  res.send("The Secret is to just do it! NO EXCUSES");
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(3000, () => {
  console.log("App running on port 3000...");
});
