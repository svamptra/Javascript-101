// Constructor Function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("drawing....");
    }
}

const another = new Circle(1.11);
console.log(another);
/*
when we use new keyword to create object 3 things happens
        1. create an empty obejct 
        2. assign it to the variable
        3. assign the value of the properties with the this keyword
*/

