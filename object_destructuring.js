const employee={
    id: 121,
    name:'Radha',
    age: 23,
    role:'developer',
    address:{
        city:'HYD',
        country:'India'
    }
};
// const name=employee.name;
// const age=employee.age;
// console.log(name);
// console.log(age);

//we can do the same thing using object destructuring
var {name,age}=employee;
console.log(name);
console.log(age);

// if i do not want to provide property name as name , i can use my own name as follows

const {name:Nam,age: age1}=employee
console.log(Nam);
console.log(age1);

//for this object properties we can provide default values also while destructuirng
var {name= "krish", age:age2}=employee;
console.log(name);
console.log(age2);

//if i want to get the city of the employess we can do like this
// const {address}=employee;
// console.log(address);

const {address:{city}}=employee;
console.log(city);

//we can do destructuring in functions also
// function dest(employee){
//     console.log(`the employee name is ${employee.name} and age is ${employee.age}`);

// }

function dest({name , age}){
    console.log(`the employee name is ${employee.name} and age is ${employee.age}`);

}
dest(employee);

//example for whole thing
const user = {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
    preferences: {
        theme: 'dark',
        language: 'en'
    }
};

function get({ name, email, preferences: { theme } } ){
    console.log(name); // Output: Alice
    console.log(email); // Output: alice@example.com
    console.log(theme); // Output: dark
}
get(user);

