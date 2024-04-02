// DATA TYPE => int String float boolean json function 
// data declearation => let ,var, const 

// JAVASCRIPT compiles from left to right and top to bottom.

// How to declear a function
function food(){   //<- this is function declearation
//    code to execute here
};

food();   //<- this is function call || calling a function


// when to use and why 

// 1. let =>   always in function
//  eg: 

function food() {
    let food_name = 'pasta'; // why to use let => 1. always in function , 2. Value of variable may change 
    console.log(food_name);
    food_name = 'pizza';
    console.log(food_name);
};

food(); 

// 2. var => can use anywhere in a file
// eg:

var food_name = 'food';

function update_food(){
    food_name = 'pasta';
    console.log(food_name);
};

update_food();

console.log(food_name);

// 3. const
// eg:

const food_name = 'pasta';

function update_food(){
    food_name = 'pizza';
    console.log(food_name);
}

update_food();





