let a=[1,2,3]
console.log(a);
console.log("array length is ",a.length);//it wil give 3 but indexes start from 0

console.log(a[0]);
console.log(a[1]);
console.log(a[3]);// it wil give undefined

//adding new element
a[3]=44;
console.log(a);

//updating existing element
a[0]=0;
console.log(a);


//typeof used to know the type of any variable
console.log(typeof a);//it will give object 


//we can store different type of elements
a[4]=null;
a[5]="Not assigned";
console.log(a);