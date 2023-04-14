
// Constructor Function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(3);
console.log(circle);

// -> here in constructor function we are not returning any object to any variable but we are initializing it.

// -> In javascript objects are dynamic, once we create them we can add additional properties and methods to them.