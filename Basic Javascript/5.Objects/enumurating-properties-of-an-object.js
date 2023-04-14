
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};


for(let key in circle) 
    console.log(key, circle[key]);




//for of loop only iterate on array
//Object.keys(circle) returns an array of keys in circle
for(let key of Object.keys(circle))
    console.log(key, circle[key]);


// this will return each key value pair as an array
for(let entry of Object.entries(circle))
    console.log(entry);



// 'in' is used to check if a given property or method exists
if('radius' in circle)console.log('yes');