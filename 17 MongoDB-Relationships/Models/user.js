const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/relationships")
  .then(() => {
    console.log("MongoDB Database Connected");
  })
  .catch((err) => {
    console.log("Error occured: " + err);
  });

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  addresses: [
    {
      _id: { _id: false },
      street: String,
      city: String,
      state: String,
      country: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const makeUser = async () => {
  const u = new User({
    firstName: "Harry",
    lastName: "Potter",
  });
  u.addresses.push({
    street: "123 Sesame St.",
    city: "New York",
    state: "New York",
    country: "USA",
  });

  const res = await u.save();

  console.log(res);
};

const addAddress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push({
    street: "99 3rd St.",
    city: "New York",
    state: "New York",
    country: "USA",
  });

  const res = await user.save();
  console.log(res);
};

addAddress("669c974ac4206ffca51e8507");
