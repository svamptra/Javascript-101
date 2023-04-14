
// Objects in JavaScript are dynamic which means once you create them You can always add properties and method OR remove existance one's.

const circle = {
    radius: 1,
};

circle.color = 'yellow';
circle.draw = function() {}


delete circle.color;
delete circle.draw;

console.log(circle);