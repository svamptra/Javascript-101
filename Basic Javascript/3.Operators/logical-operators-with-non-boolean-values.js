
// Falsy
// undefined
// null 
// 0
// false
// ''
// NaN


// Anything that is not Falsy -> Truthy


// let userColor = 'red';
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);
