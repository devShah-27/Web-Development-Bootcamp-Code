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

const Product = mongoose.model("Product", productSchema);

const bike = new Product({ name: "Sports Bike", price: "59999", categories:['Sports', 'PowerMode', 123] });

bike
  .save()
  .then((data) => {
    console.log(data);
    console.log("Saved to DB");
  })
  .catch((err) => {
    console.log(err);
  });
