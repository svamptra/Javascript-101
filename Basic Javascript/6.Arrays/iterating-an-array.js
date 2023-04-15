const numbers = [1,2,3];

for(let number of numbers) 
    console.log(number);


numbers.forEach(function(num,idx) {
    console.log(idx, num);
});

//the above with arrow function

numbers.forEach((number,index) => console.log(index,number));