const a=[1,2,3,43,23,42,45,23,56,7,6,5];
a.sort((a,b)=>a-b);
function binary(a, key) {
    let st=0;
    let en=a.length-1;
    while(st<=en){
        let mid=Math.trunc((st+en)/2);
        if(a[mid]==key){
            return mid; 
        } 
        else if(a[mid]<key){
            st=mid+1; 
        } 
        else{
            en=mid-1;
        }
    }

    return -1; 
}
console.log(a);
console.log("33: ",binary(a,33));
console.log("54: ",binary(a,54));
console.log("3: ",binary(a,3));
console.log("23: ",binary(a,23));

// [
//     1,  2,  3,  5,  6,
//     7, 23, 23, 42, 43,
//    45, 56
//  ]
//  33:  -1
//  54:  -1
//  3:  2
//  23:  6