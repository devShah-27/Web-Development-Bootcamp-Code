const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp")
  .then(() => {
    console.log("Connection Open");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  isOnSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
});

// productSchema.methods.greet = function () {
//   console.log("Hello World");
//   console.log(`-from ${this.name}`);
// };

productSchema.methods.toggleOnSale = function () {
  this.isOnSale = !this.isOnSale;
  return this.save();
};

//Static Methods: These methods live on the schema rather than on every instance.
//this keyword inside static method refers to the model/class itself
productSchema.statics.fireSale = function () {
  return this.updateMany({}, { onSale: true, price: 0 });
};

//Instance Methods: Every instance of a class has these methods available for them
//this keyword here refers to the instance itself
productSchema.methods.addCategory = function (newCategory) {
  this.categories.push(newCategory);
  return this.save();
};

const Product = mongoose.model("Product", productSchema);

// const helmet = new Product({
//   name: "Bike Helmet",
//   price: "59999",
//   // categories: ["Sports", "PowerMode", 123],
// });

// helmet
//   .save()
//   .then((data) => {
//     console.log(data);
//     console.log("Saved to DB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: "Bike Helmet" });
  console.log(foundProduct);
  // await foundProduct.toggleOnSale();
  // console.log(foundProduct);

  await foundProduct.addCategory("accessory");
  console.log(foundProduct);
};

// findProduct();

Product.fireSale().then((res) => console.log(res));
