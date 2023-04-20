// Factory Function

function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('drawing...');
        }
    };
}

const circle = createCircle(1.2);
console.log(circle)