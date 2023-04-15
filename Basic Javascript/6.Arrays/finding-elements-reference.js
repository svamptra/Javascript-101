const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];


// find method returns the first element that matches the given criteria
let course = courses.find(function(courses) {
    return courses.name === 'a';
});

let coursee = courses.findIndex(function(courses) {
    return courses.name === 'b';
});

console.log(course);
console.log(coursee);