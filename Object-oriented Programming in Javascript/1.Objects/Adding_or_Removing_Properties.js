function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}


const circle = new Circle(10);

// objects in javascript are dynamic

// circle.location = {x: 1};

circle['location'] = {x: 1};

const propertyName = 'location';
circle[propertyName] = {x: 1};

console.log(circle);