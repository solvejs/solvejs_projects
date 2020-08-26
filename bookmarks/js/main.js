// higher order function
function adder(n) {
    return m => m > n;
}

let adder50 = adder(50);
console.log(adder50(77));

// class
class Automobile {
    constructor(make, model, colors, drive = '2-wheel drive') {
        this.make = make;
        this.model = model;
        this.color = colors;
        this.drive = drive;
    }
        start() { // not yet working > may need to use getter or setter
            console.log(`vroom...vroom...vroom... I am the new ${this.make} ${this.model}, and I perform well uder pressure.`);
            }
    }

let audi = new Automobile('Audi', 'A4', ['red', 'blue', 'black', 'green', 'white'], );
console.log(audi);
console.log('ttt', audi.start());