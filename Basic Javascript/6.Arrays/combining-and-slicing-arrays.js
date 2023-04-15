const first = [1,2,3];
const second = [4,5,6];

const combined = first.concat(second);
console.log(combined);

// const slice = combined.slice(2,4);
// const slice = combined.slice(2);
const copy = combined.slice();
console.log(copy);