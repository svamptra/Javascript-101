/*
let course = courses.find(function(courses) {
    return courses.name === 'a';
});
*/

// there is a shorter and cleaner way to write the above code.

/*
let course = courses.find((courses) => {
    return courses.name === 'a';
});
*/

// if there is single line of code inside function then we can remove the {}   . we can remove the return keyword also.
let course = courses.find((courses) => courses.name === "a");

// And also if there is single parameter then we can also remove the () . and if we don't have any paramters then we have to give empty paranthesis ()
let coursee = courses.find(courses => courses.name === 'a');
