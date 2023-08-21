const num = [94, 34, 45, 65, 23, 73];
console.log(Math.max(num));//NaN
console.log(Math.max(...num)); //94


console.log("hello");
console.log(..."hello");

const cats = ["Blue", "Rocket", "Scout"];
const dogs = ["Rusty", "Wyatt"];
const allPets = [...cats, ...dogs];
console.log(allPets);