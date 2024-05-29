//CLASSS---------------------------------------
class Animal {
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
    // This is a property on the prototype chain
    toString() {
      console.log('name:' + this.name + ', color:' + this.color);
 
    }
  }
 
 var animal = new Animal('myDog', 'yellow'); // instantiate
 animal.toString(); // name: myDog, color: yellow
 console.log(animal.hasOwnProperty('name')); //true
console.log(animal.hasOwnProperty('toString')); // false
console.log(animal.__proto__.hasOwnProperty('toString')); // true

class Cat extends Animal {
    constructor(action) {
      // The subclass must call the super function in the constructor, otherwise an error will be reported when new comes out
      // If the constructor was not written originally, the default constructor with super will be automatically generated
      super('cat','white');
      this.action = action;
    }
    // toString() {
    //   console.log(super.toString());
    // }
   }
   var cat = new Cat('catch')
   cat.toString();
   
   console.log(cat instanceof Cat); // true
   console.log(cat instanceof Animal); // true
//MODULE----------------------------------------------
// Each module has its own namespace to avoid conflicts, use import and export to import and export.
// Basically treats a .js file as a module.

//ARROW FUNCTION--------------------------------------
const add = (a, b) => { return a + b};
const res = add(1, 2); 
console.log(res);// 3
// If the syntax is simple, `{}` and `return` can be omitted. It will look neater
const minus = (a, b) => a - b;
const res1 = minus(3, 1);
console.log(res1); // 2

//FUNCTION PARAMETER DEFAULT VALUE----------------------------
function example(height = 50, width = 40) { 
    const newH = height * 10;
    const newW = width * 10;
    return newH + newW;
}
console.log(example()); // 900 (50*10 + 40*10)
console.log(example(30,20));//500 (30*10 + 20*10)

//TEMPORAL LITERAL------------------------------------------------
const firstName = 'Ken';
const lastName = 'Huang';
// not use template literal
var name = 'Hello, My name is' + firstName + ', ' + lastName;
// use template literal
const nameWithLiteralString = `Hello, My name is ${firstName}, ${lastName}`;
console.log(name);
console.log(nameWithLiteralString);

//DESTRUCTURING ASSIGNMENT--------------------------------
const arr = [1, 2, 3, 4, 5];
const [one, two, three] = arr;
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3
// To skip certain values
const [first,,,,last] = arr;
console.log(first); // 1
console.log(last); // 5
// Objects can also be destructurized and assigned
const student = { 
    name: 'Ken Huang', 
    age: 38,
    city: 'Taipei'
};
var {name, age, city} = student;
console.log(name); // "Ken Huang"
console.log(age); // "38"
console.log(city); // "Taipei"

//SPREAD OPERATOR----------------------------------
const stuendts = ['Angel', 'Ryan']; 
const people = ['Sara', ...stuendts, 'Kelly', 'Eason'];
console.log(people); // ["Sara", "Angel", "Ryan", "Kelly", "Eason"]

//OBJECT PROPERTY SHORTHAND--------------------------
var name = 'Angel', age = 18, city = 'ChangHwa';
// Before ES6, we must write like this
const customer = {
    name: name,
    age: age,
    city: city
} // // {name: 'Angel', age: 18, city: 'ChangHwa'}
// After ES6, we can do it
const newCustomer = {
    name,
    age,
    city
} // {name: 'Angel', age: 18, city: 'ChangHwa'}
console.log(newCustomer);


//PROMISE-------------------------------------------
const waitSecond = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
});
waitSecond.then( () => {
    console.log('hello World after 1 second.'); 
    // output this line after 1 second
    return waitSecond;
}).then( () => {
    console.log('Hell World after 2 sceond.');
    // output this line after 2second
})


//LET CONST ----------------------------------------------
// console.log(a); // undefined
// var a = 10;
//console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;