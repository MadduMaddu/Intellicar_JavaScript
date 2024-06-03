const powOfNum=(n,exp)=>{
    if(exp==0)
        return 1;
    return n*powOfNum(n,exp-1);
}
console.log(powOfNum(2,2));
console.log(powOfNum(2,3));
console.log(powOfNum(3,2));
console.log(powOfNum(4,3));
// here we are calling the same method based on exp and it linear, so
//time complexity-O(exp)