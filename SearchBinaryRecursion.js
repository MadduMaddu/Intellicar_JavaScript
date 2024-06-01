const a=[1,2,3,4,5,6,7,8,9];
const binary=(a,key,st,en)=>{
    if(st>en)
        return -1;
    let mid=Math.floor((st+en)/2);
    if(a[mid]==key)
        return mid;
    else if(a[mid]<key)
        return binary(a,key,mid+1,en);
    else
        return binary(a,key,st,mid-1);
}
console.log(a);
console.log("3: ",binary(a,3,0,a.length-1));
console.log("5: ",binary(a,5,0,a.length-1));
console.log("10: ",binary(a,10,0,a.length-1));
console.log("4: ",binary(a,4,0,a.length-1));

// [
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9
//   ]
//   3:  2
//   5:  4
//   10:  -1
//   4:  3