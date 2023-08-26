// const cat = {
//     name: "Tommy",
//     age: 4,
//     details(){
//         console.log(this.name);
//         console.log(this.age);
//     }
// }

// cat.details(); 

const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        const str = "EGG";
        return str;
    }
};

hen.name
hen.eggCount
hen.layAnEgg()
hen.layAnEgg()
hen.eggCount