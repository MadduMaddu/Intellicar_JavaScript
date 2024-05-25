//String Interpolation:used to embed variables or expressions within a string. 
//This allows for dynamic generation of strings based on variable values or evaluated expressions.
let age=38;
let name="Radha";
let msg=`hii this is ${name} and my age is ${age}`;
console.log(msg);



function getAge(){
    return 120;
}
let msg1=`hii my age is${getAge()}`;
console.log(msg1);


const a = 5;
const b = 10;
const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // Output: The sum of 5 and 10 is 15.


const name2= 'Alice';
const greeting = `Hello, ${name2}!`;
console.log(greeting); // Output: Hello, Alice!


const multiline =` This is a string
 that spans 
 multiple lines.`;
console.log(multiline);
// Output:
// This is a string
// that spans multiple
// lines.