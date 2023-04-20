/*
VAlUE TYPE:
- Number
- String 
- Boolean
- Symbol
- undefined
- null


REFERENCE TYPE:
- Objects
- Functions
- Arrays



-> Primitives are copied by the values & Objects are copied by there address

*/


// let x = {object: 10};
// let y = x;
// x.value = 20;





// let num = 11
// function increase(number) {
//     number++;
// }

// increase(num);
// console.log(num);


let o = {value: 11};
function increase(obj) {
    obj.value++;
}

increase(o);
console.log(o);
