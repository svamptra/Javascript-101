
// In javascript if we have a function with varing number of parameters we can use the rest operator.

function sum(discount, ...prices) {
    //here prices is an array 
    // console.log(prices);

    //if we want to get the sum of all the elements of an array we can use the reduce method
    const total = prices.reduce((a,b) => a+b);
    return total * (1 - discount);

}

console.log(sum(0.1, 20,30));


// we can not have a parameter after the rest parameter 