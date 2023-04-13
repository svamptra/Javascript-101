// 1. write a function that take two numbers and returns the maximum of the two.

/*
function max(x,y) {
    return x>y?x:y;
}

let result = max(11,111);
let result1 = max(126,123);

console.log(result);
console.log(result1);
*/

// 2. Landscape or Portrait

/*
console.log(isLandscape(800,600));

function isLandscape(width, height) {
    // return width>height ? true : false;
    return (width > height);
}
*/

// 3. Fizz Buzz

/*
// divisible by 3 => fizz
// divisible by 5 => buzz
// divisible by both 5 and 3 => fizzbuzz
// Not divisible by 3 and 5 => input
// Not a number => 'Not a number'

const output = fizzBuzz(7);
console.log(output);

function fizzBuzz(input) {
    if( typeof input !== 'number') {
        // return 'Not a number';
        return NaN;
    }
    
    if((input%3===0) && (input%5===0)) {
        return 'FizzBuzz';
    }

    if(input%3===0) {
        return 'Fizz';
    }

    if(input%5===0) {
        return 'Buzz';
    }


    return input;
}
*/

//4. Demerit Points

/*
// speed limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points => suspended

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed <= speedLimit) console.log("OK");
  else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
  }

  if (points >= 12) {
    console.log("licence suspended");
  } else console.log("Points ", points);
}
*/


// 5. Even and Odd numbers

/*
showNumbers(11);

function showNumbers(limit) {
    for( let i=1; i<=limit; i++) {
        const message = (i%2 === 0) ? 'Even' : 'Odd';
        console.log(i,message);
    }
}
*/



// 6. Count Truthy
/*

// List of falsy value in javaScript ->
// undefined
// null
// ''
// false
// 0
// NaN

// const array = [1,3,0,'',null,false,0,undefined];
const array = [1,3,2];
console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for(let value of array) {
        if(value)count++;
    }
    return count;
}

*/


// 7. String Properties

/*

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function showProperties(object) {
    for(let key in object) {
        if(typeof object[key] === 'string') 
        console.log(key,object[key]);
    }
}

*/


//8. Sum of multiple 3 and 5

console.log(sum(10));

function sum(limit) {
    let sum=0;
    for(let i=0; i <= limit; i++) {
        if(i%3===0  || i%5===0)
        sum +=i;
    }
    return sum;
}