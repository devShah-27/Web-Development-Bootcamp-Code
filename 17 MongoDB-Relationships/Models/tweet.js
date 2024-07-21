const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose
  .connect("mongodb://localhost:27017/relationships")
  .then(() => {
    console.log("MongoDB Database Connected");
  })
  .catch((err) => {
    console.log("Error occured: " + err);
  });

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  age: Number,
});

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: [{ _id: { _id: false }, type: Schema.Types.ObjectId, ref: "User" }],
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

const makeTweets = async () => {
  //   const user = new User({
  //     username: "Showman19",
  //     age: 22,
  //   });

  const user = await User.findOne({ username: "Showman19" });

  const tweet2 = new Tweet({
    text: "Hey There",
    likes: 420,
  });

  tweet2.user = user;

  //   user.save();
  tweet2.save();
};

const findUserTweets = async () => {
  const res = await Tweet.find({}).populate("user");

  console.log(res);
};

// makeTweets();

findUserTweets();
