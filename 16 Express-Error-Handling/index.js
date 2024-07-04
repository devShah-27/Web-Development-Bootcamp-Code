const express = require("express");
const app = express();
const morgan = require("morgan");
const appError = require("./AppError");
const AppError = require("./AppError");

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
  // res.send("Nope! You need a password");
  // throw new Error("Password Needed");
  throw new AppError("Password Needed", 401);
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

app.get("/admin", (req, res) => {
  throw new AppError("Forbidden! You are not an admin", 403);
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.use((err, req, res, next) => {
  // console.log("***************************");
  // console.log("********* ERROR ***********");
  // console.log("***************************");
  // res.status(500).send('ERRORRRRRR!!!!!!')
  // next(err);

  const { status = 500, message = "Something Went Wrong" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("App running on port 3000...");
});
