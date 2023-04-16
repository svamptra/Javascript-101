
// function sum(a, b) {

//     //every  function in javascript has a special object called arguments
//     // console.log(arguments);

//     // return a + b;
// }

function sum() {
    let total = 0;
    for(let value of arguments)
        total = total + value;
    return total
}

console.log(sum(1,2));
console.log(sum(1)); // 1 + undefined = NaN
console.log(sum()); // NaN
console.log(sum(1,2,3,4,5));


// for of loop can be used any object that have an iterator