/*
// sorting array
const numbers = [4,3,2,1];
numbers.sort();
console.log(numbers);


// reversing array
numbers.reverse();
console.log(numbers);
*/


const courses = [
    {id: 1, name: 'node js'},
    {id: 2, name: 'javascript'},
];

courses.sort(function(a,b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if(nameA < nameB)return -1;
    if(nameA > nameB)return 1;
    return 0;
});


console.log(courses);