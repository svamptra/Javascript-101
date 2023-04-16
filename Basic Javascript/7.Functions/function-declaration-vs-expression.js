
// Function Declaration
function walk() {
    console.log('walk');
}

// Function Expression
let run = function() {
    console.log('run');
};

run();
let move = run;
move();