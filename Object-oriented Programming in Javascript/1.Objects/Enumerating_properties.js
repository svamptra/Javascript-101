function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}


const circle = new Circle(10);

for(let key in circle) {
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}

//another method

// Object.keys() returns an array of keys
const keys = Object.keys(circle);
console.log(keys);


// in operator
if('radius' in circle) {
    console.log('Circle has a radius.')
}