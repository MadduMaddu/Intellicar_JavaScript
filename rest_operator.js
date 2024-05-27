//spred operator-----it spreads the group of elements into single values
// function add(a,b){
//     return a+b;
// }
// var ar=[5,4];
// console.log(add(...ar));  //9
//if i provide more than two values in the array it will be
function add(a,b){
    return a+b;
}
var ar=[5,4,6];
console.log(add(...ar));//it will give 9 only


// this problem we can resolve by using rest operator
function add1(...args){
    let sum=0;
    for(const num of args){
        sum+=num;
    }
    return sum;
}
console.log(add1(...ar));//it will give 15
ar=[5,4,6,1,2,3];
console.log(add1(...ar));//it will give 21


//if we want to get multiplication of first 2 values . and sum of remaining values

function mulsum(a,b,...args){
    let sum=0;
    let mul=a*b;
    for(const num of args){
        sum+=num;
    }
    console.log(mul);
    console.log(sum);
}
mulsum(...ar);