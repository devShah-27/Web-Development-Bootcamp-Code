const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/movieApp")
  .then(() => {
    console.log("Connection Open");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

//   A typical Schema would look something like an interface in TS
//   {
//     title: 'Interstellar',
//     year: 2015,
//     score: 9.8,
//     rating: 'PG13'
//   }

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);

// const interstellar = new Movie({
//   title: "Interstellar",
//   year: 2015,
//   score: 9.8,
//   rating: "PG13",
// });

Movie.insertMany([
  { title: "The Great Adventure", year: 2020, score: 8.1, rating: "PG-13" },
  { title: "Love in Paris", year: 2019, score: 7.5, rating: "PG" },
  {
    title: "Mystery of the Lost City",
    year: 2021,
    score: 8.7,
    rating: "PG-13",
  },
  { title: "The Last Stand", year: 2018, score: 6.9, rating: "R" },
  { title: "Comedy Nights", year: 2022, score: 7.8, rating: "PG-13" },
]).then((data) => {
  console.log("Worked!");
  console.log(data);
});
