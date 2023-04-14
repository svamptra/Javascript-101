// Before template literals

const message = 'This is my\n'+ 
                '\'first\' message';
console.log(message);


// After template literals(``)

const anotherMessage = `This is my
'first' message`;

console.log(anotherMessage);


const email = `Hi John!,
Thank you for joining the mailing list.
Regards,
Mosh.`

// if we wanna write the upper statement without using template literals then our code looks messy. With template literals it is simple and easy to understand.
console.log(email);

// let say we want to add the name dynamicly.

let namee = 'alok';
const email1 = `Hi ${namee}!,
Thank you for joining the mailing list.
Regards,
Mosh.`

console.log(email1);