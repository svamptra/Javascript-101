// 1 -> Address Object
/*
const address = {
    street:'a',
    city:'b',
    zipCode:'c'
};

function showAddress(object) {
    for(let key in object)console.log(key,object[key]);
}

showAddress(address);
*/


// 2 -> Factory and Constructor Function

// using factory function:
function createAddress(street,city,zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

let a1 = createAddress('a','b','c');
console.log(a1);
let a2 = createAddress('aa','bb','cc');
console.log(a2);


// using constructor function:

function Address(street,city,zipCode) {
    this.street = street;
    this.city = city;
    this.zip =zipCode;
}

const A1 = new Address('A','B','C');
console.log(A1);
const A2 = new Address('AA','BB','CC');
console.log(A2);

const A3 = A1;


// 3 -> Object Equality


// here we are checking if both objects have equal properties value
function areEqual(address1 , address2) {
    return address1.street === address2.street 
        && address1.city === address2.city
        && address1.zipCode === address2.zipCode;
}


// here we are checking if both the objects are pointing to the same object 
function areSame(address1 , address2) {
    return address1 === address2;
}

console.log(areSame(A1,A3));
console.log(areEqual(A1,A3));
console.log(areEqual(a1,a2));




// 4. Blog Post Object

//title
//body
//author
//views
//comments
// (author, body)
// isLive

let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 11,
    comments: [
        {author: 'a', body: 'b'},
        {author: 'c', body: 'c'},
    ],
    isLive: true
};

console.log(post);


// 5. Constructor Functions

function Post(title,body,author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let p = new Post('a','b','c');
console.log(p);



// Price Range Object

let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50},
];

let restaurants = [
    { averagePerPerson: 5}
];