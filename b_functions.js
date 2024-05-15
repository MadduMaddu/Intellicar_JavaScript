//function declaration 
function add1(a,b)
{
    return a+b;
}
console.log(add1(2,2));


//funtion expression
let add2=function(a,b){
    return a+b;
}
console.log(add2(2,3));


//arrow function
let add3=(a,b)=> a+b;
//or
//let add3=(a,b) =>{ return a+b;}
console.log(add3(2,4));