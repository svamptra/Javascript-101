// Logical AND (&&)
// Returns TRUE if both the operand are TRUE

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);



// Logical OR (||)
// Returns TRUE if one of the operands are TRUE
let HighIncome = true;
let GoodCreditScore = true;
let EligibleForLoan = HighIncome && GoodCreditScore;
console.log(EligibleForLoan);


// NOT (!)
// whatever we give it, it will give us the opposite
let applicationRefused = !eligibleForLoan;
console.log(applicationRefused);
