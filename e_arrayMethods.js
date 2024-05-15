let a=[1,2,3,4];
console.log(a);


//toString()
//converting array to string  [1,2,3]--> 1,2,3
let s=a.toString()
console.log(s);
console.log(typeof s);//String


//join()--> it joins all the array elements using a separator
let j=a.join("_");
console.log(j);// 1_2_3_4
console.log(typeof j);//Strig


//pop()-->it pops the last element from the array
let p=a.pop();
console.log(a);
console.log("popped element is",p);


//push()-->it adds new element at end and returns new length
let l=a.push(4);
console.log(a);
console.log(l,a.length);


//shift()--?it removes first element from the array and return that element
let sh=a.shift();
console.log(a,"removed element is",sh);


//unshift()-->adds element at fist and returns new length
let l1=a.unshift(1);
console.log(a," new lengthn is",l1);

//delete --> it is an operator used to empty an element in the array
delete a[1];
console.log(a);
a[1]=2;


//concat()--> it returns new array by combining the given arrays
//it does not change existing array
let b=[5,6,7,8];
let new_a=a.concat(b);
console.log(a);
console.log(new_a);



//sort()--> used to sort the array elements .it will modify the original array
a=[33,11,66,33,22,55,88,44,null];
a.sort();
console.log(a);


//to compare descending order
let compare=(a,b)=>{
    return a-b;//for ascending order b-a;
}
a.sort(compare);
console.log(a);


//reverse()-->it reverses the array and modifies the original array
a.reverse();
console.log(a);

//splice(starting_index,count,elements according to the count)
//it adds elements by removing the elements from the given index according to the count
// and it returns the deleted elements
let spli=a.splice(2,3,1011,1022,1033);
console.log(a);
console.log(spli);

//slice()-->it creates new array from the given indexes
//slice(2)--> from 2nd index onwards it will create new array
//slice(start,end)--> it will create new array with the given index,end index does not includes
let num=[1,2,3,4,5,6];
let n=num.slice(2);
let n1=num.slice(2,4);
console.log(n);
console.log(n1);