const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/personApp")
  .then(() => {
    console.log("Connection Open");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

const personSchema = new mongoose.Schema({
  first: String,
  last: String,
});

//A virtual in mongoose is a property that we can define for our use but it won't be present in the database itself. It will only be present in the mongoose side of things.
//We can use this virtual for our needs inside our app

//It has two functions: a getter (to retrieve the data) and a setter (to set the data on the database)
personSchema
  .virtual("fullName")
  .get(function () {
    return `${this.first} ${this.last}`;
  })
  .set(function (name) {
    this.name.first = name.substr(0, name.indexOf(" "));
    this.name.last = name.substr(name.indexOf(" ") + 1);
  });

personSchema.pre("save", async function () {
  console.log("About to Save!!!!!!!!!");
});

personSchema.post("save", async function () {
    console.log("SAVED!! SAVED!!! SAVED!!!!");
  });

const Person = mongoose.model("Person", personSchema);
