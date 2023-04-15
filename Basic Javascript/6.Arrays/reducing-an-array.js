
const numbers = [1, -1, 2, 3];

/*
let sum = 0;
for(let number of numbers) 
sum += number;
console.log(sum);
*/


/*
let sum = numbers.reduce((accumulator,currentValue) => {
    return accumulator + currentValue;
}, 0);
*/

let sum = numbers.reduce((accumulator,currentValue) => accumulator + currentValue);

console.log(sum);
