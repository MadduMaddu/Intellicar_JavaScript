const a=[12,32,1,45,5,6,3,8];
const linear=(a,key)=>{
for(var i=0;i<a.length;i++){
    if(a[i]===key)
        return true;
}
return false;
}
console.log(a);
console.log("45: ",linear(a,45));
console.log("3: ",linear(a,3));
console.log("77: ",linear(a,77));

// [
//     12, 32, 1, 45,
//      5,  6, 3,  8
//   ]
//   45:  true
//   3:  true
//   77:  false