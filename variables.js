var a;
//undefined
console.log(a);

let a1;
//undefined
console.log(a1);

//error we have initialize along with declaration
//const a2;



var a = 10;
a = 20;
//output: 20
console.log(a);

let b = 'hello';
b = 'world';
//output: 'world'
console.log(b);

const c = 'hello'
//Error: Uncaught TypeError: Assignment to constant variable.
//c = 'world'