/*
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

circle.draw();
*/



/* Factory Function: Just like factory produce products, these factory function produce objects. */

function createCircle(radius) {
    return {
        // radius: radius,
        radius,
        draw() {
            console.log('draw');
        }
        // draw: function () {
        //   console.log("draw");
        // },
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

