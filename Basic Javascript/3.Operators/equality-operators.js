// Strict equality(type + value)
console.log(1===1);
console.log('1'===1);

// Lose equality(values)
console.log(1==1);
console.log('1'==1);
console.log(true == 1);


/*
    The strict equality operator ensures that both values have the same type and same value.

    The loose equality operator doesn't care about the types matching, if the type don't match
     it will convert the type of what we have on the right side, And it will only check if the 
     values are equal.
*/