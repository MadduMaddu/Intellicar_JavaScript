//CALL():---------
let user1={
    name:'radha',
    age:23,
    role:'Software Developer',
    print:function(){
        console.log(this.name);
    }
}
let user2={
    name:'krish',
    age:25,
    role:'Developer'
}
user1.print();
user1.print.call(user2);//function borrowing
//user2.print();
// the call method is depending on the user1. to overcome that we can declare the function outside also.


let user3={
    name:'Radha',
    age:24,
    role:'dev'
}
let user4={
    name:'Krish',
    age:26,
    role:'dev'
}
var printDetails=function(){
    console.log(this.name);
    console.log(this.age);
    console.log(this.role);
}

printDetails.call(user3);
printDetails.call(user4);
//here we can pass arguments also for printDetails
var printDetails=function(state,country){
    console.log(this.name+" "+state+" "+country);
}
printDetails.call(user3,"AP","India");
printDetails.call(user4,"AP","India");


//ApLLY()------
//apply also works same as call , but here except object , remaining arguments should send as array
printDetails.apply(user3,["AP","India"]);
printDetails.apply(user4,["AP","India"]);

//BIND()------
//same as call ,but by using bind we can create copy of that function and we can call later
//but in call we are calling at that time only

let func=printDetails.bind(user3,"AP","India");
console.log(func);
func();


const person = {
    firstName: 'John',
    lastName: 'Doe'
};
function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.firstName + ' ' + this.lastName + punctuation);
}
greet.call(person, 'Hello', '!'); // Output: Hello, John Doe!
greet.apply(person, ['Hi', '.']); // Output: Hi, John Doe.
const boundGreet = greet.bind(person, 'Hey');
boundGreet('?'); // Output: Hey, John Doe?