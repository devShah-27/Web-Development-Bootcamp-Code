const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand2")
  .then(() => {
    console.log("Mongodb Connection Open");
  })
  .catch((err) => {
    console.log("Mongodb connection Error: " + err);
  });

// const p = new Product({
//   name: "Royal Apple",
//   price: 10,
//   category: "fruit",
// });

// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const seedProducts = [
  {
    name: "Royal Apple",
    price: 10,
    category: "fruit",
  },
  {
    name: "Carrot",
    price: 5,
    category: "vegetable",
  },
  {
    name: "Cheddar Cheese",
    price: 15,
    category: "dairy",
  },
  {
    name: "Banana",
    price: 2,
    category: "fruit",
  },
  {
    name: "Broccoli",
    price: 7,
    category: "vegetable",
  },
];

Product.insertMany(seedProducts);
