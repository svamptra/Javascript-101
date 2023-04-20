function Circle(radius) {
    this.radius = radius;
    this.defaultLocation = {x: 0, y: 0};
    
    this.computOptimumLocation = function(factor) {
        // ...
    }

    this.draw = function() {
        this.computOptimumLocation(0.1);
        console.log("draw");
    }
}


const circle = new Circle(10);
circle.draw();