class Pet {
    constructor(name, age) {
        console.log("Inside pet constructor");
        this.name = name;
        this.age = age;
    }
}

class Dog extends Pet {
    constructor(name, age, gender) {
        console.log("Inside dog constructor");
        super(name, age);
        this.gender = gender;
    }
    bark() {
        console.log("Woof!");
    }
}

class Cat extends Pet {
    constructor(name, age, gender) {
        console.log("Inside cat constructor");
        super(name, age);
        this.gender = gender;
    }
    meow() {
        console.log("Meow!");
    }
}

const d1 = new Dog('Judy', 6, 'male');
d1.bark();

const c1 = new Cat('Martha', 6, 'female');
c1.meow();