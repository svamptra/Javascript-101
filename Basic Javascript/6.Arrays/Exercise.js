/* 1. Array from the Range */

/*
const numbers = arrayFromRange(-10,1);

console.log(numbers);

function arrayFromRange(min , max) {
    let output = [];
    for(let i=min; i<=max; i++) {
        output.push(i);
    }
    return output;
}
*/


/* 2. Includes */

/*
const numbers = [1,2,3,4];
console.log(Includes(numbers,13));

function Includes(array , searchValue) {
    for(let element of array) {
        if(element === searchValue) return true;
    }
    return false;
}
*/


/*3. Except */

/*
let numbers = [1,2,3,1,1];
let output = except();

console.log(output);

function except(array, excluded) {
    const op = [];
    for(let element of array) {
        if(!excluded.includes(element)) {
            op.push(element);
        }
    }
    return op;
}
*/


/*4. Moving an element */

/*
const numbers = [1,2,3,4];
const output = move(numbers,1,2);

console.log(output);

function move(array, index, offset) {
    const op = [...array];
    
    let limit = op.length - (index + 1);
    if(offset > limit)return console.error('invalid offset');
    
    const element = op.splice(index,1)[0];
    op.splice(index + offset, 0 , element);
    return op;
}
*/


/*5. Count Occurences */

/*
const numbers = [1,2,4,4,3,4,1];
let count = countOccurences(numbers, 4);
console.log(count);
function countOccurences(array, searchElement) {
    
    // let count = 0;
    // for(let element of array) {
    //     if(element === searchElement) 
    //         count++;
    // }
    // return count;
    


   //using reduce function:
   return array.reduce((accumulator, current) => {
       const occurence = (current == searchElement)? 1:0;
       console.log(accumulator, current, searchElement);
       return accumulator + occurence;
    })
}
*/


/*6. Get Max */

/*
const numbers = [1,2,3,3,6,21];

const max = getMax(numbers);
console.log(max);

function getMax(array) {
    if(array.length === 0)return undefined;

    // let max = array[0];
    // for(let i=1;i<array.length;i++) {
    //     if(array[i] > max) max = array[i];
    // }
    // return max;


}

*/


/*7. Movies */

const movies = [
    {title: 'a', year: 2018 , rating: 4.5},
    {title: 'b', year: 2018 , rating: 4.8},
    {title: 'c', year: 2018 , rating: 3},
    {title: 'd', year: 2017 , rating: 4.5}
];

// All the movies with rating > 4
// Sort them by their rating
// Descending order
// Pick their title

