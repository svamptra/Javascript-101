
// function interest(principal, rate, year) {

//     rate = rate || 3.5 ; // if rate value is not given then 3.5 will be assigned defaultly to rate.
//     year = year || 5 ; // if year value is not given then 5 will be assigned defaultly to year.

//     return principal * rate/100 * year;
// } 



// we can set default value right at the parameters. (from ES6)(this is more cleaner way)
function interest(principal, rate = 3.5, year = 5) {

    // if rate value is not given then 3.5 will be assigned defaultly to rate.
    // if year value is not given then 5 will be assigned defaultly to year.

    return principal * rate/100 * year;
} 

console.log(interest(10000));
console.log(interest(10000,5));
console.log(interest(10000));