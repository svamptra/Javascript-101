let person = {name: 'Alok'};
// console.log(person);

// for(let key in person)
//     console.log(key);

// console.log(Object.keys(person));

//getting the prototype of the person
/*
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');

console.log(descriptor);
*/

Object.defineProperty(person,'name', {
    writable: false,
    enumerable: true,
    configurable: false
});

delete person.name;
console.log(Object.keys(person));