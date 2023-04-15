const numbers = [1, 2, 3];

const allPositive = numbers.every(function(value) {
    return value>=0;
});

console.log(allPositive);

const atLeastOnePositive = numbers.every(function(value) {
    return value>=0;
});

console.log(atLeastOnePositive);


//every() checks to see if all element in an array matches the given criteria 
//some() checks to see if we have atleast one element that matches the given cirteria