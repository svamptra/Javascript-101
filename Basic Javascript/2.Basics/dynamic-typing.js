/*
One thing that differentiate javascript from other programming language is javascript is a dynamically typed language.

-> In static Language , when we declare a variable the type of the variable is set and it cannot be changed in the future.
-> In dynamic Language, the type of a variable can change in run time.
*/ 


// typeof OPERATOR GIVES TYPE OF THE VALUE ASSIGNED TO A VARIABLE

let name = 'Mosh';
console.log(typeof name); //string

name = 1;
console.log(typeof name); //number

name = 2.2;
console.log(typeof name); //number


/* In javascript, unlike other programming language we don't have two kinds of numbers(i.e. float, integers etc.). Here
   all numbers are of type number. 
*/




let selectedColor = null;
console.log(typeof selectedColor); // object
/* null is of type object */
