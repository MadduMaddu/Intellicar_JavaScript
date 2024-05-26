//function currying
function addition(a,b,c){
    return a+b+c;
}
console.log(addition(1,2,3));

function Addition(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
let r1=Addition(1);
console.log(r1);
let r2=r1(2);
console.log(r2);
let r3=r2(3);
console.log(r3);
//instead of this we can do like this
let result=Addition(1)(2)(3);
console.log(result);


let userObj={
    name:'Radha',
    age:23
}
function userInfo(userobj){
    return function(userinfo){
        return userobj[userinfo];
    }
}
let us=userInfo(userObj);
//console.log(us);
let nam=us('name');
console.log(nam);//we can call like this also
console.log(userInfo(userObj)('name'));



//using arrow functions
const add = a => b => c => a + b + c;
console.log(add(1)(2)(3)); // Output: 6
