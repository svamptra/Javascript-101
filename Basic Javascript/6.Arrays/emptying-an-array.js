let numbers = [1,2,4,5];
let another = numbers;
// we want to empty the array

// Solution 1
// numbers = [];
// console.log(numbers);

// Solution 2
// numbers.length = 0;

// Solution 3
// numbers.splice(0, numbers.length);

// Solution 4
while(numbers.length > 0)
numbers.pop();

console.log(numbers);
console.log(another);