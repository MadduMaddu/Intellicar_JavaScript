function Person(fname,lname){
    this.fname=fname;
    this.lname=lname;
}

Person.prototype.gender='Male';
const person1=new Person('A','a');
const person2=new Person('B','b');
console.log(person1);
console.log(person2);
Person.prototype.getFullNAme=function(){
    return this.fname+" "+this.lname;
}
console.log(person1.getFullNAme());



function User(name){
    this.name=name;
}
User.prototype.age=23;
const user1=new User('Radha');
//modifying prototype value
User.prototype={age:25};
const user2=new User('Krish');
console.log(user1.age);
console.log(user2.age);

const obj={
    name:'Maddu',
    getName:function(){
        return this.name;
    },
    getAge:function(){
        return this.age;
    }
}
//console.log(obj);
const obj2={
    age:34,
    __proto__:obj
}
console.log(obj2.name);
console.log(obj.getAge());//undefined
console.log(obj2.getAge());
const obj3={
    class:'MCA',
    __proto__:obj2
}
console.log(obj3);
console.log(obj3.getName());
console.log(obj3.getAge());

console.log(obj.__proto__);//[Object: null prototype] {}
Function.prototype.mybind=function(){
    console.log("Hello this is mybind");
}

function fun1(){

}
function fun2(){

}

fun1.mybind();//Hello this is mybind
fun2.mybind();//Hello this is mybind
//here we are implementing mybind by Function. so that all the functions created in our file can access mybind
console.log(fun1.__proto__);