const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(function(num) {
//     return num>=0;
// }) ;

const filtered = numbers.filter((num) => num >= 0);

console.log(filtered);
