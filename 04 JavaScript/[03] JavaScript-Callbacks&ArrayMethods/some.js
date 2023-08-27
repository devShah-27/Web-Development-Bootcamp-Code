const score = [90, 78, 84, 93, 67, 84, 76, 79];

const result = score.some((marks) => {
    return marks < 75;
});

console.log(result); 