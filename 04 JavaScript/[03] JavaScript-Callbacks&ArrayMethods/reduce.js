const prices = [5.20, 9.50, 11, 7.45, 3.26];

// const bill = prices.reduce((total, price) => {
//     return total + price;
// });

// console.log(bill);

const min = prices.reduce((min, price) => {
    if (min < price) {
        return min;
    } else {
        return price;
    }
});

console.log(min);