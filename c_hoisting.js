//var , let and const are hoisted but var will give undefined and let, const will give ReferenceError

console.log(x); // it will give undefined
var x = 5;
console.log(x); // 5


//console.log(y); it wil give ReferenceError
let y=6;
console.log(y);


//console.log(z);  it also give ReferenceError
const z=7;
console.log(z);



//function declaration
sayHello(); // "Hello, World!"
function sayHello() {
    console.log("Hello, World!");
}



//function expression
//sayHello1(); // Error: sayHello is not a function .
//because sayHello1 is hoisted but it's initialization is not hoisted

var sayHello1 = function() {
    console.log("Hello, World1!");
};
sayHello1();


//arrow function
//sayHi(); // Error: sayHi is not a function

var sayHi = () => {
    console.log("Hi, there!");
};
sayHi();