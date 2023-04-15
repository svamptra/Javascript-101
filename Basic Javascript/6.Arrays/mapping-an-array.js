const numbers = [1, -1, 2,3];

/* 
const filtered = numbers.filter((num) => num >= 0);

const items = filtered.map(num => '<li>' + num + '</li>');

const html ='<ul>' + items.join('') + '</ul>';
console.log(typeof html);

console.log(filtered);
console.log(items); 
console.log(html);
*/

/*
const itemss = filtered.map(n => {
    return {value: n};
});
*/
// const itemss = filtered.map(n => ({value: n}) );
// console.log(itemss);


//CHAINING DIFFERENT METHODS:
const items =  numbers.filter(num => num>= 0).map(n=> ({value: n}));
console.log(items);

