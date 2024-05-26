//MAP----------to transform the whole array by applying some operations
const ar=[1,2,3,6,5];
//find squares---ar=[1,4,9,36,25]
//find binary values----ar=[, , , , ,]
function squares(x){
    return x*x;
}
let output=ar.map(squares);
console.log(output);


//using arrow functions
output=ar.map((num)=>num*num);
console.log(output);


function binary(x){
    return x.toString(2);
}
output=ar.map(binary);
console.log(output);
                    //or we can do like this also
output=ar.map(function binary(x){
    return x.toString(2);
});
console.log(output);
                    //or
output=ar.map((x)=>{
    return x.toString(2);
});
console.log(output);

//FILTER----------------------used to filter some elements from the array based on some conditions
//filter odd values
function isodd(x){
    return x%2;
}
output=ar.filter(isodd);
console.log(ar);
console.log(output);

//find even values
function iseven(x){
    return x%2 === 0;
}
output=ar.filter(iseven);
console.log(output);

//find values greater than 3
output=ar.filter((x) => {
    return x>3;
});
console.log(output);


//REDUCE------it will work on the whole array elements and returns one single value as output

//finding sum of all elements
function sum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
output=sum(ar);
console.log(output);
//we can do same thing using reduce, it will take one callback function and initial value for accumalator 
//,that cb takes two arguments such are accumalator and current, current used to traverse the arr elements
output=ar.reduce(function (acc,curr){
    acc=acc+curr;
    return acc;
},0);
console.log(output);

//to find max values in the array
function max(arr){
    let amax=0;
    for(let i=0;i<arr.length;i++)
        {
            if(arr[i]>amax)
                {
                    amax=arr[i];
                }
        }
    return amax;
}
output=max(ar);
console.log(output);

//using reduce
output=ar.reduce(function (max,curr){
if(curr>max)
    max=curr;
return max;
},0);
console.log(output);


//real time example
const user=[
    {firstname:'RADHA',lastname:'radha',age:23},
    {firstname:'RADHA',lastname:'radha',age:23},
    {firstname:'KRISH',lastname:'krish',age:25},
    {firstname:'RAM',lastname:'ram',age:30}
];
//to find fullname of user ---we can use map
output=user.map((x) => {
    return x.firstname+" "+x.lastname;
});
console.log(output);

//to find the how many people of particular age
output=user.reduce(function(acc,curr){
if(acc[curr.age])
    {
        acc[curr.age]++;
    }else{
        acc[curr.age]=1;
    }
    return acc;
},{});
console.log(output);

//to find whose age is less than 30
output=user.filter((x)=>{
    return x.age<30;
})
console.log(output);
