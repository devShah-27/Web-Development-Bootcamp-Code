class Color {
    constructor(r, g, b, name) {
        this.rVal = r;
        this.gVal = g;
        this.bVal = b;
        this.colorName = name;
        console.log(this.rVal, this.gVal, this.bVal);
    }

    whatName() {
        return `Hello! I am ${this.colorName}`;
    }
}

const red = new Color(255, 0, 0, 'Redster');

console.log(red);

console.log(red.whatName());