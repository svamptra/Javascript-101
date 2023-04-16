/*
function start(){
    let message = 'hi';

    if(true) {
        const another = bye;
    }
    console.log(another);
}
// console.log(message);


start();
*/

/*
for(let i=0;i<5;i++) {
    console.log(i);
}
console.log(i);
*/


const color='red';

function start() {
    const message = 'hi';
    const color = 'blue';  // local variable or local constants take precedence over global ones.
    console.log(color);
}

function stop() {
    const message = 'bye';
}

start();